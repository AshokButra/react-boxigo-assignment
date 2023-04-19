import {Link} from 'react-router-dom'

import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">About Us</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes to be noticed"
          className="home-mobile-img"
        />
        <p className="home-description">
          An ultra-modern startup that binds technology with conventional
          business. <br />
          We provide you a safe, affordable, and stress-free house shifting
          experience with our best design & technology incorporated platform. We
          have cut down all the complexities with the wisdom of vendor
          experience. <br />
          It’s undeniable when it comes for your safety and privacy Boxigo
          predominantly focuses on your Safety and Privacy. Your information is
          protected, and it is safe with us in the dark. Only your relocation
          details will be furnished to the vendor. <br />
          In this data-driven world, we have put our Ut-most care in building an
          advanced technological platform. All your inputs are highly secured
          and kept confidential. We guarantee to delight your experience with
          our standards We, Boxigo - abide by our promises to fulfil all your
          needs. We consistently ensure to deliver services that fit your
          purpose. All our deeds are conspicuous with high proficiency. Our
          vendors jointly maintain our standards with their steadiness.
        </p>
      </div>
      <img
        src="https://res.cloudinary.com/dmw995kmc/image/upload/v1681908841/truck-delivery_dplqjv.gif"
        alt="dresses to be noticed"
        className="home-desktop-img"
      />
    </div>
  </>
)

export default Home
