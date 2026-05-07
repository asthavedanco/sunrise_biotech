// src/pages/Contact.tsx
import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

// ✅ centralized WhatsApp helper
import { getWhatsappLink } from '@/config/whatsapp';

const Contact: React.FC = () => {
  const { toast } = useToast();

  // Quick WhatsApp button link
  const quickWhatsappLink = getWhatsappLink(
    'Hello Sunrise Biotech, I have a query'
  );

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Build WhatsApp message
    const message = `
Hello Sunrise Biotech,

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}

Message:
${formData.message}
    `.trim();

    // ✅ Always use centralized helper
    const whatsappLink = getWhatsappLink(message);
    window.open(whatsappLink, '_blank');

    toast({
      title: 'Message Sent!',
      description:
        "Your message has been sent via WhatsApp. We'll respond shortly."
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Have questions about our products? Need personalized health advice?
            We're here to help you on your wellness journey.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 9737204425"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="How can we help you?"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us more about your inquiry..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <Button type="submit" className="w-full btn-hero">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message via WhatsApp
                </Button>
              </form>

              {/* Quick WhatsApp Button */}
              <div className="mt-6 pt-6 border-t border-border text-center">
                <p className="text-muted-foreground mb-4">
                  Prefer instant messaging?
                </p>
                <a
                  href={quickWhatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="w-full">
                    <MessageCircle className="mr-2 h-5 w-5 text-green-500" />
                    Chat on WhatsApp
                  </Button>
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-bright/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary-bright" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground mb-2">
                        Our Location
                      </h3>
                      <p className="text-muted-foreground">
                        2385B, Near Panjarapole, HARIJ,
                        <br />
                        Patan, Gujarat, India - 384240
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-bright/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary-bright" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground mb-2">
                        Phone
                      </h3>
                      <p className="text-muted-foreground">+91 9737204425</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-bright/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary-bright" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground mb-2">
                        Email
                      </h3>
                      <p className="text-muted-foreground">
                        patelajay63610@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-gradient-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-foreground mb-1">
                      How long does shipping take?
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Most orders are delivered within 3-5 business days.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">
                      Do you offer bulk discounts?
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Yes! Contact us for special pricing on bulk orders.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">
                      Are your products certified pure?
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      All our products are certified pure and lab-tested.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
