import React from 'react';
import './plate.css';
import { Link } from 'react-scroll';


const Plate = () => {
    return ( 
        <div className="plateWrapper" id='home'>
            <div className="backgroundImage">
                <div className="text-plate">
                    <p>A small step for humanity,<br/> a Big step for the Enviorment</p>
                </div>
                <div className="button-plate">
                    <li><Link to="download" smooth={true} offset={-80} duration={750}>Download</Link></li>
                </div>
            </div>
        </div>
     );
}
 
export default Plate;