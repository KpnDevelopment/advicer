import axios from "axios";
import React, { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";

import "./App.css";

function App() {
  const [advice, setAdvice] = useState("Click the button");

  const fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        console.log(response.data.slip.advice);
        setAdvice(response.data.slip.advice);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="App">
      <Card
        className="card"
        style={{
          width: "50rem",
          alignItems: "center",
          padding: "3rem",
        }}
      >
        <h1>" {advice} "</h1>
        <Button style={{ width: "10rem", margin: "1rem" }} onClick={fetchAdvice}>
          Get Advice
        </Button>
      </Card>
    </div>
  );
}

export default App;
