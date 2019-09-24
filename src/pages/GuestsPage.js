import React from 'react'
import { GiGingerbreadMan } from 'react-icons/gi'
const guests = [

    { id: 1, photo: <GiGingerbreadMan />, name: "Somebody know" },
    { id: 2, photo: <GiGingerbreadMan />, name: "Somebody know" },
    { id: 3, photo: <GiGingerbreadMan />, name: "Somebody know" },
    { id: 4, photo: <GiGingerbreadMan />, name: "Somebody know" },
    { id: 5, photo: <GiGingerbreadMan />, name: "Somebody know" },
    { id: 6, photo: <GiGingerbreadMan />, name: "Somebody know" },


]


const GuestsPage = () => {


    return (
        <div className="guests">
            {guests.map(guest => {
                return (
                    <div className="guest" key={guest.id}>
                        <div>
                            <div className="guest-photo">{guest.photo}</div>
                            <div className="guest-name">{guest.name}</div>
                        </div>
                    </div>
                )
            })

            }
        </div>
    )
}

export default GuestsPage;