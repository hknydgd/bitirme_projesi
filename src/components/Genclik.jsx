import { Card } from "react-bootstrap"
import { ListGroup } from "react-bootstrap"
import HaritaModal from "./HaritaModal"

function Genclik({sonuc}) {
  return (
    <Card className="shadow">
      <Card.Body>
        <Card.Title>{sonuc.ADI}</Card.Title>
        <Card.Text>
          {sonuc.ADRES}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Çalışma Saatleri: {sonuc.CALISMA_SA}</ListGroup.Item>
        <ListGroup.Item>Alan: {sonuc.ALAN} m^2</ListGroup.Item>
        <ListGroup.Item>İnternet: {sonuc.INTERNET_A}</ListGroup.Item>
        <ListGroup.Item>E-SPOR: {sonuc.E_SPOR}</ListGroup.Item>
        <ListGroup.Item>Kütüphane: {sonuc.KUTUPHANE}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#"><HaritaModal coords={sonuc.coordinates} /></Card.Link>
      </Card.Body>
    </Card>
  )
}

export default Genclik
