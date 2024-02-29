// import { connectionStr } from '@/lib/Db'
import { connectionStr } from '../../../lib/Db'
import { Product } from '../../../lib/model/product'
// import { Product } from '@/lib/model/product'
import mongoose from 'mongoose'
import { NextResponse } from 'next/server'
import React from 'react'


export async function GET(){
   await mongoose.connect(connectionStr);
   const data = await Product.find();
   console.log(data);
    return NextResponse.json({result:data})
}