import React from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import broccoli2 from "../assets/images/broccoli2.jpg";
import { useMeetingContext } from "./context";


const Home = () => {
  const Navigate = useNavigate();
  const { logged, setLogged } = useMeetingContext();

  function login(){
    Navigate("/login")
  }

  return (
    <Container>
      <h1 style={{marginTop:"20px"}}>This is the great homepage</h1>
      <p>
        If you are logged is you can access the Dashboard from here to manage
        meetings
      </p>
      {logged ? <Button onClick={() => Navigate("/dashboard")}>Dashboard</Button> : <Button onClick={() => login()}>Login</Button>}
      <br />
      <br />
      <br />
      <br />
      <img
        src={broccoli2}
        style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
      ></img>
    </Container>
  );
};

export default Home;
