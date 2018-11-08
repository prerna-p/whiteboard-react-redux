import React, {Component} from 'react'

export default class CourseAdd extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: ''
        }
    }
    updateForm = event =>
        this.setState({
            title: event.target.value
        })

    render() {
        return(
            <div className="row">
                <div className="col-6 col-form-label">
                <input
                    type="text"
                    onChange={this.updateForm}
                    className="form-control"
                    placeholder="New Course Title" />
                </div>
                <div className="col-1 col-form-label">
                <button
                    onClick={() => this.props.createCourse(this.state.title)}
                    className="btn btn-danger">
                    <i className="fa fa-plus text-white"></i>
                </button>
                </div>
            </div>
        )
    }
}