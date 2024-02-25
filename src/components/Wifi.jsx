import { Card } from "react-bootstrap"
import HaritaModal from "./HaritaModal"

function Wifi({sonuc}) {
  return (
    <Card className="shadow">
    <Card.Header><HaritaModal coords={sonuc.coordinates} />  </Card.Header>
    <Card.Body>
      <blockquote className="blockquote mb-0">
        <p>
          {' '}
          {sonuc.adi}{' '}
        </p>
        </blockquote>
    </Card.Body>
  </Card>
  )
}

export default Wifi
