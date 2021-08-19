import React from 'react'
import CourseTable from "./course-table/course-table";
import CourseGrid from "./course-grid/course-grid";
import CourseEditor from "./course-editor/course-editor";
import QuizzesList from "./quizzes/quizzes-list";
import Quiz from "./quizzes/quiz";
import {Link, Route} from 'react-router-dom'
import courseService, {findAllCourses} from "../services/course-service";

class CourseManager
    extends React.Component {

    state = {
        courses: [],
    }

    componentDidMount = () => findAllCourses()
        .then(courses => this.setState({courses}))

    addCourse = () => {
        const newCourse = {
            title: "New Course",
            owner: "New Owner",
            lastModified: "Never"
        }

        courseService.createCourse(newCourse)
            .then(course =>
                this.setState((prevState) => ({
                    ...prevState,
                    courses: [
                        course,
                        ...prevState.courses
                    ]
                })))
    }

    deleteCourse = (courseToDelete) =>
        courseService.deleteCourse(courseToDelete._id)
            .then(status => {
                this.setState((prevState) => ({
                    ...prevState,
                    courses: prevState.courses.filter
                    (course => course !== courseToDelete)
                }))
            })

    updateCourse = (course) =>
        courseService.updateCourse(course._id, course)
            .then(status => {
                this.setState((prevState) => ({
                    ...prevState,
                    courses: prevState.courses.map(
                        (c) => c._id === course._id ? course : c)
                }))
            })

    render() {
        return (
            <div>
                <Link to="/">
                    <i className="fas fa-2x fa-home float-right"/>
                </Link>

                <h1>Course Manager</h1>

                <Route path="/courses/table"
                       exact={true}>
                    <CourseTable courses={this.state.courses}
                                 deleteCourse={this.deleteCourse}
                                 updateCourse={this.updateCourse}/>
                </Route>

                <Route path="/courses/grid"
                       exact={true}>
                    <CourseGrid deleteCourse={this.deleteCourse}
                                courses={this.state.courses}/>
                </Route>

                <Route path={[
                    "/courses/:layout/edit/:courseId/",
                    "/courses/:layout/edit/:courseId/modules/:moduleId",
                    "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId",
                    "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId",
                    "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId/widgets/:widgetId"]}
                       exact={true}
                       render={() =>
                           <CourseEditor courses={this.state.courses}/>}>
                </Route>

                <Route path={[
                    "/courses/:courseId/quizzes"]}
                       exact={true}
                >
                    <QuizzesList/>
                </Route>

                <Route path={[
                    "/courses/:courseId/quizzes/:quizId"]}
                       exact={true}
                >
                    <Quiz/>
                </Route>

                <i onClick={this.addCourse} className="fas fa-2x fa-plus-circle fa-lg float-right"/>
            </div>
        )
    }
}

export default CourseManager
