import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';
import '../src/Resources/css/app.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>  
  )
}
ReactDOM.render(<App />, document.getElementById('root'));