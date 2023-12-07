import React, { useState } from 'react';
import { Button, Form, Card } from 'react-bootstrap';
import {Link} from "react-router-dom";

const QuizForm = () => {
    const [answers, setAnswers] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Form submitted with answers: ' + answers.join(', '));
    };

    const handleAnswerChange = (questionIndex, optionIndex) => {
        const updatedAnswers = [...answers];
        updatedAnswers[questionIndex] = optionIndex;
        setAnswers(updatedAnswers);
    };

    const questions = [
        {
            text: 'Question 1 - Translate this: ¿Cómo te llamas?',
            options: ['What is your name?', 'How old are you?', 'What is your favourite colour?', 'Where are you from?'],
        },
        {
            text: 'Question 2: ¿Dónde está la universidad de Carleton?',
            options: ['En Toronto', 'En Nueva York', 'En Madrid', 'En Ottawa'],
        },
        {
            text: 'Question 3: ¿Hablas español?',
            options: ['Sí', 'No', 'Un poco'],
        },
        {
            text: 'Question 4 - Translate this: ¿Cuál es tu color favorito?',
            options: ['What is your name?', 'How old are you?', 'What is your favourite colour?', 'Where are you from?'],
        },

    ];

    return (
        <div>
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
            <div className="container">
                <div className="row">
                    <div className="col-md-auto mx-auto quiz-form">
                        <h2>Quiz</h2>
                            <Form onSubmit={handleSubmit}>
                                {questions.map((question, questionIndex) => (
                                    <Card key={questionIndex} className="mb-3">
                                        <Card.Body>
                                             <br></br>
                                            <Card.Title>{question.text}</Card.Title>
                                            {question.options.map((option, optionIndex) => (
                                            <Form.Check
                                                key={optionIndex}
                                                 type="radio"
                                                 id={`option-${optionIndex}`}
                                                 name={`question-${questionIndex}`}
                                                 label={option}
                                                 checked={answers[questionIndex] === optionIndex}
                                                 onChange={() => handleAnswerChange(questionIndex, optionIndex)}
                                            />
                                            ))}
                                        </Card.Body>
                                    </Card>
                                ))}
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizForm;