import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './routes/Home.js';
import News from './routes/News';
import Login from './routes/Login';
import Register from './routes/Register';
import Sidenav from './Sidenav';
import Download from './routes/Download';
import { Box, CssBaseline, Container } from '@mui/material';
//import MainContext from './Context/MainContext.js';
//import { useContext } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
//const data = useContext(MainContext);

root.render(
  <React.StrictMode>
  <CssBaseline />
    <Box disableGutter sx={{display:{xl:'flex', lg:'flex', md:'flex' , sm:'block', xs:'block'}}}>
    <BrowserRouter>
    <Sidenav />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/News" element={<News />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Download" element={<Download />} />
      </Routes>
    </BrowserRouter>
    </Box>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
