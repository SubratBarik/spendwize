import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

function Dashboard(props) {
  return (
    <>
      <div id="wrapper" className='height-vh'>

        <Navbar />

        <div className="main-block">
          <div className="sidebar"></div>
          <div className="container"></div>
        </div>

        <Footer />

      </div>
    </>
  )
}

export default Dashboard;
