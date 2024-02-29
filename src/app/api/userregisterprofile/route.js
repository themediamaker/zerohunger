import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectionStr } from "@/src/lib/Db";
import { registerschema } from '../../../lib/model/RegisterProfile'

export const POST = async (request) => {
  try {
    const body = await request.json();
    const { userid } = body.data
    const agg = [
      {
        '$match': {
          'userid': userid
        }
      }
    ]
    console.log("&&&&&&&&&&&",userid)
    const userData = {};
    for (const key in body) {
      if (Object.hasOwnProperty.call(body, key)) {
        userData[key] = body[key];
      }
    }
    console.log("@@@@@",userData['data'])
    await mongoose.connect(connectionStr);
    const existingUser = await registerschema.aggregate(agg)
    if (existingUser.length > 0) {
      const updateddata = await registerschema.findOneAndUpdate(
        { userid },
        { $set: userData['data'] },
        { new: true }
      );
      console.log(updateddata)
      return NextResponse.json('exist data');
    }
    else {
      return NextResponse.json('createdata');
    }

  } catch (error) {
    console.error(error);
    return NextResponse.error("Error occurred while creating the document.");
  }
};
