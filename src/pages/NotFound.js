import { Link } from 'react-router-dom'; //for link
import '../assets/css/style.css';
import Logo from '../assets/images/logo-new.png';
import Footer from '../components/Footer';

function NotFound() {
	return (
		<>
			<div id="wrapper" className='notfound'>
				<div className="centered-div">
					<img src={Logo} alt='Spend Wize' className='logo'/>
					<h3 className='notfounderror'>404 - Page Not Found</h3>
					{/* <h5>Sorry, the page you’re looking for doesn’t exist or has been moved</h5> */}
					<p><Link to="/" className='notfoundanchor'>[Return to Home]</Link></p>
				</div>

				 <Footer />
			</div>
		</>
	)
}

export default NotFound;
