import React from 'react'



import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';




function Home() {
  

  return (
    <>
      <MDBCarousel showControls showIndicators>
        <MDBCarouselItem
          className='w-100 d-block border-radius: 10px'
          itemId={1}
          src='https://img.freepik.com/premium-photo/electronic-devices-composition_23-2147791607.jpg?w=740'
          alt='...'
        />
        <MDBCarouselItem
          className='w-100 d-block border-radius: 10px'
          itemId={2}
          src='https://img.freepik.com/free-photo/shop-clothing-clothes-shop-hanger-modern-shop-boutique_1150-8886.jpg?w=740&t=st=1663077740~exp=1663078340~hmac=da65a3ed0a4aadf7fa94070786b4b75952ccab597694e2d54dc8ac0a50b57214'
          alt='...'
        />

        <MDBCarouselItem
          className='w-100 d-block border-radius: 10px'
          itemId={3}
          src="https://media.istockphoto.com/photos/sexy-and-fashionable-set-of-glamour-black-and-white-accessories-for-picture-id839977436?k=20&m=839977436&s=612x612&w=0&h=tZNCrPfjhY-FQIqcTJLNu39gbZjuweezCiNpweZAstA="

          alt='...'
        />
      </MDBCarousel>

      <div className="container">
        <div className="text-center m-5">
          <h3>Categories</h3>
          <p>Here is the available products.</p>
        </div>
      </div>
      <div className="card-group">
        <div className='col-lg-4 col-md-6 col-12 p-3'>
          <div className="card">
            <img className="card-img-top" src="https://media.istockphoto.com/photos/computer-peripherals-laptop-accessories-composition-on-stone-picture-id635790376?k=20&m=635790376&s=612x612&w=0&h=_N-f0gMXQuvc0PGYhCR5BpewFczKeXtOTtlKaiHjG8I=" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Electronics</h5>
              <a href="./categories/Electronics">Shop Now</a>
             
            </div>
          </div>
        </div>

        <div className='col-lg-4 col-md-6 col-12 p-3'>
          <div className="card">
            <img className="card-img-top" src="https://media.istockphoto.com/photos/looks-like-i-sold-quite-a-lot-this-month-picture-id1195042518?k=20&m=1195042518&s=612x612&w=0&h=S_eMFm8KvnAzeC89uW0RWSgYmky8dUGgZHv241J1h5Y=" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Fashion</h5>
              <a href='./categories/Fashion'>Shop Now</a>
            </div>
          </div>
        </div>

        <div className='col-lg-4 col-md-6 col-12 p-3'>
          <div className="card">
            <img className="card-img-top" src="https://media.istockphoto.com/photos/military-style-watch-picture-id650233226?k=20&m=650233226&s=612x612&w=0&h=xKd1tVMCoW7QELyhGgv_IBPS2qe_Ist7DHJFdUjEoW4=" />
            <div className="card-body">
              <h5 className="card-title">Accesories</h5>
              <a href='./categories/Accesories'>Shop Now</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
