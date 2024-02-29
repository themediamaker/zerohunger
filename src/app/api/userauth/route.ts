import { serialize } from "cookie";
import { sign } from "jsonwebtoken";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectionStr } from "@/src/lib/Db";
import {loginSchema} from '../../../lib/model/login';
import { createHash } from 'crypto';

const MAX_AGE = 60*60*24*1
export const POST = async (request: Request) => {
    const body = await request.json()

    const {value} = body;
    const {email_Mobile,password} = value
    console.log('*********',email_Mobile,password)
    const hashedPassword = createHash('sha256').update(password).digest('hex');
    console.log(hashedPassword)
   
    const agg=[
      {
        '$match':{        
        'mobile':email_Mobile,
        'password': hashedPassword
        }
      }
    ]
    const mobileagg = [{
        '$match':{  
          'mobile':email_Mobile,
        }
    }]
    await mongoose.connect(connectionStr)
    const data = await loginSchema.aggregate(agg)
    if(data.length>0){
        const secret = process.env.JWT_SECRET || "";
        const token  = sign(
            {email_Mobile},
            secret,
            {expiresIn:MAX_AGE}
        )
    
    
        const seralized = serialize("OutSiteJWT",token,{
            httpOnly:true,
            secure:process.env.NODE_ENV ==="production",
            sameSite:"strict",
            maxAge:MAX_AGE,
            path:"/"
        })
    
        const response = {
            message:"Authentication",
            userid:encodeURIComponent(data[0]._id),
            gender:data[0].gender
        }
       
    // console.log(response)
        return new Response(JSON.stringify(response),{
            status:200,
            headers:{'set-Cookie':seralized}
        })
    }
    else{
        const response = {
            message:"User Not Registered",
            command:0
        }
        return new Response(JSON.stringify(response),
        {
            status:401,
        })
    }
}



 // console.log('^^^^^^^^^^^',email_Mobile)
    // if (userName !== 'admin' || password !== 'admin') {
    //     return NextResponse.json(
    //         {
    //             message: 'unauthroized',
    //         },
    //         {
    //             status: 401
    //         }
    //     )
    // }