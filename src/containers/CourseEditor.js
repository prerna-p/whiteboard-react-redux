
import React, {Component} from 'react'
import ModuleList from "../components/ModuleList";
import CourseEditorNavbar from "../components/CourseEditorNavbar";
import CourseService from "../services/CourseService";

//const store = createStore(WidgetReducer)

export default class CourseEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courseId:'',
            moduleId:''
        }
        this.courseService = new CourseService();
    }

    selectedCourse = (courseId) =>{
        this.setState({
            courseId:courseId
        })
    }
    componentDidMount(){
        this.setState({
          courseId: this.props.match.params.courseId
        })

    }
    componentWillReceiveProps(nprops){
        this.selectedCourse(nprops.courseId)
    }
    render() {
        return(
            <div>
                <CourseEditorNavbar courseTitle={this.props.match.params.title}/>
                <ModuleList courseId={this.props.match.params.courseId}/>
            </div>
        )
    }
}

