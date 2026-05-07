/**
 * BACKEND EXAMPLE - Stripe Payment Integration
 *
 * This is an example of how to set up your backend to handle Stripe payments.
 * You can use Node.js/Express, Python/Flask, or any other backend framework.
 */

// ============================================
// Example 1: Express.js + Stripe Backend
// ============================================

/*
const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Create a payment intent
app.post('/api/create-payment-intent', async (req, res) => {
  try {
    const { amount, email, orderData } = req.body;

    // Always use amount in cents
    const amountInCents = Math.round(amount * 100);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountInCents,
      currency: 'inr',
      metadata: {
        email,
        orderData: JSON.stringify(orderData),
      },
    });

    res.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Webhook endpoint for Stripe events
app.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;
      console.log('Payment succeeded:', paymentIntent.id);
      // TODO: Update order status in your database
      break;

    case 'payment_intent.payment_failed':
      console.log('Payment failed:', event.data.object.id);
      // TODO: Handle payment failure
      break;
  }

  res.json({ received: true });
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
*/

// ============================================
// Example 2: Python/Flask Backend
// ============================================

/*
from flask import Flask, request, jsonify
import stripe
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)
stripe.api_key = os.getenv('STRIPE_SECRET_KEY')

@app.route('/api/create-payment-intent', methods=['POST'])
def create_payment_intent():
    try:
        data = request.json
        amount = data.get('amount')
        email = data.get('email')
        order_data = data.get('orderData')

        # Amount in cents
        amount_in_cents = int(amount * 100)

        intent = stripe.PaymentIntent.create(
            amount=amount_in_cents,
            currency='inr',
            metadata={
                'email': email,
                'order_data': json.dumps(order_data)
            }
        )

        return jsonify({
            'clientSecret': intent.client_secret,
            'paymentIntentId': intent.id
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 400

@app.route('/webhook', methods=['POST'])
def stripe_webhook():
    payload = request.get_data()
    sig_header = request.headers.get('stripe-signature')
    endpoint_secret = os.getenv('STRIPE_WEBHOOK_SECRET')

    try:
        event = stripe.Webhook.construct_event(
            payload, sig_header, endpoint_secret
        )
    except Exception as e:
        return f'Webhook Error: {str(e)}', 400

    # Handle the event
    if event['type'] == 'payment_intent.succeeded':
        payment_intent = event['data']['object']
        print(f'Payment succeeded: {payment_intent["id"]}')
        # TODO: Update order status in database

    elif event['type'] == 'payment_intent.payment_failed':
        payment_intent = event['data']['object']
        print(f'Payment failed: {payment_intent["id"]}')
        # TODO: Handle payment failure

    return jsonify({'received': True}), 200

if __name__ == '__main__':
    app.run(port=5000, debug=True)
*/

// ============================================
// Environment Variables Needed
// ============================================

/*
# .env file

STRIPE_SECRET_KEY=sk_test_your_secret_key_here
STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here

DATABASE_URL=your_database_connection_string
CORS_ORIGIN=http://localhost:5173
*/

// ============================================
// Frontend Integration
// ============================================

/*
// In your Checkout.tsx, after user clicks "Proceed to Stripe Payment":

const response = await fetch('http://localhost:3001/api/create-payment-intent', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    amount: totalPrice,
    email: formData.email,
    orderData: {
      items,
      customerInfo: formData
    }
  })
});

const { clientSecret } = await response.json();

// Then pass clientSecret to PaymentForm component
*/

// ============================================
// Database Schema Example (PostgreSQL)
// ============================================

/*
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  stripe_payment_intent_id VARCHAR(255) UNIQUE,
  customer_email VARCHAR(255),
  customer_name VARCHAR(255),
  customer_phone VARCHAR(20),
  customer_address TEXT,
  total_amount DECIMAL(10, 2),
  currency VARCHAR(3) DEFAULT 'INR',
  status VARCHAR(50) DEFAULT 'pending',
  items JSONB,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE order_items (
  id SERIAL PRIMARY KEY,
  order_id INTEGER REFERENCES orders(id),
  product_id VARCHAR(255),
  product_name VARCHAR(255),
  quantity INTEGER,
  price DECIMAL(10, 2),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
*/

// ============================================
// Getting Started
// ============================================

/*
1. Get your Stripe keys:
   - Go to https://dashboard.stripe.com/
   - Navigate to Developers > API Keys
   - Copy Secret Key (sk_test_...)
   - Copy Publishable Key (pk_test_...)

2. Set up webhook:
   - Go to Developers > Webhooks
   - Add endpoint: http://your-domain/webhook
   - Select events: payment_intent.succeeded, payment_intent.payment_failed
   - Get signing secret (whsec_...)

3. Create .env file with your keys

4. Run your backend server

5. Update the API endpoint in src/config/stripe.ts if needed

6. Test with Stripe test card: 4242 4242 4242 4242
*/

export {};
