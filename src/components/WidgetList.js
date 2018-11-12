import React from 'react'
import HeadingWidget from './HeadingWidget'
import ParagraphWidget from './ParagraphWidget'
import ListWidget from './ListWidget'
import ImageWidget from "./ImageWidget";
import LinkWidget from "./LinkWidget";
import ToggleButton from 'react-toggle-button'

class WidgetList extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            widgets: [],
            topicId:''
        }
    }

    setTopicId = (topicId) => {
        this.setState({topicId: topicId});
    }

    componentDidMount(){
        this.props.init(this.props.topicId)
    }

    componentWillReceiveProps(nprops){
        if(nprops.topicId != this.state.topicId){
            this.setTopicId(nprops.topicId);
            this.props.init(nprops.topicId);
        }

    }
    render(){
        return(
                <div>
                    <div className="row">
                        <div className="mt-1 col-12 text-right">
                            <button className="btn btn-success btn-sm mr-1"
                                    id="saveBtn"
                                    onClick={()=>this.props.saveWidget(this.props.widgets)}> Save
                            </button>
                            Preview
                            <div className="float-right m-1">
                                <ToggleButton value={this.props.preview}
                                              onToggle={this.props.activatePreview}/>
                            </div>

                        </div>
                    </div>

                    <ul className="list-group mt-1">{
                        this.props.widgets.map((widget, index) =>
                            <li key={index}
                                className="list-group-item">
                                <div className="float-right">
                                    <button id="move-up"
                                            className="btn btn-sm btn-warning m-1"
                                            onClick={() => this.props.moveUp(widget)}
                                            hidden={index==0}>
                                        <i className="fa fa-arrow-up"></i>
                                    </button>
                                    <button id="move-down"
                                            className="btn btn-sm btn-warning"
                                            onClick={() => this.props.moveDown(widget)}
                                            hidden={index+1==this.props.widgets.length}>
                                        <i className="fa fa-arrow-down"></i>
                                    </button>

                                    <select className="custom-select-sm ml-1"
                                            onChange={(event) => {
                                            widget.widgetType = event.target.value;
                                            this.props.updateWidget(widget);
                                            }}
                                            value={widget.widgetType}>
                                        <option value="HEADING">Heading</option>
                                        <option value="PARAGRAPH">Paragraph</option>
                                        <option value="LIST">List</option>
                                        <option value="IMAGE">Image</option>
                                    </select>
                                    <button onClick={() => this.props.deleteWidget(widget)}
                                            className="btn btn-sm btn-danger ml-1">
                                        <i className="fa fa-times"></i>
                                    </button>
                                </div>
                                {widget.widgetType === "HEADING" &&
                                <HeadingWidget updateWidget={this.props.updateWidget}
                                               widget={widget}
                                               preview={this.props.preview}
                                               name={index}/>}
                                {widget.widgetType === "LIST" &&
                                <ListWidget updateWidget={this.props.updateWidget}
                                            widget={widget}
                                            preview={this.props.preview}
                                            name={index}/>}
                                {widget.widgetType === "PARAGRAPH" &&
                                <ParagraphWidget updateWidget={this.props.updateWidget}
                                                 widget={widget}
                                                 preview={this.props.preview}
                                                 name={index}/>}
                                {widget.widgetType === "IMAGE" &&
                                <ImageWidget updateWidget={this.props.updateWidget}
                                             widget={widget}
                                             preview={this.props.preview}
                                             name={index}/>}
                                {widget.widgetType === "LINK" &&
                                <LinkWidget updateWidget={this.props.updateWidget}
                                            widget={widget}
                                            preview={this.props.preview}
                                            name={index}/>}
                            </li>
                        )
                    }
                    </ul>
                    <div className="float-right">
                        <button onClick={() => this.props.createWidget(this.props.topicId)}
                                className="btn btn-danger m-1">
                            <i className="fa fa-plus"></i>
                        </button>
                    </div>

                </div>
        )
    }
}



export default WidgetList
