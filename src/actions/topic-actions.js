import topicService from "../services/topic-service";
import {topicConstants} from "../constants";

export const createTopicForLesson = (dispatch, lessonId) =>
    topicService.createTopicForLesson(lessonId, {title: "New Topic"})
        .then(topic => dispatch({
            type: topicConstants.CREATE_TOPIC,
            topic
        }))

export const deleteTopic = (dispatch, item) =>
    topicService.deleteTopic(item._id)
        .then(status => dispatch({
            type: topicConstants.DELETE_TOPIC,
            topicToDelete: item
        }))

export const findTopicsForLesson = (dispatch, lessonId) =>
    topicService.findTopicsForLesson(lessonId)
        .then(topics => dispatch({
            type: topicConstants.FIND_TOPICS,
            topics
        }))

export const updateTopic = (dispatch, topic) =>
    topicService.updateTopic(topic._id, topic)
        .then(status => dispatch({
            type: topicConstants.UPDATE_TOPIC,
            topic
        }))

const topicActions = {
    createTopicForLesson,
    deleteTopic,
    findTopicsForLesson,
    updateTopic
}

export default topicActions