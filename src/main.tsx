import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HelloWorld } from 'Lesson-0/HelloWorld.tsx'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelloWorld/>
  </React.StrictMode>,
)
