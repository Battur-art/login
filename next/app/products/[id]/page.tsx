import { notFound } from "next/navigation"
import Image from "next/image"
const products = [
  {
    id: 1,
    title: "iPhone 15 Pro",
    image: "/images/ip15pro.jpg",
    fullDescription:
      "iPhone 15 Pro – A17 Pro чип, 120Hz ProMotion display, Pro Max камертай, маш хүчирхэг гарт барихад эвтэйхэн.",
    price: 2500,
  },
  {
    id: 2,
    title: "MacBook Pro 16”",
    image:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp16-spacegray-select-202110?wid=4000&hei=3072&fmt=jpeg&qlt=90&.v=1632799176000",
    fullDescription:
      "16-inch MacBook Pro – M2 Max чип, 32-core GPU, Retina Display, ProMotion 120Hz, 22 цагийн батерей.",
    price: 4500,
  },
  {
    id: 3,
    title: "AirPods Pro 2",
    image: "/images/air2.jpeg   ",
    fullDescription:
      "AirPods Pro 2 – Adaptive Transparency, Spatial Audio, 6 цаг хүртэлх цэнэг, MagSafe case.",
    price: 350,
  },
]
export default function ProductDetails({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === parseInt(params.id))

  if (!product) return notFound()

  return (
    <div
      className='d-flex justify-content-center align-items-center bg-white text-black'
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #fffff, #fffff)",
      }}
    >
      <div
        className='p-4 rounded shadow-lg'
        style={{
          maxWidth: "700px",
          background: "rgba(255,255,255,0.86)",
          backdropFilter: "blur(6px)",
        }}
      >
        <h1 className='fw-bold mb-3'>{product.title}</h1>
        <img
          src={product.image}
          alt={product.title}
          className='img-fluid rounded shadow mb-4'
          style={{ maxHeight: "400px", objectFit: "cover" }}
        />
        <p className='lead'>{product.fullDescription}</p>
        <h3 className='text-success fw-bold'>Үнэ: ${product.price}</h3>
      </div>
    </div>
  )
}
