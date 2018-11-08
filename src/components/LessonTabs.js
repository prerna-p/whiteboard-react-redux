import LessonTab from "./LessonTab";
import React, {Component} from 'react'
import LessonService from "../services/LessonService";
import TopicPills from "./TopicPills";

export default class LessonTabs extends Component{
    constructor(props) {
        super(props)
        this.lessonService = new LessonService();
        this.state = {
            courseId: '',
            moduleId: '',
            lessonId: '',
            lesson: {title: ''},
            lessons: [],
            selectedLesson: {},
            newLessonTitle: 'New Lesson'
        };

    }

    setCourseId = (courseId) => {
        this.setState({courseId: courseId});
    }
    setLessons = (lessons) => {
        this.setState({lessons: lessons});
    }

    setModuleId = (moduleId) => {
        this.setState({moduleId: moduleId});
    }

    componentDidMount() {
        this.setCourseId(this.props.courseId);
        this.setModuleId(this.props.moduleId);
    }

    componentWillReceiveProps(nprops){
        this.setCourseId(nprops.courseId)
        this.setModuleId(nprops.moduleId)
        this.findLessonsForCourseId(nprops.courseId,nprops.moduleId)
    }

    findLessonsForCourseId = (courseId,moduleId) => {
        if(courseId>0 && moduleId > 0){
            this.lessonService
                .findLessonsForCourseId(courseId, moduleId)
                .then((lessons) => {
                    this.setLessons(lessons)
                });
        }

    }

    selectLesson = lesson =>
        this.setState({
            selectedLesson: lesson
        })

    deleteLesson = (lid) => {
        this.lessonService.deleteLesson(lid).then(() => {
            this.findLessonsForCourseId(this.props.courseId, this.props.moduleId);
        });
    }

    showLessons = () => {
        let lessons = this.state.lessons
        if(lessons.length>0){
            lessons= this.state.lessons.map((lesson) => {
                    return  <LessonTab
                        selected={this.state.selectedLesson === lesson}
                        selectLesson={this.selectLesson}
                        lesson={lesson}
                        key={lesson.id}
                        deleteLesson={this.deleteLesson}/>
                }
            );
        }
        return (
            lessons
        )

    }
    lessonFormChanged = (event) => {
        this.setState({
            newLessonTitle: event.target.value
        })
    }

    createLesson = () => {
        this.lessonService.createLesson(this.props.moduleId,this.state.newLessonTitle)
            .then(() => {
            this.findLessonsForCourseId(this.props.courseId, this.props.moduleId);
        });
    }

    render() {
        return(
            <div>

                <ul className="nav nav-tabs">
                    {this.showLessons()}
                    <li className="nav-item">
                        <div className="form-inline">
                            <input
                                onChange={this.lessonFormChanged}
                                placeholder="new lesson"/>
                            <button
                                onClick={this.createLesson}
                                className="btn m-1 btn-sm btn-primary">
                                <i className="fa fa-plus"></i>
                            </button>
                        </div>
                    </li>
                </ul>
                <div className="row">
                    {
                        this.state.selectedLesson.id &&
                        <TopicPills
                            courseId={this.props.courseId}
                            moduleId={this.props.moduleId}
                            lessonId={this.state.selectedLesson.id}/>
                    }

                </div>

            </div>
        )
    }

}

/*
OLD CODE
({lessons, selectLesson, selectedLesson, deleteLesson,lessonFormChanged,addNewLesson}) =>
    <ul className="nav nav-tabs">
        {
            lessons.map((lesson, index) =>
                <LessonTab
                    selected={selectedLesson === lesson}
                    selectLesson={selectLesson}
                    lesson={lesson}
                    key={index}
                    deleteLesson={deleteLesson}/>
            )
        }
        <li className="nav-item">
            <div className="form-inline">
                <input
                    onChange={lessonFormChanged}
                    placeholder="new lesson"/>
                <button
                    onClick={addNewLesson}
                    className="btn m-1 btn-sm btn-primary">
                    <i className="fa fa-plus"></i>
                </button>
            </div>
        </li>
    </ul>*/

