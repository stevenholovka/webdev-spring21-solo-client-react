import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseRow = (
    {
        course,
        title,
        owner,
        lastModified,
        deleteCourse,
        updateCourse
    }) => {

    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(title)

    const saveTitle = () => {
        setEditing(false)
        const newCourse = {
            ... course,
            title: newTitle
        }
        updateCourse(newCourse)
    }

    return (<tr>
        <td className="d-table-cell">
            {
                !editing &&
                <Link to={`/courses/table/edit/${course._id}`}>
                    {title}
                </Link>
            }

            {
                editing &&
                <input onChange={(event) => setNewTitle(event.target.value)}
                       value={newTitle}
                       className="form-control"/>
            }
        </td>
        <td className="d-none d-md-table-cell">{owner}</td>
        <td className="d-none d-lg-table-cell">{lastModified}</td>
        <td className="d-none d-lg-table-cell">
            <Link to={`/courses/${course._id}/quizzes`}>
                Quizzes
            </Link>
        </td>
        <td className="d-table-cell">
            <i onClick={() => deleteCourse(course)} className="fas fa-trash"/>
            {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit"/>}
            {editing && <i onClick={() => saveTitle()} className="fas fa-check"/>}
        </td>
    </tr>)
}

export default CourseRow