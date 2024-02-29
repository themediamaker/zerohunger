const { NextResponse } = require("next/server")
import mongoose from "mongoose";
import { connectionStr } from "@/src/lib/Db";
import { registerschema } from "@/src/lib/model/RegisterProfile";
import { encryptData } from "../../../Utils/SecretData";

export const POST = async (request) => {
    const body = await request.json();
    const { data } = body
    console.log(data)
    const agg = [
        {
            '$match': {
                'userid': data.userid
            }
        }
    ]
    const requestData = {
        profilephoto: data.userImage,
        galleryPhoto: data.galleryImages[data.galleryImages.length - 1],
        userid: data.userid
    };
    try {
        await mongoose.connect(connectionStr)
        const checkdata = await registerschema.aggregate(agg)
        if (checkdata.length > 0) {
            const updateddata = await registerschema.findOneAndUpdate(
                { userid: data.userid },
                { $set: requestData },
                { new: true }
            );
            const encryptedFormData = encryptData(JSON.stringify(updateddata));
            return NextResponse.json(encryptedFormData);
        }
        else {
            const createdata = await registerschema.create(requestData)
            console.log(createdata)
            const encryptedFormData = encryptData(JSON.stringify(createdata));
            return NextResponse.json(encryptedFormData);
        }
    }
    catch (e) {
        console.log(e)
    }
}