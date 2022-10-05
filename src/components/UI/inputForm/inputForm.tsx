import React, { FC, useState } from 'react'
import { IForm } from '../../assets/types'
import { AiOutlineEye } from 'react-icons/ai'
import { AiOutlineEyeInvisible } from 'react-icons/ai'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
const startsWith = require('lodash.startswith');

interface inputLoginProps {
    setForm: React.Dispatch<React.SetStateAction<IForm>>,
    form: IForm,
    button: boolean,
    name: string,
    visible?: boolean,
    keyword: string,
    hidden?: boolean,
    value?: number | string
    phone?: boolean
}

const InputForm: FC<inputLoginProps>= ({setForm, form, button, name, keyword, hidden, value, visible=true, phone=false}) => {

    //state of visibility of password
    const [pwdVisible, setPwdVisible] = useState<boolean>(visible);

    //border state for inputs
    const [focus, setFocus] = useState(0);

    //assigning classnames for inputs to affect borders
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
    { phone ?
    <>
    <div className="form-container__form__item">
                <p className="form-container__form__item__title">Phone Number</p>
                <PhoneInput
                    containerClass={`${applyFocus()}`}
                    country={'us'}
                    value={form[keyword as keyof typeof form]?.toString()}
                    onChange={(e) => {
                        setForm({...form, [keyword as keyof typeof form]: `+${e}`});
                    }}
                    inputProps={{
                        name: 'phone',
                        required: true,
                      }}
                    onFocus={() => setFocus(1)}
                    onBlur={(e) => {
                        e.target  ? setFocus(0) : setFocus(2) 
                    }}
                   
                />
    </div> 
    {
        focus == 2 ? <p className='form-container__form__reject-text'>{name} is required</p> : ""
    }
    </>
    :
    <>
        <div className='form-container__form__item' style={{display: hidden ? "none" : "flex"}}>
        <p className='form-container__form__item__title'>{name}</p>
        <div className={`form-container__form__item__input ${applyFocus()}`}>
            <input 
                type={hidden ? "hidden" : pwdVisible ? "text" : "password"} 
                onChange={(e) => {
                    setForm({...form, [keyword as keyof typeof form]: e.target.value});
                }} 
                onFocus={() => setFocus(1)}
                onBlur={(e) => {
                    e.target.value ? setFocus(0) : setFocus(2) 
                }}
                value={value? value : form[keyword as keyof typeof form]?.toString()}
                required
            />

            {/*password visibility if button value is set*/}
                {
                    button ? 
                            <button type="button" onClick={() => setPwdVisible(!pwdVisible)}>
                                {
                                    pwdVisible ?  <AiOutlineEyeInvisible/> : <AiOutlineEye />
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
    }
    </>
  )
}

export default InputForm