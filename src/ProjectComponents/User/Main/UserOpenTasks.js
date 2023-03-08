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

const UserOpenTasks = () => {
  const [taskdata, settaskdata] = useState();

  const [show, setshow] = useState(false);

  const [error, setError] = useState(false);
  const [errormessage, seterrormessage] = useState("");
  const [successful, setsuccessfull] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchopentasks = async () => {
    try {
      const data = await axios.get(
        "https://coming-to-me-from-backend.onrender.com/api/alltasks"
      );
      console.log(data.data);
      await settaskdata(data.data);
    } catch (e) {
      console.log("Cant fetch the data");
      console.log(e);
    }
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
          setsuccessfull("Task has been claimed");
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
                <div className="flex-fill position-relative">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control px-35px"
                      placeholder="Search Admins"
                    />
                    <div
                      className="input-group-text position-absolute top-0 bottom-0 bg-none border-0 start-0"
                      style={{ zIndex: 1020 }}
                    >
                      <i className="fa fa-search opacity-5"></i>
                    </div>
                  </div>
                </div>
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
                    </tr>
                  </thead>
                  <tbody>
                    {taskdata === [] && <div>No data to show</div>}
                    {taskdata &&
                      taskdata.map((e) => {
                        return (
                          <tr>
                            {console.log(e)}
                            <td>{e.name}</td>

                            <td>{e.description}</td>

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

export default UserOpenTasks;
