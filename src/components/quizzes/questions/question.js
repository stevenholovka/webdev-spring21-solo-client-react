import React from 'react'
import TrueFalseQuestion from "./true-false-question";
import MultipleChoiceQuestion from "./multiple-choice-question";
import quizService from "../../../services/quizzes-service"

const Question = ({quizId, question}) => {

    return (
        <div>
            {
                question.type === "TRUE_FALSE" &&
                <TrueFalseQuestion question={question}
                                   quizId={quizId}
                />
            }
            {
                question.type === "MULTIPLE_CHOICE" &&
                <MultipleChoiceQuestion question={question}
                                        quizId={quizId}
                />
            }

            {/*<button onClick={*/}
            {/*    quizService.submitQuiz(quizId, questions)*/}
            {/*}>*/}
            {/*    Submit Quiz*/}
            {/*</button>*/}

        </div>
    )
}

export default Question