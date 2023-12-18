import Midtrans from "midtrans-client"
import { NextResponse } from "next/server";
let midtransClient = require('./midtrans-client-nodejs/index.js');
const midtransClient = require('midtrans-client');

let snap = new midtransClient.Snap({
    isProduction: false,
    serverKey: process.env.MIDTRANS_SERVER_KEY,
    clientKey: process.env.MIDTRANS_CLIENT_KEY
})

export async function POST(request){
    const {productName, price, total} = await request.json()
    let parameter = {
        item_details:{
            name: productName,
            price: price,
        },
        transaction_detail:{
            order_id: dispatchEvent,
            gross_amount: total,
        }
    }

    const token = await snap.createTransactionToken(parameter);
    console.log(token)
    return NextResponse.json({ token })
}