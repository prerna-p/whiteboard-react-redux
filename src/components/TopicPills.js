import TopicPill from "./TopicPill";
import React, {Component} from 'react';
import TopicService from "../services/TopicService";
import WidgetListContainer from "../containers/WidgetListContainer";
import WidgetReducer from "../reducers/WidgetReducer";
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(WidgetReducer)


export default class TopicPills extends Component{

    constructor(props) {
        super(props);
        this.topicService = new TopicService();

        this.state = {
            courseId: '',
            moduleId: '',
            lessonId: '',
            topic: {title: ''},
            topics: [],
            selectedTopic: {},
            newTopicTitle:'New Topic'
        };
    }

    selectTopic = topic =>
        this.setState({
            selectedTopic: topic
        })

    setTopics = (topics) => {
        this.setState({topics: topics})
    }

    setLessonId = (lessonId) => {
        this.setState({lessonId: lessonId});
    }
    setModuleId = (moduleId) => {
        this.setState({moduleId: moduleId});
    }

    setCourseId = (courseId) => {
        this.setState({courseId: courseId});
    }
    componentDidMount() {
        this.setCourseId(this.props.courseId);
        this.setModuleId(this.props.moduleId);
        this.setLessonId(this.props.lessonId);
        this.findTopicsForCourseId(this.props.courseId,this.props.moduleId,this.props.lessonId)
    }

    componentWillReceiveProps(nprops){
        this.setCourseId(nprops.courseId);
        this.setModuleId(nprops.moduleId);
        this.setLessonId(nprops.lessonId);
        this.findTopicsForCourseId(nprops.courseId,nprops.moduleId,nprops.lessonId)
    }

    findTopicsForCourseId = (courseId,moduleId,lessonId) => {
        this.topicService
            .findTopicsForCourseId(courseId,moduleId,lessonId)
            .then((topics) => {this.setTopics(topics)});
    }

    topicFormChanged = (event) => {
        this.setState({
            newTopicTitle: event.target.value
        })
    }

    createTopic = () => {
        this.topicService.createTopics(this.props.lessonId,this.state.newTopicTitle)
            .then(() => {
                this.findTopicsForCourseId(this.props.courseId, this.props.moduleId,this.props.lessonId);
            });
    }

    deleteTopic = (tid) => {
        this.topicService.deleteTopic(tid).then(() => {
            this.findTopicsForCourseId(this.props.courseId, this.props.moduleId,this.props.lessonId);
        });
    }

    updateTopic = (topic) => {
        let newTopicTitle = prompt("Enter topic title", topic.title)
        if(newTopicTitle != null){
            topic.title = newTopicTitle
        }
        else{
            alert("Title cannot be null")
        }
        this.topicService.updateTopic(topic.id,topic).then(() => {
            this.findTopicsForCourseId(this.props.courseId, this.props.moduleId,this.props.lessonId);
        });
    }
    render() {
        return (
            <div>
                <ul className="nav nav-pills">
                    {
                        this.state.topics.map((topic, index) =>
                            <TopicPill
                                topic={topic}
                                key={index}
                                selected={this.state.selectedTopic === topic}
                                selectTopic={this.selectTopic}
                                deleteTopic={this.deleteTopic}
                                topicFormChanged={this.topicFormChanged}
                                createTopic={this.createTopic}
                                updateTopic={this.updateTopic}/>
                        )
                    }
                    <li className="nav-item">
                        <div className="form-inline">
                            <input
                                onChange={this.topicFormChanged}
                                placeholder="new topic"/>
                            <button
                                onClick={this.createTopic}
                                className="btn m-1 btn-sm btn-primary">
                                <i className="fa fa-plus"></i>
                            </button>
                        </div>
                    </li>
                </ul>
                {
                    this.state.selectedTopic.id &&
                    <Provider store={store}>
                        <WidgetListContainer
                            topicId={this.state.selectedTopic.id}/>
                    </Provider>
                }
            </div>
        )
    }
}

















/* = ({topics, selectTopic, selectedTopic, deleteTopic, topicFormChanged, addNewTopic}) =>
    <ul className="nav nav-pills">
        {
            topics.map((topic, index) =>
                <TopicPill
                    selected={selectedTopic===topic}
                    selectTopic={selectTopic}
                    topic={topic}
                    key={index}
                    deleteTopic={deleteTopic}/>
            )
        }
        <li className="nav-item">
            <div className="form-inline">
                <input
                    onChange={topicFormChanged}
                    placeholder="new topic"/>
                <button
                    onClick={addNewTopic}
                    className="btn m-1 btn-sm btn-primary">
                    <i className="fa fa-plus"></i>
                </button>
            </div>
        </li>
    </ul>

export default TopicPills*/