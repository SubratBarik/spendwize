import { NavLink } from 'react-router-dom'; //for active link
import '../assets/css/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faDashboard, faList, faMoneyBills, faSignOut  } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  return (
    <>
      <ul className='sidelist'>
        <li><FontAwesomeIcon icon={faDashboard} size="1x" /> <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'active-link' : undefined}>Dashboard</NavLink></li>
        {/* <li><FontAwesomeIcon icon={faList} size="1x" /> <NavLink to="/categories" className={({ isActive }) => isActive ? 'active-link' : undefined}>Categories</NavLink></li> */}
        <li><FontAwesomeIcon icon={faMoneyBills} size="1x" /> <NavLink to="/expenses" className={({ isActive }) => isActive ? 'active-link' : undefined}>Expenses</NavLink></li>
        <li><FontAwesomeIcon icon={faUser} size="1x" /> <NavLink to="/profile" className={({ isActive }) => isActive ? 'active-link' : undefined}>Profile</NavLink></li>
        <li className='logout-link'><FontAwesomeIcon icon={faSignOut} size="1x" /> <a name="logout" style={{cursor: 'pointer'}} className={({ isActive }) => isActive ? 'active-link' : undefined}>Logout</a></li>
        <li className='version-link'><NavLink to="/version" className={({ isActive }) => isActive ? 'active-link' : undefined}>Version: 1.0.0</NavLink></li>
      </ul>
    </>
  )
}

export default Sidebar;
