"use client";
import ProductCard from "@/components/ProductCard";
import Hero from "@/components/Hero";
import { Product } from "@/context/CartContext";

const products: Product[] = [
  { id: 1, title: "iPhone 15 Pro", description: "Flagship Apple phone", price: 1800, image: "https://picsum.photos/400?1" },
  { id: 2, title: "MacBook Air M2", description: "Lightweight powerful laptop", price: 2200, image: "https://picsum.photos/400?2" },
  { id: 3, title: "AirPods Pro 2", description: "Wireless earbuds", price: 350, image: "https://picsum.photos/400?3" },
  { id: 4, title: "Apple Watch Ultra", description: "Smartwatch", price: 900, image: "https://picsum.photos/400?4" },
  { id: 5, title: "iPad Pro", description: "Powerful tablet", price: 999, image: "https://picsum.photos/400?5" },
  { id: 6, title: "HomePod", description: "Smart speaker with Siri", price: 299, image: "https://picsum.photos/400?6" },
  { id: 7, title: "Magic Keyboard", description: "Wireless keyboard", price: 129, image: "https://picsum.photos/400?7" },
  { id: 8, title: "Magic Mouse", description: "Wireless mouse", price: 99, image: "https://picsum.photos/400?8" },
];

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-extrabold mb-8 text-black">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product}/>
          ))}
        </div>
      </div>
    </div>
  );
}