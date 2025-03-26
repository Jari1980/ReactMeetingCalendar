import React from "react";
import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useMeetingContext } from "./context";


const MeetingsTable = () => {
  const { scheduledMeetings, setMeetings } = useMeetingContext();

  console.log(scheduledMeetings)
  

  return (
    <div>
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
                <Button>Edit</Button>
                <Button>Delete</Button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default MeetingsTable;
