# Payment Integration Setup Guide

## Stripe Integration

This project now includes **Stripe** payment integration. Follow these steps to get it working:

### 1. Get Your Stripe Keys

1. Go to [Stripe Dashboard](https://dashboard.stripe.com/)
2. Sign up or log in to your account
3. Navigate to **Developers > API keys**
4. Copy your **Publishable Key** (starts with `pk_test_` or `pk_live_`)
5. Copy your **Secret Key** (starts with `sk_test_` or `sk_live_`)

### 2. Setup Environment Variables

Create a `.env.local` file in the root directory with:

```
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
```

**Important:** Never commit your secret key to your repository. The secret key should only be stored securely on your backend server.

### 3. Test Mode

For testing, use the Stripe test card numbers:

- **Card Number:** 4242 4242 4242 4242
- **Expiry:** Any future date (e.g., 12/25)
- **CVC:** Any 3 digits (e.g., 123)

### 4. Payment Flow

The website now supports two payment methods:

#### Option A: Stripe (Credit/Debit Card)

- Customers can pay directly with their card
- **Note:** Requires a backend to handle payment intents
- Implementation ready, waiting for backend setup

#### Option B: WhatsApp

- Send order details via WhatsApp
- Customer can pay via UPI, Bank Transfer, or Cash on Delivery
- Works immediately without additional setup

### 5. Features Added

✅ **Product Pricing** - All products now have prices
✅ **Cart Total Calculation** - Cart context updated with `getTotalPrice()`
✅ **Payment Method Selection** - Choose between Stripe and WhatsApp
✅ **Order Summary** - Display itemized costs and total
✅ **Payment Form** - Stripe-ready payment component
✅ **Success Page** - Confirmation page after payment
✅ **Secure Data Handling** - Session storage for checkout data

### 6. Implementation Details

**New Files Created:**

- `src/config/stripe.ts` - Stripe configuration
- `src/components/PaymentForm.tsx` - Stripe payment form component
- `src/pages/PaymentSuccess.tsx` - Success confirmation page
- `.env.example` - Environment variable template

**Updated Files:**

- `src/data/products.ts` - Added prices to all products
- `src/contexts/CartContext.tsx` - Added getTotalPrice function
- `src/pages/Checkout.tsx` - Added payment method selection and Stripe integration

### 7. Backend Requirements (For Full Stripe Integration)

To fully enable Stripe payments, you'll need a backend server that:

1. **Creates Payment Intent**
   - Endpoint: `POST /api/create-payment-intent`
   - Receives: Cart items and amount
   - Returns: Client secret for frontend

2. **Confirms Payment**
   - Endpoint: `POST /api/confirm-payment`
   - Handles webhook confirmations
   - Updates order status

3. **Webhook Handler**
   - Listens to Stripe events (payment.success, payment.failed)
   - Updates order status in database
   - Sends confirmation emails

**Example Backend Response:**

```json
{
  "clientSecret": "pi_1234567890abcdef_secret_xyz"
}
```

### 8. Production Deployment

Before going live:

1. ✅ Switch Stripe keys from test to live
2. ✅ Update environment variables in production
3. ✅ Enable HTTPS on your website
4. ✅ Test end-to-end payment flow
5. ✅ Set up SSL certificate
6. ✅ Configure Stripe webhook endpoint

### 9. Security Best Practices

- 🔒 Never expose your Secret Key in frontend code
- 🔒 Always validate orders on the backend
- 🔒 Use HTTPS in production
- 🔒 Store customer data securely
- 🔒 Implement PCI compliance

### 10. Troubleshooting

**Issue: "Stripe publishable key is not set"**

- Solution: Check that `.env.local` file exists and `VITE_STRIPE_PUBLISHABLE_KEY` is set correctly

**Issue: Payment form not showing**

- Solution: Ensure Stripe script is loaded and key is valid

**Issue: Payment fails with network error**

- Solution: Check browser console for CORS errors, ensure backend endpoint is accessible

### 11. Next Steps

1. Set up your backend to handle payment intents
2. Add your Stripe keys to `.env.local`
3. Test with Stripe test cards
4. Deploy to production when ready
5. Switch to live Stripe keys

---

For more information, visit the [Stripe Documentation](https://stripe.com/docs)
