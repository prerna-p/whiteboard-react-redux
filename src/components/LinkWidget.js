import React from 'react'

const LinkWidget =({widget,updateWidget,preview,name})=>
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
            <div className="form-group">
                <div className="form-group"
                     hidden={preview}>
                    <label htmlFor="linkName"
                           className="font-italic">
                        Enter url
                    </label>
                    <input type="url"
                           className="form-control"
                           id="linkName"
                           placeholder={widget.url}
                           onChange={(e)=>{
                               widget.url = e.target.value
                               updateWidget(widget)}}/>

                </div>

                <div className="form-group"
                     hidden={preview}>
                    <label htmlFor="textForLink"
                           className="font-italic">
                        Enter text for link
                    </label>
                    <input type="text"
                           className="form-control"
                           id="textForLink"
                           placeholder={widget.preview}
                           onChange={(e)=>{
                               widget.preview = e.target.value
                               updateWidget(widget)}}/>

                </div>

                <div className="form-group"
                     hidden={preview}>
                    <label htmlFor="linkWdNm"
                           className="font-italic">
                        Enter widget title
                    </label>
                    <input type="text"
                           className="form-control"
                           id="linkWdNm"
                           placeholder="Widget name"
                           onChange={(e) => {
                               widget.title = e.target.value
                               updateWidget(widget)}}/>
                </div>

                <div>
                    <h4 hidden={preview}>
                        Preview
                    </h4>
                    <a href={widget.url}
                       id="linkPrev">{widget.preview}</a>
                </div>
            </div>
        </form>
    </div>

export default LinkWidget

{/* <div className="col-4">
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