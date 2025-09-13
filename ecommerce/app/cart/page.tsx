"use client";
import { useCart, Product } from "@/context/CartContext";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  // Favorites IDs stored in localStorage
  const [favorites, setFavorites] = useState<number[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("favorites");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  // Sync favorites with localStorage
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-extrabold mb-8 text-gray-900">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-700 font-bold text-center mt-20">Your cart is empty</p>
      ) : (
        <div className="space-y-6">
          {cart.map((product: Product) => (
            <div
              key={product.id}
              className="flex flex-col sm:flex-row items-center gap-6 bg-white shadow-2xl p-6 rounded-3xl transition hover:shadow-3xl"
            >
              <div className="relative w-full sm:w-32 h-32 sm:h-32 flex-shrink-0 rounded-xl overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-xl"
                />
              </div>

              <div className="flex-1">
                <h2 className="text-2xl font-extrabold text-gray-900 flex items-center justify-between">
                  {product.title}
                  {/* Favorite star */}
                  <span
                    onClick={() => toggleFavorite(product.id)}
                    className={`ml-3 cursor-pointer text-2xl transition ${
                      favorites.includes(product.id)
                        ? "text-yellow-400"
                        : "text-gray-300 hover:text-yellow-400"
                    }`}
                  >
                    ★
                  </span>
                </h2>

                {/* Preview description */}
                <p className="text-gray-700 font-bold mt-2 line-clamp-2">
                  {product.description}
                </p>

                <p className="text-yellow-500 font-bold text-xl mt-2">${product.price}</p>
              </div>

              <button
                onClick={() => removeFromCart(product.id)}
                className="px-6 py-3 rounded-2xl font-bold text-white text-lg bg-red-600 hover:bg-red-700 transition"
              >
                Remove
              </button>
            </div>
          ))}

          <button
            onClick={clearCart}
            className="mt-8 w-full py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-extrabold rounded-3xl text-lg hover:opacity-90 transition"
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
}
