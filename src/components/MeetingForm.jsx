import React, { useState } from "react";
import { useMeetingContext } from "./context";
import { useForm } from "react-hook-form";
import meetingLevel from "../assets/data/meetingLevel";

const MeetingForm = () => {
  const { scheduledMeetings, setMeetings } = useMeetingContext();
  const { uppdateMeeting, setUppdateMeeting } = useMeetingContext();
  const [counter, setCounter] = useState(2);


  console.log(uppdateMeeting.uppdate)

  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { //These should work but had to add uppdate values to form if uppdate = true
      title: uppdateMeeting.title,
      date: uppdateMeeting.date,
      time: uppdateMeeting.time,
      level: uppdateMeeting.level,
      participants: uppdateMeeting.participants,
      description: uppdateMeeting.description,
    },
  });



  const onSubmit = (data) => {
    console.log("Meeting Form Data:", data);
    setMeetings([
      ...scheduledMeetings,
      {
        id: counter,
        title: data.title,
        date: data.date,
        time: data.time,
        level: data.level,
        participants: data.participants,
        description: data.description,
      },
    ]);
    setCounter(counter + 1);
    reset({
      title: "",
      date: "",
      time: "",
      level: "",
      participants: "",
      description: "",
    });
    //alert("Meeting is submitted");
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="p-4 border rounded bg-secondary">
        <h1 className="text-center mb-4">{!uppdateMeeting.uppdate ? "Schedule a new meeting" : "Edit Meeting"}</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="row g-3">
          <div className="col-12">
            <label htmlFor="title" className="form-label">
              Meeting Title
            </label>
            <input
              id="title"
              value={!uppdateMeeting.uppdate ? "" : uppdateMeeting.title}
              className={`form-control ${errors.title ? "is-invalid" : ""}`}
              {...register("title", { required: "Title is required" })}
            />
            {errors.title && (
              <div className="invalid-feedback">{errors.title.message}</div>
            )}
          </div>

          <div className="col-6">
            <label htmlFor="date" className="form-label">
              Meeting Date
            </label>
            <input
              id="date"
              value={!uppdateMeeting.uppdate ? "" : uppdateMeeting.date}
              type="date"
              className={`form-control ${errors.date ? "is-invalid" : ""}`}
              {...register("date", { required: "Date is required" })}
            />
            {errors.date && (
              <div className="invalid-feedback">{errors.date.message}</div>
            )}
          </div>

          <div className="col-6">
            <label htmlFor="time" className="form-label">
              Meeting Time
            </label>
            <input
              id="time"
              value={!uppdateMeeting.uppdate ? "" : uppdateMeeting.time}
              type="time"
              className={`form-control ${errors.time ? "is-invalid" : ""}`}
              {...register("time", { required: "Time is required" })}
            />
            {errors.time && (
              <div className="invalid-feedback">{errors.time.message}</div>
            )}
          </div>

          <div className="col-12">
            <label htmlFor="level" className="form-label">
              Meeting Level
            </label>
            <select
              id="level"
              value={!uppdateMeeting.uppdate ? "" : uppdateMeeting.level}
              className={`form-select ${errors.level ? "is-invalid" : ""}`}
              {...register("level", {
                required: "Please select a level",
              })}
            >
              {meetingLevel.map((type) => (
                <option key={type.id} value={type.name}>
                  {type.name}
                </option>
              ))}
            </select>
            {errors.level && (
              <div className="invalid-feedback">{errors.level.message}</div>
            )}
          </div>

          <div className="col-12">
            <label htmlFor="participants" className="form-label">
              Participants
            </label>
            <input
              id="participants"
              value={!uppdateMeeting.uppdate ? "" : uppdateMeeting.participants}
              className={`form-control ${
                errors.participants ? "is-invalid" : ""
              }`}
              {...register("participants")}
            />
            {errors.participants && (
              <div className="invalid-feedback">
                {errors.participants.message}
              </div>
            )}
          </div>

          <div className="col-12">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              id="description"
              value={!uppdateMeeting.uppdate ? "" : uppdateMeeting.description}
              className={`form-control ${
                errors.description ? "is-invalid" : ""
              }`}
              {...register("description")}
            />
            {errors.description && (
              <div className="invalid-feedback">
                {errors.description.message}
              </div>
            )}
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary">
            {!uppdateMeeting.uppdate ? "+ Create Meeting" : "EditMeeting"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MeetingForm;
