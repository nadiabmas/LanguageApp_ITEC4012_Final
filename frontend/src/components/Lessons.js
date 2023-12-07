import React from 'react';
import {Link} from "react-router-dom";
import './Lessons.css';
import { Dropdown } from 'react-bootstrap';

class Lessons extends React.Component {
    render() {
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
                        <Link to="/lessons" className="breadcrumb-item active" aria-current="page">Lessons</Link>
                    </nav>
                </nav>
                <h2>Lesson</h2>
                <Dropdown className="lessons-dropdown">
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Lessons
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Lesson 1</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Lesson 2</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Lesson 3</Dropdown.Item>
                        <Dropdown.Item href="#/action-4">Lesson 4</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        );
    }
}

export default Lessons;