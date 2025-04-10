import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import axios from "axios";
import { useMeetingContext } from "./context";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const {logged, setLogged} = useMeetingContext();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const userData = {
      username: event.currentTarget.elements.formUserName.value,
      password: event.currentTarget.elements.formPassword.value,
    };
    try {
      axios.get("http://localhost:8080/api/v1/project/authenticate", {
        auth: {
          username: event.currentTarget.elements.formUserName.value,
          password: event.currentTarget.elements.formPassword.value,
        },
      })
      .then((response) => {
        if(response.data == true){
          setLogged(true)

          //localStorage.clear();
          event.target.reset();
          localStorage.setItem("userInfo", JSON.stringify(userData));
          localStorage.setItem("username", userData.username);
          localStorage.setItem("password", userData.password);
          
          navigate("/")
          
        }
        else{
          localStorage.clear();
          event.target.reset();
          setLogged(false)
        }
      });
    } catch (error) {
      console.log("Error sending message: " + error);
    }
  }


  return (
    <>
      <Container>
        <h1 style={{ marginTop: "20px" }}>Login</h1>
        <br />
        <br />
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formUserName">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            LogIn
          </Button>
          <br />
          <br />
          <br />
          <h2>Status: {logged ? "You are logged in" : "Not logged in"}</h2>
        </Form>
      </Container>
    </>
  );
};

export default Login;
