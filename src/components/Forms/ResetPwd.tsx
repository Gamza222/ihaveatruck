import React, { FC, FormEvent, useState } from 'react'
import axios from 'axios';
import { IForm, IResetPwdResponse } from '../assets/types';
import InputForm from '../UI/inputForm/inputForm'

interface ResetPwdProps {

}

const ResetPwd: FC<ResetPwdProps> = ({}) => {

    //data for reset-pwd post request
    const [resetPwdForm, setResetPwdForm] = useState<IForm>({
        email: "",
    });

    //state invalid email
    const [invalid, setInvalid] = useState<boolean>(false);

    //state for reset-pwd response
    const [pwdResponse, setPwdResponse] = useState({});

    //configuration for reset-pwd post request
    const config = {
        method: 'post',
        url: 'https://dev.ihaveatruck.ca/api/auth/password-reset-request',
        headers: { 
          'Content-Type': 'application/json', 
          'accept': 'application/json'
        },
        data : resetPwdForm
    };

    //sends post login request
    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        axios(config)
        .then((res) => {
            alert(res.data.message);
            setInvalid(false);
        })
        .then(() => {console.log(pwdResponse)})
        .catch((err) => {
            console.log(`error: ${err}`);
            setInvalid(true);
        })
    }

  return (
    <div className='form-container container'>
        <div className='form-container__title'>
            <h2>Reset Password</h2>
        </div>
        {
            invalid ? <p className='form-container__error-msg'>email not found</p> : ''
        }
        <form onSubmit={handleSubmit} className='form-container__form'>
            <InputForm
                setForm={setResetPwdForm} 
                form={resetPwdForm} 
                button={false} 
                check={true}
                name={"Email"}
                keyword={"email"}
            />
            <button className="form-container__form__submit button" type='submit'>Reset</button>
        </form>
    </div>
  )
}

export default ResetPwd