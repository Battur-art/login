export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-200 p-8 mt-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-xl font-bold mb-2 text-yellow-400">MyShop</h2>
          <p className="text-sm font-bold text-gray-300">© {new Date().getFullYear()} MyShop. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  