import axios from 'axios';
import { IForm } from 'components/assets/types';
import InputForm from 'components/UI/inputForm/inputForm';
import React, { FC, FormEvent, useState, useEffect } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const RegistrationPage: FC = () => {

    //data for login post request
    const [registerForm, setRegisterForm] = useState<IForm>({
        role_id: 0,
        email: "",
        first_name: "",
        last_name: "",
        phone_number: "",
        password: "",
        passwordRepeat: "",
        address: "",
        business_type: ""
    });

    //state of visibility of password
    const [pwdVisible, setPwdVisible] = useState<boolean>(false);
    
    //state invalid credentials 
    const [invalid, setInvalid] = useState<boolean>(false);


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
            const {data} = res.data.data;
            setRegisterForm(data)
            console.log(registerForm);
            alert(res.data);
            setInvalid(false);
        })
        .catch((err) => {
            console.log(`error: ${err}`);
            setInvalid(true);
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
            invalid ? <p className='form-container__error-msg'>email or password incorrect</p> : ''
        }
        <form onSubmit={handleSubmit} className='form-container__form'>
            <InputForm 
                setForm={setRegisterForm} 
                form={registerForm} 
                button={false} 
                check={true}
                name={"role_id"}
                keyword={"role_id"}
                hidden={true}
                value={1}
            />
            <InputForm 
                setForm={setRegisterForm} 
                form={registerForm} 
                button={false} 
                check={true}
                name={"business_type"}
                keyword={"business_type"}
                hidden={true}
                value={1}
            />
            <InputForm 
                setForm={setRegisterForm} 
                form={registerForm} 
                button={false} 
                check={true}
                name={"Email"}
                keyword={"email"}
            />
            <InputForm 
                setForm={setRegisterForm} 
                form={registerForm} 
                button={false} 
                check={true}
                name={"Name"}
                keyword={"first_name"}
            />
            <InputForm 
                setForm={setRegisterForm} 
                form={registerForm} 
                button={false} 
                check={true}
                name={"Last Name"}
                keyword={"last_name"}
            />
            <PhoneInput
                country={'us'}
                value={""}
                onChange={phone => setRegisterForm({...registerForm, phone_number: phone})}
            />
            <InputForm 
                setForm={setRegisterForm} 
                form={registerForm} 
                button={true} 
                check={pwdVisible}
                setCheck={setPwdVisible}
                name={"Adress"}
                keyword={"address"}
            />
            <InputForm 
                setForm={setRegisterForm} 
                form={registerForm} 
                button={true} 
                check={pwdVisible}
                setCheck={setPwdVisible}
                name={"Password"}
                keyword={"password"}
            />
            <InputForm 
                setForm={setRegisterForm} 
                form={registerForm} 
                button={true} 
                check={pwdVisible}
                setCheck={setPwdVisible}
                name={"Repeat password"}
                keyword={"passwordRepeat"}
            />
            <button className="form-container__form__submit button" type='submit'>Register</button>
        </form>
    </div>
  )
}

export default RegistrationPage
