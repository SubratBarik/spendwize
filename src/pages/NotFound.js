import { Link } from 'react-router-dom'; //for link
import '../assets/css/style.css';
import Logo from '../assets/images/logo.png';

function NotFound() {
	return (
		<>
			<div id="wrapper" className='notfound'>
				<div className="centered-div">
					<img src={Logo} alt='Spend Wize' />
					<h3 className='notfounderror'>404 - Not Found</h3>
					<h5>Sorry, the page you’re looking for doesn’t exist or has been moved</h5>
					<p className='my-4'><Link to="/" className='notfoundanchor'>[Return to Home]</Link></p>
				</div>
			</div>
		</>
	)
}

export default NotFound;
