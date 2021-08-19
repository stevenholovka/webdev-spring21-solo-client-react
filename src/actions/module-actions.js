import moduleService from "../services/module-service";
import {moduleConstants} from "../constants"

export const createModule = (dispatch, courseId) =>
    moduleService.createModuleForCourse(courseId, {title: "New Module"})
        .then(theActualModule => dispatch({
            type: moduleConstants.CREATE_MODULE,
            module: theActualModule
        }))

export const deleteModule = (dispatch, item) =>
    moduleService.deleteModule(item._id)
        .then(status => dispatch({
            type: moduleConstants.DELETE_MODULE,
            moduleToDelete: item
        }))

export const findModulesForCourse = (dispatch, courseId) =>
    moduleService.findModulesForCourse(courseId)
        .then(theModules => dispatch({
            type: moduleConstants.FIND_MODULES,
            modules: theModules
        }))

export const updateModule = (dispatch, module) =>
    moduleService.updateModule(module._id, module)
        .then(status => dispatch({
            type: moduleConstants.UPDATE_MODULE,
            module
        }))

const moduleActions = {
    createModule,
    deleteModule,
    findModulesForCourse,
    updateModule
}

export default moduleActions