"use client";
import Carousel from "react-bootstrap/Carousel";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";

const products = [
  {
    id: 1,
    title: "iPhone 15 Pro",
    image: "/images/ip15pro.jpg",
    description: "Сүүлийн үеийн iPhone, Titanium frame.",
    fullDescription: "iPhone 15 Pro – A17 Pro чип, 120Hz ProMotion display, Pro Max камертай, маш хүчирхэг гарт барихад эвтэйхэн.",
    price: 2500,
  },
  {
    id: 2,
    title: "MacBook Pro 16”",
    image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp16-spacegray-select-202110?wid=4000&hei=3072&fmt=jpeg&qlt=90&.v=1632799176000",
    description: "Apple M2 Max чиптэй хүчирхэг зөөврийн компьютер.",
    fullDescription: "16-inch MacBook Pro – M2 Max чип, 32-core GPU, Retina Display, ProMotion 120Hz, 22 цагийн батерей.",
    price: 4500,
  },
  {
    id: 3,
    title: "AirPods Pro 2",
    image: "/images/air2.jpeg",
    description: "Идэвхтэй дуу чимээ даралттай, ANC.",
    fullDescription: "AirPods Pro 2 – Adaptive Transparency, Spatial Audio, 6 цаг хүртэлх цэнэг, MagSafe case.",
    price: 350,
  },
];

export default function HomePage() {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #fffff, #fffff)",
        minHeight: "100vh",
      }}
    >
      {/* Carousel */}
      <Carousel>
        {products.map((product) => (
          <Carousel.Item key={product.id}>
            <img
              className="d-block w-100"
              src={product.image}
              alt={product.title}
              style={{ maxHeight: "500px", objectFit: "cover" }}
            />
            <Carousel.Caption
              style={{
                background: "rgba(0,0,0,0.4)",
                borderRadius: "12px",
                padding: "10px 20px",
              }}
            >
              <h3 className="fw-bold text-white">{product.title}</h3>
              <p className="text-light">{product.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Cards */}
      <div className="container my-5">
        <div className="row">
          {products.map((p) => (
            <div key={p.id} className="col-md-4 mb-4">
              <ProductCard
                id={p.id}
                title={p.title}
                image={p.image}
                description={p.description}
                price={p.price}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}