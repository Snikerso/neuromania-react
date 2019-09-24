import React, { useState, useEffect } from 'react'
import HarmonogramList from '../components/harmonogram/HarmonogramList'
import HarmonogramOwnList from '../components/harmonogram/HarmonogramOwnList'
import uuid from 'uuid/v4'

const Harmonogram = () => {

    const initItem = [
        { id: uuid(), text: "REGISTRATION+COFFEE", data: "8:30 AM", place: "EntranceHall", day: "wednesday" },
        { id: uuid(), text: "Opening Ceremony", data: "9:00 AM", place: "Auditorium", day: "wednesday" },
        { id: uuid(), text: "KeyLecture I: Crawford WinLove 'Imagination: The theatre of your mind'", data: "9:10", place: "Auditorium", day: "wednesday" },
        { id: uuid(), text: "COFFEE BREAK", data: "10:30 AM", place: "Auditorium", day: "wednesday" },
        { id: uuid(), text: "STUDENT SESSION", data: "10:45 AM", place: "Auditorium", day: "wednesday" },
        { id: uuid(), text: "COFFEE BREAK", data: "12:15 AM", place: "Auditorium", day: "wednesday" },
        { id: uuid(), text: "KEY LECTURE II: Roberto Bottini 'The spatial organization of knowledge beyond hippocampal cognitive maps'", data: "9:00 AM", place: "Auditorium", day: "wednesday" },
        { id: uuid(), text: "DINNER", data: "1:45 PM", place: "Main Hall", day: "wednesday" },
        { id: uuid(), text: "KEY LECTURE III: Jacon Bellmund 'Mapping space and time for memory (and beynd?)'", data: "9:00 PM", place: "Auditorium", day: "wednesday" },
        { id: uuid(), text: "POSTER SESSION", data: "4:15 PM", place: "Main Hall", day: "wednesday" },
        { id: uuid(), text: "KEY SPEAKERS DISCUSSION", data: "5:15 PM", place: "Auditorium", day: "wednesday" },
        { id: uuid(), text: "INTEGRATION PARTY", data: "7:00 PM", place: "Auditorium", day: "wednesday" },

        { id: uuid(), text: "REGISTRATION+COFFEE", data: "8:30 AM", place: "EntranceHall", day: "thursday" },
        { id: uuid(), text: "Opening Ceremony", data: "9:00 AM", place: "Auditorium", day: "thursday" },
        { id: uuid(), text: "KeyLecture I: Crawford WinLove 'Imagination: The theatre of your mind'", data: "9:10 AM", place: "Auditorium", day: "thursday" },
        { id: uuid(), text: "COFFEE BREAK", data: "10:30 AM", place: "Auditorium", day: "thursday" },
        { id: uuid(), text: "STUDENT SESSION", data: "10:45 AM", place: "Auditorium", day: "thursday" },
        { id: uuid(), text: "COFFEE BREAK", data: "12:15 AM", place: "Auditorium", day: "thursday" },
        { id: uuid(), text: "KEY LECTURE II: Roberto Bottini 'The spatial organization of knowledge beyond hippocampal cognitive maps'", data: "9:00 AM", place: "Auditorium", day: "thursday" },
        { id: uuid(), text: "DINNER", data: "1:45 PM", place: "Main Hall", day: "thursday" },
        { id: uuid(), text: "KEY LECTURE III: Jacon Bellmund 'Mapping space and time for memory (and beynd?)'", data: "9:00 AM", place: "Auditorium", day: "thursday" },
        { id: uuid(), text: "POSTER SESSION", data: "4:15 PM", place: "Main Hall", day: "thursday" },
        { id: uuid(), text: "KEY SPEAKERS DISCUSSION", data: "5:15 PM", place: "Auditorium", day: "thursday" },
        { id: uuid(), text: "INTEGRATION PARTY", data: "7:00 PM", place: "Auditorium", day: "thursday" },
    ]
    const initialStorageItem = localStorage.getItem("harmo")
        ? JSON.parse(localStorage.getItem("harmo")) : [];

    const [initharmonogram, setInitHarmonogram] = useState(initItem)
    const [harmonogramOwnItem, setOwnHarmnogramItem] = useState(initialStorageItem)



    const handleDayButtonTh = (item) => {
        setInitHarmonogram(initItem.filter(item => item.day === "thursday"))
    }
    const handleDayButtonWe = (item) => {
        setInitHarmonogram(initItem.filter(item => item.day === "wednesday"))
    }

    const handleAddOwnItem = (id, text) => {

        const singleItem = initharmonogram.find(item => item.id === id)
        if (harmonogramOwnItem.some(item => item.text === singleItem.text && item.day === singleItem.day && item.data === singleItem.data)) {
            // alert("Object found inside the array.");

        } else {
            setOwnHarmnogramItem([...harmonogramOwnItem, singleItem])

        }
    }
    const handleRemoveOwnItem = (id) => {
        let removeItem = harmonogramOwnItem.filter(item =>
            item.id !== id)

        setOwnHarmnogramItem(removeItem)
    }

    useEffect(() => {

        localStorage.setItem('harmo', JSON.stringify(harmonogramOwnItem))
    }, [harmonogramOwnItem])


    return (
        <>
            <div className="main">
                <div style={{ padding: 10 }} > COMPLETE PROGRAMME WITH ABSTRACTS AND CONFERENCE INFORMATION IS AVAILABLE <a style={{ color: "#00a1af", textDecoration: "none" }} href="photos/NEUROMANIA-CONFERENCE.pdf">HERE</a>.
                </div>
                <div className="harmonogram-day-button-contener">
                    <button autoFocus="true" className="harmonogram-day-button" onClick={() => handleDayButtonWe()}>Wednesday</button>
                    <button className="harmonogram-day-button" onClick={() => handleDayButtonTh()}>Thursday</button>
                </div>
                <div>
                    <HarmonogramList initharmonogram={initharmonogram} handleAddOwnItem={handleAddOwnItem} />

                </div>
                <div style={{ padding: 20, marginTop: '40px', }}>
                    <h3>Your Harmonogram</h3>
                </div>

                <div>

                    <HarmonogramOwnList

                        harmonogramOwnItem={harmonogramOwnItem} handleRemoveOwnItem={handleRemoveOwnItem} />
                    <div className="">
                        <button className="harmonogram-day-button-special">Print</button>
                        <button className="harmonogram-day-button-special">Kalendarz</button>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Harmonogram;