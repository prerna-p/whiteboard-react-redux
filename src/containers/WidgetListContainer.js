import React from 'react'
import { connect } from 'react-redux'
import WidgetList from '../components/WidgetList'

const stateToPropertyMapper = state => ({
    widgets: state.widgets,
    preview: state.preview
})

const dispatcherToPropertyMapper = dispatch => ({

    init: (topicId) => {
    let url = "https://java-jpa-server.herokuapp.com/api/topic/"+topicId+"/widget";
    fetch(url)
        .then(response => response.json())
        .then(widgets => dispatch({
                type: 'INIT',
                widgets: widgets
            })
        )
    },

    createWidget : (topicId) => {
        let url = "https://java-jpa-server.herokuapp.com/api/topic/"+topicId+"/widget";
        let widget =
            {

                title:'new widget',
                widgetType:'HEADING',
                headingValue:1,
                text:'Heading 1',
                options:'',
                link:''
            }

        fetch(url,{
            body: JSON.stringify(widget),
            headers: {'Content-Type' : 'application/json'},
            method: 'POST'
        }).then(response => response.json())
          .then(widgets => dispatch({
                    type: 'INIT',
                    widgets: widgets
                }))
    },
    deleteWidget: (widget) =>{
        let url = "https://java-jpa-server.herokuapp.com/api/widget/" + widget.id;
        fetch(url,{
            method: 'DELETE'
        }).then(response => response.json())
            .then(widgets => dispatch({
                type: 'INIT',
                widgets: widgets
            }))
    },
    updateWidget: (widget) =>{
        let url = "https://java-jpa-server.herokuapp.com/api/widget/" + widget.id;
        fetch(url,{
            body: JSON.stringify(widget),
            headers: {'Content-Type' : 'application/json'},
            method: 'PUT'
        }).then(response => response.json())
            .then(widgets => dispatch({

                type: 'INIT',
                widgets: widgets
            }))
    },
    findWidget: widget => dispatch({
        type:'FIND_WIDGET',
        widget:widget
    }),
    saveWidget: (widgets) => dispatch({
        type: 'INIT',
        widgets: widgets
    }),
    activatePreview:() => dispatch({
        type:'ACTIVATE_PREVIEW'
    })
    })/*,
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

})*/

const WidgetListContainer = connect
(stateToPropertyMapper, dispatcherToPropertyMapper)(WidgetList)

export default WidgetListContainer