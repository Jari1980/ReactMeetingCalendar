import React from "react";
import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useMeetingContext } from "./context";
import Edit from "../assets/images/Edit.png"
import Delete from "../assets/images/Delete.png"
import axios from "axios";


const MeetingsTable = () => {
  const { scheduledMeetings, setMeetings } = useMeetingContext();
  const { uppdateMeeting, setUppdateMeeting } = useMeetingContext();


  const deleteMeeting = async(id) => {
    //let filtered = scheduledMeetings.filter(element => element.id !== id) //Used when running local meeting list
    //setMeetings(filtered)

     try {
        const response = await axios.delete(`http://localhost:8080/api/v1/project/meetings/delete?id=${id}`, {
            method: 'DELETE',
            mode: 'cors',
        })
        if (response.status === 200){
            axios.get("http://localhost:8080/api/v1/project/meetings").then((res) => {
                setMeetings(res.data)
            })
        }
    }
    catch (error){
        console.log("Something went wrong when deleting meeting: " + error)
    }


  }
  
  function editMeeting(id){
    let meeting = scheduledMeetings.filter(element => element.id === id)
    console.log("meeting to be edited" + meeting)
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
                <Button style={{marginRight:"20px"}} onClick={() => editMeeting(item.id)}><img src={Edit} style={{width:"20px", height:"20px", paddingBottom: "4px"}}></img></Button>
                <Button style={{backgroundColor:"red"}} onClick={() => deleteMeeting(item.id)}><img src={Delete} style={{width:"20px", height:"20px", paddingBottom: "4px"}}></img></Button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default MeetingsTable;
