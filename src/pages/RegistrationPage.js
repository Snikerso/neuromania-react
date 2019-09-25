import React, { useState } from 'react'

const RegistrationPage = () => {

    // const [name, setName] = useState('')
    // const [surname, setSurname] = useState('')


    // const handleNameInput = e => {
    //     setName(e.target.value)
    //     console.log(name)
    // }
    // const handleSurnameInput = e => {
    //     setSurname(e.target.value)

    // }

    // const handleFormSubmit = () => {

    // }


    return (
        <>
            <div style={{ padding: 10 }}>
                <div>
                    <div id="registration" class="section4">
                        <h2>Registration</h2><br />
                        <p>
                            Abstracts should be written in English and have approximately 300 words for a poster session and around 500 words
                            for an oral presentation (bibliography excl.). Submission should ideally refer to spatial cognition, abstract thinking
                            or self-location in space; however, we are open to interdisciplinary innovative research. We kindly invite students
                            from cognitive science, psychology, sociology, linguistics, computer science, philosophy and all the related fields
                            to participate actively. <br />
                            Note that the event will be held fully in English.   <br /> <br />


                            Deadline for spoken presentation - <b>09.06.2019</b> <br />
                            Deadline for poster presentation - <b>18.08.2019</b> <br />
                            Confirmation of acceptance - <b>16.06.2019</b> <br />
                            Deadline for passive participants - <b>18.08.2019</b> <br />
                            Registration fee for active and passive participants (covers two meals, coffee breaks and conference materials):<br />
                            I deadline - before 01.07.2019 - 125 PLN (30 EUR)<br />
                            II deadline - before 20.07.2019 - 145 PLN (35 EUR)<br />
                            III deadline - before 25.08.2019 - 165 PLN (40 EUR)<br />   <br />

                            The payment should be sent to the following bank account:<br />   <br />

                            Uniwersytet Mikołaja Kopernika, Toruń<br />
                            Bank Millennium S.A. Warszawa<br />
                            45 1160 2202 0000 0000 3174 8579<br />
                            SWIFT: BIG B PL PW<br />
                            IBAN: PL45 1160 2202 0000 0000 3174 8579<br />   <br />

                            For the title of your payment please use:<br />
                            Your name and surname + "Neuromania VII" <br />   <br />

                            We kindly ask you to send a payment confirmation in a pdf format to our e-mail address.<br />
                        </p>

                    </div>
                </div>
                {/* <form onSubmit={handleFormSubmit}>
                    <div className="registration">

                        <div><label>Name</label><input type="text" value={name} onChange={handleNameInput} /></div>
                        <div><label>Surname</label><input type="text" value={surname} onChange={handleSurnameInput} /></div>

                        <div>
                            <label>Stanowisko naukowe</label><input type="text" />
                        </div>
                        <div>
                            <label>Institute</label><input type="text" />
                        </div>


                        <div className="registration-select">

                            <label>What kind of participants you are</label>
                            <select>
                                <option value="0">Active</option>
                                <option value="1">Passive</option>
                                <option value="1">Poster presentation</option>

                            </select>
                            <button type="submit" title="Submit" value="submit" >Submit</button>
                        </div>
                    </div>
                </form> */}
            </div>
        </>
    )
}

export default RegistrationPage;