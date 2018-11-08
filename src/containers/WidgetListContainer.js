import React from 'react'
import { connect } from 'react-redux'
import WidgetList from '../components/WidgetList'

const stateToPropertyMapper = state => ({
    widgets: state.widgets,
    preview: state.preview
})

const dispatcherToPropertyMapper = dispatch => ({
    init: (widgets, topic) => dispatch({
        type: 'INIT',
        widgets: widgets,
        topic: topic
    }),
    createWidget: (widgets) => dispatch({
        type:'CREATE_WIDGET',
        widgets:widgets
    }),
    deleteWidget: (widget) => dispatch({
        type: 'DELETE_WIDGET',
        widget: widget
    }),
    updateWidget: widget => dispatch({
        type: 'UPDATE_WIDGET',
        widget: widget
    }),
    saveWidget: (widgets) => dispatch({
        type:'SAVE_WIDGET',
        widgets:widgets
    }),
    moveUp: (widget) => dispatch({
        type:'MOVE_UP',
        widget:widget
    }),
    moveDown: (widget) => dispatch({
        type:'MOVE_DOWN',
        widget:widget
    }),
    findWidget: widget => dispatch({
        type:'FIND_WIDGET',
        widget:widget
    }),
    activatePreview:() => dispatch({
        type:'ACTIVATE_PREVIEW'
    })

})

const WidgetListContainer = connect
(stateToPropertyMapper, dispatcherToPropertyMapper)(WidgetList)

export default WidgetListContainer