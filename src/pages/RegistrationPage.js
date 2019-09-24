import React from 'react'

const RegistrationPage = () => {
    return (

        <>
            <div style={{padding:10}}>
                <div>
                <div id="registration" class="section4">
                    <h2>Registration</h2>
                        <p>
			Abstracts should be written in English and have approximately 300 words for a poster session and around 500 words 
                        for an oral presentation (bibliography excl.). Submission should ideally refer to spatial cognition, abstract thinking
                         or self-location in space; however, we are open to interdisciplinary innovative research. We kindly invite students 
                         from cognitive science, psychology, sociology, linguistics, computer science, philosophy and all the related fields 
                         to participate actively. 
                        Note that the event will be held fully in English.                       


                        Deadline for spoken presentation - <b>09.06.2019</b> 
			Deadline for poster presentation - <b>18.08.2019</b> 
                        Confirmation of acceptance - <b>16.06.2019</b> 
                        Deadline for passive participants - <b>18.08.2019</b> 
                        Registration fee for active and passive participants (covers two meals, coffee breaks and conference materials):
                        I deadline - before 01.07.2019 - 125 PLN (30 EUR)
                        II deadline - before 20.07.2019 - 145 PLN (35 EUR)
                        III deadline - before 25.08.2019 - 165 PLN (40 EUR)
                        
  The payment should be sent to the following bank account:

Uniwersytet Mikołaja Kopernika, Toruń
Bank Millennium S.A. Warszawa
45 1160 2202 0000 0000 3174 8579
SWIFT: BIG B PL PW
IBAN: PL45 1160 2202 0000 0000 3174 8579

For the title of your payment please use:
Your name and surname + "Neuromania VII" 

We kindly ask you to send a payment confirmation in a pdf format to our e-mail address.
                        </p>
                        
                </div>
                </div>
                <form >
                    <div className="registration">

                        <label>Name</label><input type="text" />
                        <label>Surname</label><input type="text" />

                        <div>
                            <label>Stanowisko naukowe</label><input type="text" />

                            <label>Institute</label><input type="text" />
                        </div>


                        <div className="registration-select">
                            <select>
                                <option value="0">Active</option>
                                <option value="1">Passive</option>
                                <option value="1">Poster presentation</option>

                            </select>
                            <button type="submit" title="Submit" value="submit" >Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default RegistrationPage;