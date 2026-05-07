import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Shield, Award, Truck } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';


const Home: React.FC = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2 mb-6">
              <Leaf className="h-5 w-5 text-primary-bright" />
              <span className="text-sm font-medium">100% Pure & Natural</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Premium Natural
              <span className="block text-primary-bright">Health Products</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Discover the power of nature with our premium Spirulina and Moringa products. 
              Boost your health naturally with scientifically proven superfoods.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products">
                <Button className="btn-hero">
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="btn-secondary">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-1/2 left-10 w-20 h-20 bg-primary-bright/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary-medium/10 rounded-full blur-xl"></div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-bright/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-primary-bright" />
              </div>
              <h3 className="font-semibold text-lg mb-2">100% Pure</h3>
              <p className="text-muted-foreground">Naturally grown without chemicals or pesticides</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-bright/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary-bright" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Lab Tested</h3>
              <p className="text-muted-foreground">Quality assured through rigorous testing</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-bright/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary-bright" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Premium Quality</h3>
              <p className="text-muted-foreground">Highest grade products for optimal nutrition</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-bright/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-primary-bright" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground">Quick and secure shipping nationwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular natural health products, carefully selected for their exceptional quality and benefits.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/products">
              <Button className="btn-hero">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Health Benefits Section */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose Natural Superfoods?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-bright rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Rich in Nutrients</h3>
                    <p className="text-muted-foreground">Packed with essential vitamins, minerals, proteins, and antioxidants your body needs.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-bright rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Natural Energy Boost</h3>
                    <p className="text-muted-foreground">Sustainable energy without crashes, supporting your active lifestyle naturally.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-bright rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Immune Support</h3>
                    <p className="text-muted-foreground">Strengthen your immune system with powerful natural compounds and antioxidants.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-center mb-6">Start Your Health Journey</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-primary-bright/5 rounded-lg">
                  <span className="font-medium">Daily Nutrition</span>
                  <span className="text-primary-bright font-bold">✓</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-primary-bright/5 rounded-lg">
                  <span className="font-medium">Energy Boost</span>
                  <span className="text-primary-bright font-bold">✓</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-primary-bright/5 rounded-lg">
                  <span className="font-medium">Immune Support</span>
                  <span className="text-primary-bright font-bold">✓</span>
                </div>
                <Link to="/products" className="block">
                  <Button className="w-full btn-hero mt-4">
                    Get Started Today
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Health?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have improved their health with our natural products.
          </p>
          <Link to="/products">
            <Button size="lg" className="bg-white text-primary-bright hover:bg-white/90 px-8 py-4 text-lg font-semibold">
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;