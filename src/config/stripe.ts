// Get Stripe publishable key from environment variable
export const STRIPE_PUBLISHABLE_KEY = import.meta.env
  .VITE_STRIPE_PUBLISHABLE_KEY;

if (!STRIPE_PUBLISHABLE_KEY) {
  console.warn(
    "Stripe publishable key is not set. Payment functionality may not work properly. " +
      "Please set VITE_STRIPE_PUBLISHABLE_KEY in your .env file",
  );
}

// API endpoint for creating payment intents
export const PAYMENT_INTENT_ENDPOINT = "/api/create-payment-intent";

// Currency settings
export const CURRENCY = "INR";
