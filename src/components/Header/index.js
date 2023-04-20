import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import {FaTruck, FaUserAlt} from 'react-icons/fa'
import {AiOutlineAudit} from 'react-icons/ai'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <nav className="nav-header">
      <div className="nav-content">
        <Link to="/">
          <img
            className="website-logo"
            src="https://res.cloudinary.com/dmw995kmc/image/upload/v1681902589/boxigo_logo_small_udjnob.png"
            alt="website logo"
          />
        </Link>
        <ul className="nav-menu">
          <li>
            <Link to="/my-moves" className="nav-link">
              <FaTruck className="truck-icon" />
              MY MOVES
            </Link>
          </li>
          <li>
            <Link to="/my-profile" className="nav-link">
              <FaUserAlt className="profile-icon" />
              MY PROFILE
            </Link>
          </li>
          <li>
            <Link to="/my-quote" className="nav-link">
              <AiOutlineAudit className="quote-icon" />
              GET QUOTE
            </Link>
          </li>
        </ul>
        <button type="button" className="logout-desktop-btn">
          Logout
        </button>
        <button type="button" className="logout-mobile-btn">
          Logout
        </button>
      </div>
      <div className="nav-menu-mobile">
        <ul className="nav-menu-list-mobile">
          <Link to="/my-moves">
            <li className="nav-menu-item-mobile">
              <FaTruck className="truck-icon" />
            </li>
          </Link>
          <Link to="/my-profile">
            <li className="nav-menu-item-mobile">
              <FaUserAlt className="profile-icon" />
            </li>
          </Link>
          <Link to="/my-quote">
            <li className="nav-menu-item-mobile">
              <AiOutlineAudit className="quote-icon" />
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  )
}
export default withRouter(Header)

