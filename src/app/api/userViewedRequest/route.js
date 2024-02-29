import { NextResponse } from "next/server";
import mongoose, { mongo } from "mongoose";
import { ViwedProfileSchema } from "../../../lib/model/ViwedProfile";
import { connectionStr } from "@/src/lib/Db";


export const POST = async (request) => {
    const body = await request.json()
    const { data } = body
    console.log('dataof view%%%%%%%%', data)
    try{

        if (data.userid != undefined && data.profileid != undefined) {
            const agg = [
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
            const resdata = await ViwedProfileSchema.aggregate(agg)
            if(resdata.length>0){
                return NextResponse.json(false)
            }
            else{
                const savedata = await ViwedProfileSchema.create(data)
                console.log(savedata)
                return NextResponse.json(true)
            }
        }
        else{
            return NextResponse.json(false)
        }
    }
    catch(e){
        console.log(e)
    }

}