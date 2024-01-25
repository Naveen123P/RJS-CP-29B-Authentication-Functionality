// Write your JS code here
import {Link, withRouter} from 'react-router-dom'

import './index.css'

const Header = () => (
  <>
    <ul className="header-items">
      <li>
        <Link to="/" className="home-item">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="">
          About
        </Link>
      </li>
    </ul>
  </>
)

export default withRouter(Header)
