import { Card } from "react-bootstrap"
import { ListGroup } from "react-bootstrap"
import HaritaModal from "./HaritaModal"

function Hayvan({ sonuc}) {
    
    return (
        <>
        
            <Card className="shadow">
                <Card.Header>{sonuc.ILCE} - {sonuc.MAHALLE}  <HaritaModal coords={sonuc.coordinates} /></Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>Hayvan Türü: {sonuc.HAYVANTURU}</ListGroup.Item>
                </ListGroup>
            </Card>
            
        </>
    )
}

export default Hayvan
