import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Heart, Star, Leaf, Eye, X } from 'lucide-react';
import { Product } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedWeight, setSelectedWeight] = useState<string>(
    product.variants ? product.variants[0].weight : ""
  );

  const currentVariant = product.variants?.find(v => v.weight === selectedWeight);
  const currentPrice = currentVariant?.price || product.price;
  const currentDosage = currentVariant?.dosage || product.dosage;
  const currentSafetyInfo = currentVariant?.safetyInfo || product.safetyInfo;
  const currentStorage = currentVariant?.storage || product.storage;
  
  const allImages = currentVariant?.images || product.images || [currentVariant?.image || product.image];
  const [selectedImage, setSelectedImage] = useState(allImages[0]);

  // Reset selected image when variant or modal changes
  React.useEffect(() => {
    setSelectedImage(allImages[0]);
  }, [selectedWeight, isOpen]);

  const handleAddToCart = (e: React.MouseEvent, fromModal: boolean = false) => {
    e.stopPropagation();
    e.preventDefault();
    if (product.variants && !fromModal) {
      setIsOpen(true);
      return;
    }
    addToCart(product, 1, selectedWeight || undefined);
    toast({
      title: "Added to Cart",
      description: `${product.name} ${selectedWeight ? `(${selectedWeight})` : ""} has been added to your cart.`,
    });
  };

  const handleBuyNow = (e: React.MouseEvent, fromModal: boolean = false) => {
    e.stopPropagation();
    e.preventDefault();
    if (product.variants && !fromModal) {
      setIsOpen(true);
      return;
    }
    addToCart(product, 1, selectedWeight || undefined);
    navigate('/checkout');
  };


  return (
    <>
      <div 
        className="product-card group hover-scale cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <div className="relative overflow-hidden rounded-t-xl bg-gradient-card h-48">
          <img
            src={product.image}
            alt={product.name}
            className={`w-full h-full ${['2', '4', '6'].includes(product.id) ? 'object-contain' : 'object-cover'} group-hover:scale-110 transition-transform duration-500`}
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/placeholder.svg';
            }}
          />
          <div className="absolute top-3 left-3">
            <Badge variant="secondary" className="bg-primary-bright text-white">
              <Leaf className="h-3 w-3 mr-1" />
              Pure
            </Badge>
          </div>
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button variant="secondary" size="sm" className="bg-white/90 hover:bg-white text-primary font-medium">
              <Eye className="h-4 w-4 mr-2" />
              Quick View
            </Button>
          </div>
          <button 
            className="absolute top-3 right-3 p-2 bg-white/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
            onClick={(e) => {
              e.stopPropagation();
              // Wishlist logic could go here
            }}
          >
            <Heart className="h-4 w-4 text-muted-foreground hover:text-red-500 transition-colors" />
          </button>
        </div>

        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-primary-bright bg-primary-bright/10 px-2 py-1 rounded">
              {product.category}
            </span>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="text-sm text-muted-foreground">4.8</span>
            </div>
          </div>

          <h3 className="font-semibold text-lg text-foreground mb-1 group-hover:text-primary-bright transition-colors">
            {product.name}
          </h3>

          <div className="text-xl font-bold text-primary-bright mb-2">
            {product.variants 
              ? `From ₹${Math.min(...product.variants.map(v => v.price)).toLocaleString('en-IN')}`
              : `₹${product.price.toLocaleString('en-IN')}`
            }
          </div>

          <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
            {product.description}
          </p>

          <div className="flex flex-wrap gap-1 mb-4">
            {product.benefits.slice(0, 2).map((benefit, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {benefit}
              </Badge>
            ))}
          </div>
        </div>

        <div className="p-4 pt-0 space-y-2">
          <Button 
            onClick={handleBuyNow}
            className="w-full btn-hero text-sm font-medium"
          >
            Buy Now
          </Button>

          <Button 
            variant="outline" 
            onClick={handleAddToCart}
            className="w-full"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[700px] p-0 overflow-hidden bg-white border-none shadow-2xl rounded-2xl">
          <DialogHeader className="sr-only">
            <DialogTitle>{product.name}{selectedWeight ? ` (${selectedWeight})` : ""}</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col md:flex-row h-full">
            <div className="md:w-1/2 p-4 md:p-6 bg-muted/30 flex flex-col gap-4">
              <div className="aspect-square rounded-xl overflow-hidden bg-white shadow-inner">
                <img
                  src={selectedImage}
                  alt={product.name}
                  className={`w-full h-full ${['2', '4', '6'].includes(product.id) ? 'object-contain' : 'object-cover'} transition-all duration-300`}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/placeholder.svg';
                  }}
                />
              </div>
              
              {/* Thumbnail Gallery */}
              {allImages.length > 1 && (
                <div className="flex flex-wrap gap-2">
                  {allImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(img)}
                      className={`w-14 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImage === img 
                          ? 'border-primary-bright ring-2 ring-primary-bright/20' 
                          : 'border-transparent hover:border-primary-bright/50'
                      }`}
                    >
                      <img src={img} alt={`${product.name} ${idx + 1}`} className={`w-full h-full ${['2', '4', '6'].includes(product.id) ? 'object-contain' : 'object-cover'}`} />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="md:w-1/2 p-6 flex flex-col max-h-[80vh] overflow-y-auto">
              <div className="flex justify-between items-start mb-2">
                <Badge variant="outline" className="text-primary-bright border-primary-bright/20 bg-primary-bright/5">
                  {product.category}
                </Badge>
                {product.fssai && (
                  <Badge variant="secondary" className="text-[10px] bg-muted opacity-80">
                    FSSAI: {product.fssai}
                  </Badge>
                )}
              </div>
              
              <h2 className="text-2xl font-bold text-foreground mb-2">{product.name}{selectedWeight ? ` (${selectedWeight})` : ""}</h2>
              
              <div className="text-3xl font-bold text-primary-bright mb-4">
                ₹{currentPrice.toLocaleString('en-IN')}
              </div>
              
              <div className="space-y-6 mb-6">
                {product.variants && (
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">Select Size:</h4>
                    <div className="flex gap-3">
                      {product.variants.map((v) => (
                        <Button
                          key={v.weight}
                          variant={selectedWeight === v.weight ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedWeight(v.weight)}
                          className={`px-6 py-2 h-auto ${
                            selectedWeight === v.weight 
                              ? "bg-primary-bright text-white" 
                              : "hover:bg-primary-bright/10"
                          }`}
                        >
                          {v.weight}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Description:</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {product.ingredients && (
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-1">Ingredients:</h4>
                    <p className="text-muted-foreground text-sm">{product.ingredients}</p>
                  </div>
                )}

                {currentDosage && (
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-1">Dosage & Directions:</h4>
                    <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1 text-primary-bright/80 font-medium">
                      {currentDosage.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Key Benefits:</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.benefits.map((benefit, index) => (
                      <Badge key={index} variant="secondary" className="text-xs bg-muted text-muted-foreground">
                        {benefit}
                      </Badge>
                    ))}
                  </div>
                </div>

                {currentSafetyInfo && (
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-1">Safety Information:</h4>
                    <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                      {currentSafetyInfo.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {currentStorage && (
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-1">Storage:</h4>
                    <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                      {currentStorage.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {currentVariant?.specifications && (
                  <div className="bg-muted/50 rounded-lg p-4 mt-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Product Specifications:</h4>
                    <div className="grid grid-cols-2 gap-y-2 text-xs">
                      {Object.entries(currentVariant.specifications).map(([key, value]) => (
                        <React.Fragment key={key}>
                          <span className="text-muted-foreground font-medium">{key}:</span>
                          <span className="text-foreground font-semibold">{value}</span>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-3 mt-auto pt-4 border-t border-border">
                <Button 
                  onClick={(e) => {
                    handleBuyNow(e, true);
                    setIsOpen(false);
                  }}
                  className="w-full btn-hero"
                >
                  Buy Now
                </Button>
                <Button 
                  variant="outline" 
                  onClick={(e) => {
                    handleAddToCart(e, true);
                    setIsOpen(false);
                  }}
                  className="w-full"
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </div>

            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductCard;


