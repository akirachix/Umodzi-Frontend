import './index.css'
import { useNavigate } from 'react-router-dom';

const Login =()=>{
    const navigate = useNavigate();
    const handleSignup = ()=>{
        navigate('/Signup');
    }
    return(
        <div className='login-page'>
            <div className='welcome'>
            <div className='logo'>
                <img src='images/gplogo.png' alt='ganzapay'/>
<h3>GanzaPay</h3>
            </div>

            <h1>Welcome Back!</h1>
            </div>

            <div className='login-form'>
            <h2>Login</h2>
            <p className='sign-text'>Sign in to continue</p>
            <label for="username">Username</label>
            <input name="username" type="text" placeholder="Enter username" class="input" required/>

            <label for="password">Password</label>
            <input name="password" type="password" placeholder="Enter password" class="input" required/>

            <button className='login'>LOGIN</button>
            <h6 className='prompt-question'>Dont have an account?<button className='prompt' onClick={handleSignup}>SIGN UP</button></h6>
            </div>

        </div>
    )
}

export default Login;