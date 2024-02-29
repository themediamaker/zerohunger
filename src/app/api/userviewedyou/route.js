import { NextResponse } from "next/server";
import mongoose, { mongo } from "mongoose";
import { ViwedProfileSchema } from "../../../lib/model/ViwedProfile";
import { connectionStr } from "@/src/lib/Db";
import { encryptData } from "@/src/Utils/SecretData";


export const POST = async (request)=>{
    const body = await request.json()
    const {userid} = body
    const agg = [ 
        {
            '$match':{
                profileid:userid
            }
        }
    ]
    console.log(userid)
    try{
        await mongoose.connect(connectionStr)
        const data = await ViwedProfileSchema.aggregate(agg)
        const userIds = data.map(item => item.userid);
        const profileids = data.map(item => item.profileid);
        if (data.length > 0) {
            const viewagg = [
                {
                    $match: {
                        userid:{
                            $in:userIds,
                        },
                        status: "1",
                    },
                },
                {
                    $lookup: {
                        from: "profileregisters",
                        localField: "userid",
                        foreignField: "userid",
                        as: "reqdata",

                    },
                },
                {
                    $project: {
                        userid: 1,
                        profileid: 1,
                        name: 1,
                        sendrequesttime: 1,
                        "reqdata.name": 1,
                        "reqdata._id": 1
                    },
                }
            ];
            var viewedyou = await ViwedProfileSchema.aggregate(viewagg)
            const encry = encryptData(JSON.stringify(viewedyou))
            // console.log('viewbymedata',viewbyme)
            return NextResponse.json(encry)
        }
        else{
            var viewedyou = []
            const encry = encryptData(JSON.stringify(viewedyou))
            return NextResponse.json(encry)
        }

    }
    catch(e){
console.log(e)
    }
}