import React, { FC, useState } from 'react'
import { IForm } from '../../assets/types'
import { AiOutlineEye } from 'react-icons/ai'
import { AiOutlineEyeInvisible } from 'react-icons/ai'

interface inputLogin {
    setForm: React.Dispatch<React.SetStateAction<IForm>>,
    form: IForm,
    button: boolean,
    check?: boolean,
    setCheck?: React.Dispatch<React.SetStateAction<boolean>>,
    name: string,
    keyword: string,
    hidden?: boolean,
    value?: number | string
}

const InputForm: FC<inputLogin> = ({setForm, form, button, check, setCheck, name, keyword, hidden, value}) => {

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
    <div className='form-container__form__item'>
        <p className='form-container__form__item__title'>{name}</p>
        <div className={`form-container__form__item__input ${applyFocus()}`}>
            <input 
                type={hidden ? "hidden" : check ? "text" : "password"} 
                onChange={(e) => {
                    setForm({...form, [keyword as keyof typeof form]: e.target.value});
                }} 
                onFocus={() => setFocus(1)}
                onBlur={(e) => {
                    e.target.value ? setFocus(0) : setFocus(2) 
                }}
                value={value ? value : ""}
                required
            />

            {/*password visibility if button value is set*/}
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