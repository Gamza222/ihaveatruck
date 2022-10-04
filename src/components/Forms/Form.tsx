import React, { FC, useState } from 'react'
import LogInPage from './LogInPage';
import ResetPwd from './ResetPwd';
import {Routes, Route} from "react-router-dom";
import { ILoginUser } from 'components/assets/types';

interface FormProps {
  login: ILoginUser
  setLogin: React.Dispatch<React.SetStateAction<ILoginUser>>
}

const Form : FC<FormProps> = ({login, setLogin}) => {

  return (
    <>
      <Routes>
        <Route path="/reset-password" element={<ResetPwd />} />
        <Route path="/" element={<LogInPage login={login} setLogin={setLogin} />} />
      </Routes>
    </>
  )
}

export default Form