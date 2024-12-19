import { useState } from 'react';
import { cartContext } from './cartContext';

export default function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    // Agregar un producto al carrito
    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    // Obtener la cantidad total de productos en el carrito
    const getQuantity = () => {
        const qtyOnly = cart.map((prod) => prod.qty);
        const total = qtyOnly.reduce((acc, current) => acc + current, 0);
        return total;
    };

    // Obtener el precio total de los productos en el carrito
    const getTotal = () => {
        const priceOnly = cart.map((prod) => prod.qty * prod.precio);
        const total = priceOnly.reduce((acc, current) => acc + current, 0);
        return total;
    };

    // Eliminar un producto del carrito
    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    return (
        <cartContext.Provider
            value={{ cart, addToCart, getQuantity, getTotal, removeFromCart }}
        >
            {children}
        </cartContext.Provider>
    );
}
