import React from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";

const CourseGrid = (
    {
        courses,
        deleteCourse,
        updateCourse
    }
) => {

    return (
        <div>
            <Link to="/courses/table">
                <i className="fas fa-2x fa-list float-right"/>
            </Link>
            <i className="fas fa-2x fa-sort float-right"/>
            <i className="fas fa-2x fa-folder float-right"/>
            <h2>Course Grid</h2>
            <div className="row">
                {
                    courses.map(course =>
                        <CourseCard key={course._id}
                                    course={course}
                                    deleteCourse={deleteCourse}
                                    updateCourse={updateCourse}
                                    title={course.title}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default CourseGrid