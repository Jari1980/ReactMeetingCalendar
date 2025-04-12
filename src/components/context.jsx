import React, { createContext, useContext, useState } from "react";
import meetings from "../assets/data/meetings";
import axios from "axios";

const MeetingContext = createContext();

export const MeetingProvider = ({ children }) => {
  const [scheduledMeetings, setMeetings] = useState(meetings);
  const [uppdateMeeting, setUppdateMeeting] = useState({
    uppdate: false,
    id: 0,
    title: "",
    date: "",
    time: "",
    level: "",
    participants: "",
    description: "",
  });
  const [logged, setLogged] = useState(false);
  const [background, setBackground] = useState("#212529");
  const [bgMain, setBgMain] = useState(
    "linear-gradient(250deg,rgb(92, 99, 121),rgb(197, 201, 214) 50%,rgb(75, 91, 143))"
  );
  const [dark, setDark] = useState("dark");
  const [tableClass, setTableClass] = useState("p-4 rounded-top bg-secondary")

  return (
    <MeetingContext.Provider
      value={{
        scheduledMeetings,
        setMeetings,
        uppdateMeeting,
        setUppdateMeeting,
        logged,
        setLogged,
        background,
        setBackground,
        bgMain,
        setBgMain,
        dark,
        setDark,
        tableClass,
        setTableClass
      }}
    >
      {children}
    </MeetingContext.Provider>
  );
};

export const useMeetingContext = () => useContext(MeetingContext);
