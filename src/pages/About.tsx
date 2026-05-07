import React from 'react';
import { Leaf, Award, Users, Target, Heart, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Sunrise Biotech
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Pioneering natural health solutions with premium spirulina and moringa products. 
            Your wellness journey begins with nature's finest superfoods.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At Sunrise Biotech, we are committed to bringing you the purest, most potent natural health products. 
                Our mission is to harness the incredible nutritional power of spirulina and moringa to support your 
                health and wellness goals naturally.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe that nature provides the best solutions for optimal health, and we're dedicated to 
                making these solutions accessible to everyone through our premium, scientifically-backed products.
              </p>
            </div>
            
            <div className="bg-gradient-card rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-bright rounded-full flex items-center justify-center mx-auto mb-4">
                    <Leaf className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">100% Natural</h3>
                  <p className="text-sm text-muted-foreground">Pure, natural ingredients</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-bright rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Premium Quality</h3>
                  <p className="text-sm text-muted-foreground">Lab tested and certified</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-bright rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Customer First</h3>
                  <p className="text-sm text-muted-foreground">Your satisfaction guaranteed</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-bright rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Results Driven</h3>
                  <p className="text-sm text-muted-foreground">Proven health benefits</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Our Story
            </h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="mb-6">
                Established in 2024 by the visionary Mr. Ajay Patel, Sunrise Biotech has quickly risen to prominence as a leading Manufacturer, Supplier, and Exporter of high-quality Spirulina Powder. Based on a foundation of innovation and excellence, our company is dedicated to delivering premium spirulina products to clients across the globe.

              </p>
              <p className="mb-6">
                At Sunrise Biotech, we specialize in the cultivation, processing, and distribution of Spirulina Powder, re-nowned for its exceptional nutritional value and health benefits. Our state-of-the-art production facilities adhere to stringent quality control measures to ensure that every batch meets the highest standards of purity and potency.

              </p>
              <p className="mb-6">
                Our commitment to sustainability and ethical practices drives our operations, from the sourcing of raw materials to the final delivery of our products. We leverage advanced technology and rigorous testing protocols to guarantee that our spirulina is free from contaminants and retains its maximum nutritional efficacy.

              </p>
               <p className="mb-6">
                Serving a diverse clientele, we pride ourselves on our ability to cater to various market needs, offering tailored solutions and exceptional customer service. Our global network enables us to efficiently supply Spirulica Powder to numerous countries, supporting health and wellness worldwide.

              </p>
               <p className="mb-6">
                Sunrise Biotech remains dedicated to advancing the benefits of spirulina through continuous research and development. We are committed to fostering long-term partnerships and contributing positively to the global health landscape.

              </p>
               <p className="mb-6">
                For unparalleled quality and reliability in Spirulina Powder, Sunrise Biotech stands as your trusted part-ner in health and wellness
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Sunrise Biotech?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We go above and beyond to ensure you receive the finest natural health products.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-primary-bright/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-10 w-10 text-primary-bright" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Health First Philosophy</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every product is developed with your health and wellness as our top priority. We never compromise on quality or purity.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-primary-bright/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-10 w-10 text-primary-bright" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Sustainable Practices</h3>
              <p className="text-muted-foreground leading-relaxed">
                We work with local farmers and use eco-friendly processes to protect our environment for future generations.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-primary-bright/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-primary-bright" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Scientific Backing</h3>
              <p className="text-muted-foreground leading-relaxed">
                All our products are backed by scientific research and undergo rigorous testing to ensure maximum efficacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">5000+</div>
              <div className="text-white/80">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">6</div>
              <div className="text-white/80">Premium Products</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
              <div className="text-white/80">Pure & Natural</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">6+</div>
              <div className="text-white/80">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
              <h3 className="text-xl font-semibold mb-4 text-primary">Quality Excellence</h3>
              <p className="text-muted-foreground">
                We maintain the highest standards in sourcing, processing, and packaging to deliver superior products.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
              <h3 className="text-xl font-semibold mb-4 text-primary">Transparency</h3>
              <p className="text-muted-foreground">
                Complete transparency in our processes, ingredients, and sourcing ensures you know exactly what you're consuming.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
              <h3 className="text-xl font-semibold mb-4 text-primary">Customer Care</h3>
              <p className="text-muted-foreground">
                Your health journey is our priority. We provide ongoing support and guidance for optimal results.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
              <h3 className="text-xl font-semibold mb-4 text-primary">Innovation</h3>
              <p className="text-muted-foreground">
                Continuous research and development to improve our products and discover new natural health solutions.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
              <h3 className="text-xl font-semibold mb-4 text-primary">Sustainability</h3>
              <p className="text-muted-foreground">
                Committed to environmental responsibility through sustainable farming and eco-friendly practices.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
              <h3 className="text-xl font-semibold mb-4 text-primary">Integrity</h3>
              <p className="text-muted-foreground">
                Honest business practices, ethical sourcing, and authentic products you can trust completely.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;