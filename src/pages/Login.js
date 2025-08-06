import '../assets/css/style.css';
import Logo from '../assets/images/logo-new.png';
import { Link } from "react-router-dom";
import Footer from '../components/Footer';

function Login() {
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
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" placeholder="Enter password" required />
                        </div>
                        <div className='linkfield'>
                            <p><Link to='/forgot-password'>Forgot Password</Link></p>
                        </div>
                        <button type="submit">LOGIN</button>
                    </form>
                    <div className='infofield'>
                        <p>Don't have an account? <Link to='/signup'>Create an account</Link></p>
                    </div>
                    <div className='msg'></div>
                </div>

                 <Footer />
            </div>
           
        </>
    )
}

export default Login;
