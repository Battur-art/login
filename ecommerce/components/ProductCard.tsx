"use client";
import { Product, useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const { cart, addToCart, removeFromCart } = useCart();
  const inCart = cart.find(item => item.id === product.id);

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-4 flex flex-col">
    <Image src={product.image} alt={product.title} width={300} height={200} className="rounded-xl object-cover"/>
    <h2 className="text-xl font-extrabold mt-3 text-gray-900">{product.title}</h2>
    <p className="text-gray-700 font-bold mt-1 line-clamp-2">{product.description}</p>
    <p className="font-extrabold text-yellow-500 mt-2 text-lg">${product.price}</p>
    <div className="flex justify-between items-center mt-4">
      <Link href={`/products/${product.id}`} className="text-indigo-900 font-bold hover:underline">View</Link>
      <button
        onClick={() => inCart ? removeFromCart(product.id) : addToCart(product)}
        className={`px-4 py-2 rounded-xl text-white font-bold transition
          ${inCart ? "bg-red-600 hover:bg-red-700" : "bg-gradient-to-r from-yellow-400 to-yellow-500 hover:opacity-90"}`}
      >
        {inCart ? "Remove" : "Add"}
      </button>
    </div>
  </div>
  
  
  );
}