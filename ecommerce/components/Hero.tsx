import Link from "next/link";

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-indigo-900 to-purple-800 text-white py-20 px-8 rounded-b-3xl mb-12">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <h1 className="text-5xl font-extrabold mb-4">Welcome to MyShop</h1>
        <p className="text-lg font-bold mb-6">Premium gadgets & electronics delivered to your doorstep.</p>
        <Link href="/" className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold rounded-lg hover:opacity-90 transition">
          Shop Now
        </Link>
      </div>
      <img src="/images/macbook.webp" alt="Hero" className="rounded-xl shadow-lg w-2xs"/>
    </div>
  </div>
  
  );
}