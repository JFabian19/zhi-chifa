import React, { createContext, useContext, useState, useCallback } from 'react';
import { MenuItem } from '../types';

export interface CartItem {
    item: MenuItem;
    quantity: number;
}

interface CartContextType {
    items: CartItem[];
    addItem: (item: MenuItem) => void;
    removeItem: (nombre: string) => void;
    updateQuantity: (nombre: string, quantity: number) => void;
    clearCart: () => void;
    totalItems: number;
    totalPrice: number;
    isCartOpen: boolean;
    setIsCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error('useCart must be used within CartProvider');
    return context;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [items, setItems] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const addItem = useCallback((item: MenuItem) => {
        setItems(prev => {
            const existing = prev.find(ci => ci.item.nombre === item.nombre);
            if (existing) {
                return prev.map(ci =>
                    ci.item.nombre === item.nombre
                        ? { ...ci, quantity: ci.quantity + 1 }
                        : ci
                );
            }
            return [...prev, { item, quantity: 1 }];
        });
    }, []);

    const removeItem = useCallback((nombre: string) => {
        setItems(prev => prev.filter(ci => ci.item.nombre !== nombre));
    }, []);

    const updateQuantity = useCallback((nombre: string, quantity: number) => {
        if (quantity <= 0) {
            setItems(prev => prev.filter(ci => ci.item.nombre !== nombre));
        } else {
            setItems(prev =>
                prev.map(ci =>
                    ci.item.nombre === nombre ? { ...ci, quantity } : ci
                )
            );
        }
    }, []);

    const clearCart = useCallback(() => {
        setItems([]);
        setIsCartOpen(false);
    }, []);

    const totalItems = items.reduce((sum, ci) => sum + ci.quantity, 0);

    const totalPrice = items.reduce((sum, ci) => {
        const price = typeof ci.item.precio === 'number' ? ci.item.precio : parseFloat(ci.item.precio);
        if (isNaN(price) || price === 0) return sum;
        return sum + price * ci.quantity;
    }, 0);

    return (
        <CartContext.Provider value={{
            items,
            addItem,
            removeItem,
            updateQuantity,
            clearCart,
            totalItems,
            totalPrice,
            isCartOpen,
            setIsCartOpen,
        }}>
            {children}
        </CartContext.Provider>
    );
};
