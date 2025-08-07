import '../assets/css/style.css';
import Logo from '../assets/images/logo-new.png';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function Register() {
    return (
        <>
            <div id="wrapper" className='login'>
                <div className="centered-div">
                    <img src={Logo} alt='Spend Wize' className='logo' />                    
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
                        <button type="submit">SIGN UP</button>
                    </form>
                    <div className='infofield'>
                        <p>Already have an account? <Link to='/'>Login</Link></p>
                    </div>
                    <div className='msg'></div>
                </div>

                <Footer />
            </div>
            
        </>
    )
}

export default Register;
