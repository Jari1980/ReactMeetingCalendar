import meetingLevel from "./meetingLevel";
import axios from "axios";


let meetings = [{}]
/*
axios.get("http://localhost:8080/api/v1/project/meetings").then((response) => {
    console.log(response.data)
    meetings = response.data
})
*/
/*
const meetings = [
    {
        id: 0,
        title: "Sing Broccoli songs",
        date: "2025-03-26",
        time: "12:00",
        level: meetingLevel[0].name,
        participants: "test1@test1.com, test2@test2.com",
        description: "Test meeting 1"
    },
    {
        id: 1,
        title: "Dota 2 play time",
        date: "2025-03-26",
        time: "17:00",
        level: meetingLevel[3].name,
        participants: "test1@test1.com, test2@test2.com",
        description: "Test meeting 2"
    },
]
    */

export default meetings;