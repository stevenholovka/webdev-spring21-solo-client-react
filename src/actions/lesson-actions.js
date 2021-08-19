import lessonService from "../services/lesson-service";
import {lessonConstants} from "../constants";

export const createLessonForModule = (dispatch, moduleId) =>
    lessonService.createLessonForModule(moduleId, {title: "New Lesson"})
        .then(lesson => dispatch({
            type: lessonConstants.CREATE_LESSON,
            lesson
        }))

export const  deleteLesson = (dispatch, item) =>
    lessonService.deleteLesson(item._id)
        .then(status => dispatch({
            type: lessonConstants.DELETE_LESSON,
            lessonToDelete: item
        }))

export const  findLessonsForModule = (dispatch, moduleId) =>
    lessonService.findLessonsForModule(moduleId)
        .then(lessons => dispatch({
            type: lessonConstants.FIND_LESSONS,
            lessons
        }))

export const  updateLesson = (dispatch, lesson) =>
    lessonService.updateLesson(lesson._id, lesson)
        .then(status => dispatch({
            type: lessonConstants.UPDATE_LESSON,
            lesson
        }))

const lessonActions = {
    createLessonForModule,
    deleteLesson,
    findLessonsForModule,
    updateLesson
}

export default lessonActions