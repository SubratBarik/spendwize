import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

function Dashboard(props) {
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

          </div>
        </div>

        <Footer />

      </div>
    </>
  )
}

export default Dashboard;
