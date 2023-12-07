import React, {Component} from 'react';
import './App.css'
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import SignInPicture from './Sign-in-picture.png'
import Dashboard from './components/Dashboard';
import Lessons from './components/Lessons';
import Quizzes from './components/Quizzes';
import Progress from './components/Progress';

const SignInPage = () => (
    <div className="SignInPage">
        <h1>ANNEX</h1>
        <div className="container">
            <div className="sign-in-container">
                <div className="row">
                    <div className="col-md-6">
                        <h3>A LANGUAGE LEARNING PLATFORM</h3>
                        <h2>Welcome to Annex!</h2>
                        <p>Please sign in to access all the language-learning tools.</p>
                        <label htmlFor="email" className="username-text">Username:
                            <input type="email" id="username" name="username" className="input-field" />
                            <p id="email-error" className="error-message"></p>
                        </label>
                        <br></br>
                        <br></br>
                        <label htmlFor="password" className="password-text">Password:
                            <input type="password" id="password" name="password" className="input-field" />
                            <p id="email-error" className="error-message"></p>
                        </label>
                        <br></br>
                        <br></br>
                        <Link to="/dashboard">
                            <button>Sign In</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="sign-in-picture-container">
                <img src={SignInPicture} alt="Sign in student character design" />
            </div>
        </div>
    </div>
);

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Routes>
                        <Route exact path="/" element={<SignInPage />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/lessons" element={<Lessons />} />
                        <Route path="/quizzes" element={<Quizzes />} />
                        <Route path="/progress" element={<Progress />} />
                    </Routes>
                </div>
            </Router>
        );
    }
}

export default App;
