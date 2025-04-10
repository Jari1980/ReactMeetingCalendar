import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useMeetingContext } from "./context";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { logged, setLogged } = useMeetingContext();
  const navigate = useNavigate();

  function logout() {
    localStorage.clear();
    setLogged(false);
    navigate("/")
  }

  return (
    <>
      <Container>
        <h1 style={{ marginTop: "20px" }}>Logout</h1>
        <br />
        <br />
        <Button onClick={() => logout()}>LogOut</Button>
      </Container>
    </>
  );
};

export default Logout;
