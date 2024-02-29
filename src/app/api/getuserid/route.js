import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectionStr } from "@/src/lib/Db";
import { registerschema } from "@/src/lib/model/RegisterProfile";
import { encryptData } from "@/src/Utils/SecretData";
// import { ObjectId } from "mongoose";

export const POST = async (request) => {
    const body = await request.json()
    const { profileid } = body
    const isValidObjectId = (id) => {
        return mongoose.Types.ObjectId.isValid(id);
    };
    console.log(isValidObjectId(profileid))
    
    try{
        if(isValidObjectId(profileid)){
            const agg = [
                {
                    '$match': {
                        '_id': new mongoose.Types.ObjectId(profileid)
                    }
                }
            ]
            await mongoose.connect(connectionStr);
            const data = await registerschema.aggregate(agg)
            if (data.length>0) {
                var encrypt = encryptData(JSON.stringify({ data: data.userid, command: 1, msg: 'sucessful' }))
                return NextResponse.json(encrypt)
            }
            // else {
            //     console.log('eslee453534543')
            //     var encrypt = encryptData(JSON.stringify({ data: [], command: 0, msg: 'no record found' }))
            //     return NextResponse.json(encrypt)
            // }
        }
         else {
                // console.log('eslee453534543')
                var encrypt = encryptData(JSON.stringify({ data: [], command: 0, msg: 'no record found' }))
                return NextResponse.json(encrypt)
            }

    }
    catch(e){
        // var encrypt = encryptData(JSON.stringify({ data:[], command: 0, msg: 'no record found' }))
        return NextResponse.json({data:'connection break'})
    }

}