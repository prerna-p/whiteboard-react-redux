/*
const mUri = 'http://localhost:8080/api/course/cid/module/mid/lesson'
const lUri = 'http://localhost:8080/api/module/mid/lesson'; //for createlesson and findallLessons
const lUri2 = 'http://localhost:8080/api/lesson'; // for the rest
*/


const mUri = 'http://java-jpa-server.herokuapp.com/api/course/cid/module/mid/lesson'
const lUri = 'http://java-jpa-server.herokuapp.com/api/module/mid/lesson'; //for createlesson and findallLessons
const lUri2 = 'http://java-jpa-server.herokuapp.com/api/lesson'; // for the rest



export default class LessonService{
    findLessonsForCourseId = (cid,mid) => {
        return fetch(mUri.replace('cid',cid)
            .replace('mid',mid),{
            credentials:'include',
        }).then(response => response.json())
    }

    findAllLessons = (mid) => {
        return fetch(lUri.replace('mid',mid))
            .then(response=>response.json())
    }

    createLesson = (mid,lesson) => {
        return fetch(lUri.replace('mid',mid),{
            body: JSON.stringify(lesson),
            headers: {'Content-Type' : 'application/json'},
            credentials:'include',
            method: 'POST'
        }).then(response => response.json())
    }

    findLessonById = (lid) => {
        return fetch(lUri2+'/'+lid)
            .then(response=>response.json())
    }

    updateLesson = (lid,lesson) => {
        return fetch(lUri2+'/'+lid,{
            credentials:'include',
            body: JSON.stringify(lesson),
            headers: {'Content-Type' : 'application/json'},
            method:'PUT'
        }).then(response => response.json())
    }

    deleteLesson = (lid) => {
        return fetch(lUri2+'/'+lid,{
            credentials:'include',
            method:'DELETE'
        }).then(response => response.json())
        console.log(lUri2+'/'+lid)
    }
}