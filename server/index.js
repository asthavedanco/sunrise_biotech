const express = require('express');
const Razorpay = require('razorpay');
const cors = require('cors');
const crypto = require('crypto');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Razorpay
// Note: In production, use environment variables!
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID || 'rzp_test_YourKeyIDHere',
    key_secret: process.env.RAZORPAY_KEY_SECRET || 'YourKeySecretHere'
});

// Create Order Route
app.post('/api/create-order', async (req, res) => {
    try {
        const { amount, currency, receipt } = req.body;

        if (!amount || amount < 1) {
            return res.status(400).json({ error: "Amount must be at least 1 INR" });
        }

        const options = {
            amount: amount * 100, // Razorpay works in paise
            currency: currency || "INR",
            receipt: receipt || `receipt_${Date.now()}`
        };

        const order = await razorpay.orders.create(options);
        
        if (!order) {
            return res.status(500).json({ error: "Error creating order" });
        }

        res.json(order);
    } catch (error) {
        console.error("Order Creation Error:", error);
        if (error.statusCode === 401) {
            return res.status(401).json({ error: "Razorpay Authentication Failed" });
        }
        res.status(500).json({ error: "Internal Server Error", details: error });
    }
});

// Verify Payment Route
app.post('/api/verify-payment', async (req, res) => {
    try {
        const { 
            razorpay_order_id, 
            razorpay_payment_id, 
            razorpay_signature 
        } = req.body;

        if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
            return res.status(400).json({ success: false, message: "Missing required fields" });
        }

        const sign = razorpay_order_id + "|" + razorpay_payment_id;
        const expectedSign = crypto
            .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET || 'YourKeySecretHere')
            .update(sign.toString())
            .digest("hex");

        if (razorpay_signature === expectedSign) {
            // Payment is verified
            // Here you would typically save the order to your database
            return res.json({ 
                success: true, 
                message: "Payment verified successfully" 
            });
        } else {
            return res.status(400).json({ 
                success: false, 
                message: "Invalid signature" 
            });
        }
    } catch (error) {
        console.error("Verification Error:", error);
        res.status(500).json({ error: "Internal Server Error", details: error });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
