import React from 'react'
import {Link} from 'react-router-dom'

const CourseCard = ({course, deleteCourse}) =>

            <div className="card" styles={{width: '18rem'}}>
                <img className="card-img-top"
                     src="https://picsum.photos/300/200"/>
                <div className="card-body">
                    <Link to={`/course/${course.id}/edit`}>
                        <h5 className="card-title text-dark">
                            {course.title}
                        </h5>
                    </Link>

                    <p className="card-text">Card text.</p>

                    <Link
                        className="btn btn-primary mr-1" to={`/course/${course.id}/edit`}>
                        <i className="fa fa-pencil"></i>
                    </Link>

                    <button onClick={() => deleteCourse(course)}
                            className="btn btn-danger">
                            <i className="fa fa-trash"></i>
                    </button>
                </div>
            </div>

export default CourseCard
