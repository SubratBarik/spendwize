import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

function Profile(props) {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <Navbar />
          <Sidebar />
          <div className='col-md-10'>
            <div className='cyan'>
              <h5 className='text-center'>{props.title}</h5>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Profile;
