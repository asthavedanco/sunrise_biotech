// src/config/whatsapp.js

// WhatsApp number (use without '+' or '-' for wa.me links)
const WHATSAPP_NUMBER = "919737204425"; 

/**
 * Opens WhatsApp chat with a custom message.
 * @param {string} message - The message to send via WhatsApp.
 */
export const getWhatsappLink = (message) => {
  // Add timestamp to make URL unique every time
  const uniqueMessage = `${message} \n\nRef:${Date.now()}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(uniqueMessage)}`;
};

export default WHATSAPP_NUMBER;
