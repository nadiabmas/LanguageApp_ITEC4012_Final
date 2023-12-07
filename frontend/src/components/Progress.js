import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import {Link} from "react-router-dom";

class Progress extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quizzesAnswered: 3,
            lessonsTaken: 5,
        };
    }

    render() {
        const quizzesAnswered = 2;
        const lessonsTaken = 3;
        const totalQuizzes = 3;
        const totalLessons = 5;
        const quizzesProgress = (quizzesAnswered / totalQuizzes) * 100;
        const lessonsProgress = (lessonsTaken / totalLessons) * 100;

        return (
            <div className="progress">
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
                <h2>Progress</h2>
                <ProgressBar now={quizzesProgress} label={`${quizzesAnswered} / ${totalQuizzes} Quizzes Answered`} />
                <ProgressBar now={lessonsProgress} label={`${lessonsTaken} / ${totalLessons} Lessons Taken`} />
            </div>
        );
    }
}

export default Progress;