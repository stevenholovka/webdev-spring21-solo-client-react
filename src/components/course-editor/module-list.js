import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import moduleActions from "../../actions/module-actions";

const ModuleList = (
    {
        myModules = [],
        createModule,
        deleteModule,
        findModulesForCourse,
        updateModule
    }
) => {

    const {layout, courseId, moduleId} = useParams();

    useEffect(() => {
        findModulesForCourse(courseId)
    }, [])


    return (
        <div>
            <h2>Modules</h2>
            <ul className="list-group">
                {
                    myModules.map(module =>
                        <li key={module._id} className={`list-group-item ${module._id === moduleId ? 'active' : ''}`}>
                            <EditableItem to={`/courses/${layout}/edit/${courseId}/modules/${module._id}`}
                                          deleteItem={deleteModule}
                                          item={module}
                                          updateItem={updateModule}
                            />
                        </li>
                    )
                }
                <li className="list-group-item">
                    <i onClick={() => createModule(courseId)} className="fas fa-plus fa-2x"/>
                </li>
            </ul>
        </div>
    )
}

const stateToPropertyMapper = (state) => ({
    myModules: state.moduleReducer.modules
})

const dispatchToPropertyMapper = (dispatch) => ({

    createModule: (courseId) =>
        moduleActions.createModule(dispatch, courseId),

    deleteModule: (item) =>
        moduleActions.deleteModule(dispatch, item),

    findModulesForCourse: (courseId) =>
        moduleActions.findModulesForCourse(dispatch, courseId),

    updateModule: (module) =>
        moduleActions.updateModule(dispatch, module)
})

export default (connect(
        stateToPropertyMapper,
        dispatchToPropertyMapper
    )
)(ModuleList)