import React from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import broccoli2 from "../assets/images/broccoli2.jpg";
import { useMeetingContext } from "./context";


const Home = () => {
  const Navigate = useNavigate();
  const { logged, setLogged } = useMeetingContext();
  const {background, setBackground} = useMeetingContext();
  const {bgMain, setBgMain} = useMeetingContext();

  function login(){
    Navigate("/login")
  }

  return (
    <div style={{backgroundImage:bgMain, width:"100vw", height:"100vh", overflow: "hidden"}}>
    <Container>
      <h1 style={{marginTop:"20px"}}>Meeting Calendar </h1>
      <br />
      {logged ? 
      <div>
        <p>As always take a moment and admire the Broccoli before proceeding to Dashboard</p>
      <Button onClick={() => Navigate("/dashboard")}>Dashboard</Button></div> 
      : 
      <div>
        <p>In order to access Dashboard and manage meetings you need to login.</p>
        <Button onClick={() => login()}>Login</Button>
        </div>
        }
      <br />
      <br />
      <br />
      <br />
      <img
        src={broccoli2}
        style={{ display: "block", marginLeft: "auto", marginRight: "auto", mixBlendMode:"multiply" }}
      ></img>
    </Container>
    </div>
  );
};

export default Home;
