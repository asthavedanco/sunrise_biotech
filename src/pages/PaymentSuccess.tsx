import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { CheckCircle, ArrowRight, Home, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";

const PaymentSuccess: React.FC = () => {
  const { clearCart } = useCart();
  const location = useLocation();
  const orderData = JSON.parse(sessionStorage.getItem('lastOrder') || '{}');

  useEffect(() => {
    // Clear cart on successful payment
    clearCart();
  }, [clearCart]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-card py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg border border-border p-8 text-center">
          {/* Success Icon */}
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-green-100 rounded-full animate-pulse"></div>
              <CheckCircle className="h-20 w-20 text-green-600 relative z-10" />
            </div>
          </div>

          {/* Success Message */}
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Payment Successful!
          </h1>
          <p className="text-muted-foreground mb-8">
            Thank you for your order. Your payment has been processed successfully via Razorpay.
          </p>

          {/* Order Details */}
          <div className="bg-gradient-card rounded-lg p-6 mb-8 text-left border border-primary-bright/10 shadow-inner">
            <div className="space-y-3">
              {orderData.orderId && (
                <div className="flex justify-between text-sm flex-wrap">
                  <span className="text-muted-foreground">Order ID:</span>
                  <span className="font-mono font-bold text-primary-dark">{orderData.orderId}</span>
                </div>
              )}
              {orderData.paymentId && (
                <div className="flex justify-between text-sm flex-wrap">
                  <span className="text-muted-foreground">Payment ID:</span>
                  <span className="font-mono font-bold text-primary-dark">{orderData.paymentId}</span>
                </div>
              )}
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Order Status:</span>
                <span className="font-semibold text-green-600">Confirmed</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Payment Method:</span>
                <span className="font-semibold text-primary-bright flex items-center">
                  <ShieldCheck className="h-3 w-3 mr-1" />
                  Razorpay
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Total Amount:</span>
                <span className="font-bold text-primary-bright text-base">₹{orderData.totalPrice || '0'}</span>
              </div>
            </div>
          </div>

          {/* Information */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8 text-left">
            <p className="text-sm text-blue-900">
              A confirmation email with order details and tracking information
              has been sent to your email address.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Link to="/products">
              <Button className="w-full btn-hero">
                Continue Shopping
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/">
              <Button variant="outline" className="w-full">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
