import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => {
    return (
        <>
        <Container>
            <h1>About this page</h1>
            <br />
            <br />
            <p>This is a Lexicon/Växjö school project done by me. What you see is a single page application SPA where front end is done with React JS and backend with Java Spring Rest API connected to mySQL database.
            </p>
            <p>The main goal off this application is to have a super user who needs to log in and after he/she can see and manage meetings.
            </p>
            <p>
                <b>Main frontend techniques in this project:</b>
                <li>Bootstrap (combiniation of vanilla and React)</li>
                <li>Form</li>
                <li>Table</li>
                <li>Hooks (state, context)</li>
                <li>Axios</li>
                <li>Router</li>
            </p>
        </Container>
        </>
    );
};

export default About;