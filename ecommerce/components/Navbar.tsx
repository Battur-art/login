"use client";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white backdrop-blur-md shadow sticky top-0 z-5">
    <Link href="/" className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-900 to-purple-800">
      E-Commerce
    </Link>
    <div className="flex gap-8 font-black items-center">
      <Link href="/" className="hover:text-black transition">Products</Link>
      <Link href="/cart" className="relative hover:text-purple-800 transition">
        Cart
        {cart.length > 0 && (
          <span className="absolute -top-2 -right-3 bg-yellow-500 text-xs px-2 py-1 rounded-full text-black font-bold">
            {cart.length}
          </span>
        )}
      </Link>
    </div>
  </nav>
  
  );
}
