import { Link } from 'react-router-dom'; //for link
import './pages.css';

function NotFound() {
	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-md-6 mx-auto text-center my-5">
						<h3 className='notfounderror'>404 - Not Found</h3>
						<h5>Sorry, the page you’re looking for doesn’t exist or has been moved.</h5>
						<p className='my-4'><Link to="/" className='notfoundanchor'>[Return to Home]</Link></p>
					</div>
				</div>
			</div>
		</>
	)
}

export default NotFound;
