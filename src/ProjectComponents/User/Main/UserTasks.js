import React from "react";
import Header from "../header";
import Sidebar from "../sidebarmain";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import {
  Card,
  CardBody,
  CardExpandToggler,
} from "../../../components/card/card.jsx";

const UserTasks = () => {
  const [error, setError] = useState(false);
  const [errormessage, seterrormessage] = useState(false);
  const [successful, setsuccessfull] = useState("");
  const [loading, setLoading] = useState(false);

  const [taskdata, settaskdata] = useState();

  const [show, setshow] = useState(false);
  const navigate = useNavigate();

  const fetchopentasks = async (id) => {
    console.log("Getting the data");
    try {
      const data = await axios.get(
        "http://localhost:5000/api/taskoneuser/" + id
      );

      settaskdata(data.data[0].tasks);
     
    } catch (e) {
      console.log("Cant fetch the data");
      console.log(e);
    }
  };

  const GotoChat = (id) => {
     navigate("/usertasks/chats/" + id);
  };
  
  const handleshow = () => {
    setshow(!show);
  };

  const taskdetails = (id) => {
    navigate("/usertaskdetails/" + id);
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userInfo"));
    const id = data._id;
    fetchopentasks(id);
  }, [show]);

  return (
    <div>
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
                      <th className="border-top-0 pt-0 pb-2">Task Name</th>
                      <th className="border-top-0 pt-0 pb-2">Created By</th>
                      <th className="border-top-0 pt-0 pb-2">Clients</th>

                      <th className="border-top-0 pt-0 pb-2">Transferred by</th>
                      <th className="border-top-0 pt-0 pb-2">Chat</th>
                      <th className="border-top-0 pt-0 pb-2">Details</th>
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
                            <td>{e.createdby.name}</td>
                            <td>{e.clients.name}</td>

                            <td>
                              {e.transferredby ? e.transferredby.name : "None"}
                            </td>

                            <td>
                              <button
                                className="btn btn-outline-dark"
                                style={{ borderColor: "white", color: "white" }}
                                variant="dark"
                                onClick={() => GotoChat(e._id)}
                              >
                                Chat
                              </button>{" "}
                            </td>

                            <td>
                              <button
                                className="btn btn-outline-dark"
                                style={{ borderColor: "white", color: "white" }}
                                variant="dark"
                                onClick={() => taskdetails(e._id)}
                              >
                                Details
                              </button>{" "}
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

export default UserTasks;
