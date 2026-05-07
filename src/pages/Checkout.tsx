// src/pages/Checkout.tsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard, Truck, ShieldCheck, Loader2, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription } from '@/components/ui/alert';

// ✅ centralized WhatsApp helper
// ✅ centralized Payment helper
import { PAYMENT_CONFIG } from '@/config/payment_methods';

const Checkout: React.FC = () => {
  const { items, getTotalItems, getTotalPrice, clearCart, updateQuantity, removeFromCart } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();
  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();
  const [isProcessing, setIsProcessing] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    notes: ''
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRazorpayPayment = async () => {
    try {
      // 1. Create order on the backend
      const orderResponse = await fetch(`${PAYMENT_CONFIG.backend_url}/api/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: totalPrice,
          currency: "INR",
          receipt: `receipt_${Date.now()}`
        }),
      });

      const orderDataFromBackend = await orderResponse.json();

      if (!orderDataFromBackend.id) {
        throw new Error("Failed to create order on backend");
      }

      const options = {
        key: PAYMENT_CONFIG.razorpay_key_id,
        amount: orderDataFromBackend.amount,
        currency: orderDataFromBackend.currency,
        name: PAYMENT_CONFIG.company_name,
        description: PAYMENT_CONFIG.description,
        image: "/logo.png",
        order_id: orderDataFromBackend.id, // ✅ This is now mandatory for secure payments
        handler: async function (response: any) {
          // 2. Verify payment on the backend
          const verifyResponse = await fetch(`${PAYMENT_CONFIG.backend_url}/api/verify`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }),
          });

          const verifyData = await verifyResponse.json();

          if (verifyData.success) {
            const finalOrderData = {
              customerInfo: formData,
              items,
              totalPrice,
              paymentMethod: 'razorpay',
              paymentId: response.razorpay_payment_id,
              orderId: response.razorpay_order_id,
              timestamp: new Date().toISOString(),
            };

            sessionStorage.setItem('lastOrder', JSON.stringify(finalOrderData));
            
            toast({
              title: 'Order Placed Successfully!',
              description: `Payment verified. ID: ${response.razorpay_payment_id}`,
            });

            clearCart();
            navigate('/payment-success?method=razorpay');
          } else {
            toast({
              title: 'Verification Failed',
              description: 'Payment verification failed. Please contact support.',
              variant: 'destructive',
            });
          }
        },
        prefill: {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          contact: formData.phone,
        },
        notes: {
          address: formData.address,
          order_notes: formData.notes,
          merchant_email: PAYMENT_CONFIG.razorpay_mail_id
        },
        theme: {
          color: "#15803d",
        },
      };

      const rzp1 = new (window as any).Razorpay(options);
      rzp1.on('payment.failed', function (response: any) {
        toast({
          title: 'Payment Failed',
          description: response.error.description,
          variant: 'destructive',
        });
      });
      rzp1.open();
    } catch (error) {
      console.error("Payment Initialization Error:", error);
      toast({
        title: 'Error',
        description: 'Could not connect to the payment server. Please try again.',
        variant: 'destructive',
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.address ||
      !formData.city ||
      !formData.state ||
      !formData.zipCode
    ) {
      toast({
        title: 'Error',
        description: 'Please fill in all required fields.',
        variant: 'destructive',
      });
      return;
    }

    setIsProcessing(true);
    
    try {
      handleRazorpayPayment();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to initialize payment. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsProcessing(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen py-8">
        <div className="container mx-auto px-4">
          <div className="text-center py-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              No Items in Cart
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Add some products to your cart before proceeding to checkout.
            </p>
            <Link to="/products">
              <Button className="btn-hero">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 bg-gradient-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Checkout</h1>
            <p className="text-muted-foreground">
              Complete your order details below
            </p>
          </div>
          <Link to="/cart">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Cart
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-border p-6">
              <h2 className="text-xl font-semibold mb-6">
                Shipping Information
              </h2>

              {/* Payment Method - Razorpay Only */}
              <div className="mb-6 pb-6 border-b border-border">
                <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
                <div className="flex items-center p-4 border border-primary-bright bg-primary-bright/5 rounded-xl">
                  <div className="bg-primary-bright/10 p-2 rounded-lg mr-4">
                    <ShieldCheck className="h-6 w-6 text-primary-bright" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <strong className="text-foreground">Razorpay Secure Checkout</strong>
                      <span className="bg-primary-bright/10 text-primary-bright text-[10px] uppercase font-bold px-1.5 py-0.5 rounded">OFFICIAL</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Pay securely via UPI, Cards, Netbanking, or Wallets.
                    </p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 9737204425"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                {/* Address */}
                <div>
                  <Label htmlFor="address">Street Address *</Label>
                  <Input
                    id="address"
                    name="address"
                    type="text"
                    placeholder="123 Main Street, Apt 4B"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      name="city"
                      type="text"
                      placeholder="New York"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="state">State *</Label>
                    <Input
                      id="state"
                      name="state"
                      type="text"
                      placeholder="NY"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="zipCode">ZIP Code *</Label>
                    <Input
                      id="zipCode"
                      name="zipCode"
                      type="text"
                      placeholder="10001"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="notes">Order Notes (Optional)</Label>
                  <Textarea
                    id="notes"
                    name="notes"
                    rows={3}
                    placeholder="Any special instructions for your order..."
                    value={formData.notes}
                    onChange={handleInputChange}
                  />
                </div>

                <Button type="submit" disabled={isProcessing} className="w-full btn-hero">
                  {isProcessing ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <ShieldCheck className="mr-2 h-5 w-5" />
                      Secure Checkout with Razorpay
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="flex items-center space-x-3 bg-white rounded-lg p-4 border border-border">
                <Truck className="h-8 w-8 text-primary-bright" />
                <div>
                  <div className="font-medium text-sm">Free Shipping</div>
                  <div className="text-xs text-muted-foreground">
                    On all orders
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white rounded-lg p-4 border border-border">
                <ShieldCheck className="h-8 w-8 text-primary-bright" />
                <div>
                  <div className="font-medium text-sm">Secure Payment</div>
                  <div className="text-xs text-muted-foreground">
                    Your data is protected
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white rounded-lg p-4 border border-border">
                <CreditCard className="h-8 w-8 text-primary-bright" />
                <div>
                  <div className="font-medium text-sm">Easy Returns</div>
                  <div className="text-xs text-muted-foreground">
                    30-day return policy
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-border p-6 h-fit sticky top-8">
              <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
              <div className="space-y-4 mb-6">
                {items.map(item => (
                  <div key={item.product.id + (item.selectedWeight || '')} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 rounded-lg overflow-hidden bg-gradient-card">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className={`w-full h-full ${['2', '4', '6'].includes(item.product.id) ? 'object-contain' : 'object-cover'}`}
                            onError={e => {
                              (e.target as HTMLImageElement).src = '/placeholder.svg';
                            }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-foreground truncate">
                            {item.product.name}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            ₹{item.product.price} / unit
                          </div>
                        </div>
                      </div>
                      <div className="font-semibold text-foreground text-right">
                        ₹{item.product.price * item.quantity}
                      </div>
                    </div>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between pl-12">
                      <div className="flex items-center border border-border rounded-lg bg-white scale-90 origin-left">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1, item.selectedWeight)}
                          className="p-1 hover:bg-muted transition-colors rounded-l-lg border-r border-border"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="px-3 py-0.5 text-xs font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1, item.selectedWeight)}
                          className="p-1 hover:bg-muted transition-colors rounded-r-lg border-l border-border"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => {
                          removeFromCart(item.product.id, item.selectedWeight);
                          toast({ title: "Item Removed", description: "Product has been removed from your checkout." });
                        }}
                        className="text-muted-foreground hover:text-red-500 transition-colors p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="border-b border-border/50 pb-2"></div>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>₹{getTotalPrice()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
                <div className="border-t border-border pt-2 flex justify-between">
                  <span className="font-semibold">Total Amount</span>
                  <span className="text-xl font-bold text-primary-bright">
                    ₹{getTotalPrice()}
                  </span>
                </div>
              </div>

              <div className="bg-gradient-card rounded-lg p-4 text-center mt-6">
                <p className="text-sm text-muted-foreground mb-2">
                  Secure payment handled by Razorpay
                </p>
                <p className="text-xs text-muted-foreground">
                  All major Cards, UPI, and Netbanking accepted
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
