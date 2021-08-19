import React from 'react'
import CourseRow from "./course-row";
import {Link, useParams} from "react-router-dom";

export default class CourseTable
    extends React.Component {

    constructor(props) {
        super(props)
        console.log(props)
    }

    render() {

        return (
            <div>
                <h2>Course Table</h2>
                <table className="table">

                    <thead>
                    <tr>
                        <th className="d-table-cell">Title</th>
                        <th className="d-none d-md-table-cell">Owned By</th>
                        <th className="d-none d-lg-table-cell">Last Modified</th>
                        <th className="d-none d-lg-table-cell">Quizzes</th>
                        <th className="d-table-cell">
                            <Link to="/courses/grid">
                                <i className="fas fa-2x fa-th float-right"/>
                            </Link>
                            <i className="fas fa-2x fa-sort float-right"/>
                            <i className="fas fa-2x fa-folder float-right"/>
                        </th>
                    </tr>
                    </thead>

                    <tbody>
                    {
                        this.props.courses.map((course, ndx) =>
                            <CourseRow
                                key={ndx}
                                course={course}
                                title={course.title}
                                owner={course.owner}
                                lastModified={course.lastModified}
                                deleteCourse={this.props.deleteCourse}
                                updateCourse={this.props.updateCourse}
                            />)
                    }
                    </tbody>

                </table>
            </div>
        )
    }
}