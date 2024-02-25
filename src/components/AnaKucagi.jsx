import { Card } from "react-bootstrap"
import HaritaModal from "./HaritaModal"

function AnaKucagi({sonuc}) {
  return (
    <Card className="text-center shadow">
      <Card.Header>{sonuc.adi}</Card.Header>
      <Card.Body>
        <Card.Title>ADRES</Card.Title>
        <Card.Text>
          {sonuc.adres}<br/>
          <HaritaModal coords={sonuc.coordinates} />
        </Card.Text>
        
      </Card.Body>
      <Card.Footer className="text-muted">Tel: {sonuc.telefon ? sonuc.telefon : ' bulunamadı'}</Card.Footer>
    </Card>
  )
}

export default AnaKucagi
