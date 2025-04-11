import React from 'react';
import { Container } from 'react-bootstrap';
import { useMeetingContext } from './context';

const About = () => {
    const {bgMain, setBgMain} = useMeetingContext();
    return (
        <>
        <div style={{backgroundImage:bgMain, width:"100vw", height:"100vh", overflow: "hidden"}}>
        <Container>
            <h1 style={{marginTop:"20px"}}>About this page</h1>
            <br />
            <br />
            <p>This is a Lexicon/Växjö school project done by me. What you see is a single page application SPA where front end is done with React JS and backend with Java Spring Rest API connected to mySQL database.
            </p>
            <p>The main goal off this application is to have a super user who needs to log in and after he/she can see and manage meetings.
            </p>
            <br />
            <p>
                <b>Main frontend techniques in this project:</b>
                <br />
                <li>Bootstrap (combiniation of vanilla and React)</li>
                <li>Form</li>
                <li>Table</li>
                <li>Hooks (state, context)</li>
                <li>Axios</li>
                <li>Router</li>
            </p>
        </Container>
        </div>
        </>
    );
};

export default About;