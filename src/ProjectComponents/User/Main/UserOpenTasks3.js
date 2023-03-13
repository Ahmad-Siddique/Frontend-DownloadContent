import React from "react";
import Header from "../header";
import Sidebar from "../sidebarmain";
import { useState, useEffect } from "react";
import axios from "axios";

import {
  Card,
  CardBody,
  CardExpandToggler,
} from "../../../components/card/card.jsx";
import Spinner from "react-bootstrap/Spinner";

const UserOpenTasks3 = () => {
  const [taskdata, settaskdata] = useState();
  const [downloadactivity, setdownloadactivity] = useState([]);
  const [show, setshow] = useState(false);
  const [activities, setactivities] = useState([]);
  const [error, setError] = useState(false);
  const [errormessage, seterrormessage] = useState("");
  const [successful, setsuccessfull] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchdownloadactivity = async () => {
    const data1 = JSON.parse(localStorage.getItem("userInfo"));
    try {
      const data = await axios.post(
        "https://coming-to-me-from-backend.onrender.com/api/user/downloadactivityuser",
        {
          email: data1.email,
        }
      );
      console.log("GOT DOWNLOAD ACTIVITY");

      await setdownloadactivity(data.data);
      data.data.map((item) => {
        // console.log("Activity")
        //   console.log(item)
        console.log(item.name);
        activities.push(item.activity);
      });
      console.log("Array done");
      console.log(activities);
    } catch (e) {
      console.log("Cant fetch the data");
      console.log(e);
    }
  };

  const ActivityCheck = (activity, value) => {};

  const fetchopentasks = async () => {
    try {
      const data = await axios.get(
        "https://coming-to-me-from-backend.onrender.com/api/alltasks"
      );

      await settaskdata(data.data);
    } catch (e) {
      console.log("Cant fetch the data");
      console.log(e);
    }
  };

  const checkUsername = (obj) => {
    return obj.name === "max";
  };

  const handleshow = () => {
    setshow(!show);
  };

  const claimTask = async (id, activityname) => {
    const data = JSON.parse(localStorage.getItem("userInfo"));
    const label = data.name;
    const value = data._id;
    const name = data.name;
    window.open(
      "https://coming-to-me-from-backend.onrender.com/api/sendfile/" + id
    );
    try {
      setLoading(true);
      const config = {
        "Content-type": "application/json",
      };
      await axios
        .post(
          "https://coming-to-me-from-backend.onrender.com/api/user/downloadactivity",
          {
            name: data.name,
            email: data.email,
            activity: activityname,
          }
        )
        .then((data) => {
          console.log("req sent");
          console.log(data.data);
          handleshow();
          setLoading(false);
          setError(false);
          setsuccessfull("Content has been Downloaded");
        })
        .catch((err) => {
          setError(true);
          seterrormessage("Problem Occured.. Cannot Claim the Task");
          setLoading(false);
        });
    } catch (error) {
      // setError(true)
      // seterrormessage(error.message)
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchopentasks();
    fetchdownloadactivity();
  }, [show]);

  return (
    <div>
      {" "}
      <Header />
      <Sidebar />
      <div>
        <div className="d-flex align-items-center mb-3">
          <div>
            <h1 className="page-header mb-0">ALL TASKS</h1>
          </div>
        </div>

        {error && (
          <div
            style={{ color: "red", borderRadius: 10 }}
            className="text-opacity-50 text-center mb-4"
          >
            {errormessage}
          </div>
        )}

        {successful && (
          <div
            style={{ color: "green", borderRadius: 10 }}
            className="text-opacity-50 text-center mb-4"
          >
            {successful}
          </div>
        )}

        {/* Spin Loader */}
        {loading && (
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="text-white text-opacity-50 text-center mb-4"
          >
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}

        <Card>
          <div className="tab-content p-4">
            <div className="tab-pane fade show active" id="allTab">
              <div className="input-group mb-4">
                <div className="flex-fill position-relative"></div>
              </div>

              <div className="table-responsive">
                <table className="table table-hover text-nowrap">
                  <thead>
                    <tr>
                      <th className="border-top-0 pt-0 pb-2">Content Name</th>
                      <th className="border-top-0 pt-0 pb-2">
                        Content Description
                      </th>

                      <th className="border-top-0 pt-0 pb-2">Download</th>
                      <th className="border-top-0 pt-0 pb-2">Downloaded</th>
                    </tr>
                  </thead>
                  <tbody>
                    {taskdata === [] && <div>No data to show</div>}
                    {taskdata &&
                      taskdata.map((e) => {
                        return (
                          <tr>
                            <td>{e.name}</td>

                            <td>{e.description}</td>

                            <td
                              className={{
                                alignItems: "center",
                                alignSelf: "center",
                              }}
                            >
                              {activities.includes(e.name)}
                              {activities.includes(e.name) === true ? (
                                <span
                                  style={{ color: "green" }}
                                  class="material-symbols-outlined"
                                >
                                  done
                                </span>
                              ) : (
                                <span
                                  style={{ color: "red" }}
                                  class="material-symbols-outlined"
                                >
                                  close
                                </span>
                              )}
                            </td>

                            <td>
                              <button
                                className="btn btn-outline-dark"
                                style={{ borderColor: "white", color: "white" }}
                                variant="dark"
                                onClick={() => claimTask(e._id, e.name)}
                              >
                                Download
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default UserOpenTasks3;
