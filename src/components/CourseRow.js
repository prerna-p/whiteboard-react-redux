import React from 'react'
import {Link} from 'react-router-dom'

const CourseRow = ({course, deleteCourse}) =>
    <tr>
        <td>
            <div className="row">
                <div className="col-md-1">
                    <i className="fa fa-file-text-o"></i>
                </div>
                <div className="col-md-2">
                    <Link to={`/course/${course.id}/edit`}>
                        <h6 className="text-dark">
                            {course.title}
                        </h6>
                    </Link>
                </div>
            </div>
        </td>
        <td>me</td>
        <td>6:45 PM</td>
        <td>
            <div className="row">
                <div className="col-md-3">
                    <Link
                        className="btn btn-primary"
                        to={`/course/${course.id}/${course.title}`}>
                        <i className="fa fa-pencil"></i>
                    </Link>
                </div>
                <div className="col-md-7">
                    <button onClick={() => deleteCourse(course.id)}
                            className="btn btn-danger">
                        <i className="fa fa-trash"></i>
                    </button>
                </div>
            </div>
        </td>
        <td></td>
    </tr>

export default CourseRow