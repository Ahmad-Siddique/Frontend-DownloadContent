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

const AdminAllTasks = () => {
  const [error, setError] = useState(false);
  const [errormessage, seterrormessage] = useState(false);
  const [successful, setsuccessfull] = useState("");
  const [loading, setLoading] = useState(false);
  let [taskdata, settaskdata] = useState();
  let [taskdata1, settaskdata1] = useState();
  const [taskchange, settaskchange] = useState("");
  const [userchange, setuserchange] = useState("");
  const [clientchange, setclientchange] = useState("");
  const [date, setDate] = useState("");
  console.log(taskdata);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  console.log(show);
  const unAssigned = "UnAssigned";
  const transferredby = "None";

  const handleShow = () => setShow(!show);

  const fetchingtaskdata = async () => {
    const data = await axios.get(
      "https://coming-to-me-from-backend.onrender.com/api/allcontent"
    );
    await settaskdata1(data.data);
    await settaskdata(data.data);
    console.log("Task data");
    console.log(data.data);
  };

  const updateData = (id) => {
    navigate("/alltasks/updatetask/" + id);
  };

  const DeleteUser = async (id) => {
    setLoading(true);
    try {
      const data = await axios.post(
        "https://coming-to-me-from-backend.onrender.com/api/deletecontent/" + id
      );

      setLoading(false);
      setsuccessfull("Content Deleted Successfully");
      console.log(data.data.message);
      setError(false);
      handleShow();
    } catch {
      setLoading(false);
      setError(true);
      seterrormessage("Couldnt delete the content.");
    }
  };

  useEffect(() => {
    fetchingtaskdata();
  }, [show]);

  const filteringTask = async (e) => {
    // await settaskchange(e)
    // console.log(taskchange)
    //  if ((taskchange === "" || taskchange === undefined) && userchange === "" && clientchange === "") {
    //    console.log("doing assigning");
    //    settaskdata(taskdata1);
    //  }
    console.log(e);
    if (e == "" || e == undefined) {
      settaskdata(taskdata1);
    } else {
      console.log("doing filter");
      settaskdata(
        taskdata.filter((elem) => {
          console.log(elem);
          return elem.name.includes(e);
        })
      );
    }
  };

  const filteringUser = (e) => {
    setuserchange(e);
    if (taskchange === "" && userchange === "" && clientchange === "") {
      console.log("doing assigning");
      settaskdata(taskdata1);
    } else {
      console.log();
      console.log("doing filter");
      settaskdata(
        taskdata.filter((elem) => {
          if (elem.users) {
            console.log(elem);
            return elem.users.name.includes(e);
          }
        })
      );
    }
  };

  const TimeStampToDate = (e) => {
    let zz = new Date(e);
    var todate = new Date(e).getDate();
    var tomonth = new Date(e).getMonth() + 1;
    var toyear = new Date(e).getFullYear();
    var original_date = tomonth + "/" + todate + "/" + toyear;
    // setDate(zz.getDate())
    console.log(original_date);
    return original_date;
  };

  const filteringClient = async (e) => {
    await setclientchange(e);
    if (taskchange === "" && userchange === "" && clientchange === "") {
      console.log("doing assigning");
      settaskdata(taskdata1);
    } else {
      console.log(e);
      console.log("doing filter");
      settaskdata(
        taskdata.filter((elem) => {
          console.log(elem);
          return elem.clients.name.includes(e);
        })
      );
    }
  };

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
                <div className="flex-fill position-relative"></div>
              </div>

              <div className="table-responsive">
                <table className="table table-hover text-nowrap">
                  <thead>
                    <tr>
                      {/* <th className="border-top-0 pt-0 pb-2">Time</th> */}
                      <th className="border-top-0 pt-0 pb-2">Content Name</th>
                      <th className="border-top-0 pt-0 pb-2">
                        Content Description
                      </th>
                      {/* <th className="border-top-0 pt-0 pb-2">Update</th> */}
                      <th className="border-top-0 pt-0 pb-2">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {taskdata === [] && <div>No data to show</div>}
                    {taskdata &&
                      taskdata.map((e) => {
                        return (
                          <tr>
                            {/* <td>{e.time}</td> */}
                            <td>{e.name}</td>
                            <td>{e.description}</td>

                            {/* <td>
                              <button
                                className="btn btn-outline-dark"
                                style={{ borderColor: "white", color: "white" }}
                                variant="dark"
                                onClick={() => updateData(e._id)}
                              >
                                Update
                              </button>{" "}
                            </td> */}
                            <td>
                              <button
                                className="btn btn-outline-dark"
                                style={{ borderColor: "white", color: "white" }}
                                variant="dark"
                                onClick={() => DeleteUser(e._id)}
                              >
                                Delete
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

export default AdminAllTasks;
