import React, {Component} from 'react'
import CourseGrid from "./CourseGrid";
import CourseTable from "./CourseTable";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import CourseEditor from "./CourseEditor";
import Login from "../components/Login";
import RegisterUser from "../components/RegisterUser";
import UserProfile from "../components/UserProfile"
export default class WhiteBoard extends Component {

    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Route path={"/login"}
                               render={() => <Login/>}/>

                        <Route path={"/register"}
                               render={() => <RegisterUser/>}/>

                        <Route path={"/profile"}
                               render={() => <UserProfile/>}/>

                        <Route path={"/course/table"}
                               render={() =>
                                   <CourseTable/>}/>
                        <Route path="/course/:courseId/:title"
                               component={CourseEditor}>
                        </Route>
                    </div>
                </Router>
            </div>
        );
    }
}