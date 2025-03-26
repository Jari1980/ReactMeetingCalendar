import meetingLevel from "./meetingLevel";


const meetings = [
    {
        id: 0,
        title: "Sing Broccoli songs",
        date: "2025-03-26",
        time: "12:00",
        level: meetingLevel.at(1).name,
        participants: "test1@test1.com, test2@test2.com",
        description: "Test meeting 1"
    },
    {
        id: 1,
        title: "Dota 2 play time",
        date: "2025-03-26",
        time: "17:00",
        level: meetingLevel.at(3).name,
        participants: "test1@test1.com, test2@test2.com",
        description: "Test meeting 2"
    },
]

export default meetings;