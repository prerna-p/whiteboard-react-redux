/*
const cUri = 'http://localhost:8080/api/user/uid/course/cid/module';
const mUri = 'http://localhost:8080/api/course/cid/module';
const mUri2 = 'http://localhost:8080/api/course/cid/module/mid'
*/

const cUri = 'http://java-jpa-server.herokuapp.com/api/user/uid/course/cid/module';
const mUri = 'http://java-jpa-server.herokuapp.com/api/course/cid/module';
const mUri2 = 'http://java-jpa-server.herokuapp.com/api/course/cid/module/mid'



export default class ModuleService {
    findAllModules = (courseId) =>{
        return fetch(mUri.replace('cid',courseId),{
            credentials:'include',
        }).then(response => response.json())
    }

    createModule = (courseId,module) => {
        return fetch(mUri.replace('cid',courseId),{
            body: JSON.stringify(module),
            headers: {'Content-Type' : 'application/json'},
            credentials:'include',
            method: 'POST'
        }).then(response => response.json())
    }

    findModuleById = (courseId,moduleId) => {
        return fetch(mUri2.replace('cid',courseId).replace('mid',moduleId),{
            credentials:'include',
        }).then(response=>response.json())
    }

    updateModule = (courseId,moduleId,module) => {
        console.log(moduleId)
        return fetch(mUri2.replace('cid',courseId).replace('mid',moduleId),{
            credentials:'include',
            body: JSON.stringify(module),
            headers: {'Content-Type' : 'application/json'},
            method:'PUT'
        }).then(response => response.json())
    }

    deleteModule = (courseId,moduleId) => {

        return fetch(mUri2.replace('cid',courseId).replace('mid',moduleId),{
            credentials:'include',
            method:'DELETE',
        }).then(response => response.json())
    }

}
