import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import broccoli2 from '../assets/images/broccoli2.jpg'


const Home = () => {
    const Navigate = useNavigate();
    return (
        <Container>
            <h1>This is the great homepage</h1>
            <p>As of now, you can access the Dashboard from here to manage meetings</p>
            <Button onClick={() => Navigate("/dashboard")}>Dashboard</Button>
            <br />
                    <br />
                    <br />
                    <br />
                    <img src={broccoli2} style={{display:'block', marginLeft:"auto", marginRight:"auto"}}></img>
        </Container>
    );
};

export default Home;