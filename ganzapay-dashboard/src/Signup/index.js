import './index.css'
import { useNavigate } from 'react-router-dom';


const Signup =()=>{
    const navigate = useNavigate();
    const handleLogin =()=>{
        navigate('/Login');
    }

    return(
        <div className='login-page'>
            <div className='welcome'>
            <div className='logo'>
                <img src='images/gplogo.png' alt='ganzapay'/>
<h3>GanzaPay</h3>
            </div>

            <h1>Welcome</h1>
            </div>

            <form className='login-form'>
            <h2>Sign Up</h2>
            <p className='sign-text'>Create a new account</p>
            <label for="username">Username</label>
            <input name="username" type="text" placeholder="Enter username" required/>
            <label for="email">Email</label>
            <input name="email" type="email" placeholder="Enter email address" required/>
            <label for="password">Password</label>
            <input name="password" type="password" placeholder="Enter password" required/>

            <button className='login'>SIGN UP</button>
            <h6 className='prompt-question2'>Already have an Account? <button className='prompt' onClick={handleLogin}>LOGIN</button></h6>
            </form>
            


        </div>
    )
}

export default Signup;