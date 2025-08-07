import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import '../assets/css/style.css';

function Profile(props) {
  return (
    <>
      <div id="wrapper" className=''>

        <Navbar />

        <div className="main-block">
          <div className="sideblock">
            <Sidebar />
          </div>
          <div className="content">
            <h3>{props.title}</h3>
            <div className='profile-block'>
              <form>
                <div className='textfield'>
                  <label htmlFor="fullname" className="form-label">Name:</label>
                  <input type="text" placeholder="Enter Name" required />
                </div>
                <div className='textfield' style={{position: 'relative'}}>
                  <label htmlFor="email" className="form-label">Email:</label>
                  <input type="email" placeholder="Enter email" required />
                  <a name="verify" className='btn-sm'>Verify</a>
                </div>
                <div className='textfield'>
                  <label htmlFor="otpforac" className="form-label">OTP:</label>
                  <input type="text" placeholder="Validate Email via OTP" required />
                </div>
                <div className='textfield'>
                  <label htmlFor="password">Password:</label>
                  <input type="password" id="password" placeholder="Enter password" required />
                </div>
                <button type="submit">UPDATE</button>
              </form>
              <div className='msg'></div>
            </div>
          </div>
        </div>

        <Footer />

      </div>
    </>
  )
}

export default Profile;
