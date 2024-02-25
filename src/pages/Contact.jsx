import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Contact() {
  return (
    <Form className='mt-5'>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Email
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="email" placeholder="Email" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
         İSİM: 
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" placeholder="Adınız!" />
        </Col>
        <Form.Label column sm={2}>
         SOYİSİM: 
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" placeholder="Soy Adınız!" />
        </Col>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Konu</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <fieldset>
        <Form.Group as={Row} className="mb-3">
          <Form.Label as="legend" column sm={2}>
            Cinsiyet
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="ERKEK"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="KADIN"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            
          </Col>
        </Form.Group>
      </fieldset>
      

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">Gönder</Button>
        </Col>
      </Form.Group>
    </Form>
  );
}

export default Contact;





