import { NextResponse } from "next/server";
import mongoose, { mongo } from "mongoose";
import { ShortlistSchema } from "../../../lib/model/Shortlist";
import { connectionStr } from "@/src/lib/Db";
import { encryptData } from "@/src/Utils/SecretData";


export const POST = async (request)=>{
    const body = await request.json()
    const {userid} = body
    const agg = [ 
        {
            '$match':{
                userid:userid
            }
        }
    ]
    console.log(userid)
    try{
        await mongoose.connect(connectionStr)
        const data = await ShortlistSchema.aggregate(agg)
        const userIds = data.map(item => item.userid);
        const profileids = data.map(item => item.profileid);
        if (data.length > 0) {
            const shortagg = [
                {
                    $match: {
                        profileid:{
                            $in:profileids,
                        },
                        status: "1",
                    },
                },
                {
                    $lookup: {
                        from: "profileregisters",
                        localField: "profileid",
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
            var shortbyme = await ShortlistSchema.aggregate(shortagg)
            const encry = encryptData(JSON.stringify(shortbyme))
            // console.log('viewbymedata',viewbyme)
            return NextResponse.json(encry)
        }
        else{
            var shortbyme = []
            const encry = encryptData(JSON.stringify(shortbyme))
            return NextResponse.json(encry)
        }

    }
    catch(e){
console.log(e)
    }
}