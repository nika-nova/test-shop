import { useState, useEffect, useCallback } from 'react';
import type { IProduct, ICartItem } from '../types';

const STORAGE_KEY = 'qpick-cart';

function loadCart(): ICartItem[] {
  try {
    const saved = sessionStorage.getItem(STORAGE_KEY);
    if (!saved) return [];

    const parsed = JSON.parse(saved) as ICartItem[];
    return parsed.filter((item) => item.quantity > 0);
  } catch (error) {
    console.warn('Не удалось загрузить корзину:', error);
    return [];
  }
}

export function useCart() {
  const [items, setItems] = useState<ICartItem[]>([]);

  useEffect(() => {
    const savedItems = loadCart();
    setItems(savedItems);
  }, []);

  useEffect(() => {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addToCart = useCallback((product: IProduct) => {
    setItems((prev: ICartItem[]) => {
      const existingIndex = prev.findIndex((item) => item.id === product.id);

      if (existingIndex !== -1) {
        return prev.map((item, index) =>
          index === existingIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      const finalPrice = product.discount > 0
        ? product.price * (1 - product.discount / 100)
        : product.price;

      const roundedPrice = Math.round(finalPrice * 100) / 100;

      return [
        ...prev,
        {
          ...product,
          price: roundedPrice,
          quantity: 1,
        },
      ];
    });
  }, []);

  const removeFromCart = useCallback((id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const updateQuantity = useCallback((id: number, quantity: number) => {
    if (quantity <= 0) {
      setItems((prev) => prev.filter((item) => item.id !== id));
      return;
    }
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  }, []);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const totalPrice = items.reduce((sum, item) => {
    return sum + (item.price ?? 0) * item.quantity;
  }, 0);

  return {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    totalItems,
    totalPrice,
  };
}
