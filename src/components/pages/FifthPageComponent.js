import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const FifthPageComponent = () => {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/");
  };

  return (
    <div className="bg">
      <div className="px-5 py-5">
        <h1>Yay! You somewhat understand React Routing!</h1>
        <Button variant="success" onClick={handleNext}>
          Go Home
        </Button>{" "}
      </div>
    </div>
  );
};

export default FifthPageComponent;
