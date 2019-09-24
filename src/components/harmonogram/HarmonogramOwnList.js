import React from 'react'
import HarmonogramOwnListItem from './HarmonogramOwnListItem'
const HarmonogramOwnList = ({ harmonogramOwnItem, handleRemoveOwnItem }) => {

    return (
        <>
            <div className="harmonogram-own-item">
                {harmonogramOwnItem.map(item => {
                    return (
                        <div >
                            <HarmonogramOwnListItem
                                key={item.id}
                                item={item}
                                handleRemoveOwnItem={handleRemoveOwnItem}
                            />
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default HarmonogramOwnList;