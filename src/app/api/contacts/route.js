import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { connectionStr } from '@/src/lib/Db';

// Use CommonJS-style require to import the model
const { Contactuser } = require('../../../lib/model/contact');

export const POST = async (request) => {
    await mongoose.connect(connectionStr);

    try {
        const body = await request.json();
        const { firstName, lastName, email, phoneCountryCode, phoneNumber, message, captchaVerified } = body;

        if (!firstName || !email || !message) {
            return NextResponse.json(
                { message: "Please provide all required fields" },
                { status: 400 }
            );
        }

        const newContact = new Contactuser({
            firstName,
            lastName,
            email,
            phoneCountryCode,
            phoneNumber,
            message,
            captchaVerified,
        });

        await newContact.save();

        return NextResponse.json(
            { message: "Contact saved successfully" },
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
