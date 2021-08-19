import React, {useState, useEffect} from 'react'
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import ListWidget from "./list-widget";
import ImageWidget from "./image-widget";
import {useParams} from "react-router-dom"
import {connect} from "react-redux";
import widgetActions from "../../../actions/widget-actions"

const WidgetList = (
    {
        myWidgets = [],
        createWidgetForTopic,
        deleteWidget,
        findWidgetsForTopic,
        updateWidget,
    }
) => {

    const {topicId} = useParams();
    const [editingWidget, setEditingWidget] = useState({})

    useEffect(() => {
        if (topicId !== "undefined" && typeof topicId !== "undefined") {
            findWidgetsForTopic(topicId)
        }
    }, [topicId])

    return (
        <div>
            <i onClick={() => createWidgetForTopic(topicId)}
               className="fas fa-plus fa-2x float-right"/>

            <h2>Widgets</h2>
            <ul className="list-group">
                {
                    myWidgets.map(widget =>
                        <li className="list-group-item" key={widget.id}>
                            {
                                editingWidget.id === widget.id &&
                                <i onClick={() => setEditingWidget({})}
                                   className="fas fa-check fa-2x float-right"/>
                            }
                            {
                                editingWidget.id !== widget.id &&
                                <i onClick={() => setEditingWidget(widget)}
                                   className="fas fa-cog fa-2x float-right"/>
                            }
                            {
                                widget.type === "HEADING" &&
                                <HeadingWidget editing={editingWidget.id === widget.id}
                                               widget={widget}
                                               updateWidget={updateWidget}
                                               deleteWidget={deleteWidget}
                                               setEditingWidget={setEditingWidget}/>
                            }
                            {
                                widget.type === "PARAGRAPH" &&
                                <ParagraphWidget editing={editingWidget.id === widget.id}
                                                 widget={widget}
                                                 updateWidget={updateWidget}
                                                 deleteWidget={deleteWidget}
                                                 setEditingWidget={setEditingWidget}/>
                            }
                            {
                                widget.type === "LIST" &&
                                <ListWidget editing={editingWidget.id === widget.id}
                                            widget={widget}
                                            updateWidget={updateWidget}
                                            deleteWidget={deleteWidget}
                                            setEditingWidget={setEditingWidget}/>
                            }
                            {
                                widget.type === "IMAGE" &&
                                <ImageWidget editing={editingWidget.id === widget.id}
                                             widget={widget}
                                             updateWidget={updateWidget}
                                             deleteWidget={deleteWidget}
                                             setEditingWidget={setEditingWidget}/>
                            }
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

const stateToPropertyMapper = (state) => ({
    myWidgets: state.widgetReducer.widgets
})

const dispatchToPropertyMapper = (dispatch) => ({

    createWidgetForTopic: (topicId) => {
        widgetActions.createWidgetForTopic(dispatch, topicId)
    },

    deleteWidget: (item) => {
        widgetActions.deleteWidget(dispatch, item)
    },

    findWidgetsForTopic: (topicId) =>
        widgetActions.findWidgetsForTopic(dispatch, topicId),

    updateWidget: (widget) =>
        widgetActions.updateWidget(dispatch, widget)
})

export default (connect(
        stateToPropertyMapper,
        dispatchToPropertyMapper
    )
)(WidgetList)