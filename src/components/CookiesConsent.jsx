import React from 'react';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { Button } from 'react-bootstrap';
import "../stylesheet.css";

const CookiesConsent = () => {
    const [cookies, setCookie] = useCookies(["cookieConsent"])

    const giveCookieConsent = () => {
        setCookie("cookieConsent", true, { path: "/"})
    }

    return (
        <div id='consentBox'>
            <h4>CookieConsent</h4>
            <p>In order to have this application running, my host Azure is using essential cookies, beside that this is the only cookie I use.</p>
            <Button onClick={giveCookieConsent} style={{marginRight:"20px"}}>Accept</Button>
            <Button onClick={() => {location.href = 'https://www.google.com/'}}>Go somewhere else</Button>
        </div>
    );
};

export default CookiesConsent;