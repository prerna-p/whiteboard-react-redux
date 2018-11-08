import React from 'react'
import CourseAdd from "./CourseAdd";
import {Link} from 'react-router-dom'

const CourseEditorNavbar = ({courseTitle}) => (
        <div className="row navbar-expand-md bg-dark">
            <ul className="navbar-nav mt-1">
                <li>
                    <button className="btn btn-dark">
                        <i className="fa fa-times fa-lg mr-1"></i>
                    </button>
                </li>
                <li className="navbar-brand text-white"
                   href="#">
                    <h4>{courseTitle}</h4>
                </li>
            </ul>
        </div>
)

export default CourseEditorNavbar
