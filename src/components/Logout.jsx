import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useMeetingContext } from "./context";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { logged, setLogged } = useMeetingContext();
  const navigate = useNavigate();
  const {bgMain, setBgMain} = useMeetingContext();

  function logout() {
    localStorage.clear();
    setLogged(false);
    navigate("/")
  }

  return (
    <>
    <div style={{backgroundImage:bgMain, width:"100vw", height:"100vh", overflow: "hidden"}}>
      <Container>
        <h1 style={{ marginTop: "20px" }}>Logout</h1>
        <br />
        <br />
        <Button onClick={() => logout()}>LogOut</Button>
      </Container>
      </div>
    </>
  );
};

export default Logout;
