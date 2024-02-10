import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'font-awesome/css/font-awesome.min.css'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.bundle.js'
import reportWebVitals from './reportWebVitals';
import Post from './Post'
// import {BrowserRouter, Route, Routes} from './BrowserRouter'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './Signup';
import Spotify from './Spotify';
import Music from './Music';
import Playmusics from './Playmusics';
import Formik  from './Formik';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path ='/Home' element={ <App />}/>
      <Route path ='/Sign' element={ <Signup />}/>
      <Route path ='/musics' element={ <Music />}/>
      <Route path ='/posts' element={ <Post />}/>
      <Route path ='/formik' element={ <Formik />}/>
      <Route path ='/spotify/:id' element={ <Spotify />}/>
      <Route path ='/playmusic/:id' element={ <Playmusics />}/>
    </Routes>
 
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
