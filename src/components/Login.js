import React, {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'

export default class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            user:[],
            username: '',
            password:'',
            loggedIn:false
        }
    }

    handleUsername = e =>{
        return this.setState({
            username:e.target.value,
        });
    }

    handlePassword = e => {
        return this.setState({
            password:e.target.value,
        });
    }

    submit = e => {
       fetch('http://localhost:8080/api/login', {
            method: 'POST',
            credentials:'include',
            body: JSON.stringify({
                "username": this.state.username,
                "password": this.state.password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
       }).then(response=> response.json()).then((user) => {
           this.setState({
               loggedIn: true,
           });
       });

    }


    render(){
        if(this.state.loggedIn === true){
            return <Redirect to = '/course/table'/>
        }

        return (
            <div className="container">
                <h1>
                    Sign In
                </h1>
                <form>
                    <div className="form-group row">
                        <label htmlFor="username"
                               className="col-sm-2 col-form-label">
                            Username
                        </label>
                        <div className="col-sm-8">
                            <input className="form-control"
                                   id="username"
                                   placeholder="Alice"
                                    onChange={this.handleUsername}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="password"
                               className="col-sm-2 col-form-label">
                            Password
                        </label>
                        <div className="col-sm-8">
                            <input type="password"
                                   className="form-control wbdv-password-fld"
                                   id="password"
                                   onChange={this.handlePassword}
                                   placeholder="123qwe#$%" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-8">
                            <button className="btn btn-primary btn-block"
                                    onClick={this.submit}
                                    type="button"
                                    id="signInBtn">
                                Sign in
                            </button>
                            <div className="row">
                                <div className="col-6">
                                        Forgot Password?
                                </div>
                                <div className="col-6">
                                    <div className="float-right">
                                        <Link to="/register">
                                            Sign up
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}