import React, {useState} from 'react'
import '../../../index.css'
import EventEmitter from 'eventemitter3'

const TrueFalseQuestion = ({question}) => {

    const [answer, setAnswer] = useState("")
    const [submitted, setSubmitted] = useState(false)
    const [correct, setCorrect] = useState(null)

    const answerChange = new EventEmitter()
    const submitAnswer = () =>
        answerChange.emit(answer)


    return (
        <div>
            <h4>
                {question.question}
                {
                    submitted && correct &&
                    <i className="fas fa-check text-success"/>
                }
                {
                    submitted && !correct &&
                    <i className="fas fa-times text-danger"/>
                }
            </h4>

            {!submitted &&
            <ul className="list-group">
                <li className={`list-group-item ${answer === "true" ? 'active' : ''}`} key={true}>
                    <label>
                        <input type="radio"
                               name={question._id}
                               onClick={() => setAnswer("true")}
                        />
                        True
                    </label>
                </li>
                <li className={`list-group-item ${answer === "false" ? 'active' : ''}`} key={false}>
                    <label>
                        <input type="radio"
                               name={question._id}
                               onClick={() => setAnswer("false")}
                        />
                        False
                    </label>
                </li>
            </ul>
            }
            {
                submitted &&
                <ul className="list-group">
                    <li key={true}
                        className={`list-group-item ${
                            (answer === "true" && correct) ? ('active-green') : (answer === "true" && !correct) ? ('active-red') : ''}`}
                    >
                        <label>
                            <input type="radio"
                                   name={question._id}
                            />
                            {
                                answer === "true" && correct &&
                                <>
                                    True
                                    <i className="fas fa-check float-right text-success"/>
                                </>
                            }
                            {
                                answer === "true" && !correct &&
                                <>
                                    True
                                    <i className="fas fa-times float-right text-danger"/>
                                </>
                            }
                            {
                                answer === "false" &&
                                <>
                                    True
                                </>
                            }
                        </label>
                    </li>
                    <li key={false}
                        className={`list-group-item ${answer === "false" && correct ? 'active-green' : answer === "false" && !correct ? 'active-red' : ''}`}
                    >
                        <label>
                            <input type="radio"
                                   name={question._id}
                            />
                            {
                                answer === "true" &&
                                <>
                                    False
                                </>
                            }
                            {
                                answer === "false" && correct &&
                                <>
                                    False
                                    <i className="fas fa-check float-right text-success"/>
                                </>
                            }
                            {
                                answer === "false" && !correct &&
                                <>
                                    False
                                    <i className="fas fa-times float-right text-danger"/>
                                </>
                            }
                        </label>
                    </li>
                </ul>

            }

            <br/>
            <div>
                Your answer: {answer !== "" && answer}

                <div>
                    <button className="btn btn-success"
                            onClick={() => {

                                submitAnswer()

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

export default TrueFalseQuestion