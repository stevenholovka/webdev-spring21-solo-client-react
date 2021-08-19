import React, {useState, useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import quizzesService from "../../services/quizzes-service"

const QuizzesList = () => {

    const [quizzes, setQuizzes] = useState([]);

    const {courseId} = useParams();

    useEffect(() => {
        quizzesService.findAllQuizzes()
            .then((quizzes) => {
                setQuizzes(quizzes)
            })
    }, [])

    return (
        <div>
            <h2>Quizzes</h2>
            <div className="list-group">
                {
                    quizzes.map((quiz) => {
                        return (
                            <div>
                                <Link to={`/courses/${courseId}/quizzes/${quiz._id}`}
                                      className="list-group-item">
                                    {quiz.title}
                                <button className="float-right btn btn-primary" >
                                    Start
                                </button>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default QuizzesList