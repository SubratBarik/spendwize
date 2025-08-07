import { Link } from 'react-router-dom'; //for link
import Logo from '../assets/images/logo-new.png';
import '../assets/css/style.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOut } from '@fortawesome/free-solid-svg-icons';

function Navbar() {

  const toggleMenu = () => {
    document.getElementById("myDropdown").classList.toggle("show");
  }


  return (
    <>
      <div className="header">
          <div className="logo-holder">
            <img src={Logo} alt="" className='logo' />
          </div>
          <div className="toggle-holder">
            <div className="dropdown">
              <button onClick={toggleMenu} className="dropbtn"><FontAwesomeIcon icon={faUser} size="1x" /> [USER_NAME]</button>
              <div id="myDropdown" className="dropdown-content">
                <Link to="/profile">Profile</Link>
                <a name="logout" style={{cursor: 'pointer'}}>Logout</a>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar;