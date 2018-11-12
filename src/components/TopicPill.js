import React from 'react'

const TopicPill = ({topic, selectTopic,
                       selected, deleteTopic,
                       topicFormChanged, createTopic,
                       updateTopic}) =>
    <li className="nav-item">
        <a onClick={() => selectTopic(topic)}
           className={selected ? "nav-link active":"nav-link"}>
            {topic.title}
            <a onClick={()=> updateTopic(topic)}>
                <i className="m-1 fa fa-pencil"></i>
            </a>

            <a onClick={() => deleteTopic(topic.id)}>
                <i className="fa fa-trash"></i>
            </a>
        </a>
    </li>

export default TopicPill