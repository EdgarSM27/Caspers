import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { initializeApp } from "firebase/app";


initializeApp({
  apiKey: "AIzaSyC_wCxDMcYWb1RMRAAgx5BadXhF66K_vsc",
  authDomain: "e-commerce-vasquezloreto.firebaseapp.com",
  projectId: "e-commerce-vasquezloreto",
  storageBucket: "e-commerce-vasquezloreto.appspot.com",
  messagingSenderId: "877413321823",
  appId: "1:877413321823:web:ba50601dae1567de26dfea"
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
