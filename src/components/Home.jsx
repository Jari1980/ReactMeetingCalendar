import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const Navigate = useNavigate();
    return (
        <Container>
            <h1>This is the great homepage</h1>
            <p>As of now, you can access to Dashboard from here to manage meetings</p>
            <Button onClick={() => Navigate("/dashboard")}>Dashboard</Button>
        </Container>
    );
};

export default Home;