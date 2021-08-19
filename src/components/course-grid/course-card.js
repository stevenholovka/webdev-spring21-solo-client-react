import React, {useState} from 'react'
import {Link, useParams} from "react-router-dom";

const CourseCard = (
    {
        course,
        deleteCourse,
        updateCourse,
        title
    }
) => {

    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(title)

    const saveTitle = () => {
        return setEditing(false)
        const newCourse = {
            ...course,
            title: newTitle
        }
        updateCourse(newCourse)
    }

    return (

        <div className="col-xs-12 col-sm-6  col-md-4  col-lg-3 col-xl-2">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{course.title}</h5>
                    <p className="card-text">Text description.</p>

                    {
                        !editing &&
                        <Link to={`/courses/grid/edit/${course._id}`}
                              className="btn btn-primary">
                            {newTitle}
                        </Link>

                    }
                    {
                        editing &&
                        <input onChange={(event) => setNewTitle(event.target.value)}
                               value={newTitle}
                               className="form-control"/>
                    }

                    <i onClick={() => deleteCourse(course)} className="fas fa-trash"/>
                    {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit"/>}
                    {editing && <i onClick={() => saveTitle()} className="fas fa-check"/>}
                </div>
            </div>
        </div>)
}

export default CourseCard