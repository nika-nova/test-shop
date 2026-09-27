import { createContext, useContext } from 'react';
import { useCart } from '../hooks/useCart';

type CartReturn = ReturnType<typeof useCart>;

export const CartContext = createContext<CartReturn | null>(null);

export function useCartContext(): CartReturn {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error('useCartContext must be used within CartContext.Provider');
  }
  return ctx;
}
