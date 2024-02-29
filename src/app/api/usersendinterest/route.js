import { NextResponse } from "next/server";
import mongoose, { mongo } from "mongoose";
import { connectionStr } from "@/src/lib/Db";
import { SendInterestSchema } from '../../../lib/model/Sendinterest'
import { encryptData } from "@/src/Utils/SecretData";

export const POST = async (request) => {
    const body = await request.json()
    const { data } = body
    console.log(data)
    await mongoose.connect(connectionStr)
    const checkagg = [
        {
            '$match':
            {
                $and: [
                    { userid:data.userid},
                    { profileid:data.profileid},
                   
                ]

            }
        }
    ]
    const datacheck = await SendInterestSchema.aggregate(checkagg)
    try{
        if(datacheck.length>0 && data.type=='getdata'){
            var msg ='Request Alredy send this Profile';
            var command=0;
            var responedata = datacheck;
            var request = 'pending'
            var encry = encryptData(JSON.stringify({resdata:responedata,msg:msg,command:command,request:request}))
            return NextResponse.json(encry)
        }
        else{
            var msg ='Send Interest Sucessful';
            var command=1;
            var request = 'Send'
            const responedata = await SendInterestSchema.create(data)
            var encry = encryptData(JSON.stringify({data:responedata,msg:msg,command:command,request:request}))
            return NextResponse.json(encry)
        }
    }
    catch(e){
        console.log(e)
    }

}