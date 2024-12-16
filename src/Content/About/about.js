import './about.css';

const About = () => {
    return ( 
        <div className="about-wrapper">
            <h1 className="about-title">
                Dive into the Digital Age with Our Eco -<br/> Friendly Dive Log App
            </h1>
            <p className="about-explanation">
                Are you tired of managing heaps of paperwork to document your dives or rent equipment? It's time to make a change that benefits both you and the environment. Our revolutionary app allows divers and diving clubs to transition from paper to a digital dive log—accessible anytime, anywhere, directly from your phone.
                As passionate advocates for ocean conservation, divers strive to keep our waters as clean as possible. By eliminating the need for paper logs and forms, we reduce environmental pollution caused by paper production. Embrace a sustainable solution that aligns with your commitment to the environment.
                With our app, you can:
            </p>
            <ul className="about-dots">
                <li>
                    Manage All Your Dives Digitally: Keep an organized, 
                    digital record of your dive history complete with stamps and certifications.
                </li>
                <li>
                    Receive Timely Reminders: Get notifications for upcoming dives and alerts when your dive insurance needs renewal.
                </li>
                <li>
                    Write and Read Reviews of Diving Clubs: Share your experiences and help others choose the best diving spots and services.
                </li>
            </ul>
            <p className="about-finishline">
                Make the leap into a more efficient and eco-friendly diving experience.<br /> Join us in taking a step forward for humanity and a giant leap for the environment.<br />
                 Dive smarter, dive greener!
            </p>

        </div>
     );
}
 
export default About;