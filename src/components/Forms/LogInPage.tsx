import axios from 'axios';
import React, { FC, FormEvent, useState, useEffect } from 'react'
import { ILogin } from '../assets/types';
import './Form.scss';
import { AiOutlineEye } from 'react-icons/ai'
import { AiOutlineEyeInvisible } from 'react-icons/ai'
import InputForm from '../UI/inputForm/inputForm';

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

    console.log(loginForm)    

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
            <InputForm 
                setLoginForm={setLoginForm} 
                loginForm={loginForm} 
                button={false} 
                check={true}
                name={"Username"}
                keyword={"email"}
            />
            <InputForm 
                setLoginForm={setLoginForm} 
                loginForm={loginForm} 
                button={true} 
                check={pwdVisible}
                setCheck={setPwdVisible}
                name={"Password"}
                keyword={"password"}
            />
            <button className="form-container__form__submit button" type='submit'>Login</button>
        </form>
    </div>
  )
}

export default LogInPage