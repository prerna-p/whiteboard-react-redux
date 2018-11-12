import React from 'react'
//import {Link} from 'react-router-dom'

const ModuleListItem = ({module, courseId,
                            deleteModule,selectModule,
                            selected,updateModule}) =>
    <li className={selected ? 'list-group-item active': 'list-group-item'}
        onClick={() => selectModule(module)} key={module.id}>
        <div className="float-left">{module.title}</div>
        <div className="float-right">
            <button onClick={()=> updateModule(module)}
                className="btn btn-dark btn-sm mr-1">
                <i className="fa fa-pencil text-white"></i>
            </button>
            <button
                className="btn btn-dark btn-sm"
                onClick={() => deleteModule(module.id)}>
                <i className="fa fa-trash text-white"></i>
            </button>
        </div>
    </li>

export default ModuleListItem