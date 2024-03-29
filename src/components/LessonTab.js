import React from 'react'

const LessonTab = ({lesson, selectLesson,
                       selected, deleteLesson,updateLesson}) =>
    <li className="nav-item">
        <a onClick={() => selectLesson(lesson)}
           className={selected ? "nav-link active" : "nav-link"}>
            {lesson.title}
            <a onClick={()=> updateLesson(lesson)}>
                <i className="m-1 fa fa-pencil"></i>
            </a>

            <a onClick={() => deleteLesson(lesson.id)}>
                <i className="fa fa-trash"></i>
            </a>
        </a>

    </li>

export default LessonTab