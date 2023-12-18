import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { MenuItem } from "@/models/MenuItem";
import { Order } from "@/models/Order";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
const midtransClient = require('midtrans-client');

export async function POST(req) {
  mongoose.connect(process.env.MONGO_URL);

  const { cartProducts, address } = await req.json();
  const session = await getServerSession(authOptions);
  const userEmail = session?.user?.email;

  const orderDoc = await Order.create({
    userEmail,
    ...address,
    cartProducts,
    paid: false,
  });

  const snap = new midtransClient.Snap({
    isProduction: false,
    serverKey: process.env.MIDTRANS_SERVER_KEY,
    clientKey: process.env.MIDTRANS_CLIENT_KEY,
  });

  const midtransItems = [];
  for (const cartProduct of cartProducts) {
    const productInfo = await MenuItem.findById(cartProduct._id);
    let productPrice = productInfo.basePrice;
    // ... (similar to the Stripe code for calculating productPrice)
    
    const productName = cartProduct.name;

    midtransItems.push({
      id: cartProduct._id.toString(),
      name: productName,
      price: productPrice,
      quantity: 1,
    });
  }

  const transactionDetails = {
    order_id: orderDoc._id.toString(),
    gross_amount: calculateTotalAmount(midtransItems),
  };

  const creditCardOptions = {
    secure: true,
  };

  const customerDetails = {
    email: userEmail,
  };

  const midtransParams = {
    transaction_details: transactionDetails,
    item_details: midtransItems,
    credit_card: creditCardOptions,
    customer_details: customerDetails,
    callbacks: {
      finish: process.env.NEXTAUTH_URL + 'orders/' + orderDoc._id.toString() + '?clear-cart=1',
      error: process.env.NEXTAUTH_URL + 'cart?canceled=1',
    },
  };

  try {
    const midtransTransaction = await snap.createTransaction(midtransParams);
    return Response.json(midtransTransaction.redirect_url);
  } catch (error) {
    console.error("Midtrans error:", error);
    return Response.json({ error: "Failed to create Midtrans transaction" });
  }
}

function calculateTotalAmount(items) {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
}







// import {authOptions} from "@/app/api/auth/[...nextauth]/route";
// import {MenuItem} from "@/models/MenuItem";
// import {Order} from "@/models/Order";
// import mongoose from "mongoose";
// import {getServerSession} from "next-auth";
// const midtrans = require('midtrans')(process.env.MIDTRANS_SERVER_KEY);

// export async function POST(req) {
//   mongoose.connect(process.env.MONGO_URL);

//   const {cartProducts, address} = await req.json();
//   const session = await getServerSession(authOptions);
//   const userEmail = session?.user?.email;

//   const orderDoc = await Order.create({
//     userEmail,
//     ...address,
//     cartProducts,
//     paid: false,
//   });

//   const stripeLineItems = [];
//   for (const cartProduct of cartProducts) {

//     const productInfo = await MenuItem.findById(cartProduct._id);

//     let productPrice = productInfo.basePrice;
//     if (cartProduct.size) {
//       const size = productInfo.sizes
//         .find(size => size._id.toString() === cartProduct.size._id.toString());
//       productPrice += size.price;
//     }
//     if (cartProduct.extras?.length > 0) {
//       for (const cartProductExtraThing of cartProduct.extras) {
//         const productExtras = productInfo.extraIngredientPrices;
//         const extraThingInfo = productExtras
//           .find(extra => extra._id.toString() === cartProductExtraThing._id.toString());
//         productPrice += extraThingInfo.price;
//       }
//     }

//     const productName = cartProduct.name;

//     stripeLineItems.push({
//       quantity: 1,
//       price_data: {
//         currency: 'IDR',
//         product_data: {
//           name: productName,
//         },
//         unit_amount: productPrice * 100,
//       },
//     });
//   }

//   const stripeSession = await stripe.checkout.sessions.create({
//     line_items: stripeLineItems,
//     mode: 'payment',
//     customer_email: userEmail,
//     success_url: process.env.NEXTAUTH_URL + 'orders/' + orderDoc._id.toString() + '?clear-cart=1',
//     cancel_url: process.env.NEXTAUTH_URL + 'cart?canceled=1',
//     metadata: {orderId:orderDoc._id.toString()},
//     payment_intent_data: {
//       metadata:{orderId:orderDoc._id.toString()},
//     },
//     shipping_options: [
//       {
//         shipping_rate_data: {
//           display_name: 'Delivery fee',
//           type: 'fixed_amount',
//           fixed_amount: {amount: 500, currency: 'IDR'},
//         },
//       }
//     ],
//   });

//   return Response.json(stripeSession.url);
// }