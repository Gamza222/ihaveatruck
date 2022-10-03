import React from 'react';
import './App.css';
import Form from './components/Forms/Form';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Form />
    </Router>
  );
}

export default App;
