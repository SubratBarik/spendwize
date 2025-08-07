import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import '../assets/css/style.css';

function Categories(props) {
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
            <div className='category-block'>
               <div className='left-cblock'></div>
              <div className='right-cblock'></div>
            </div>
          </div>
        </div>

        <Footer />

      </div>
    </>
  )
}

export default Categories;
