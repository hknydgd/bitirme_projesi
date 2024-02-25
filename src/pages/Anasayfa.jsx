import { useState, useEffect } from "react"
import HizmetCard from "../components/HizmetCard"
import { Col, Row } from "react-bootstrap"
function Anasayfa() {
    const [hizmetler,setHizmetler] = useState([])
    useEffect(()=>{
        const url = 'hizmetTipiList.json'
        fetch(url).then(data=>data.json()).then(result=>setHizmetler(result))
    },[])
  return (
    <>
    <div className='mt-5'></div>
      <Row xs={1} md={3} className="g-4">
      
      {
      hizmetler.map((hizmet,index)=>
      <Col key={index}><HizmetCard hizmet={hizmet} /></Col>)
      }
      </Row>
    </>
  )
}

export default Anasayfa
