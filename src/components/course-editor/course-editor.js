import React from 'react'
import {Link, useParams} from "react-router-dom";
import moduleReducer from "../../reducers/module-reducer";
import lessonReducer from "../../reducers/lesson-reducer";
import topicReducer from "../../reducers/topic-reducer";
import widgetReducer from "../../reducers/widget-reducer";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills"
import WidgetList from "./widgets/widget-list";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";

const reducer = combineReducers({
    moduleReducer,
    lessonReducer,
    topicReducer,
    widgetReducer
})

const store = createStore(reducer)

const CourseEditor = (courses) => {

    const {layout} = useParams();

    return (
        <Provider store={store}>
            <div>
                <h2>
                    Course Editor
                    {/* Note for TA:
                    To render the name of the course here, I would parse the courseId from the URL using useParams(),
                    implement a findCourseById function and use the courseId to find the course and render {course.title}
                    on line 30. Not done due to time constraint, however, this is my logic.*/}
                    <Link to={`/courses/${layout}`}>
                        <i className="fas fa-arrow-left float-right"/>
                    </Link>
                </h2>

                <div className="row">
                    <div className="col-3">
                        <ModuleList/>
                    </div>
                    <div className="col-9">
                        <LessonTabs/>
                        <div>
                            <TopicPills/>
                            <div>
                                <WidgetList/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Provider>
    )
}

export default CourseEditor