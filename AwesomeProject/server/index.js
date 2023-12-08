import express from "express";
const app = express()
const port = 3000;
const PUBLISHABLE_KEY = "pk_test_51OGLEDEHncsORcbGCA9tRZoMa6XFIiMuSPRVSvoSpmQuzeRFg9KFSG4n3dR3OJDc0qhanUT8Sukd88HX9KLXrwAi00thB88P10"
const SECRET_KEY = "sk_test_51OGLEDEHncsORcbGVeN3D890uDZE0q7ozSFAbd0jz5BGwUgGWLkMmDZxp8ioyLKfx5Wy6FDT3lOpEBYCZZsk6row00P3U2nqWA"
import Stripe from "stripe";
const stripe = Stripe(SECRET_KEY,{apiVersion: "2023-10-16"})
app.listen(port,()=>{
    console.log `Example app listening at https://localhost:${port}`;
});
app.post("/create-payment-intent",async(req,res)=>{
    try{
        const paymentIntent = await stripe.paymentIntents.create({
            amount: 1099,
            currency:"usd",
            payment_method_types: ["card"],
        })
        const clientSecret = paymentIntent.client_secret;

        res.json({
            clientSecret: clientSecret,
        })
    }catch(e){
        console.log(e.message);
        res.json({error: e.message})
    }
})