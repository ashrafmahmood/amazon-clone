const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51IlCQcSJ9wDntWFrzg91rd8EidEPcps9Bh2vwJ0MqBso1JXWODvEFmsfiNsKWQ4pCH5FdyKqy2oS11rA4bgw3dYo00Yu6dcWuy');

//API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log('Payment>>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "inr",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})


// - Listen
exports.api = functions.https.onRequest(app)

//http://localhost:5001/clone-60a1b/us-central1/api