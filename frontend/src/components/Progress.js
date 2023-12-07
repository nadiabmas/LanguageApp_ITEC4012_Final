import React, { useState } from 'react';
import './Progress.css';
import {Link} from "react-router-dom";

function ProgressBar() {
    const [lessonsCompleted, setLessonsCompleted] = useState(4);
    const [quizScore, setQuizScore] = useState(75);

    return (
        <div className="lesson">
            <h1 className="title-page">ANNEX
                <Link to="/">
                    <button className="sign-out-button">Sign Out</button>
                </Link>
            </h1>
            <nav aria-label="breadcrumb">
                <nav className="breadcrumb">
                    <Link to="/">Home / </Link>
                    <Link to="/dashboard">Dashboard / </Link>
                    <Link to="/progress" className="breadcrumb-item active" aria-current="page">Progress</Link>
                </nav>
            </nav>

            <div className="progress-container">
                <h2>Course Progress:</h2>
                <div className="progress-bar">
                    <div
                        className="progress-bar-fill"
                        style={{ width: `${(lessonsCompleted / 10) * 100}%` }}
                    ></div>
                </div>
                <p>Completed Lessons: {lessonsCompleted}</p>
                <p>Quiz Score: {quizScore}</p>
            </div>
        </div>
    );
}

export default ProgressBar;