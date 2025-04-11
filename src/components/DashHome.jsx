import React from 'react';
import broccoli3 from '../assets/images/broccoli3.jpg'
import { useMeetingContext } from "./context";

const DashHome = () => {
    const {bgMain, setBgMain} = useMeetingContext();
    return (
        <div style={{alignItems:'center'}}>
        <h1>Dashboard Home</h1>
        <br />
        <br />
        <br />
        <br />
        <img src={broccoli3} style={{display:'block', marginLeft:"auto", marginRight:"auto", mixBlendMode:"multiply"}}></img>
        </div>
    );
};

export default DashHome;