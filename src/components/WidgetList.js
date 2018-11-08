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
        props.init(props.widgetsInit,props.topic);
        let inputV;
    }

    componentDidMount(){}

    componentDidUpdate(){
        this.props.init(this.props.widgetsInit, this.props.topic)
    }
    render(){
        return(
                <div>
                    <div className="row">
                        <div className="mt-1 col-12 text-right">
                            <button className="btn btn-success btn-sm mr-1"
                                    id="saveBtn"
                                    onClick={()=>this.props.saveWidget}> Save
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
                                            widget.type = event.target.value;
                                            this.props.updateWidget(widget);
                                            }}
                                            value={widget.type}>
                                        <option value="HEADING">Heading</option>
                                        <option value="PARAGRAPH">Paragraph</option>
                                        <option value="LIST">List</option>
                                        <option value="IMAGE">Image</option>
                                        <option value="LINK">Link</option>
                                    </select>
                                    <button onClick={() => this.props.deleteWidget(widget)}
                                            className="btn btn-sm btn-danger ml-1">
                                        <i className="fa fa-times"></i>
                                    </button>
                                </div>
                                {widget.type === "HEADING" &&
                                <HeadingWidget updateWidget={this.props.updateWidget}
                                               widget={widget}
                                               preview={this.props.preview}
                                               name={index}/>}
                                {widget.type === "LIST" &&
                                <ListWidget updateWidget={this.props.updateWidget}
                                            widget={widget}
                                            preview={this.props.preview}
                                            name={index}/>}
                                {widget.type === "PARAGRAPH" &&
                                <ParagraphWidget updateWidget={this.props.updateWidget}
                                                 widget={widget}
                                                 preview={this.props.preview}
                                                 name={index}/>}
                                {widget.type === "IMAGE" &&
                                <ImageWidget updateWidget={this.props.updateWidget}
                                             widget={widget}
                                             preview={this.props.preview}
                                             name={index}/>}
                                {widget.type === "LINK" &&
                                <LinkWidget updateWidget={this.props.updateWidget}
                                            widget={widget}
                                            preview={this.props.preview}
                                            name={index}/>}
                            </li>
                        )
                    }
                    </ul>
                    <div className="float-right">
                        <button onClick={() => this.props.createWidget(this.props.widgets)}
                                className="btn btn-danger m-1">
                            <i className="fa fa-plus"></i>
                        </button>
                    </div>

                </div>
        )
    }
}



export default WidgetList
/*<li className="list-group-item">
    <HeadingWidget />
    </li>
    <li className="list-group-item border-0">
        <div className="float-right">
            <button className="btn btn-danger">
                <i className="fa fa-plus"></i>
            </button>
        </div>
    </li>
    <li className="list-group-item">
        <ParagraphWidget />
        </li>
    <li className="list-group-item">
        <ListWidget />
    </li>
    <li className="list-group-item">
        <ImageWidget />
        </li>
    <li className="list-group-item">
        <LinkWidget />
    </li>*/