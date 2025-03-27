import React from "react";
import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useMeetingContext } from "./context";


const MeetingsTable = () => {
  const { scheduledMeetings, setMeetings } = useMeetingContext();
  const { uppdateMeeting, setUppdateMeeting } = useMeetingContext();


  function deleteMeeting(id) {
    let filtered = scheduledMeetings.filter(element => element.id !== id)
    setMeetings(filtered)
  }
  
  function editMeeting(id){
    let meeting = scheduledMeetings.filter(element => element.id === id)
    console.log(meeting)
    setUppdateMeeting({uppdate: true, id: meeting[0].id, title: meeting[0].title, date: meeting[0].date, time: meeting[0].time, level: meeting[0].level, participants: meeting[0].participants, description: meeting[0].description})
  }

  return (
    <div className="container d-flex justify-content-center">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Meeting Title</th>
            <th>Date</th>
            <th>Time</th>
            <th>Level</th>
            <th>Actions</th>
          </tr>
        </thead>

        {scheduledMeetings.map((item) => (
          <tbody key={item.id}>
            <tr>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.date}</td>
              <td>{item.time}</td>
              <td>{item.level}</td>
              <td>
                <Button onClick={() => editMeeting(item.id)}>Edit</Button>
                <Button onClick={() => deleteMeeting(item.id)}>Delete</Button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default MeetingsTable;
