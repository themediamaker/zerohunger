import { NextResponse } from "next/server"
import { connectionStr } from "@/src/lib/Db"
import mongoose from "mongoose"
import { loginSchema } from "@/src/lib/model/login"
import { encryptData } from "@/src/Utils/SecretData"

export async function POST(request){
    const body = await request.json()
    const { userid } = body;
    try{
        await mongoose.connect(connectionStr)
        const data = await loginSchema.findById(userid)
        const encrypt = encryptData(JSON.stringify(data))
        return NextResponse.json({data:encrypt,command:1,msg:'sucessful'},{status:200})
    }
    catch(e){
        return NextResponse.json({data:e,command:0,msg:'failed'})
    }
   
}