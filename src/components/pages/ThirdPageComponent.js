import React from 'react'
import {Figure, Button} from 'react-bootstrap';
import ichigo from '../../assets/Ichigo.jpg';
import { useNavigate } from 'react-router-dom';

const ThirdPageComponent = () => {

    const navigate = useNavigate();
    const handleNext = () => {
      navigate('/fourth');
    }

  return (
    <div>
      <Figure className='d-flex justify-content-center align-items-center my-5'>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src={ichigo}
      />
      <Figure.Caption>
        This is Ichigo Kurosaki from Bleach!
        <br/>
    <Button variant="danger" onClick={handleNext}>Next</Button>{' '}
      </Figure.Caption>
    </Figure>
    </div>
  )
}

export default ThirdPageComponent
