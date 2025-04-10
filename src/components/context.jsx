import React, {createContext, useContext, useState} from 'react'
import meetings from '../assets/data/meetings'
import axios from 'axios'

const MeetingContext = createContext()

export const MeetingProvider = ({children}) => {
    const [scheduledMeetings, setMeetings] = useState(meetings)
    const [uppdateMeeting, setUppdateMeeting] = useState({uppdate: false, id: 0, title: "", date: "", time: "", level: "", participants: "", description: ""})
    const [logged, setLogged] = useState(false)

    

    return (
        <MeetingContext.Provider value={{scheduledMeetings, setMeetings, uppdateMeeting, setUppdateMeeting, logged, setLogged}}>
            {children}
        </MeetingContext.Provider>
    )
}

export const useMeetingContext = () => useContext(MeetingContext)

