import React, {Component} from 'react'
import CourseRow from "../components/CourseRow";
import CourseTableNavbar from "../components/CourseTableNavbar"
import {Link} from 'react-router-dom'
import CourseService from '../services/CourseService'

export default class CourseTable extends Component{

    constructor(props){
        super(props);
        this.courseService = new CourseService();

        this.state = {
            userId: '',
            courses: [],
            courseId: ''
        }

        this.findAllCourses = this.findAllCourses.bind(this);
        this.createCourse = this.createCourse.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
    }
    componentDidMount() {
       return fetch("http://localhost:8080/api/profile")
            .then(response => response.json()).then(user => {
                this.setState({
                    userId:user.id,
                    courses:user.courses
                });
                this.findAllCourses()
            })
    }

    findAllCourses(){
        this.courseService.findAllCourses(this.state.userId)
            .then((courses) => {
                this.setState({courses:courses});
            })
    }

    createCourse(courseTitle) {
        console.log(courseTitle)
        this.courseService.createCourse(this.state.userId, courseTitle)
            .then(() => this.findAllCourses())
    }

    deleteCourse(courseId){
        this.courseService.deleteCourse(this.state.userId,courseId)
            .then(()=> this.findAllCourses())
    }

    render(){
        return (
            <div>

                <CourseTableNavbar createCourse={this.createCourse} />
                <table className="table">
                    <thead className="bg-light">
                    <tr>
                        <th>Title</th>
                        <th>
                            <select className="form-control bg-light"
                                    id="selectOwner">
                                <option value=""
                                        aria-disabled="true">
                                    Owned by
                                </option>
                                <option value="1">me</option>
                                <option value="2">others</option>
                            </select>
                        </th>
                        <th>Last modified by me</th>
                        <th>
                            <Link to="/course/grid">
                                <i className="fa fa-th fa-lg"></i>
                            </Link>
                        </th>
                        <th>
                            <i className="fa fa-sort-alpha-asc fa-lg"></i>
                        </th>
                    </tr>
                    </thead>

                    <tbody>
                    {
                        this.state.courses.map((course,id)=>
                            (<CourseRow
                                key={id}
                                course={course}
                                deleteCourse={this.deleteCourse}/>))
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

