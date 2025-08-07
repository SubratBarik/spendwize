import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

function Expenses(props) {
  return (
    <>
     <div id="wrapper" className=''>

        <Navbar />

        <div className="main-block">
          <div className="sideblock">
            <Sidebar />
          </div>
          <div className="container">
            <h3>{props.title}</h3>
            <p>sfsfsdf sdfsdfsd f</p>
            <p>sfsfsdf sdfsdfsd f</p>
            <p>sfsfsdf sdfsdfsd f</p>
            <p>sfsfsdf sdfsdfsd f</p>
            <p>sfsfsdf sdfsdfsd f</p>
            <p>sfsfsdf sdfsdfsd f</p>
            <p>sfsfsdf sdfsdfsd f</p>
            <p>sfsfsdf sdfsdfsd f</p>
            <p>sfsfsdf sdfsdfsd f</p>
          </div>
        </div>

        <Footer />

      </div>
    </>
  )
}

export default Expenses;
