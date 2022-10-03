import React, { FC, useState } from 'react'
import LogInPage from './LogInPage';
import ResetPwd from './ResetPwd';
import {Routes, Route} from "react-router-dom";

const Form : FC = () => {

    const [formPage, setFormPage] = useState<string>("form-login");
    console.log(formPage)

  return (
    <>

    <Routes>
      <Route path="/reset-password" element={<ResetPwd />} />
      <Route path="/login-page" element={<LogInPage/>} />
    </Routes>
    </>
  )
}

export default Form