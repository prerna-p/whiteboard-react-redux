const wUri =  'http://localhost:8080/api/topic/tid/list/widget' //create and get
const wUri2 = 'http://localhost:8080/api/list/widget/wid';

export default class WidgetService{
    static findAllWidgetsForTopic = (tid) => {
        return fetch(wUri.replace('tid',tid))
            .then(response=>response.json())
    }

    static findAllWidgets = () => {
        return fetch('/api/widget')
            .then(response=>response.json())
    }

    static createWidget = (tid,widget) => {
        return fetch(wUri.replace('tid',tid),{
            body: JSON.stringify(widget),
            headers: {'Content-Type' : 'application/json'},
            method: 'POST'
        }).then(response => response.json())
    }

    static findWidgetById = (wid) => {
        return fetch(wUri2.replace('wid',wid)).then(response=>response.json())
    }

    static updateWidget = (wid,widget) => {
        return fetch(wUri2.replace('wid',wid),{
            body: JSON.stringify(widget),
            headers: {'Content-Type' : 'application/json'},
            method:'PUT'
        }).then(response => response.json())
    }

    static deleteWidget = (wid) => {
        return fetch(wUri2.replace('wid',wid),{
            method:'DELETE'
        }).then(response => response.json())
    }


}