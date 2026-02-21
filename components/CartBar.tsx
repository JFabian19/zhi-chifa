import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from './CartContext';

export const CartBar: React.FC = () => {
    const { totalItems, totalPrice, setIsCartOpen } = useCart();

    if (totalItems === 0) return null;

    return (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 animate-slide-up">
            <button
                onClick={() => setIsCartOpen(true)}
                className="flex items-center gap-3 bg-chifa-red hover:bg-red-700 text-white px-6 py-3 rounded-full shadow-2xl shadow-red-900/50 transition-all duration-300 hover:scale-105 font-body"
            >
                <div className="relative">
                    <ShoppingCart size={22} />
                    <span className="absolute -top-2 -right-2 bg-chifa-gold text-chifa-black text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                        {totalItems}
                    </span>
                </div>
                <span className="font-bold text-sm">Ver pedido</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-bold">
                    S/ {totalPrice.toFixed(2)}
                </span>
            </button>
        </div>
    );
};
