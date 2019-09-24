import React from 'react'
import { IoMdAdd } from 'react-icons/io'


const HarmonogramListItem = ({ item, handleAddOwnItem }) => {
    const { id, text, place, data } = item
    return (
        <>
            <div key={item.id} className="harmonogram-item">
                <div style={{ minWidth: '10%' }} className="harmonogram-item-div">{data}</div>
                <div className="harmonogram-item-div">{text}</div>
                <div className="harmonogram-item-div">{place}</div>

                <button className="harmonogram-item-button" onClick={() => handleAddOwnItem(id)}><IoMdAdd /></button>

            </div>
        </>
    )
}

export default HarmonogramListItem;