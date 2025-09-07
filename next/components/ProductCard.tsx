import Link from "next/link"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

interface Props {
  id: number
  title: string
  image: string
  description: string
  price: number
}

export default function ProductCard({
  id,
  title,
  image,
  description,
  price,
}: Props) {
  return (
    <Card
      className='shadow h-100 border-0'
      style={{
        borderRadius: "16px",
        overflow: "hidden",
        background: "linear-gradient(135deg, #a1c4fd, #fffff)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      <Card.Img
        variant='top'
        src={image}
        style={{ height: "220px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title className='fw-bold'>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <p className='fw-bold text-success'>${price}</p>
        <Link href={`/products/${id}`}>
          <Button
            variant='dark'
            style={{
              background: "linear-gradient(135deg, #000000, #000000, #00000)",
              border: "none",
            }}
          >
            Дэлгэрэнгүй
          </Button>
        </Link>
      </Card.Body>
    </Card>
  )
}
