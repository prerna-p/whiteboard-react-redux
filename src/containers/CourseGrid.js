import React, {Component} from 'react'
import CourseCard from "../components/CourseCard";
import CourseGridNavbar from "../components/CourseGridNavbar";
import {Link} from "react-router-dom";

export default class CourseGrid extends Component
{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <CourseGridNavbar addCourse={this.props.addCourse}/>
                <div className="row text-secondary">
                    <div className="h5 container-fluid bg-light">
                        <div className="row m-2">
                            <div className="col-sm-5">
                                Recent documents
                            </div>
                            <div className="col-sm-2">
                                <select className="form-control"
                                        id="selectOwner">
                                    <option value="1">Owned by me</option>
                                    <option value="2">Owned by others</option>
                                </select>
                            </div>
                            <div className="col-sm-1">
                                <Link to="/course/table">
                                    <i className="fa fa-list"></i>
                                </Link>

                            </div>
                            <div className="col-sm-1">
                                <i className="fa fa-sort-alpha-asc"></i>
                            </div>
                            <div className="col-sm-1">
                                <i className="fa fa-folder"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        this.props.courses.map((course,index) => {
                            return <div className="col-lg-2 col-md-4 col-sm-12">
                                <CourseCard course={course}
                                            deleteCourse={this.props.deleteCourse}/>
                            </div>
                        })
                    }
                </div>
            </div>

        )
    }
}