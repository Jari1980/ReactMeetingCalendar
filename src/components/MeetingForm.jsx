import React, { useEffect, useMemo, useState } from "react";
import { useMeetingContext } from "./context";
import { useForm } from "react-hook-form";
import meetingLevel from "../assets/data/meetingLevel";
import meetings from "../assets/data/meetings";
import axios from "axios";
import "../stylesheet.css";
import ApiUrl from "../assets/Url/ApiUrl";

const MeetingForm = () => {
  const { scheduledMeetings, setMeetings } = useMeetingContext();
  const { uppdateMeeting, setUppdateMeeting } = useMeetingContext();
  const [counter, setCounter] = useState(2);
  const { logged, setLogged } = useMeetingContext();
  const {tableClass, setTableClass} = useMeetingContext();

  console.log(uppdateMeeting.title);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: useMemo(() => {
      return [];
    }, [uppdateMeeting]),
  });

  useEffect(() => {
    if (logged) {
      axios
        //.get("http://localhost:8080/api/v1/project/meetings", {
          .get(`${ApiUrl}` + "api/v1/project/meetings", {  
          auth: {
            username: localStorage.getItem("username"),
            password: localStorage.getItem("password"),
          },
        })
        .then((response) => {
          console.log("getting here");
          setMeetings(response.data);
        });
    }
    console.log("getting here");
    reset(uppdateMeeting);
  }, [uppdateMeeting]);

  const onSubmit = async (data) => {
    if (logged) {
      if (!uppdateMeeting.uppdate) {
        axios
          .post(
            //"http://localhost:8080/api/v1/project/meetings",
            `${ApiUrl}` + "api/v1/project/meetings",
            {
              title: data.title,
              date: data.date,
              time: data.time,
              level: data.level.toUpperCase(),
              participants: data.participants,
              description: data.description,
            },
            {
              auth: {
                username: localStorage.getItem("username"),
                password: localStorage.getItem("password"),
              },
            }
          )
          .then(
            reset({
              title: "",
              date: "",
              time: "",
              level: "",
              participants: "",
              description: "",
            })
          )
          .then(() => {
            axios
              //.get("http://localhost:8080/api/v1/project/meetings", {
                .get(`${ApiUrl}` + "api/v1/project/meetings", { 
                auth: {
                  username: localStorage.getItem("username"),
                  password: localStorage.getItem("password"),
                },
              })
              .then((response) => {
                setMeetings(response.data);
              });
          });

        /* //Running w/o API
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
      setCounter(counter + 1); */
      } else {
        try {
          const response = await axios
            .put(
              //"http://localhost:8080/api/v1/project/meetings/update",
              `${ApiUrl}` + "api/v1/project/meetings/update", 
              {
                id: uppdateMeeting.id,
                title: data.title,
                date: data.date,
                time: data.time,
                level: data.level.toUpperCase(),
                participants: data.participants,
                description: data.description,
              },
              {
                auth: {
                  username: localStorage.getItem("username"),
                  password: localStorage.getItem("password"),
                },
              }
            )
            .then(() => {
              axios
                //.get("http://localhost:8080/api/v1/project/meetings", {
                  .get(`${ApiUrl}` + "api/v1/project/meetings", { 
                  auth: {
                    username: localStorage.getItem("username"),
                    password: localStorage.getItem("password"),
                  },
                })
                .then((response) => {
                  setMeetings(response.data);
                });
            });
        } catch (error) {
          console.log("Error uppdateing: " + error);
        }
      }

      /* // Working w/o API
      let filtered = scheduledMeetings.filter(
        (element) => element.id !== uppdateMeeting.id
      );
      setMeetings(([
        ...filtered,
        {
          id: uppdateMeeting.id,
          title: data.title,
          date: data.date,
          time: data.time,
          level: data.level,
          participants: data.participants,
          description: data.description,
        },
      ]).sort((a,b) => a.id - b.id));
*/

      setUppdateMeeting({
        uppdate: false,
        id: "",
        title: "",
        date: "",
        time: "",
        level: "",
        participants: "",
        description: "",
      });
    }

    /*if (!uppdateMeeting.uppdate) {
      reset({
        title: "",
        date: "",
        time: "",
        level: "",
        participants: "",
        description: "",
      });
    }*/
  };

  function cancelEdit() {
    setUppdateMeeting({
      uppdate: false,
      id: "",
      title: "",
      date: "",
      time: "",
      level: "",
      participants: "",
      description: "",
    });
    reset(uppdateMeeting);
  }

  console.log(
    "title:" + uppdateMeeting.title + ", uppdate:" + uppdateMeeting.uppdate
  );

  return (
    <div
      className="container mt-5 d-flex justify-content-center"
      style={{ height: "auto" }}
    >
      <div className={tableClass}>
        <h1 className="text-center mb-4">
          {!uppdateMeeting.uppdate ? "Schedule a new meeting" : "Edit Meeting"}
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="row g-3">
          <div className="col-12">
            <label htmlFor="title" className="form-label">
              <b>Meeting Title</b>
            </label>
            <input
              id="title"
              defaultValue={uppdateMeeting.title}
              className={`form-control ${errors.title ? "is-invalid" : ""}`}
              {...register("title", { required: "Title is required" })}
            />
            {errors.title && (
              <div className="invalid-feedback">{errors.title.message}</div>
            )}
          </div>

          <div className="col-6">
            <label htmlFor="date" className="form-label">
              <b>Meeting Date</b>
            </label>
            <input
              id="date"
              defaultValue={!uppdateMeeting.uppdate ? "" : uppdateMeeting.date}
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
              <b>Meeting Time</b>
            </label>
            <input
              id="time"
              defaultValue={!uppdateMeeting.uppdate ? "" : uppdateMeeting.time}
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
              <b>Meeting Level</b>
            </label>
            <select
              id="level"
              defaultValue={!uppdateMeeting.uppdate ? "" : uppdateMeeting.level}
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
              <b>Participants</b>
            </label>
            <input
              id="participants"
              defaultValue={
                !uppdateMeeting.uppdate ? "" : uppdateMeeting.participants
              }
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
              <b>Description</b>
            </label>
            <textarea
              id="description"
              defaultValue={
                !uppdateMeeting.uppdate ? "" : uppdateMeeting.description
              }
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
            <button type="submit" className="submitMeetingButton">
              {!uppdateMeeting.uppdate ? "+ Create Meeting" : "EditMeeting"}
            </button>
            {!uppdateMeeting.uppdate ? (
              ""
            ) : (
              <button
                className="meetingCancelDelete"
                style={{ marginLeft: "20px" }}
                onClick={() => cancelEdit()}
              >
                Cancel Edit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default MeetingForm;
