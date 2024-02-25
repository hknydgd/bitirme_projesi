

export default function Footer() {
  return (
    <footer className="py-5 shadow-inner justify-content-center">
    <div className="row">
    <div className="col-6 col-md-2 mb-3">
        
      </div>
     

     

      <div className="col-6 col-md-2 mb-3">
        <h5>Navigasyon</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Anasayfa</a></li>
          <li className="nav-item mb-2"><a href="/contact" className="nav-link p-0 text-muted">İletişim</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Hakkımızda</a></li>
        </ul>
      </div>

      <div className="col-md-5 offset-md-1 mb-3">
        <form>
          <h5>Abone olun</h5>
          <p>Yeniliklerden haberdar olmak için kayıt olun</p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <label for="newsletter1" className="visually-hidden">Email</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email"/>
            <button className="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p className="text-center">© 2024 Company, Tüm hakları saklıdır...</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
        <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
        <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
      </ul>
    </div>
  </footer>
  );
}