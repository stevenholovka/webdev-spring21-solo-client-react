import React from 'react'
import {moduleConstants} from "../constants";

const initialState = {
    modules: []
}

const moduleReducer = (state=initialState, action) => {
    switch(action.type) {
        case moduleConstants.CREATE_MODULE:
            return {
                // TODO: the other ones have ...state right here, do I not need that?
                modules: [
                    ...state.modules,
                    action.module
                ]
            }
        case moduleConstants.DELETE_MODULE:
            return {
                modules: state.modules.filter(module => {
                    return module._id !== action.moduleToDelete._id;
                })
            }
        case moduleConstants.FIND_MODULES:
            return {
                ...state,
                modules: action.modules
            }
        case moduleConstants.UPDATE_MODULE:
            return {
                modules: state.modules.map(m => {
                        if (m._id === action.module._id) {
                            return action.module
                        } else {
                            return m
                        }
                    })
            }
        default:
            return state
    }
}

export default moduleReducer