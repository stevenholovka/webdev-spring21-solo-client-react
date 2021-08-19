import React, {useState} from 'react'
import '../../../index.css'
import quizService from "../../../services/quizzes-service"
import EventEmitter from 'eventemitter3'

const MultipleChoiceQuestion = ({quizId, question}) => {

    const [answer, setAnswer] = useState()
    const [submitted, setSubmitted] = useState(false)
    const [correct, setCorrect] = useState(null)

    const answerChange = new EventEmitter()
    const submitAnswer = () =>
        answerChange.emit(answer)


    return (
        <div>
            <h4>
                {question.question} &nbsp;
                {
                    submitted && correct &&
                    <i className="fas fa-check text-success"/>
                }
                {
                    submitted && !correct &&
                    <i className="fas fa-times text-danger"/>
                }
            </h4>
            <ul className="list-group">
                {!submitted &&
                question.choices.map((choice) => {
                    return (
                        <li className={`list-group-item ${choice === answer ? 'active' : ''}`} key={choice}>
                            <label>
                                <input type="radio"
                                       name={question._id}
                                       onClick={() => {
                                           setAnswer(choice)
                                       }}
                                />
                                {choice}
                            </label>
                        </li>
                    )
                })
                }
                {
                    submitted &&
                    question.choices.map((choice) => {
                        return (
                            <li key={choice}
                                className={`list-group-item ${
                                    (choice !== question.correct && choice !== answer) ? ('') : ((choice !== question.correct) ? ('active-red') : ('active-green'))
                                }`}
                            >
                                <label>
                                    <input type="radio"
                                           name={question._id}
                                    />
                                    {
                                        choice !== answer &&
                                        <>
                                            {choice}
                                        </>
                                    }
                                    {
                                        (choice === answer) && correct &&
                                        <>
                                            {choice}
                                            <i className="fas fa-check text-success"/>
                                        </>
                                    }
                                    {
                                        (choice === answer) && !correct &&
                                        <>
                                            {choice}
                                            <i className="fas fa-times text-danger"/>
                                        </>
                                    }
                                </label>
                            </li>
                        )
                    })
                }
            </ul>

            <br/>
            <div>
                Your answer: {answer !== "null" && answer}
                <div>
                    <button className="btn btn-success"
                            onClick={() => {

                                submitAnswer()
                                // quizService.submitQuiz(quizId, question)
                                setSubmitted(true)
                                if (answer === question.correct) {
                                    setCorrect(true)
                                } else {
                                    setCorrect(false)
                                }
                            }}
                    >
                        Submit Answer
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MultipleChoiceQuestion