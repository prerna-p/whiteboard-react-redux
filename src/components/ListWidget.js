import React from 'react'

const ListWidget =({widget,updateWidget,preview,name})=>
    <div>
        <div className="row">
            <div className="col-8">
                <a className="nav-link disabled">
                    <h3 hidden={preview}>
                        {widget.title}
                    </h3>
                </a>
            </div>
        </div>

        <form className="px-2 pb-2">
            <div className="form-group"
                 hidden={preview}>
                <label htmlFor="listTxt"
                       className="font-italic">
                    Enter list text
                </label>
                    <textarea type="text"
                              id="listTxt"
                              className="form-control"
                              placeholder={widget.text}
                              onChange={(e)=>{
                                  widget.text = e.target.value
                                  updateWidget(widget)}}>
                    </textarea>
            </div>

            <div className="form-group"
                 hidden={preview}>
                <label htmlFor="listType"
                       className="font-italic">
                    Enter list type
                </label>
                <select className="custom-select"
                        id="listType"
                        onChange={(e) => {
                            widget.options = parseInt(e.target.value)
                            updateWidget(widget)}}
                            value={widget.options}>
                    <option value="1">Unordered List</option>
                    <option value="2">Ordered List</option>
                </select>
            </div>

            <div className="form-group"
                 hidden={preview}>
                <label htmlFor="listTitle"
                       className="font-italic">
                    Enter widget title
                </label>
                <input type="text"
                       id="listTitle"
                       className="form-control"
                       placeholder="Widget name"
                       onChange={(e) => {
                           widget.title = e.target.value
                           updateWidget(widget)}}/>
            </div>

            <div>
                <h4 hidden={preview}>
                    Preview
                </h4>
                    {
                        widget.length>0 && widget.options === '2' &&
                        <ol>
                            {
                                widget.text.split('\n').map((item,index) =>
                                <li name={index}>{item}</li>
                                )
                            }
                        </ol>
                    }
                    {
                        widget.length>0 && widget.options === '1' &&
                        <ul>
                            {
                                widget.text.split('\n').map((item,index) =>
                                    <li name={index}>{item}</li>
                                )
                            }
                        </ul>
                    }
            </div>
        </form>
    </div>

export default ListWidget
{/*<div className="col-4">
                <div className="float-right pr-2">
                    <button className="btn btn-sm btn-warning m-1">
                        <i className="fa fa-arrow-up"></i>
                    </button>
                    <button className="btn btn-sm btn-warning">
                        <i className="fa fa-arrow-down"></i>
                    </button>

                    <select className="custom-select-sm ml-1">
                        <option value="1">Heading</option>
                        <option value="2">Paragraph</option>
                        <option value="3">List</option>
                        <option value="3">Image</option>
                        <option value="4">Link</option>
                    </select>
                    <button className="btn btn-sm btn-danger m-1">
                        <i className="fa fa-times"></i>
                    </button>
                </div>
            </div>*/}