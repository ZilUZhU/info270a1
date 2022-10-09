import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyCS-8l0whqAOODU7US5ex1hZ4FfoE7WDDA",
  authDomain: "info270a1.firebaseapp.com",
  projectId: "info270a1",
  storageBucket: "info270a1.appspot.com",
  messagingSenderId: "114903139883",
  appId: "1:114903139883:web:2de94ffb7ea24283684c6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
