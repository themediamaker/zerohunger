import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectionStr } from "@/src/lib/Db";
import { SendInterestSchema } from "@/src/lib/model/Sendinterest";
import { encryptData } from "@/src/Utils/SecretData";

export const POST = async (request) => {
    const body = await request.json()
    const { type,userid,profileid} = body
    console.log('#########',type,userid,profileid)
    await mongoose.connect(connectionStr)
    try {
        if (type.type=='Accpect') {
            const data = await SendInterestSchema.updateOne({ $and: [{ userid: userid.userid }, { profileid: profileid.profileid}] }, { status: 1 })
            console.log(data)
            if(data.modifiedCount > 0){
                const encry = encryptData(JSON.stringify({msg:'request sucessfully accpcet',command:1}))
                return NextResponse.json(encry)
            }
            else{
                const encry = encryptData(JSON.stringify({msg:'failed',command:0}))
                return NextResponse.json(encry)
            }
            
        }
        else if (type.type=='Cancel') {
            const data = await SendInterestSchema.updateOne({ $and: [{ userid: userid.userid }, { profileid: profileid.profileid}] }, { status: 0 })
            console.log(data)
            if(data.modifiedCount > 0){
                const encry = encryptData(JSON.stringify({msg:'sucessful request cancel',command:1}))
                return NextResponse.json(encry)
            }
            else{
                const encry = encryptData(JSON.stringify({msg:'failed',command:0}))
                return NextResponse.json(encry)
            }
        }
        else {
            return NextResponse.json('false')
        }
    }
    catch (e) {
        console.log(e)
    }
}