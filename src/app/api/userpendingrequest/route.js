import { NextResponse } from "next/server";
import { connectionStr } from "@/src/lib/Db";
import mongoose from "mongoose";
import { SendInterestSchema } from "@/src/lib/model/Sendinterest";
import { registerschema } from "@/src/lib/model/RegisterProfile";
import { encryptData } from "@/src/Utils/SecretData";

export const POST = async (request) => {
    const body = await request.json()
    const {userid} = body
    // const userid = '65d81b5edfa271ceb647baa3'
    const agg = [ 
        {
            '$match':{
                userid:userid
            }
        }
    ]
    console.log(userid)
    try {
        await mongoose.connect(connectionStr)
        const data = await SendInterestSchema.aggregate(agg)
        const userIds = data.map(item => item.userid);
        const profileid = data.map(item => item.profileid)

        if (data.length > 0) {
            const reqagg = [
                {
                    $match: {
                        userid:{
                            $in:userIds,
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
                            profileid: {
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
                        profileid:{
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
            var pending = await SendInterestSchema.aggregate(reqagg)
            var mecan = await SendInterestSchema.aggregate(canagg)
            var meacc = await SendInterestSchema.aggregate(accagg)
            // console.log(pending)
            // console.log(mecan)
            // console.log(meacc)
            const encry = encryptData(JSON.stringify({pending:pending,mecan:mecan,meacc:meacc}))
            return NextResponse.json(encry)
        }
        else {
            var pending = []
            var mecan = []
            var meacc = []
            const encry = encryptData(JSON.stringify({pending:[],mecan:[], meacc:[]}))
            return NextResponse.json(encry)
        }
    }
    catch (e) {
        console.log(e)
    }
}