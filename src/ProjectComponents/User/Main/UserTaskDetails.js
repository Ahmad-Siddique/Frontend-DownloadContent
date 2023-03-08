import React from "react";
import Header from "../header";
import Sidebar from "../sidebarmain";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Select from "react-select";
import {
  Card,
  CardBody,
  CardExpandToggler,
} from "../../../components/card/card.jsx";
import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const UserTaskDetails = () => {
  const [error, setError] = useState(false);
  const [errormessage, seterrormessage] = useState("");
  const [successful, setsuccessfull] = useState("");
  const [loading, setLoading] = useState(false);

  const [taskdata, settaskdata] = useState();
  const { id } = useParams();
  const [status, setstatus] = useState();
  const [users, setusers] = useState([]);
  const [useroptions, setuseroptions] = useState([]);
  const [useroptions1, setuseroptions1] = useState([]);
  const [userdata, setuserdata] = useState();
  const [statusupdate, setstatusupdate] = useState("");

  const [filteruser, setfilteruser] = useState([]);
  const [show, setshow] = useState(false);
  const [localdata, setlocaldata] = useState();

  const navigate = useNavigate();

  const SubmitStatus = async () => {
    const data = JSON.parse(localStorage.getItem("userInfo"));
    const label = data.name;
    const value = data._id;
    const name = data.name;
    console.log("Sending Status", status);

    try {
      const config = {
        "Content-type": "application/json",
      };

      //    await fetch("https://coming-to-me-from-backend.onrender.com/api/login", {
      //      method: "POST",
      //      headers: { "Content-Type": "application/json" },
      //      body: JSON.stringify({ email,password }),
      //    }).then(
      //        res=>{
      //         if(!res.ok){

      //             throw Error('Cannot fetch data from the server')

      //         }

      //         return res.json();
      //     }
      //    )
      //        .then(
      //            data => {
      //                console.log(data)
      //        }
      //    )

      const { data } = await axios
        .post(
          "https://coming-to-me-from-backend.onrender.com/api/updatestatus/" +
            id,
          {
            status,
          },
          config
        )
        .then((data) => {
          console.log("req sent");
          console.log(data.data);
          setstatusupdate("Status Updated Successfully");
          handleshow();
        })
        .catch((err) => {
          setError("Status Not updated. Error occured");
        });
    } catch (error) {
      // console.log(error)
      // setError(error)
      // setLoading(false);
    }
  };

  const SubmitTask = async () => {
    // console.log(users)
    console.log("Transfer Task options");
    // console.log(useroptions);
    const data = JSON.parse(localStorage.getItem("userInfo"));
    const transferredby = {
      label: data.name,
      value: data._id,
      name: data.name,
    };
    try {
      const config = {
        "Content-type": "application/json",
      };
      // console.log(users)
      const { data } = await axios
        .post(
          "https://coming-to-me-from-backend.onrender.com/api/transfertask/" +
            id,
          {
            transferredby,
            users,
          },
          config
        )
        .then((data) => {
          console.log("req sent");
          console.log(data.data);
          setstatusupdate("Task Updated Successfully");
          handleshow();
          navigate("/usertasks");
        })
        .catch((err) => {
          setError("Task Not Transferred updated. Error occured");
        });
    } catch (error) {
      // console.log(error)
      // setError(error)
      // setLoading(false);
    }
  };

  const fetchingtaskdata = async () => {
    const data = await axios.get(
      "https://coming-to-me-from-backend.onrender.com/api/onetask/" + id
    );
    console.log("task data");
    console.log(data.data);
    settaskdata(data.data);
    setstatus(data.data.status);
  };

  const fetchinguserdata = async () => {
    const data = await axios.get(
      "https://coming-to-me-from-backend.onrender.com/api/user/allusers"
    );
    await setuserdata(data.data);

    await data.data.map((gg) => {
      setuseroptions((e) => [
        ...e,
        { label: gg.name, value: gg._id, name: gg.name },
      ]);
    });

    // handleshow();
  };

  const handleshow = () => {
    setshow(!show);
  };

  const filteringuseroptions = () => {
    const localname = JSON.parse(localStorage.getItem("userInfo"));
    console.log(localname.name);
    setuseroptions(useroptions1.filter((e) => localname.name != e.name));
  };

  const functioning = async () => {
    await fetchingtaskdata();
    await fetchinguserdata();

    // await filteringuserdata();
  };

  useEffect(() => {
    setlocaldata(JSON.parse(localStorage.getItem("userInfo")));
    functioning();
  }, []);

  useEffect(() => {
    fetchingtaskdata();
  }, [show]);

  // useEffect(() => {
  //   filteringuserdata();
  // }, [show]);

  const colourStyles = {
    control: (styles) => ({ ...styles, backgroundColor: "white" }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isDisabled ? "black" : "black",
        color: "#FFF",
        cursor: isDisabled ? "not-allowed" : "default",
      };
    },
  };

  return (
    <div>
      {" "}
      <Header />
      <Sidebar />
      <div>
        <div className="d-flex align-items-center mb-3">
          <div>
            <h1 className="page-header mb-0">TASK DETAILS</h1>
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
        {taskdata && filteruser && (
          <Card style={{ padding: 20 }}>
            <h2>Task Name</h2>
            <div style={{ marginLeft: 2, marginTop: 10 }}>{taskdata.name}</div>

            <h2 style={{ marginTop: 15 }}>Task Description</h2>
            <div style={{ marginLeft: 2, marginTop: 10 }}>
              {taskdata.description}
            </div>

            <h2 style={{ marginTop: 15 }}>Client</h2>
            <div style={{ marginLeft: 2, marginTop: 10 }}>
              {taskdata.clients.name}
            </div>

            <h2 style={{ marginTop: 15 }}>User</h2>
            <div style={{ marginLeft: 2, marginTop: 10 }}>
              {taskdata.users.name}
            </div>

            <h2 style={{ marginTop: 15 }}>Status</h2>
            <div style={{ marginLeft: 2, marginTop: 10 }}>
              {taskdata.status}
            </div>

            {taskdata.taskfile && (
              <a
                href={`/uploads/${taskdata.taskfile}`}
                target="_blank"
                download
              >
                <button
                  style={{ marginTop: "50px" }}
                  className="button button-primary button-save margining-lefto"
                  role="button"
                >
                  Download Task File
                </button>
              </a>
            )}

            <div className="mt-3">
              <h3 for="name">Change Status:</h3>
              <Form.Select
                style={{}}
                value={status}
                onSelect={(e) => setstatus(e.target.value)}
                onChange={(e) => {
                  console.log("Changing status: ", e.target.value);
                  setstatus(e.target.value);
                }}
                aria-label="Default select example"
              >
                <option value="Assigned">Assigned</option>
                <option value="Closed">Closed</option>
              </Form.Select>
              <button
                style={{ marginTop: "20px" }}
                onClick={SubmitStatus}
                className="btn btn-dark button-save"
                role="button"
              >
                Update Status
              </button>
              <div>{statusupdate}</div>
            </div>

            {taskdata.createdby._id === localdata._id ? (
              <div></div>
            ) : (
              <div className="mb-5">
                <h3 className="mt-3">Transfer to Other User:</h3>
                <Select
                  styles={colourStyles}
                  options={useroptions}
                  onChange={(opt) =>
                    setusers({
                      name: opt.name,
                      value: opt.value,
                      label: opt.name,
                    })
                  }
                />

                <button
                  style={{ marginTop: "20px" }}
                  onClick={SubmitTask}
                  className="btn btn-dark"
                  role="button"
                >
                  Transfer
                </button>
              </div>
            )}
          </Card>
        )}
      </div>
    </div>
  );
};

export default UserTaskDetails;
