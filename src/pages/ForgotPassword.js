import '../assets/css/style.css';
import Logo from '../assets/images/logo-new.png';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function ForgotPassword() {
    return (
        <>
            <div id="wrapper" className='login'>
                <div className="centered-div">
                    <img src={Logo} alt='Spend Wize' className='logo' />                    
                    <form>
                        <div className='textfield'>
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input type="email" placeholder="Enter email" required />
                        </div>
                        <div className='textfield'>
                            <label htmlFor="otpforpwd">OTP:</label>
                            <input type="text" id="otpforpwd" placeholder="Validate Email via OTP" required />
                        </div>
                        <div className='textfield'>
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" placeholder="Enter password" required />
                        </div>
                        <div className='textfield'>
                            <label htmlFor="confirmpassword">Confirm Password:</label>
                            <input type="password" id="confirmpassword" placeholder="Enter confirm password" required />
                        </div>
                        <button type="submit">UPDATE</button>
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

export default ForgotPassword;
