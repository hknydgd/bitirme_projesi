import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"

function HizmetCard({hizmet}) {
  const link = `/hizmetlist/${hizmet.tipAdi}`
  return (
    <Link to = {link} >
    <Card className="shadow text-center">
      <Card.Img variant="top" src={hizmet.tipImage}/>
    <Card.Title>{hizmet.baslik}</Card.Title>
    </Card>
    </Link>
  )
}

export default HizmetCard
