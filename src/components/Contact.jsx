import React, { useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useMeetingContext } from './context';


const Contact = () => {
  const {bgMain, setBgMain} = useMeetingContext();

    
    function handleSubmit(event) {
        event.preventDefault()
        try{
            axios
        .post("http://localhost:8080/api/v1/project/contact", {
          name: event.currentTarget.elements.formName.value,
          message: event.currentTarget.elements.formMessage.value,
          email: event.currentTarget.elements.formEmail.value,
          broccoli: event.currentTarget.elements.formCheckbox.checked,
        },
        {
          auth: {
            username: localStorage.getItem("username"),
            password: localStorage.getItem("password"),
          },
        })
        event.target.reset()
        alert("Thanks for the message")
        }
        catch(error){
            console.log("Error sending message: " + error)
        }
    }

  return (
    <>
    <div style={{backgroundImage:bgMain, width:"100vw", height:"100vh", overflow: "hidden"}}>
      <Container>
        <h1 style={{ marginTop: "20px" }}>Contact form</h1>
        <br />
        <br />
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Write something" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formCheckbox">
            <Form.Check type="checkbox" label="I love Broccoli" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Send me a mail
          </Button>
        </Form>
      </Container>
      </div>
    </>
  );
};

export default Contact;
