import React, {Component} from 'react'
import {Link, Redirect} from 'react-router-dom';

export default class RegisterUser extends Component{

    constructor(props){
        super(props)
        this.state={
            user:{},
            username:'',
            password:'',
            verifypass:'',
            firstName:'',
            lastName:'',
            loggedIn:false
        }
        // /this.redirectProfile = this.redirectProfile.bind(this);
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

    handleFirstName = e =>{
        return this.setState({
            firstName:e.target.value,
        });
    }
    handleLastName = e =>{
        return this.setState({
            lastName:e.target.value,
        });
    }
    handleVerifyPass = e => {

            return this.setState({
                verifypass:e.target.value,
            });
    }

    handleSubmit =()=> {
        return fetch('https://sheltered-lowlands-30899.herokuapp.com/api/register', {
            method: 'POST',
            body: JSON.stringify({
                "username": this.state.username,
                "password": this.state.password,
                "firstName": this.state.firstName,
                "lastName": this.state.lastName
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response=> response.json()).then((user) => {
            this.setState({
                user:user,
                loggedIn: true
            });
            console.log(this.state.user)
        });
    }

    render(){
        if(this.state.loggedIn === true){
            return <Redirect to = '/profile'/>
        }
        return (

            <div className="container">

                <h1>Sign Up</h1>
                <form>
                    <div className="form-group row">
                        <label htmlFor="firstNameFld"
                               className="col-sm-2 col-form-label">
                            First Name
                        </label>
                        <div className="col-sm-8">
                            <input type="text"
                                   className="form-control"
                                   id="firstNameFld"
                                   placeholder="Alice"
                                   onChange={this.handleFirstName}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="lastNameFld"
                               className="col-sm-2 col-form-label">
                            Last Name
                        </label>
                        <div className="col-sm-8">
                            <input type="text"
                                   className="form-control"
                                   id="lastNameFld"
                                   placeholder="Doe"
                                   onChange={this.handleLastName}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="username"
                               className="col-sm-2 col-form-label">
                            Username
                        </label>
                        <div className="col-sm-8">
                            <input className="form-control"
                                   id="username"
                                   placeholder="alicedoe"
                                   onChange={this.handleUsername}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="passwordFld"
                               className="col-sm-2 col-form-label">
                            Password
                        </label>
                        <div className="col-sm-8">
                            <input type="password"
                                   className="form-control"
                                   id="passwordFld"
                                   placeholder="123qwe#$%"
                                   onChange={this.handlePassword}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="verifyPasswordFld"
                               className="col-sm-2 col-form-label">
                            Verify password
                        </label>
                        <div className="col-sm-8">
                            <input type="password"
                                   className="form-control"
                                   id="verifyPasswordFld"
                                   placeholder="123qwe#$%"
                                   onChange={this.handleVerifyPass}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-8">
                            <button className="btn btn-primary btn-block"
                                    id="signUpBTn"
                                    type="button"
                                    onClick={this.handleSubmit}>
                                Sign Up
                            </button>
                            <div className="row">
                                <div className="col-11">
                                   <Link to="/login">
                                        Login
                                   </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}