import React, { useState } from 'react';
import MeetingForm from './MeetingForm';
import MeetingsTable from './MeetingsTable';
import meetings from '../assets/data/meetings';

const ManageMeetings = () => {

    const {scheduledMeetings, setMeetings} = useState(meetings)

    

    return (
        <>
        <MeetingForm />
        <MeetingsTable />
        </>
    );
};

export default ManageMeetings;