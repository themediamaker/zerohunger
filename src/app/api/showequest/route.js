import { NextResponse } from "next/server";
import { connectionStr } from "@/src/lib/Db";
import mongoose from "mongoose";
import { SendInterestSchema } from "@/src/lib/model/Sendinterest";
import { registerschema } from "@/src/lib/model/RegisterProfile";
import { encryptData } from "@/src/Utils/SecretData";

export const POST = async (request) => {
    const body = await request.json()
    const { userid } = body
    // console.log(agg)
    const agg = [ 
        {
            '$match':{
                profileid:userid
            }
        }
    ]
    console.log(userid)
    try {
        await mongoose.connect(connectionStr)
        const data = await SendInterestSchema.aggregate(agg)
        console.log('request dataa', data)
        const userIds = data.map(item => item.userid);
        const profileid = data.map(item => item.profileid)
        console.log(userIds)
        console.log(profileid)
        // console.log(userIds)
        // console.log(profileid)
        if (data.length > 0) {
            const reqagg = [
                {
                    $match: {
                        profileid: {
                            $in: profileid,
                        },
                        status: "-1",
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
                        sendrequesttime:1,
                        "reqdata.name": 1,
                        "reqdata._id": 1
                    },
                }
            ];
            const accagg = [
                [
                    {
                        $match: {
                            userid: {
                                $in: profileid,
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
                            status: 1,
                            sendrequesttime:1,
                            "reqdata.name": 1,
                            "reqdata._id": 1
                        },
                    }
                ]
            ];
            const canagg = [
                {
                    $match: {
                        userid: {
                            $in: profileid,
                        },
                        status: "0",
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
                        sendrequesttime:1,
                        "reqdata.name": 1,
                        "reqdata._id": 1
                    },
                }
            ];
            var req = await SendInterestSchema.aggregate(reqagg)
            var can = await SendInterestSchema.aggregate(canagg)
            var acc = await SendInterestSchema.aggregate(accagg)
            console.log(req)
            console.log(can)
            console.log(acc)
            const encry = encryptData(JSON.stringify({ req:req, can:can, acc: acc }))
            return NextResponse.json(encry)
        }
        else {
            var req = []
            var can = []
            var acc = []
            const encry = encryptData(JSON.stringify({req: [],can: [], acc: []}))
            return NextResponse.json(encry)
        }
    }
    catch (e) {
        console.log(e)
    }
}