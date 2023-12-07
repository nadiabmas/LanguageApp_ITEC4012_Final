import React from 'react';

class Quiz extends React.Component {
    render() {
        const { quiz } = this.props;
        return (
            <div className="quiz">
                <h2>{quiz.title}</h2>
                <p>{quiz.description}</p>
            </div>
        );
    }
}

export default Quiz;