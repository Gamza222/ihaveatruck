import axios from 'axios';
import React, { FC, FormEvent, useState, useEffect } from 'react'
import { ILogin } from '../assets/types';
import './Form.scss';
import { AiOutlineEye } from 'react-icons/ai'
import { AiOutlineEyeInvisible } from 'react-icons/ai'

interface LoginPageProps {

}

const LogInPage: FC<LoginPageProps> = ({}) => {

    //data for login post request
    const [loginForm, setLoginForm] = useState<ILogin>({
        email: "",
        password: ""
    });

    //state of visibility of password
    const [pwdVisible, setPwdVisible] = useState<boolean>(false);
    
    //state invalid pwd and email 

    const [invalid, setInvalid] = useState<boolean>(false);

    console.log(invalid)    

    //configuration for login post request
    const config = {
        method: 'post',
        url: 'https://dev.ihaveatruck.ca/api/auth/login',
        headers: { 
          'Content-Type': 'application/json', 
          'accept': 'application/json'
        },
        data : loginForm
    };
    
    //sends post login request
    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        axios(config)
        .then((res) => {
            console.log(res);
            alert("Login was successful");
            setInvalid(false);
        })
        .catch((err) => {
            console.log(`error: ${err}`);
            setInvalid(true);
        })
    }
    
  return (
    <div className='form-container container'>
        <div className='form-container__title'>
            <h2>Customer Login</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor magnam dicta nobis eius </p>
        </div>
        {
            invalid ? <p className='form-container__error-msg'>email or password incorrect</p> : ''
        }
        <form onSubmit={handleSubmit} className='form-container__form'>
            <div className='form-container__form__item'>
                <p className='form-container__form__item__title'>Username</p>
                <div className='form-container__form__item__input'>
                    <input type="text" onChange={(e) => setLoginForm({...loginForm, email: e.target.value})} required/>
                </div>
            </div>
            <div className='form-container__form__item'>    
                <p className='form-container__form__item__title'>Password</p>
                <div className='form-container__form__item__input'>
                    <input 
                        type={pwdVisible ? "text" : "password"}
                        onChange={(e) => setLoginForm({...loginForm, password: e.target.value})} 
                        required
                    />
                    <button type="button" onClick={() => setPwdVisible(!pwdVisible)}>
                        {
                            pwdVisible ?  <AiOutlineEyeInvisible/> : <AiOutlineEye />
                        }
                    </button>
                </div>
            </div>
            <button className="form-container__form__submit button" type='submit'>Login</button>
        </form>
    </div>
  )
}

export default LogInPage