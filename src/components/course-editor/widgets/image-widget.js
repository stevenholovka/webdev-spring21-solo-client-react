import React, {useState} from 'react'

const ImageWidget = (
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
            <h2>Image Widget</h2>
            {
                !editing &&
                    <img width={widget.width} height={widget.height} src={widget.src}/>
            }
            {
                editing &&
                <div>

                    <select onChange={(e) => {
                        setCachedItem({...cachedItem, type: e.target.value})}}
                            value={cachedItem.type}
                            className="form-control">
                        <option value={"HEADING"}>Heading</option>
                        <option value={"PARAGRAPH"}>Paragraph</option>
                        <option value={"LIST"}>List</option>
                        <option value={"IMAGE"}>Image</option>
                    </select>

                    URL
                    <input value={cachedItem.src}
                           className="form-control"
                           onChange={(e) => {
                               setCachedItem({...cachedItem, src: e.target.value})}}
                    />
                    Width
                    <input value={cachedItem.width}
                           className="form-control"
                           onChange={(e) => {
                               setCachedItem({...cachedItem, width: parseInt(e.target.value)})}}
                    />
                    Height
                    <input value={cachedItem.height}
                           className="form-control"
                           onChange={(e) => {
                               setCachedItem({...cachedItem, height: parseInt(e.target.value)})}}
                    />

                    <i onClick={() => {updateWidget(cachedItem)}}
                       className="fas fa-sync-alt fa-2x float-right"/>
                    <i onClick={() => {deleteWidget(widget.id)}}
                       className="fas fa-trash fa-2x float-right"/>
                </div>
            }
        </div>
    )
}

export default ImageWidget