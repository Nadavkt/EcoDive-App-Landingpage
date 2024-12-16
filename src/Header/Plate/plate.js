import React from 'react';
import './plate.css';


const Plate = () => {
    return ( 
        <div className="plateWrapper">
            <div className="backgroundImage">
                <div className="text-plate">
                    <p>A small step for humanity,<br/> a Big step for the Enviorment</p>
                </div>
                <div className="button-plate">
                    <a href='/'>Download</a>
                </div>
            </div>
        </div>
     );
}
 
export default Plate;