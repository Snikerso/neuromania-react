import React from 'react'
import { GiGingerbreadMan } from 'react-icons/gi'
import photo1 from '../photos/n1x.jpg'
import photo2 from '../photos/n2x.jpg'
import photo3 from '../photos/n3x.png'
import photo4 from '../photos/n1x1.jpg'
import photo5 from '../photos/n5x.jpg'
import photo6 from '../photos/n6x.jpg'
const prevItems = [

    { id: 1, photo: <img src={photo1} />, name: "Neuromania I - 25-26.05.2013", text: "The first edition of NeuroMania lasted two days. It included a poster session, undergraduate and graduate students’ presentations as well as inaugural lectures given by researchers from the fields enumerated below: Neurophilosophy - prof. Andrzej Klawiter Consciousness - its object and functions Neurobiology - Piotr Złomańczuk Why is it that neurobiology is the queen of cognitive sciences? Neuroinformatics - prof Włodzisław Duch Memes in the brains Neuroanthropology - dr Tomasz Kozłowski Neuropsychology - dr Aneta Szymaszek New Horizons in neurohabilitation: The role of breakthrough discoveries in brain research" },
    { id: 2, photo: <img src={photo2} />, name: "Neuromania II", text: "EEG and eye-tracking workshops, run by cognitive science students in the Interdisciplinary Centre for Modern Technology, were the foretaste of the second Neuromania conference. Biofeedback performative action crowned the workshop series. The second Neuromania conference also consisted of six thematic blocks. Each of them was being opened with a lecture given by an expert in a given field. During the second edition two poster sessions took place, one each day. Neurobiology - dr Ksenia Meyza Autism Spectrum Disorders in mice - Methods of research Neuroinformatics - prof Piotr Durka The future is now, just unevenly distributed: brain-computer interface and assistant technologies. Neurophilosophy - dr Mateusz Hohoł Naturalizing morality: perspectives and frontiers Neuroesthetics - prof Małgorzata Tafil-Klawe The need to create: How the writer’s or painter’s brain works Neuropsychology - dr Anna Oroń On the newest theories regarding speech and language neuroanatomy in normal functioning and pathology  Developmental neuroscience - dr Bibianna Bałaj Through the eyes of a child. Oculographic research of infants’ cognitive processes  The closing lecture - dr Przemysław Tomalski What do infants know about human speech?" },
    { id: 3, photo: <img src={photo3} />, name: "Neuromania III", text: "During the two days of the third edition of Neuromania conference we heard over twenty lectures, including the ones from dr Rafał Czajkowski, dr Ewa Kublik, dr Marek Binder and professor Marcin Miłkowski. The subject of the meetings was very broad - from the role of individual receptors in modulation of neurons’ activity, through eating disorders, all the way to neural coding of the spatial location in the brain. During the poster session, participants themselves could present their research and interests. For volunteers, there were also workshops dedicated to technologies such as Oculus Rift, EGI system or 3D printing.  dr Rafał Czajkowski - Spatial location system in the brain - The first neural code deciphered prof Marcin Miłkowski - Blue Brain and Human Brain Project: Bottom-up modeling in computational neuroscience  dr Marek Binder - The proof of being conscious - Current studies on the examination of the state of patients after severe brain damage. dr Paweł Stróżak - Brain mechanisms of remembering and recognition" },
    { id: 4, photo: <img src={photo4} />, name: "Neuromania IV", text: "The fourth edition of Neuromania conference consisted of seven thematic blocks. These were: psychology, mathematics, language, memory, neurobiology, EEG, and MRI. During these blocks, we could hear lectures from twenty-four participants. Thirty-three scientific posters were presented. 2016 is the year, when official VR section of Toruń Cognitive Science Club was created. Back then, it was called VRlab. Thanks to VRlab, for the first time in the history of Neuromania conference, participants could take part in VR/AR workshops, during which they had access to the newest technology. dr Anna Szymanik-Kostrzewska - Are we all Capricorns? The psychology students’ faith in Zodiac signs meaning  prof Grzegorz Króliczak - Hemisphere dominance and handedness and brain function organization: myths in confrontation  Małgorzeata Neska-Matuszewska, MD, Michał , MD - An insight into cerebral microcirculation functioning - pathology imaging in magnetic resonance perfusion" },
    { id: 5, photo: <img src={photo5} />, name: "Neuromania V", text: "During the fifth edition of the Neuromania conference we had a chance to hear twenty lectures distributed among six thematic sessions: EEG, cognitive processes I, resonance session, cognitive disorders, cognitive processes II, and VR session. Also, two poster sessions and VR technology application workshops for volunteers took place.  dr Szymon Wichary - Neurophysiological mechanisms of decision making dr Tomasz Wolak - Mapping the senses - how the brain processes the sensory information prof Maria Lewicka - The place as an object of esthetic judgement: About environmental esthetics, place and non-place genius loci" },
    { id: 6, photo: <img src={photo6} />, name: "Neuromania VI 02-03.06.2018", text: "At the beginning of June 2018 the sixth edition of Neuromania conference took place. During the conference we could hear twenty-two lectures, participate in three workshops and watch a display created by Elmiko Business. The conference was crowned by four expert lectures. prof Marek Harad - Neuromodulation in neurological and psychic diseases dr Agnieszka Pluta - Neurocognitive mechanisms of the theory of mind development in children who develop typically, ones with higher risk of autism spectrum disorder and deaf ones using a cochlear implants. The studies with the use of neuro  prof Michał Harciarek - What does primary progressive aphasia tell us about the brain organisation of language processes? Maria Barcikowska MD Mild cognitive disorders - conversion to dementia" },
    { id: 7, photo: <GiGingerbreadMan />, name: "Neuromania VII", text: "soon..." },


]


const PreviousPage = () => {


    return (
        <div className="previous-contener">
            {prevItems.map(item => {
                return (
                    <div className="previous-card" key={item.id}>
                        <h3>{item.name}</h3>
                        <div className="previous-content">
                            <div className="previous-photo">{item.photo}</div>
                            <div className="guest-text">{item.text}</div>
                        </div>
                    </div>
                )
            })

            }
        </div>
    )
}

export default PreviousPage;