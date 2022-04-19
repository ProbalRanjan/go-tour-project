import { faCrosshairs } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <div className='container my-5'>
            <h2 className='about-title'>ABOUT ME</h2>
            <div className="about-me">
                <img src="images/about/about-me.png" alt="" />
                <div>
                    <div>
                        <h3 className='about-name'>Probal Ranjan Paul</h3>
                        <p>This is Probal, a newbie learner of web development. Just in a track to complete my goal fullfil.</p>
                    </div>

                    <div>
                        <h4>
                            <FontAwesomeIcon className='me-2 fs-5' icon={faCrosshairs}></FontAwesomeIcon>
                            About Goal
                        </h4>
                        <p>Now just learning the basic fundamentals and advance programming to complete my web development course. Want to learn the core concepts of web programming to become a junior web developer. There have many difficulties to achieve anything. But I will try my best to become a web developer and will follow my track.</p>
                    </div>

                    <div>
                        <h4>
                            <FontAwesomeIcon className='me-2 fs-5' icon={faCrosshairs}></FontAwesomeIcon>
                            How you will work hard to achieve your goal?
                        </h4>
                        <p>To achieve a goal is not easy to got. There are many difficulties in path and come many hand times. But I think to follow a proper guideline, anyone can achieve goal. So, I decided to achieve my goal at any cost.
                            <br />
                            To become a web developer need to learn the core concepts of programming. There is no other option to skip this core concepts. However its easy or difficult, I will practice more and more. It will take many time as expected but I will never hold and skip problems.
                        </p>
                    </div>
                </div>
                <div>
                </div>
            </div>

        </div>
    );
};

export default AboutMe;