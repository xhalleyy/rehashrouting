import React from 'react'
import nanami from '../../assets/nanami.jpg'
import {Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const HomePageComponent = () => {
    const navigate = useNavigate();
    const handleNext = () => {
      navigate('/second');
    }
  return (
    <div>
        <h1 className='text-center'>Hello! Welcome to the Home Page.</h1>
        <div className='d-flex justify-content-center mb-3'>
            <Button variant="info" onClick={handleNext}>Next</Button>{' '}
        </div>
        <div className='d-flex justify-content-center'>
            <img src={nanami} alt='Nanami'/>
        </div>
    </div>
  )
}

export default HomePageComponent
