import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import lessonActions from "../../actions/lesson-actions";

const LessonTabs = (
    {
        lessons = [],
        createLessonForModule,
        deleteLesson,
        findLessonsForModule,
        updateLesson
    }
) => {

    const {layout, courseId, moduleId, lessonId} = useParams();

    useEffect(() => {
        if (moduleId !== "undefined" && typeof moduleId !== "undefined") {
            findLessonsForModule(moduleId)
        }
    }, [moduleId])

    return (
        <div>
            <h2>Lessons</h2>
            <ul className="nav nav-tabs">
                {
                    lessons.map(lesson =>
                        <li key={lesson._id} className="nav nav-item">
                            <EditableItem to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                                          active={lesson._id === lessonId}
                                          deleteItem={deleteLesson}
                                          item={lesson}
                                          updateItem={updateLesson}
                            />
                        </li>
                    )
                }
                <li>
                    <i onClick={() => createLessonForModule(moduleId)}
                       className="fas fa-2x fa-plus float-right"/>
                </li>
            </ul>
        </div>
    )
}

const stpm = (state) => ({
    lessons: state.lessonReducer.lessons
})

const dtpm = (dispatch) => ({

    createLessonForModule: (moduleId) =>
        lessonActions.createLessonForModule(dispatch, moduleId),

    deleteLesson: (item) =>
        lessonActions.deleteLesson(dispatch, item),

    findLessonsForModule: (moduleId) =>
        lessonActions.findLessonsForModule(dispatch, moduleId),

    updateLesson: (lesson) =>
        lessonActions.updateLesson(dispatch, lesson)
})

export default (connect(
        stpm,
        dtpm)
    (LessonTabs)
)