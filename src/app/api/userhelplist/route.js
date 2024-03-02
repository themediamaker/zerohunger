import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectionStr } from "@/src/lib/Db";
import HelpListSchema from "../../../lib/model/HelpList";

export async function POST(request) {
    const body = await request.json();
    try {
        await mongoose.connect(connectionStr);
        const newHelpListData = await HelpListSchema.create(body);
        return NextResponse.json({ data: newHelpListData, command: 1, msg: 'Data added successfully' }, { status: 200 });
    } catch(e) {
        return NextResponse.json({ data: e, command: 0, msg: 'Failed to add data' }, { status: 500 });
    }
}