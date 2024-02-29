import { serialize } from "cookie";
import { sign } from "jsonwebtoken";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectionStr } from "../../../lib/Db";
import { loginSchema } from "../../../lib/model/login";
import { createHash } from 'crypto';
// import LRUCache from 'lru-cache';

export async function POST(request) {
  // const cache = new LRUCache({
  //   max: 100, // maximum number of items in the cache
  //   maxAge: 1000 * 60 * 60, // maximum age of items in milliseconds
  // });
  const MAX_AGE = 60 * 60 * 24 * 30;
  const body = await request.json();
  const { userName,Mobile, password, createprofilefor,gender,Email} = body;
  const hashedPassword = createHash('sha256').update(password).digest('hex');

  const userData = {
    username: userName,
    mobile: Mobile,
    password: hashedPassword,
    createprofilefor: createprofilefor,
    gender:gender,
    Email:Email
  };
  console.log('*********',userData)
  const agg = [
    {
      '$match': {
        'mobile':Mobile,
        'Email':Email
      }
    }
  ]

  const secret = process.env.JWT_SECRET || "";
  const token = sign(
    { userName },
    secret,
    { expiresIn: MAX_AGE }
  );
console.log()
  const seralized = serialize("OutSiteJWT", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: MAX_AGE,
    path: "/"
  });
  try {
    await mongoose.connect(connectionStr);
    const existdata = await loginSchema.aggregate(agg);
    if (existdata.length > 0) {
      const response = {
        message: "already Exist",
        command: 0
      };
      return new Response(JSON.stringify(response),{
        status: 200
      })
    }
    else {
      const data = await loginSchema.create(userData);

      // Store the response in the cache
      // const cacheKey = `${userName}_response`;
      // const cacheData = {
      //   userId: data['_id'],
      //   gender: gender,
      //   // Add other properties as needed
      // };
      // cache.set(cacheKey,JSON.stringify(cacheData));
      const response = {
        message: "Authentication",
        userid: data['_id'],
        gender: gender
      };
      return new Response(JSON.stringify(response), {
        status: 200,
        headers: { 'set-Cookie': seralized }
      });

    }
  }
  catch (e) {
    return new Response(JSON.stringify(e))
  }
}
