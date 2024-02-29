
import {connectionStr} from '../../../lib/Db'
import {Product} from '../../../lib/model/product';
import {userdetails} from '../../../lib/model/userDetails'
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';



export async function GET(req){
  const agg = [
    {
      '$match': {
        'gender': 'female'
      }
    }
  ];
  await mongoose.connect(connectionStr);
  const data = await userdetails.aggregate(agg)
  // console.log(data);
   return NextResponse.json({data})
}


