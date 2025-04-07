import React, { useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";


const Contact = () => {

    
    function handleSubmit(event) {
        event.preventDefault()
        console.log(event.currentTarget.elements.formName.value + "mmm")
        console.log(event.currentTarget.elements.formEmail.value)
        console.log(event.currentTarget.elements.formMessage.value)
        console.log(event.currentTarget.elements.formCheckbox.checked)

        event.target.reset()
    }

  return (
    <>
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
    </>
  );
};

export default Contact;
