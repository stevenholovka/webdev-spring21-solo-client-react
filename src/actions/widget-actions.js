import widgetService from "../services/widget-service";
import {widgetConstants} from "../constants";

export const createWidgetForTopic = (dispatch, topicId) =>
    widgetService.createWidgetForTopic(topicId, {type: "HEADING", size: 1, text: "New Widget", width: 200, height: 200, src: "https://www.nasa.gov/sites/default/files/thumbnails/image/hubble_birthofstars_0.jpg", ordered: false})
        .then(theActualWidget => dispatch({
            type: widgetConstants.CREATE_WIDGET,
            widget: theActualWidget
        }))

export const deleteWidget = (dispatch, wid) =>
    widgetService.deleteWidget(wid)
        .then(status => dispatch({
            type: widgetConstants.DELETE_WIDGET,
            widgetToDelete: wid
        }))

export const findWidgetsForTopic = (dispatch, topicId) =>
    widgetService.findWidgetsForTopic(topicId)
        .then(theWidgets => dispatch({
            type: widgetConstants.FIND_WIDGETS,
            widgets: theWidgets
        }))

export const updateWidget = (dispatch, widget) => {
    widgetService.updateWidget(widget.id, widget)
        .then(status => dispatch({
            type: widgetConstants.UPDATE_WIDGET,
            widget
        }))
}

const widgetActions = {
    createWidgetForTopic,
    deleteWidget,
    findWidgetsForTopic,
    updateWidget
}

export default widgetActions