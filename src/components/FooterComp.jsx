import React from 'react';
import { useMeetingContext } from './context';

const FooterComp = () => {
    const {background, setBackground} = useMeetingContext();

    return (
        <div className='text-center p-3' id="footerDiv" style={{position: "fixed", bottom: "0", width: "100%", background: background}}>
            {background === "#212529" ? 
            <span id='footerText' style={{color:"white"}}>© 2025 Jari Do React</span>
            :
            <span id='footerText' style={{color:"black"}}>© 2025 Jari Do React</span>
            }
        </div>
    );
};

export default FooterComp;