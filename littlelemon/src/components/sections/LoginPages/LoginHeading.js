import { useState } from 'react'
import './LoginHeading.css'; 
import person from '../../../assets/person.png';
import email from '../../../assets/email.png';
import password from '../../../assets/password.png';

const LoginHeading = () => {   

    const [action, setAction] = useState("Sign Up");

  return (
    <div>
        <div className='inputs'>
        {
            //using ternary operator to determine the user option. if user click at sign up user will need to enter name and viseversa
            } 
            {action==="Login"?<div></div>:<div className='input'>
                <img src={person} alt="person"/>
                <input type="text" placeholder='Name'/>
            </div>}
            
            <div className='input'>
                <img src={email} alt="email"/>
                <input type="email" placeholder='Email Id'/>
            </div>
            <div className='input'>
                <img src={password} alt="password"/>
                <input type="password" placeholder='Password'/>
            </div>
            {
                //using the ternary operator to hide the Confim password input
            }
            {action==="Login"?<div></div>:<div className='input'>
                <img src={password} alt="confirm_password"/>
                <input type="password" placeholder='Confirm Password'/>
            </div>}
            
            {
                //using the ternary operator to hide the Lost password message
            }
            {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost password? <span>Click Here!</span></div>}
            <div className="submit-container">
                <div className={action==="Login"?"submit gray":"submit"} onClick={() =>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action==="Sign Up"?"submit gray":"submit"} onClick={() =>{setAction("Login")}}>Login</div>
            </div>
        </div>
    </div>
  )
}

export default LoginHeading







