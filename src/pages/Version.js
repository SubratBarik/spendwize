import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

function Version(props) {

    return (
        <>
            <div id="wrapper" className=''>

                <Navbar />

                <div className="main-block">
                    <div className="sideblock">
                        <Sidebar />
                    </div>
                    <div className="content">
                        <h3>{props.title} <small>( as on 07.08.2025 )</small></h3>
                        <p>SDFsfsd  sdf fsd</p>
                        <p>SDFsfsd  sdf fsd</p>
                        <p>SDFsfsd  sdf fsd</p>
                        <p>SDFsfsd  sdf fsd</p>
                        <p>SDFsfsd  sdf fsd</p>
                        <p>SDFsfsd  sdf fsd</p>
                        <p>SDFsfsd  sdf fsd</p>
                        <p>SDFsfsd  sdf fsd</p>
                    </div>
                </div>

                <Footer />

            </div>
        </>
    )
}

export default Version;
