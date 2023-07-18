import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HelloWorld } from 'Lesson-0/HelloWorld.tsx';
import { Fragments } from 'Lesson-0/Fragments.tsx'
import { Arrays } from 'Lesson-0/JSX/Arrays.tsx';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Arrays/>
  </React.StrictMode>,
)
