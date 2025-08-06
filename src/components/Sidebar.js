import { NavLink } from 'react-router-dom'; //for active link
import '../assets/css/style.css';

function Sidebar() {
  return (
    <>
      <div className='col-md-2'>
        <div className='violet'>
          <ul className='sidelist'>
            <li><NavLink to="/dashboard" className={({ isActive }) => isActive ? 'active-link' : undefined}>Dashboard</NavLink></li>
            <li><NavLink to="/categories" className={({ isActive }) => isActive ? 'active-link' : undefined}>Categories</NavLink></li>
            <li><NavLink to="/expenses" className={({ isActive }) => isActive ? 'active-link' : undefined}>Expenses</NavLink></li>
            <li><NavLink to="/profile" className={({ isActive }) => isActive ? 'active-link' : undefined}>Profile</NavLink></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Sidebar;
