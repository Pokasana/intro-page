// eslint-disable-next-line no-unused-vars
import React from 'react'
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from './App.jsx'
import './index.css'
import 'virtual:uno.css'

const container = document.getElementById("root");
const root = createRoot(container);


root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
