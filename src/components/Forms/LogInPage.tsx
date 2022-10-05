import axios from 'axios';
import React, { FC, FormEvent, useState, useEffect } from 'react'
import { IForm, ILoginUser } from '../assets/types';
import './Form.scss';
import { AiOutlineEye } from 'react-icons/ai'
import { AiOutlineEyeInvisible } from 'react-icons/ai'
import InputForm from '../UI/inputForm/inputForm';
import {Link} from "react-router-dom";
import {AiOutlineCheck} from 'react-icons/ai'

interface LoginPageProps {
    login: ILoginUser
    setLogin: React.Dispatch<React.SetStateAction<ILoginUser>>
}

const LogInPage: FC<LoginPageProps> = ({login, setLogin}) => {

    //data for login post request
    const [loginForm, setLoginForm] = useState<IForm>({
        email: "",
        password: ""
    });

    //state of visibility of password
    const [pwdVisible, setPwdVisible] = useState<boolean>(false);
    
    //state invalid pwd and email 
    const [invalid, setInvalid] = useState<boolean>(false);

    //state for remember me
    const [remember, setRemember] = useState<boolean>(false);


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
            const {data} = res.data.data;
            setLogin(data)
            console.log(login);
            alert(res.data);
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
                setForm={setLoginForm} 
                form={loginForm} 
                button={false} 
                check={true}
                name={"Username"}
                keyword={"email"}
            />
            <InputForm 
                setForm={setLoginForm} 
                form={loginForm} 
                button={true} 
                check={pwdVisible}
                setCheck={setPwdVisible}
                name={"Password"}
                keyword={"password"}
            />
            <div className='form-container__form__buttons'>
                <button onClick={(e) => {e.preventDefault(); setRemember(!remember)}} className='form-container__form__buttons__checkbox button-text'>
                    <div className='form-container__form__buttons__checkbox__box'>
                        {
                            remember ? <AiOutlineCheck /> : ""
                        }
                    </div>
                    <p className='form-container__form__buttons__checkbox__text'>Remember me</p>
                </button>
                <Link className='form-container__form__buttons__button button-text' to="/reset-password">Forgot password?</Link>
            </div>
            <button className="form-container__form__submit button" type='submit'>Login</button>
        </form>
    </div>
  )
}

export default LogInPage