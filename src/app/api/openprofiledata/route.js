import mongoose from "mongoose"
import { NextResponse } from "next/server"
import { connectionStr } from "@/src/lib/Db"
import { registerschema } from "@/src/lib/model/RegisterProfile"
import { ObjectId } from "mongoose"
import { encryptData } from "@/src/Utils/SecretData"

export const POST = async (request) => {
    const body = await request.json()
    const { viewid } = body;
 
    try {
        await mongoose.connect(connectionStr)
        const data = await registerschema.findById(viewid)
        const encrypt = encryptData(JSON.stringify(data))
       return NextResponse.json({viewdata:encrypt})
    }
    catch (e) {
        console.log(e)
    }





}