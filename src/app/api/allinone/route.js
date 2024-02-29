import mongoose from "mongoose";
import { connectionStr } from "../../../lib/Db";
import { NextResponse } from "next/server";
import { userdetails } from '../../../lib/model/userDetails'
import { registerschema } from "@/src/lib/model/RegisterProfile";
import { encryptData } from "@/src/Utils/SecretData";

export const POST = async (request) => {
  const body = await request.json()
  const { agg } = body;
  await mongoose.connect(connectionStr);
  const data = await registerschema.aggregate(agg)
  const encryptedFormData = encryptData(JSON.stringify(data));
  return NextResponse.json({ data:encryptedFormData, command:1, msg: 'sucessful' })
}