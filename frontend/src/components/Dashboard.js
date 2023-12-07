import React from 'react';
import {Link} from 'react-router-dom';
import './Dashboard.css';
import DashboardPicture from './Dashboard_picture.png';
import '/Users/nadiamas/WebstormProjects/sign-in-react-trial/src/App.js';

const Dashboard = () => {
    return (
        <div className="dashboard-page">
            <h1 className="title-page">ANNEX
            <Link to="/">
                <button className="sign-out-button">Sign Out</button>
            </Link>
            </h1>
            <div className="dashboard-container">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="title-2">Dashboard</h2>
                        <div className="container-body">
                            <h3 className="description-text">Hi, Nadia. Welcome to your Dashboard!</h3>
                            <div className="button-container">
                                <Link to="/lessons">
                                    <button className="lessons-button">Lessons</button>
                                </Link>
                                <Link to="/quizzes">
                                    <button className="quizzes-button">Quizzes</button>
                                </Link>
                                <Link to="/progress">
                                    <button className="progress-button">Progress</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dashboard-picture-container">
                    <img src={DashboardPicture} className="dashboard-img" alt="Dashboard student character design" />
                </div>
            </div>
        </div>
    );
};


export default Dashboard;