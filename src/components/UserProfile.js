import React, {Component} from 'react'
import {Link} from 'react-router-dom'


export default class UserProfile extends Component{

    constructor(props){
        super(props)
        this.state= {
            id:'',
            username:'',
            firstName:'',
            lastName:'',
            courses:''
        }

    }
    componentDidMount() {
        return fetch("https://sheltered-lowlands-30899.herokuapp.com/api/profile")
            .then(response => response.json()).then(user => {
                console.log(user)
                this.setState({
                    id:user.id,
                    username:user.username,
                    firstName:user.firstName,
                    lastName:user.lastName,
                    courses:user.courses
                })
            })
    }

    render(){
        return(
            <div className="container">
                <h1>Profile</h1>
                <form>
                    {/*<div className="hidden">
                        <div className="alert alert-success" role="alert">
                            Profile successfully saved
                        </div>
                    </div>*/}

                    <div className="form-group row">
                        <label htmlFor="username"
                               className="col-sm-2 col-form-label">
                            Username
                        </label>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-8">
                            <input className="form-control"
                                   id="username"
                                   value={this.state.username}
                                   readOnly />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="fName"
                               className="col-sm-2 col-form-label">
                            First Name
                        </label>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-8">
                            <input className="form-control"
                                   type="text"
                                   id="fName"
                                   value={this.state.firstName}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="lName"
                               className="col-sm-2 col-form-label">
                            Last Name
                        </label>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-8">
                            <input className="form-control"
                                   type="text"
                                   id="lName"
                                   value={this.state.lastName}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="role"
                               className="col-sm-2 col-form-label">
                            Role
                        </label>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-8">
                            <select className="custom-select">
                                <option value="1">Faculty</option>
                                <option value="2">Student</option>
                                <option value="3">Admin</option>
                            </select>
                        </div>
                    </div>


                    <div className="form-group row">
                        <div className="col-sm-8">
                            <button className="btn btn-success btn-block">Update</button>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-8">
                            <Link to="/Login">
                               <button className="btn btn-danger btn-block">
                                Logout
                               </button>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

}