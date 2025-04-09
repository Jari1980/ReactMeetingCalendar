import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import axios from "axios";

const Login = () => {


  function handleSubmit(event) {
    event.preventDefault();
    try {
      axios.post("http://localhost:8080/api/v1/project/login", {
        username: event.currentTarget.elements.formUserName.value,
        password: event.currentTarget.elements.formPassword.value,
      })
      const userData = {
        username: event.currentTarget.elements.formUserName.value,
        password: event.currentTarget.elements.formPassword.value
      }
      localStorage.clear()
      event.target.reset()
      localStorage.setItem("userInfo", JSON.stringify(userData))
      localStorage.setItem("username", userData.username)
      localStorage.setItem("password", userData.password)
      
      
    } catch (error) {
      console.log("Error sending message: " + error);
    }
  }

  

  function mmm(){
    alert("This is what I get: " + localStorage.getItem("username"))
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
          <Button onClick={() => mmm()}>What stored in localStorage userInfo</Button>
        </Form>
      </Container>
    </>
  );
};

export default Login;
