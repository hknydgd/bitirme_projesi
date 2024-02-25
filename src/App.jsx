import 'bootstrap/dist/css/bootstrap.min.css'
import 'leaflet/dist/leaflet.css'
import Anasayfa from "./pages/Anasayfa"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom' 

import Contact from './pages/Contact'
import HizmetList from './pages/HizmetList'
import Header from './components/Header'
import Hata from './pages/Hata'
import Footer from './components/Footer'
function App() {

 const resim = '/sosyalhizmetler.jpg';
  return (
   
    <>
    <div className='container' style={{backgroundColor: '#e6ffb3'}}>
    <div style={{backgroundImage: `url(${resim})`, minHeight:'200px', margin:0,padding:0}}></div>

      <Router>
        <Header/>
        <Routes>
          <Route index element={<Anasayfa />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/hizmetlist' element={<HizmetList />}>
            <Route path=':hizmetTipi' element={<HizmetList />} />
          </Route>
          <Route path='*' element={<Hata />} />
        </Routes>
        <Footer/>
      </Router>
      </div>
    </>
  )
}

export default App
