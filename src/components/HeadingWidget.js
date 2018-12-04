import React from 'react'

const HeadingWidget = ({widget,updateWidget,preview,name}) => {
    return(
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
                    <label htmlFor="headTxt"
                           className="font-italic">
                        Enter heading text
                    </label>
                    <input type="text"
                           id="headTxt"
                           className="form-control"
                           placeholder="Heading Text"
                           onChange={(e) => {
                               widget.text = e.target.value;
                               updateWidget(widget);}}/>

                </div>
                <div className="form-group"
                     hidden={preview}>
                    <label htmlFor="headSize"
                           className="font-italic">
                        Select heading size
                    </label>
                    <select className="custom-select"
                            id="headSize"
                            value={widget.headingValue}
                            onChange={(event) => {
                                widget.headingValue = parseInt(event.target.value);
                                updateWidget(widget);

                            }}>
                        <option value="1">Heading 1</option>
                        <option value="2">Heading 2</option>
                        <option value="3">Heading 3</option>
                        <option value="4">Heading 4</option>
                        <option value="5">Heading 5</option>
                        <option value="6">Heading 6</option>
                    </select>
                </div>
                <div className="form-group"
                     hidden={preview}>
                    <label htmlFor="headWdNm"
                           className="font-italic">
                        Enter widget title
                    </label>
                    <input type="text"
                           id="headWdNm"
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
                    {widget.headingValue === 1 && <h1>{widget.text}</h1>}
                    {widget.headingValue === 2 && <h2>{widget.text}</h2>}
                    {widget.headingValue === 3 && <h3>{widget.text}</h3>}
                    {widget.headingValue === 4 && <h4>{widget.text}</h4>}
                    {widget.headingValue === 5 && <h5>{widget.text}</h5>}
                    {widget.headingValue === 6 && <h6>{widget.text}</h6>}
                </div>
            </form>
        </div>
    )

}


export default HeadingWidget
