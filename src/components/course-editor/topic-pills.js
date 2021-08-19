import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import topicService from "../../services/topic-service"
import topicActions from "../../actions/topic-actions";

const TopicPills = (
    {
        topics = [],
        createTopicForLesson,
        deleteTopic,
        findTopicsForLesson,
        updateTopic
    }
) => {

    const {layout, courseId, moduleId, lessonId, topicId} = useParams();

    useEffect(() => {
        if (lessonId !== "undefined" && typeof lessonId !== "undefined") {
            findTopicsForLesson(lessonId)
        }
    }, [lessonId])

    return (
        <div>
            <h2>Topics</h2>
            <ul className="nav nav-pills">
                {
                    topics.map(topic =>
                        <li key={topic._id} className="nav nav-item">
                            <EditableItem
                                to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                                active={topic._id === topicId}
                                deleteItem={deleteTopic}
                                item={topic}
                                updateItem={updateTopic}
                            />
                        </li>
                    )
                }
                <li>
                    <i onClick={() => createTopicForLesson(lessonId)}
                       className="fas fa-2x fa-plus float-right"/>
                </li>
            </ul>
        </div>
    )
}

const stpm = (state) => ({
    topics: state.topicReducer.topics
})

const dtpm = (dispatch) => ({

    createTopicForLesson: (lessonId) =>
        topicActions.createTopicForLesson(dispatch, lessonId),

    deleteTopic: (item) =>
        topicActions.deleteTopic(dispatch, item),

    findTopicsForLesson: (lessonId) =>
        topicActions.findTopicsForLesson(dispatch, lessonId),

    updateTopic: (topic) =>
        topicActions.updateTopic(dispatch, topic)
})

export default (connect(
        stpm,
        dtpm)
    (TopicPills)
)