import React from 'react'
import CourseAdd from "./CourseAdd";
import {Link} from 'react-router-dom'

const CourseGridNavbar = ({addCourse}) => (
    <div className="row navbar-expand-md bg-white">
        <div className="col-1 col-form-label">
            <Link to="/course/table" class="btn">
                <i className="fa fa-bars text-secondary"></i>
            </Link>
        </div>
        <div className="col-3 col-form-label">
            <h2>
                Course Manager
            </h2>
        </div>
        <div className="col-8">
            <CourseAdd
                addCourse={addCourse}/>
        </div>
    </div>
)

export default CourseGridNavbar
