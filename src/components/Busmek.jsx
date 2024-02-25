import { Card } from "react-bootstrap"
import HaritaModal from "./HaritaModal"

function Busmek({sonuc}) {
  return (
    <Card border="success" className="shadow">
        <Card.Header>{sonuc.ILCE}</Card.Header>
        <Card.Body>
          <Card.Title>{sonuc.MAHALLE}</Card.Title>
          <Card.Text>
            {sonuc.ADI}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted"><HaritaModal coords={sonuc.coordinates} /></Card.Footer>
    </Card>
      
  )
}

export default Busmek
