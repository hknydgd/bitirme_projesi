

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
export const HaritaModal = ({coords}) => {
    const [show, setShow] = useState(false);
    const position = [Number(coords[0]),Number(coords[1])]
    const lat = Number(coords[0])
    const lang = Number(coords[1])
  return (
    <>
      <Button variant="success" size="sm" onClick={() => setShow(true)}>
        konum
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
     
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div id="MapModal" style={{height:'400px'}}>
          <MapContainer center={coords} zoom={16} scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={coords}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
};




export default HaritaModal
