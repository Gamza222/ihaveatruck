import React, { FC, useState } from 'react'
import { ILogin } from '../../assets/types'
import { AiOutlineEye } from 'react-icons/ai'
import { AiOutlineEyeInvisible } from 'react-icons/ai'

interface inputLogin {
    setLoginForm: React.Dispatch<React.SetStateAction<ILogin>>,
    loginForm: ILogin,
    button: boolean,
    check?: boolean,
    setCheck?: React.Dispatch<React.SetStateAction<boolean>>,
    name: string,
    keyword: "email" | "password"
}

const InputForm: FC<inputLogin> = ({setLoginForm, loginForm, button, check, setCheck, name, keyword}) => {

    const [focus, setFocus] = useState(0);

    function applyFocus() : string {
        if (focus == 0) {
           return ""
        } 

        else if (focus == 1) {
           return "form-container__form__item__input-button-shadow-normal"
        } 

        else if (focus == 2) {
           return "form-container__form__item__input-button-shadow-reject"
        } 
        return "";
    }

  return (
    <>
    <div className='form-container__form__item'>
        <p className='form-container__form__item__title'>{name}</p>
        <div className={`form-container__form__item__input ${applyFocus()}`}>
            <input 
                type={check ? "text" : "password"} 
                onChange={(e) => {
                    setLoginForm({...loginForm, [keyword]: e.target.value});
                }} 
                onFocus={() => setFocus(1)}
                onBlur={(e) => {
                    e.target.value ? setFocus(0) : setFocus(2) 
                }}
                required
            />
                {
                    button && setCheck ? 
                            <button type="button" onClick={() => setCheck(!check)}>
                                {
                                    check ?  <AiOutlineEyeInvisible/> : <AiOutlineEye />
                                }
                            </button>
                            : ""
                }   
        </div>
    </div>
    {
        focus == 2 ? <p className='form-container__form__reject-text'>{name} is required</p> : ""
    }
    </>
  )
}

export default InputForm