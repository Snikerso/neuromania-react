import React from 'react'
import { FiTrash2 } from 'react-icons/fi'
const HarmonogramOwnListItem = ({ item, handleRemoveOwnItem }) => {
    const { id, text, place, data, day } = item
    return (
        <>
            <div className="harmonogram-item" >
                <div className="harmonogram-item-div">
                    <div>{data}</div>
                    <div style={{ color: '#00a1af' }}>{day}</div>
                </div >
                <div className="harmonogram-item-div">{text}</div>
                <div className="harmonogram-item-div">{place}</div>
                <button className="harmonogram-item-button-own" onClick={() => handleRemoveOwnItem(id)}><FiTrash2 /></button>
            </div>
        </>
    )
}

export default HarmonogramOwnListItem;