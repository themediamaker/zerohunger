import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectionStr } from "@/src/lib/Db";
import {HelpListUserSchema} from "../../../lib/model/HelpListUser";

export async function POST(request) {
    const body = await request.json();

    const {name,matrimonyID,priority,category,feedback} = body;
    const userData = {
        name: name,
        matrimonyID:matrimonyID ,
        priority: priority,
        category: category,
        feedback: feedback,
        
      };
console.log(userData,"m")
    try {
        await mongoose.connect(connectionStr);
        const newHelpListData = await HelpListUserSchema.create(userData);
        return NextResponse.json({ data: newHelpListData, command: 1, msg: 'Data added successfully' }, { status: 200 });
    } catch(e) {
        return NextResponse.json({ data: e, command: 0, msg: 'Failed to add data' }, { status: 500 });
    }
}