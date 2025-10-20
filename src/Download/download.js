import './download.css';
import iphoneImg from '../Assets/ecodive-iphone-display.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';


const Download = () => {
    return ( 
        <div className="download-wrapper" id='download'>

            <div className="download-content">
                <div className="download-content-info">
                    <p>
                        Dive Smarter, Dive Greener!<br/> Download our app today and revolutionize the way <br/> you manage your dives.<br/>
                        Say goodbye to paper logs and hello to a <br/>sustainable, digital dive log accessible anytime,<br/> anywhere.<br/> 
                        Stay organized, get reminders for dives and <br/>insurance renewals, and connect with top diving<br/> clubs - all from the convenience of your phone.<br />
                        Your journey to a cleaner ocean starts here.
                    </p>

                </div>
                <div className="download-content-title">
                        <h1>Download now !</h1>
                    </div>
                <div className="download-content-links">

                    <div className='download-content-link-appstore'>
                        <a href="https://apps.apple.com/il/app/ecodive/id6753789848EcoDive">
                        For Iphone 
                        <FontAwesomeIcon icon={faApple} size="2x" style={{marginLeft: '15px', marginBottom: '5px'}} /></a>
                        
                    </div>
                    <div className='download-content-link-googleplay'>
                        <a href="/">For Android <FontAwesomeIcon icon={faGooglePlay} size="2x" style={{marginLeft: '15px', marginBottom: '5px'}}/></a>
                        
                    </div>
                </div>
            </div>

            <div className="download-wrapper-device">
                <img src={iphoneImg} alt="Application On The Iphone" />
            </div>

        </div>
     );
}
 
export default Download;