import './singlePageDesign.css'
import aboutme from '/src/img/aboutme-img.png'
import apps from '/src/img/apps-img.png'
import graphicdesign from '/src/img/graphicdeign-img.png'
import Illustrations from '/src/img/Illustrations-img.png'
import mobilelogo from '/src/img/mobilelogo.svg'
import motiongraphic from '/src/img/motiongraphic-img.png'
import photografy from '/src/img/photography-img.png'
import uiux from '/src/img/uiux-img.png'

function App() {
  return (
    <div className="container">
      <div className="header">
        <a href="/index.html"><img src={mobilelogo} /></a>
        <a href="#" className='header-btn'>Free Consultation</a>
      </div>

      <div className="hero">
        <h1>Design solutions made easy</h1>
        <p>With over ten years of experience in various design disciplines, I’m your one-stop shop for your design needs.</p>
      </div>

      <div className="content-container">
        <div className="content"><img src={graphicdesign} />Graphic Design</div>
        <div className="content tek"><img src={uiux} />UI/UX</div>
        <div className="content tek"><img src={apps} />Apps</div>
        <div className="content"><img src={Illustrations} />Illustrations</div>
        <div className="content"><img src={photografy} />Photography</div>
        <div className="content"><img src={motiongraphic} />Motion Graphics</div>
      </div>

      <div className="about-me">
        <img src={aboutme} />
        <div className="about-me-description">
          <h2>I’m Amy, and I’d love to work on your next project</h2>
          <p>I love working with others to create beautiful design solutions. I’ve designed everything from brand illustrations to complete mobile apps. I’m also handy with a camera!</p>
          <a href="#" className="about-me-btn">Free Consultation</a>
        </div>
      </div>

      <div className="booking">
        <div className="booking-description">
          <h2>Book a call with me</h2>
          <p>I’d love to have a chat to see how I can help you. The best first step is for us to discuss your project during a free consultation. Then we can move forward from there.</p>
        </div>
        <a href="#" className="booking-btn">Free Consultation</a>
      </div>

      <div className="footer">
        <a href="/index.html"><img src={mobilelogo} /></a>
        <a href="#" className="header-btn">Free Consultation</a>
      </div>


    </div>
  )
}

export default App
