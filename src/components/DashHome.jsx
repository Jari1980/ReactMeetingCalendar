import React from 'react';
import broccoli3 from '../assets/images/broccoli3.jpg'

const DashHome = () => {
    return (
        <div style={{alignItems:'center'}}>
        <h1>Dashboard Home</h1>
        <br />
        <br />
        <br />
        <br />
        <img src={broccoli3} style={{display:'block', marginLeft:"auto", marginRight:"auto"}}></img>
        </div>
    );
};

export default DashHome;