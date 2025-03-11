import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TestimonialCard from "./components/TestimonialCard.jsx"

function App(props) {

  return (
    <div>
      props.map(Name, Review)
      <TestimonialCard Name="Emily Watson" Review="This service was amazing! Highly recommended."/> 
       <TestimonialCard Name="George" Review="This service was amazing! Highly recommended."/>
      </div>
  );
}
export default App;