import React from 'react';
import { X, Plus, Minus, Trash2, Send } from 'lucide-react';
import { useCart } from './CartContext';

// WhatsApp icon for the send button
const WhatsAppSmall = ({ size = 20 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

export const CartModal: React.FC = () => {
    const { items, isCartOpen, setIsCartOpen, updateQuantity, removeItem, clearCart, totalPrice } = useCart();

    if (!isCartOpen) return null;

    const formatPrice = (price: string | number) => {
        if (typeof price === 'number') return price;
        return parseFloat(price) || 0;
    };

    const sendToWhatsApp = () => {
        const whatsappNumber = '51950571654';
        let message = 'Hola, me gustaría hacer el siguiente pedido:\n\n';

        items.forEach(ci => {
            const price = formatPrice(ci.item.precio);
            const subtotal = price * ci.quantity;
            message += `• ${ci.quantity}x ${ci.item.nombre}`;
            if (price > 0) {
                message += ` - S/ ${subtotal.toFixed(2)}`;
            }
            message += '\n';
        });

        message += `\n*Total: S/ ${totalPrice.toFixed(2)}*`;
        message += '\n\n¡Gracias!';

        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
        clearCart();
    };

    return (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-end sm:items-center justify-center backdrop-blur-sm p-4">
            <div className="bg-chifa-card w-full max-w-md max-h-[85vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-700">

                {/* Header */}
                <div className="p-4 border-b border-gray-700 flex items-center justify-between">
                    <h3 className="text-white font-body font-bold text-lg">Tu pedido</h3>
                    <div className="flex items-center gap-2">
                        {items.length > 0 && (
                            <button
                                onClick={clearCart}
                                className="p-2 text-gray-500 hover:text-red-400 transition-colors"
                                title="Vaciar carrito"
                            >
                                <Trash2 size={18} />
                            </button>
                        )}
                        <button
                            onClick={() => setIsCartOpen(false)}
                            className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                        >
                            <X size={20} className="text-gray-400" />
                        </button>
                    </div>
                </div>

                {/* Items list */}
                <div className="overflow-y-auto flex-1 p-4">
                    {items.length === 0 ? (
                        <div className="text-center text-gray-500 py-10 font-body">
                            Tu carrito está vacío
                        </div>
                    ) : (
                        <div className="space-y-3">
                            {items.map((ci, idx) => {
                                const price = formatPrice(ci.item.precio);
                                const subtotal = price * ci.quantity;
                                return (
                                    <div key={idx} className="bg-chifa-black rounded-xl p-3 border border-gray-800">
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="text-white font-body font-bold text-sm flex-1 pr-2">
                                                {ci.item.nombre}
                                            </h4>
                                            <button
                                                onClick={() => removeItem(ci.item.nombre)}
                                                className="text-gray-600 hover:text-red-400 transition-colors flex-shrink-0"
                                            >
                                                <X size={16} />
                                            </button>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            {/* Quantity controls */}
                                            <div className="flex items-center gap-2">
                                                <button
                                                    onClick={() => updateQuantity(ci.item.nombre, ci.quantity - 1)}
                                                    className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 text-white flex items-center justify-center transition-colors border border-gray-700"
                                                >
                                                    <Minus size={14} />
                                                </button>
                                                <span className="text-white font-body font-bold text-sm w-6 text-center">
                                                    {ci.quantity}
                                                </span>
                                                <button
                                                    onClick={() => updateQuantity(ci.item.nombre, ci.quantity + 1)}
                                                    className="w-8 h-8 rounded-full bg-chifa-red hover:bg-red-700 text-white flex items-center justify-center transition-colors"
                                                >
                                                    <Plus size={14} />
                                                </button>
                                            </div>
                                            {/* Price */}
                                            {price > 0 && (
                                                <span className="text-chifa-gold font-hand font-bold text-lg">
                                                    S/ {subtotal.toFixed(2)}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>

                {/* Footer with total and send */}
                {items.length > 0 && (
                    <div className="bg-chifa-card p-4 border-t border-gray-800 space-y-3">
                        <div className="bg-chifa-red/10 border border-chifa-red/30 px-3 py-2 rounded-lg mb-2 flex justify-center">
                            <p className="text-chifa-gold text-xs font-body font-medium flex items-center gap-1.5">
                                <span className="text-chifa-red text-sm">*</span>
                                Los precios no incluyen costo de delivery
                            </p>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-400 font-body font-bold text-sm">Total</span>
                            <span className="text-chifa-gold font-hand font-bold text-2xl">
                                S/ {totalPrice.toFixed(2)}
                            </span>
                        </div>
                        <button
                            onClick={sendToWhatsApp}
                            className="w-full flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-body font-bold text-base transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-green-900/30"
                        >
                            <WhatsAppSmall size={22} />
                            Enviar pedido por WhatsApp
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
