import WidgetService1 from '../services/WidgetService1'


const WidgetReducer = (state, action) =>
{
    //this.widgetService = new asdd.js();
    switch (action.type) {
        case 'INIT':{
            console.log(action.widgets)
            return {
                widgets: action.widgets,
                topicId: action.topicId,
                preview: action.preview
            }
        }
        case "CREATE_WIDGET":
        {
            let forWidget=
                {

                    title:'widget '+state.widgets.length,
                    widgetType:'HEADING',
                    headingValue:'1',
                    text:'Heading 1',
                    options:'',
                    link:''
                }

            WidgetService1.createWidget(action.topicId,forWidget)
            WidgetService1.findAllWidgetsForTopic(action.topicId).then( widgets => {
                return {
                    widgets: widgets,
                    topicId: action.topicId
                }
            })

        }

        case "DELETE_WIDGET":
        {
            WidgetService1.deleteWidget(action.widgetId)
            WidgetService1.findAllWidgetsForTopic(action.topicId).then( widgets => {
                return {
                    widgets: widgets,
                    topicId: action.topicId
                }
            })
        }

        case "UPDATE_WIDGET":
            WidgetService1.updateWidget(action.widgetId)
            WidgetService1.findAllWidgetsForTopic(action.topicId).then( widgets => {
                return {
                    widgets: widgets,
                    topicId: action.topicId
                }
            })

      /*  case "MOVE_UP":
            this.courseService.moveUp(state.selectedTopic, action.widget)
            return {
                widgets: this.courseService.findWidgets(state.selectedTopic).slice(0),
                selectedTopic: state.selectedTopic
            }

        case "MOVE_DOWN":
            this.courseService.moveDown(state.selectedTopic, action.widget)
            return {
                widgets: this.courseService.findWidgets(state.selectedTopic).slice(0),
                selectedTopic: state.selectedTopic} */
       case "ACTIVATE_PREVIEW":
               return {
                   preview:!state.preview,
                   widgets: state.widgets,
                   topicId: state.topicId
               }
        case "FIND_ALL_WIDGETS_FOR_TOPIC": {
            WidgetService1.findAllWidgetsForTopic(action.topicId).then( widgets => {
                return {
                    widgets: widgets,
                    topicId: action.topicId
                }
            })
        }

        case "FIND_ALL_WIDGETS":
            WidgetService1.findAllWidgets().then( widgets => {
                return {
                    widgets: widgets,
                    topicId: action.topicId
                }
            })

        case "FIND_WIDGET": {
            WidgetService1.findWidgetById(action.widgetId).then( widgets => {
                return {
                    widgets: widgets,
                    topicId: action.topicId
                }
            })
        }


        default:
            return {
                widgets: []
            }
    }


}

export default WidgetReducer

/*
import CourseService from '../services/CourseService'


const WidgetReducer = (state = {widgets:[],preview:false}, action) => {
    this.courseService = new CourseService();
    switch (action.type) {
        case "INIT":
            return {
                widgets: this.courseService.findWidgets(action.topic),
                selectedTopic: action.topic,
                preview:state.preview
            }
        case "CREATE_WIDGET":
            let forWidget=
                {
                    id:state.widgets.length+1,
                    title:'widget '+state.widgets.length,
                    type:'HEADING',
                    size:1,
                    text:'Heading 1'
                }

            this.courseService.createWidget(state.selectedTopic,forWidget)
            return {
                widgets: this.courseService.findWidgets(state.selectedTopic).slice(0),
                selectedTopic: state.selectedTopic
            }

        case "DELETE_WIDGET":
            this.courseService.deleteWidget(state.selectedTopic, action.widget)
            const newWidgets = this.courseService.findWidgets(state.selectedTopic)
            return {
                widgets: newWidgets.slice(0),
                selectedTopic: state.selectedTopic
            }
        case "UPDATE_WIDGET":
            this.courseService.updateWidget(state.selectedTopic, action.widget)
            return {
                widgets: this.courseService.findWidgets(state.selectedTopic).slice(0),
                selectedTopic: state.selectedTopic
            }

        case "MOVE_UP":
            this.courseService.moveUp(state.selectedTopic, action.widget)
            return {
                widgets: this.courseService.findWidgets(state.selectedTopic).slice(0),
                selectedTopic: state.selectedTopic
            }

        case "MOVE_DOWN":
            this.courseService.moveDown(state.selectedTopic, action.widget)
            return {
                widgets: this.courseService.findWidgets(state.selectedTopic).slice(0),
                selectedTopic: state.selectedTopic
            }
        case "ACTIVATE_PREVIEW":
            return {
                preview: !state.preview,
                widgets: this.courseService.findWidgets(state.selectedTopic).slice(0),
                selectedTopic: state.selectedTopic
            }
        case "FIND_ALL_WIDGETS_FOR_TOPIC":
            this.courseService.findWidgets(state.selectedTopic)
            
        case "FIND_ALL_WIDGETS":
        return {
            widgets: action.widgets
        }

        case "FIND_WIDGET":
            return this.courseService.findWidget(action.widget.id)


        default:
            return state
    }
}

export default WidgetReducer*/
