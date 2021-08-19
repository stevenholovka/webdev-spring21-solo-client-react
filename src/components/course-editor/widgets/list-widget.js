import React, {useState} from 'react'

const ListWidget = (
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
            <h2>List Widget</h2>
            {
                !editing &&
                <div>
                    {
                        widget.ordered &&
                        <ol>
                            {
                                widget.text.split("\n").map(item => {
                                        return (
                                            <li key={widget.id}>{item}</li>
                                        )
                                    }
                                )
                            }
                        </ol>
                    }
                    {
                        !widget.ordered &&
                        <ul>
                            {
                                widget.text.split("\n").map(item => {
                                        return (
                                            <li key={widget.id}>{item}</li>
                                        )
                                    }
                                )
                            }
                        </ul>

                    }
                </div>
            }
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

                    <input type="checkbox"
                           onChange={(e) => {
                               if (e.currentTarget.checked) {
                                   setCachedItem({...cachedItem, ordered: true})
                               } else {
                                   setCachedItem({...cachedItem, ordered: false})
                               }
                           }}/>Ordered List Items

                    <br/>

                    <textarea onChange={(e) => {
                        setCachedItem({...cachedItem, text: e.target.value})}}
                              rows={5}
                              value={cachedItem.text}
                              className="form-control">
                        </textarea>

                    <i onClick={() => {updateWidget(cachedItem)}}
                       className="fas fa-sync-alt fa-2x float-right"/>
                    <i onClick={() => {deleteWidget(widget.id)}}
                       className="fas fa-trash fa-2x float-right"/>
                </div>
            }
        </div>
    )
}

export default ListWidget