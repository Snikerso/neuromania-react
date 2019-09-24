import React from 'react'
import HarmonogramListItem from './HarmonogramListItem'

const HarmonogramList = ({ initharmonogram, handleAddOwnItem }) => {

    return (

        <>
            <div>
                {initharmonogram.map(item => {
                    return (
                        <div>
                            <HarmonogramListItem
                                key={initharmonogram.id}
                                item={item}
                                handleAddOwnItem={handleAddOwnItem}
                            />
                        </div>
                    )
                })}


            </div>




        </>
    )
}

export default HarmonogramList;