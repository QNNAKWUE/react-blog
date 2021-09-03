import React from 'react';
import '../styles/Register.css';

function Register() {
    return (
        <div className='register'>
                <h1>Welcome! Please Signup here</h1>
                    <form className='register__form'>
                        <label for='name'>
                            <input type='text' placeholder='Enter your name' className='input'/>
                        </label>

                        <label for='email'>
                            <input type='email' placeholder='Enter your email address' className='input'/>
                        </label>

                        <label for='password'>
                            <input type='password' placeholder='Enter your password' className='input' />
                        </label>
                    </form> 

                <button className='button'>Submit</button>
        </div>  
    )
}

export default Register;

