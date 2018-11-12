//const uri = 'http://sheltered-lowlands-30899.herokuapp.com/api/user/';
const uri = 'http://localhost:8080/api/user/';
export default class CourseService {

    findAllCourses = (userId) => {
        return fetch(uri+userId+'/course',{
            credentials:'include',
        }).then(response => response.json());
    }


    //creates a new course instance and adds it to the collection of courses
    createCourse = (userId,course) => {
        return fetch(uri+userId+'/course',{
            body: JSON.stringify(course),
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            }}).then(response => response.json())
    }

    // retrieves a course instance that matches the id parameter
    findCourseById = (userId,courseId) => {
        this.sendUid = userId;
        return fetch(uri+userId+'/course/'+courseId)
            .then(response => response.json())
    }

    updateCourse = (userId, courseId, course) => {
        return fetch(uri+userId+'/course/'+courseId, {
        body: JSON.stringify(course),
            method: 'PUT',
            headers: {
                'Content-Type':'application/json'
        }}).then(response => response.json())
    }

    // deletes course instance whose id matches the id parameter
    deleteCourse = (userId,courseId) => {
        this.sendUid = userId;
        return fetch(uri+userId+'/course/'+courseId, {
            method: 'DELETE',
            }).then(response => response.json())
    }
}
