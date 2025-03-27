import React, {createContext, useContext, useState} from 'react'
import meetings from '../assets/data/meetings'

const MeetingContext = createContext()

export const MeetingProvider = ({children}) => {
    const [scheduledMeetings, setMeetings] = useState(meetings)
    const [uppdateMeeting, setUppdateMeeting] = useState({uppdate: false, id: 0, title: "", date: "", time: "", level: "", participants: "", description: ""})

    return (
        <MeetingContext.Provider value={{scheduledMeetings, setMeetings, uppdateMeeting, setUppdateMeeting}}>
            {children}
        </MeetingContext.Provider>
    )
}

export const useMeetingContext = () => useContext(MeetingContext)

