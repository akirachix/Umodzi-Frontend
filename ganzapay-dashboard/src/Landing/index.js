import './index.css';
import { useNavigate } from 'react-router-dom';



const Landing = ()=>{
    const navigate = useNavigate();
    const handleLogin =()=>{
        navigate('/Login');
    }
    const handleSignup = ()=>{
        navigate('/Signup');
    }
    return(
        <div>
            <div className='landing'>
            <div className='logos'>
                <img src='images/gplogo.png' alt='ganzapay'/>
<p>GanzaPay</p>
            </div>
<h1>Hello!</h1>
            <h4>The simple way to manage your workforce</h4>
            <button className='log' onClick={handleLogin}>LOGIN</button>

            <button className='signup' onClick={handleSignup}>SIGN UP</button>
<br></br>

            </div>

        </div>
    )
};

export default Landing;