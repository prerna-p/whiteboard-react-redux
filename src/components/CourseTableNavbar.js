import React from 'react'
import CourseAdd from "./CourseAdd";
import {Link} from 'react-router-dom'

const CourseTableNavbar = ({createCourse}) => (
    <div className="row navbar-expand-md bg-primary">
        <div className="col-1 text-white col-form-label">
            <Link to="/course/grid" className="btn text-white">
                <i className="fa fa-bars"></i>
            </Link>
        </div>
        <div className="col-3 text-white col-form-label">
            <h2>
                Course Manager
            </h2>
        </div>
        <div className="col-8">
        <CourseAdd
            createCourse={createCourse}/>
        </div>
    </div>
    )

export default CourseTableNavbar
