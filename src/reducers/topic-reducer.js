import React from 'react'
import {topicConstants} from "../constants";

const initialState = {
    topics: []
}

const topicReducer = (state = initialState, action) => {
    switch (action.type) {
        case topicConstants.CREATE_TOPIC:
            return {
                ...state,
                topics: [
                    ...state.topics,
                    action.topic
                ]
            }
        case topicConstants.DELETE_TOPIC:
            return {
                topics: state.topics.filter(topic => {
                    return topic._id !== action.topicToDelete._id;
                })
            }
        case topicConstants.FIND_TOPICS:
            return {
                ...state,
                topics: action.topics
            }
        case topicConstants.UPDATE_TOPIC:
            return {
                topics: state.topics.map(t => {
                    if (t._id === action.topic._id) {
                        return action.topic
                    } else {
                        return t
                    }
                })
            }
        default:
            return state
    }
}

export default topicReducer