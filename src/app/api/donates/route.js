// app/api/donation/route.js
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { Donate } from "../../../lib/model/donate"; // Update this import
import { connectionStr } from "@/src/lib/Db";

export const POST = async (request) => {
  await mongoose.connect(connectionStr);

  try {
    const body = await request.json();
    const { name, email, phoneNumber, phoneCountryCode, amount, captchaVerified } = body;

    if (!name || !email || !phoneNumber || !phoneCountryCode||!amount) {
      return NextResponse.json(
        { message: "Please provide all required fields" },
        { status: 400 }
      );
    }

    if (!captchaVerified) {
      return NextResponse.json(
        { message: "Captcha verification failed" },
        { status: 400 }
      );
    }

    const newDonation = new Donate({
      name,
      email,
      phoneNumber,
      phoneCountryCode,
      amount,
      captchaVerified,
    });

    await newDonation.save();

    return NextResponse.json(
      { message: "Donation received successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in POST request:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
};
