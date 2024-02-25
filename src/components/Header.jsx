import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  const resim = 'sosyalhizmetler.jpg';
  return (<>
   
    <Navbar className="bg-info" > 
      <Container>
        <Navbar.Brand href="/">Anasayfa{' '}
        
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <Link to='/contact'>İletişim</Link>
          </Navbar.Text>
        </Navbar.Collapse>
        
      </Container>
      <Navbar.Text>
          
          </Navbar.Text>
    </Navbar></>
  )
}

export default Header
