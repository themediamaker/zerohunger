import { encryptData } from "@/src/Utils/SecretData";
import { connectionStr } from "@/src/lib/Db";
import { registerschema } from "@/src/lib/model/RegisterProfile";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { object } from "yup";

export async function POST(request) {
    const body = await request.json()
    const { userid } = body
    const agg = [
        {
            '$match': {
                'userid': userid
            }
        }
    ]
    try {
        await mongoose.connect(connectionStr);
        var userdata = await registerschema.aggregate(agg)
        console.log("&&&&&",userdata)
        if (userdata.length > 0){
            const excludedKeys = ['_id', 'userid', '__v','agreeToPrivacyPolicy','time','data'];
            const keys = Object.keys(userdata[0]).filter(key => !excludedKeys.includes(key));
            console.log(keys.length)
            const orConditions = keys.map(field => ({ $eq: [`$${field}`, ""] }));
            console.log('Keys:', orConditions);
            const checkstateagg = [
                {
                    $match:{
                        'userid':userid
                    }
                },

                {
                    $project: keys.reduce((acc, curr) => ({ ...acc, [`${curr}Blank`]: { $eq: [`$${curr}`, ""] } }), {})
                },
                {
                    $group: {
                        _id: null,
                        totalBlankFields: {
                            $sum: {
                                $add: keys.map(field => ({ $cond: { if: `$${field}Blank`, then: 1, else: 0 } }))
                            }
                        }
                    }
                }
            ];
            var checkdata = await registerschema.aggregate(checkstateagg);
            console.log('Check Data:', checkdata);
            console.log('Check Data:', checkdata[0].totalBlankFields);
            const encrypt = encryptData(JSON.stringify({userdata,checkdata:checkdata[0].totalBlankFields,command:1}))
            return NextResponse.json(encrypt)
        }

        else{
            var userdata = []
            console.log(userdata)
            var checkdata = 0
            const encrypt = encryptData(JSON.stringify({userdata,checkdata,command:0}))
            return NextResponse.json(encrypt)
        }
    }
    catch (e) {
        console.log('connection break')
    }


}