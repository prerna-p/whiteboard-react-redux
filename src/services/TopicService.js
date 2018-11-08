

/*const Uri = 'http://localhost:8080/api/course/courseId/module/moduleId/lesson/lessonId/topic';
const tUri = 'http://localhost:8080/api/lesson/{lid}/topic';
const tUri2 = 'http://localhost:8080/api/topic/{tid}'*/

const Uri = 'http://sheltered-lowlands-30899.herokuapp.com/api/course/courseId/module/moduleId/lesson/lessonId/topic';
const tUri = 'http://sheltered-lowlands-30899.herokuapp.com/api/lesson/{lid}/topic';
const tUri2 = 'http://sheltered-lowlands-30899.herokuapp.com/api/topic/{tid}'


export default class TopicService{
    findTopicsForCourseId = (courseId,moduleId,lessonId) => {
        return fetch(Uri.replace('courseId',courseId)
            .replace('moduleId',moduleId)
            .replace('lessonId',lessonId),{
            credentials:'include',
        }).then(response => response.json())
    }

    findAllTopics = (lid) => {
        return fetch(tUri.replace('lid',lid))
            .then(response=>response.json())
    }

    createTopics = (lid,topic) => {
        return fetch(tUri.replace('lid',lid),{
            body: JSON.stringify(topic),
            headers: {'Content-Type' : 'application/json'},
            method: 'POST'
        }).then(response => response.json())
    }

    findTopicById = (tid) => {
        return fetch(tUri2+'/'+tid)
            .then(response=>response.json())
    }

    updateTopic = (tid,topic) => {
        return fetch(tUri2+'/'+tid,{
            body: JSON.stringify(topic),
            headers: {'Content-Type' : 'application/json'},
            method:'PUT'
        }).then(response => response.json())
    }

    deleteTopic = (tid) => {
        return fetch(tUri2+'/'+tid,{
            method:'DELETE'
        }).then(response => response.json())
    }
}