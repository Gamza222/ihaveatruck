import React, {useState} from 'react';
import './App.css';
import Form from './components/Forms/Form';
import {
  HashRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { ILoginUser } from 'components/assets/types';

function App() {

  //state for check logged user or not
  const [login, setLogin] = useState<ILoginUser>({
    id: 0,
    role_id: 0,
    email: "",
    first_name: "",
    last_name: "",
    is_active: 0,
    created_at: 0,
    updated_at: 0,
    access_token: ""
  })

  return (
    <Router>
      <Form login={login} setLogin={setLogin} />
    </Router>
  );
}

export default App;
