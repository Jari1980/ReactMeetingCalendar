import React, {createContext, useContext, useState} from 'react'
import meetings from '../assets/data/meetings'

const MeetingContext = createContext()

export const MeetingProvider = ({children}) => {
    const [scheduledMeetings, setMeetings] = useState(meetings)

    return (
        <MeetingContext.Provider value={{scheduledMeetings, setMeetings}}>
            {children}
        </MeetingContext.Provider>
    )
}

export const useMeetingContext = () => useContext(MeetingContext)