// src/config/payment_methods.js

// Razorpay Configuration
export const PAYMENT_CONFIG = {
  // Backend API URL (Update this in production)
  backend_url: "http://localhost:3001",
  
  // Razorpay Key ID
  razorpay_key_id: import.meta.env.VITE_RAZORPAY_KEY_ID,
  
  company_name: "Sunrise Biotech",
  description: "Payment for Natural Health Products",
  
  // Merchant Razorpay Email ID
  razorpay_mail_id: "patelajay63610@gmail.com",
  
  // Support Contact
  support_phone: "919737204425",
  support_email: "patelajay63610@gmail.com",
};

export default PAYMENT_CONFIG;
