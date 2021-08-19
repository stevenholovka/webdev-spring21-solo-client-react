import React from 'react'
import {widgetConstants} from "../constants";

const initialState = {
    widgets: []
}

const widgetReducer = (state=initialState, action) => {
    switch(action.type) {
        case widgetConstants.CREATE_WIDGET:
            return {
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            }
        case widgetConstants.DELETE_WIDGET:
            return {
                widgets: state.widgets.filter(widget => {
                    return widget.id !== action.widgetToDelete;
                })
            }
        case widgetConstants.FIND_WIDGETS:
            return {
                ...state,
                widgets: action.widgets
            }
        case widgetConstants.UPDATE_WIDGET:
            return {
                widgets: state.widgets.map(w => {
                    if (w.id === action.widget.id) {
                        return action.widget
                    } else {
                        return w
                    }
                })
            }
        default:
            return state
    }
}

export default widgetReducer