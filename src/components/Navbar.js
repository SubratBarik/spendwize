import { Link } from 'react-router-dom'; //for link

function Navbar() {
  return (
    <>
      <div className='col-md-12'>
        <div className='orange'>
          <div className='col-md-2 text-center'>
            <h3 style={{ lineHeight: '60px', fontSize: '25px', }}>SpendWize</h3>
          </div>
          <div className='col-md-8'></div>
          <div className='col-md-2'>
            {/* <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                User
              </button>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                <li><Link className="dropdown-item" to="#">Logout</Link></li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;