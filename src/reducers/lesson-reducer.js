import React from 'react'
import {lessonConstants} from "../constants";

const initialState = {
    lessons: []
}

const lessonReducer = (state=initialState, action) => {
    switch (action.type) {
        case lessonConstants.CREATE_LESSON:
            return {
                ...state,
                lessons:  [
                    ...state.lessons,
                    action.lesson
                ]
            }
        case lessonConstants.DELETE_LESSON:
            return {
                lessons: state.lessons.filter(lesson => {
                    return lesson._id !== action.lessonToDelete._id;
                })
            }
        case lessonConstants.FIND_LESSONS:
            return {
                ...state,
                lessons: action.lessons
            }
        case lessonConstants.UPDATE_LESSON:
            return {
                lessons: state.lessons.map(l => {
                    if (l._id === action.lesson._id) {
                        return action.lesson
                    } else {
                        return l
                    }
                })
            }
        default:
            return state
    }
}

export default lessonReducer