import { Card } from "react-bootstrap"
import { ListGroup } from "react-bootstrap"
import HaritaModal from "./HaritaModal"
function Burfas({sonuc}) {
  return (<>
    <Card className="shadow">
    <Card.Img variant="top" src={sonuc.image} />
    <Card.Body>
      <Card.Title>{sonuc.baslik}</Card.Title>
      <Card.Text>
        {sonuc.adres}
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>Tel: {sonuc.telefon}</ListGroup.Item>
      <ListGroup.Item>E-Posta: {sonuc.eposta}</ListGroup.Item>
      <ListGroup.Item>WebSite: {sonuc.link}</ListGroup.Item>
    </ListGroup>
    <Card.Body>
      <Card.Link href="#"><HaritaModal coords={sonuc.coordinates} /></Card.Link>
    </Card.Body>
  </Card>
  </>
  )
}

export default Burfas
