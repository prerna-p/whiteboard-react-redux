import React from 'react'
import ModuleListItem from "./ModuleListItem";
import ModuleService from "../services/ModuleService";
import LessonTabs from "./LessonTabs";
//import {Router} from "react-router-dom";
//import CourseEditor from "../containers/CourseEditor";
//import Route from "react-router-dom/es/Route";


export default class ModuleList extends React.Component {
    constructor(props) {
        super(props)
        this.moduleService = new ModuleService();


        this.state = {
            newModuleTitle:'New Module',
            courseId:'',
            userId: '',
            module: { title: '' },
            modules: [

            ],
            selectedModule: {}
            }
    }

    setCurrentCourseId = (courseId) => {
        this.setState({courseId: courseId});
    }
    componentDidMount() {
        this.setCurrentCourseId(this.props.courseId);
    }

    componentWillReceiveProps(nprops){
        this.findAllModules(nprops.courseId);
    }

    setAllModules = (modules) =>{
        this.setState({modules: modules})
    }

    findAllModules = (courseId) =>{
        this.moduleService.findAllModules(courseId)
            .then((modules) => {this.setAllModules(modules)});

    }

    formChanged = (event) => {
        this.setState({
            newModuleTitle: event.target.value
        })
    }

    createModule = () =>{
        this.moduleService.createModule(this.props.courseId,this.state.newModuleTitle)
            .then(() => {
                this.findAllModules(this.props.courseId);
            });
    }

    deleteModule = (moduleId) => {
        this.moduleService
            .deleteModule(this.props.courseId,moduleId)
            .then(() => {
                this.findAllModules(this.props.courseId);
            });

    }
    selectModule = module => {
        this.setState({
            selectedModule: module
        })
    }


    render() {
        return(
                <div className="row">
                    <div className="col-4">
                   <ul className="list-group">

                       <li className="list-group-item">
                           <input onChange={this.formChanged}
                                  placeholder="New Module Title"
                                  className="form-control"/>
                           <button onClick={this.createModule}
                                   className="btn btn-dark">Add</button>
                       </li>
                       {
                           this.state.modules.map((module) => (
                               <ModuleListItem
                                   module={module}
                                   courseId={this.props.courseId}
                                   deleteModule={this.deleteModule}
                                   selectModule={this.selectModule}
                                   selected={this.state.selectedModule === module}
                               />
                           ))
                       }

                   </ul>
                    </div>
                    <div className="col-8 mt-1">
                        <LessonTabs
                            userId={this.props.userId}
                            courseId={this.props.courseId}
                            moduleId={this.state.selectedModule.id}/>
                    </div>
                </div>
        )
    }
}