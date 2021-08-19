import React, {useState} from 'react'

const ParagraphWidget = (
    {
        widget,
        editing,
        deleteWidget,
        updateWidget
    }
) => {

    const [cachedItem, setCachedItem] = useState(widget)

    return (
        <div>
            <h2>Paragraph Widget</h2>
            {
                editing &&
                <div>

                    <select onChange={(e) => {
                        setCachedItem({...cachedItem, type: e.target.value})
                    }}
                            value={cachedItem.type}
                            className="form-control">
                        <option value={"HEADING"}>Heading</option>
                        <option value={"PARAGRAPH"}>Paragraph</option>
                        <option value={"LIST"}>List</option>
                        <option value={"IMAGE"}>Image</option>
                    </select>

                    <textarea className="form-control"
                              onChange={(e) =>
                                  setCachedItem({...cachedItem, text: e.target.value})}
                              value={cachedItem.text}>
                    </textarea>

                    <i onClick={() => {updateWidget(cachedItem)}}
                       className="fas fa-sync-alt fa-2x float-right"/>
                    <i onClick={() => {deleteWidget(widget.id)}}
                       className="fas fa-trash fa-2x float-right"/>
                </div>
            }
            {
                !editing &&
                <div>
                    <p>
                        {widget.text}
                    </p>
                </div>
            }
        </div>
    )
}

export default ParagraphWidget