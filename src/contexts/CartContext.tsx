import React, { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "@/data/products";

export interface CartItem {
  product: Product;
  quantity: number;
  selectedWeight?: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity?: number, weight?: string) => void;
  removeFromCart: (productId: string, weight?: string) => void;
  updateQuantity: (productId: string, quantity: number, weight?: string) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}


const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product, quantity: number = 1, weight?: string) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.product.id === product.id && item.selectedWeight === weight,
      );

      // If a variant is selected, update the product price for the cart item
      let updatedProduct = { ...product };
      if (weight && product.variants) {
        const variant = product.variants.find((v) => v.weight === weight);
        if (variant) {
          updatedProduct.price = variant.price;
          updatedProduct.name = `${product.name} (${weight})`; // ✅ Update name with weight
        }
      }

      if (existingItem) {
        return prevItems.map((item) =>
          item.product.id === product.id && item.selectedWeight === weight
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      } else {
        return [...prevItems, { product: updatedProduct, quantity, selectedWeight: weight }];
      }
    });
  };

  const removeFromCart = (productId: string, weight?: string) => {
    setItems((prevItems) =>
      prevItems.filter((item) => !(item.product.id === productId && item.selectedWeight === weight)),
    );
  };

  const updateQuantity = (productId: string, quantity: number, weight?: string) => {
    if (quantity <= 0) {
      removeFromCart(productId, weight);
      return;
    }

    setItems((prevItems) =>
      prevItems.map((item) =>
        item.product.id === productId && item.selectedWeight === weight ? { ...item, quantity } : item,
      ),
    );
  };


  const clearCart = () => {
    setItems([]);
  };

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0,
    );
  };

  const value: CartContextType = {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
