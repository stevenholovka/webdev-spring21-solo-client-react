import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Question from "./questions/question";
import questionsService from "../../services/questions-service"
import quizService from "../../services/quizzes-service";


const Quiz = () => {

    const {quizId} = useParams();
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        questionsService.findQuestionsForQuiz(quizId)
            .then((questions) => setQuestions(questions))
    }, [])

    return (
        <div>
            <h2>Quiz {quizId}</h2>
            <ol className="list-group">
                {
                    questions.map(question =>
                        <li className="list-group-item" key={question._id}>
                            <Question question={question}
                                      quizId={quizId}
                            />
                        </li>
                    )
                }
            </ol>

            <br/>
            <button className="btn btn-primary"
                    onClick={
                        quizService.submitQuiz(quizId, questions)
                    }>
                Submit Quiz
            </button>
        </div>
    )
}

export default Quiz