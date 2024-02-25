import React from 'react'
import { useParams } from 'react-router-dom'
import Burfas from '../components/Burfas'
import Hata from './Hata'
import { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import AnaKucagi from '../components/AnaKucagi'
import Wifi from '../components/Wifi'
import Busmek from '../components/Busmek'
import Genclik from '../components/Genclik'
import Hayvan from '../components/Hayvan'
import Alert from 'react-bootstrap/Alert'

//import HaritaModal from '../components/HaritaModal'
function HizmetList() {
  const { hizmetTipi } = useParams()
  const [sonuclar, setSonuclar] = useState([])
  

  useEffect(() => {
    const url = `/${hizmetTipi}.json`

    fetch(url).then(data => data.json()).then(result => setSonuclar(result))
  }, [])
  const variant = 'danger'
  return (
    <>
    
     <div className='mt-5'>
      {hizmetTipi=='hayvan_besleme_noktalari'&&<Alert key='1' variant='danger'>Bu sayfadaki konum bilgileri doğru degildir, api'den doğru koordinat gelmemektedir!</Alert>}
     </div>
      <Row xs={1} md={3} className="g-4">

        {
          sonuclar.map
            ((sonuc, index) => {

              let component;
              switch (hizmetTipi) {
                case 'burfas_tesisleri':
                  component = <Burfas sonuc={sonuc} />
                  break;
                case 'anakucagi_merkezleri':
                  component = <AnaKucagi sonuc={sonuc} />
                  break;
                case 'wifi_noktalari':
                  component = <Wifi sonuc={sonuc} />
                  break;
                case 'busmek_kurs_merkezleri':
                  component = <Busmek sonuc={sonuc} />
                  break;
                case 'genclik_merkezleri':
                  component = <Genclik sonuc={sonuc} />
                  break;
                case 'hayvan_besleme_noktalari':
                  component = <Hayvan sonuc={sonuc} />
                  break;
                default:
                  component = <Hata />
                  break;
              }

              return <Col key={index}>{component}</Col>

            }
            )
        }
      </Row>
      
    </>
  )
}

export default HizmetList
