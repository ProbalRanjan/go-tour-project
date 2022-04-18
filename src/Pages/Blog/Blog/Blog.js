import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='container my-5'>
            <div className='blog'>
                <h2>My Blog</h2>
                <div className="ques-ans">
                    <img src="images/quesnans/qna-1.png" alt="" />
                    <div>
                        <h3> <span>Q1: </span>What are the difference between Authorization vs Authentication?</h3>
                        <p><span>Ans: </span>
                            Difference between Authorization vs Authentication are:
                            <ul>
                                <li>Authorization means what elements a user can access on the website.
                                    <br />
                                    Authentication verifies a user who has already signup on the website.
                                </li>
                                <hr />
                                <li>
                                    Authorization works through setting that are implemented and maintained by the website's organization.
                                    <br />
                                    Authentication works through password, OTP, biometric information and other information provided or input by the user.
                                </li>
                                <hr />
                                <li>
                                    Authorization always takes place after authentication.
                                    <br />
                                    Authentication is the first step of management process.
                                </li>
                                <hr />
                                <li>
                                    Authorization isn't visible to or changeable by the user.
                                    <br />
                                    Authentication is visible to and partially changeable by the user.
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div className="ques-ans">
                    <img src="images/quesnans/qna-2.png" alt="" />
                    <div>
                        <h3> <span>Q2: </span>Why are you using firebase? What other options do you have to implement authentication? </h3>
                        <p><span>Ans: </span>
                            There has been an exception benefits of using Firebase.There are many advantage of firebase app development.
                            <br />
                            For get some benefits on website authentication, I am using Firebase. Benefits are:
                            <ul>
                                <li>Cloud Messaging for Cross-Platform</li>
                                <li>Higher Website Traffic with App Indexing</li>
                                <li>Swift and Secured Web Hosting</li>
                                <li>Higher Accessibility to Machine Learning APIs</li>
                                <li>Crash Reporting for Swift Bugs Fixing</li>
                                <li>Optimized App Performance</li>
                            </ul>
                            <hr />
                            There are many options for implement firebase authentication. Those are:
                            <br />
                            Email Password,
                            Google,
                            Facebook,
                            Twitter,
                            GitHub,
                            Microsoft,
                            Yahoo,
                            Phone Number
                        </p>
                    </div>
                </div>
                <div className="ques-ans">
                    <img src="images/quesnans/qna-3.png" alt="" />
                    <div>
                        <h3> <span>Q3: </span>What other services does firebase provide other than authentication?</h3>
                        <p><span>Ans: </span>Firebase is the world's most popular authentication app. But there are many other option that provides authentication like firebase.
                            <br />
                            Those are:
                            <ul>
                                <li>Parse</li>
                                <li>Back4App</li>
                                <li>AWS Amplify</li>
                                <li>Kuzzle</li>
                                <li>Backendless</li>
                                <li>Supabase</li>
                                <li>Hasura</li>
                                <li>Nhost</li>
                                <li>Deployd</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;