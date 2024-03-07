import React from 'react'
import gojo from '../../assets/gojou-miguel.gif';
import { useNavigate } from 'react-router-dom';
import {Button} from 'react-bootstrap'

const FourPageComponent = () => {

  const navigate = useNavigate();
  const handleNext = () => {
    navigate('/fifth');
  }

  return (
    <div className='text-center'>
      <h1>This is the Fourth Page!</h1>
      <h2>Here's a gif of Gojo</h2>
      <div className='d-flex justify-content-center'>
      <img alt='Gojo and Miguel' src={gojo}/>
      </div>
      <Button variant="primary" onClick={handleNext}>Go Next</Button>
    </div>
  )
}

export default FourPageComponent
