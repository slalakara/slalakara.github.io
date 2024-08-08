import './dineRestaurant.css'
import place from'/src/img/place.png'
import placetablet from '/src/img/place-tablet.png'
import placeline from '/src/img/place-line.png'
import mousse from '/src/img/mousse.jpg'
import mignon from '/src/img/mignon.jpg'
import header from '/src/img/header.png'
import fillet from '/src/img/fillet.jpg'
import booking from '/src/img/booking.png'
import placeDesktop from '/src/img/desktop-place.png'
import locally from '/src/img/locally.png'
import foodtablet from '/src/img/food-tablet.png'
import fooddesktop from '/src/img/desktop-food.jpg'
import dinelogo from '/src/img/dine.png'

function App() {
  return (
    <div className="container">
      {/* Header Start */}
      <div className="header" style={{ backgroundImage: `url(${header})` }}>
        <div className="logo"><img src={dinelogo} /></div>
        <div className="header-content">
          <h1>Exquisite dining <br />since 1989</h1>
          <p>Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</p>
          <a href="#" className='header-btn'>BOOK A TABLE</a>
        </div>
      </div>
      {/* Header End */}

      {/* Information Start */}
      <div className="information">
        <img src={place} className='place-mobile' />
        <img src={placetablet} className='place-tablet' />
        <img src={placeDesktop} className='place-desktop' />
        <div className="information-text">
          <img src={placeline} />
          <h2>Enjoyable place for all the family</h2>
          <p>Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.</p>
        </div>
      </div>

      <div className="information-next">
        <img src={locally} className='chef-foto-mobile' />
        <img src={foodtablet} className='chef-foto-tablet' />
        <img src={fooddesktop} className='chef-foto-desktop' />
        <div className="information-next-text">
          <img src={placeline} />
          <h2>Enjoyable place for all the family</h2>
          <p>Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.</p>
        </div>
      </div>
      {/* Information End */}

      {/* Menu Start */}
      <div className="menu">
        <div className="menu-text">
          <img src={placeline} />
          <h2>A few highlights from our menu</h2>
          <p>We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season.</p>
        </div>
        <div className="menu-container">
          <div className="menu-content">
            <img src={fillet} />
            <div className="menu-content-text">
              <h2>Seared Salmon Fillet</h2>
              <p>Our locally sourced salmon served with a refreshing buckwheat summer salad.</p>
            </div>
          </div>
          <hr />
          <div className="menu-content">
            <img src={mignon} />
            <div className="menu-content-text">
              <h2>Rosemary Filet Mignon</h2>
              <p>Our prime beef served to your taste with a delicious choice of seasonal sides.</p>
            </div>
          </div>
          <hr />
          <div className="menu-content">
            <img src={mousse} />
            <div className="menu-content-text">
              <h2>Summer Fruit Chocolate Mousse</h2>
              <p>Creamy mousse combined with summer fruits and dark chocolate shavings.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Menu End */}

      {/* Reservation Start */}
      <div className="reservation" style={{ backgroundImage: `url(${booking})` }}>
        <div className="reservation-content">
          <h2>Ready to make a reservation?</h2>
          <a href="#" className='reservation-btn'>BOOK A TABLE</a>
        </div>
      </div>
      {/* Reservation End */}

      {/* Footer Start */}
      <div className="footer">
        <div className="footer-content">
          <div className="footer-content-text">
            <p className='first-contact'>Marthwaite, Sedbergh <br /> Cumbria <br /> +00 44 123 4567</p>
            <p>OPEN TIMES <br /> MON - FRI: 09:00 AM - 10:00 PM <br /> SAT - SUN: 09:00 AM - 11:30 PM</p>
          </div>
        </div>
      </div>
      {/* Footer End */}

    </div>

  )
}

export default App
