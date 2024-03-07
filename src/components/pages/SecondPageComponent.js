import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import geto from '../../assets/geto.jpg';
import { useNavigate } from 'react-router-dom';

const SecondPageComponent = () => {

    const navigate = useNavigate();
    const handleNext = () => {
      navigate('/third');
    }

  return (
    <div className='d-flex justify-content-center my-5'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={geto} />
      <Card.Body>
        <Card.Title>Geto Suguru</Card.Title>
        <Card.Text>
          This is the second page!
        </Card.Text>
        <Button variant="primary" onClick={handleNext}>Go Next</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default SecondPageComponent

