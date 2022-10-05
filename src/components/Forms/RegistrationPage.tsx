import axios from 'axios';
import { IForm } from 'components/assets/types';
import InputForm from 'components/UI/inputForm/inputForm';
import React, { FC, FormEvent, useState, useEffect } from 'react'


const RegistrationPage: FC = () => {

    //data for login post request
    const [registerForm, setRegisterForm] = useState<IForm>({
        role_id: 1,
        email: "",
        first_name: "",
        last_name: "",
        phone_number: "",
        password: "",
        passwordRepeat: "",
        address: "",
        business_type: 2
    });
    
    //state invalid credentials 
    const [invalid, setInvalid] = useState<any>();

    //state passwords match credentials 
    const [pwdMatch, setPwdMatch] = useState<any>(true);

    useEffect(() => {
        registerForm.passwordRepeat == registerForm.password ? setPwdMatch(true) : setPwdMatch(false)
    }, [registerForm.password, registerForm.passwordRepeat]);

    //configuration for register post request
    const config = {
        method: 'post',
        url: 'https://dev.ihaveatruck.ca/api/auth/register',
        headers: { 
          'Content-Type': 'application/json', 
          'accept': 'application/json'
        },
        data : registerForm
    };
    
    //sends post login request
    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        axios(config)
        .then((res) => {
            const {data} = res.data.message;
            console.log(res.data.message);
            alert(res.data.message);
            setInvalid(false);
        })
        .catch((err) => {
            console.log(`error: ${err.response.data.message}`);
            setInvalid(err.response.data.message);
        })
    }
    console.log(registerForm)

  return (
    <div className='form-container container'>
        <div className='form-container__title'>
            <h2>Customer Login</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor magnam dicta nobis eius </p>
        </div>
        {
            invalid ? <p className='form-container__error-msg'>{invalid}</p> : ''
        }
        <form onSubmit={handleSubmit} className='form-container__form'>
            <InputForm 
                setForm={setRegisterForm} 
                form={registerForm} 
                button={false} 
                name={"role_id"}
                keyword={"role_id"}
                hidden={true}
                value={1}
            />
            <InputForm 
                setForm={setRegisterForm} 
                form={registerForm} 
                button={false} 
                name={"business_type"}
                keyword={"business_type"}
                hidden={true}
                value={1}
            />
            <InputForm 
                setForm={setRegisterForm} 
                form={registerForm} 
                button={false} 
                name={"Email"}
                keyword={"email"}
            />
            <InputForm 
                setForm={setRegisterForm} 
                form={registerForm} 
                button={false} 
                name={"Name"}
                keyword={"first_name"}
            />
            <InputForm 
                setForm={setRegisterForm} 
                form={registerForm} 
                button={false} 
                name={"Last Name"}
                keyword={"last_name"}
            />
            <InputForm 
                setForm={setRegisterForm} 
                form={registerForm} 
                button={false} 
                name={"Enter phone number"}
                keyword={"phone_number"}
                phone={true}
            />
            <InputForm 
                setForm={setRegisterForm} 
                form={registerForm} 
                button={false} 
                name={"Adress"}
                keyword={"address"}
            />
            {
                pwdMatch ? "" : <p className='form-container__form__reject-text'>Passwords not match</p>
            }
            <InputForm 
                setForm={setRegisterForm} 
                form={registerForm} 
                button={true}
                name={"Password"}
                keyword={"password"}
                visible={false}
            />
            <InputForm 
                setForm={setRegisterForm} 
                form={registerForm} 
                button={true}   
                name={"Repeat password"}
                keyword={"passwordRepeat"}
                visible={false}
            />
            <button className="form-container__form__submit button" type='submit'>Register</button>
        </form>
    </div>
  )
}

export default RegistrationPage
