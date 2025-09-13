"use client";
import { useParams } from "next/navigation";
import { useCart } from "@/context/CartContext";

const products = [
  { id: 1, title: "iPhone 15", description: "Latest Apple phone", price: 999, image: "https://picsum.photos/400?1" },
  { id: 2, title: "MacBook Air", description: "Light and powerful", price: 1299, image: "https://picsum.photos/400?2" },
  { id: 3, title: "AirPods Pro", description: "Noise cancelling", price: 249, image: "https://picsum.photos/400?3" },
  // … бусад product
];

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const { cart, addToCart, removeFromCart } = useCart();
  const inCart = product && cart.find((item) => item.id === product.id);

  if (!product) return <p className="text-center mt-20 text-gray-500">Product not found</p>;

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 mt-6">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-80 object-cover rounded-xl"
      />
      <h1 className="text-3xl font-bold mt-6">{product.title}</h1>
      <p className="mt-3 text-gray-600">{product.description}</p>
      <p className="mt-2 text-2xl font-semibold text-purple-600">${product.price}</p>

      <button
        onClick={() =>
          inCart ? removeFromCart(product.id) : addToCart(product)
        }
        className={`mt-6 w-full py-3 rounded-xl font-medium text-white text-lg transition
          ${inCart ? "bg-red-500 hover:bg-red-600" : "bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90"}
        `}
      >
        {inCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>
  );
}