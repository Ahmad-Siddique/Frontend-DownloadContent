import React from "react";
import { useState, useEffect } from "react";
import Header from "../header";
import Sidebar from "../sidebarmain";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router";
import { MultiSelect } from "react-multi-select-component";
import Select from "react-select";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardExpandToggler,
} from "../../../components/card/card.jsx";

const AdminUpdateTask = () => {
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errormessage, seterrormessage] = useState(false);
  const [successful, setsuccessfull] = useState("");

 
  

  const [emailid, setemail] = useState("");

  const [password, setpassword] = useState("");

  const [description, setdescription] = useState();
  const [name, setname] = useState();
  const [status, setstatus] = useState("UnAssigned");
  const { id } = useParams();
  console.log(id);

  
  const [clients, setclients] = useState([]);
  const [users, setusers] = useState([]);
  const [selectform, setselectform] = useState([]);
  let [clientdata, setclientdata] = useState();
  let [userdata, setuserdata] = useState();
  const [localdata, setlocaldata] = useState();
  const [taskfile, settaskfile] = useState();
  const [options, setoptions] = useState([]);

  const [useroptions, setuseroptions] = useState([]);
  const [taskdata, settaskdata] = useState();


   const [recurringtask, setrecurringtask] = useState();
  const [recurropt, setrecurropt] = useState([
    { label: "No" },
    { label: "1" },
    { label: "2" },
    { label: "3" },
    { label: "4" },
    { label: "5" },
    { label: "6" },
    { label: "7" },
    { label: "8" },
    { label: "9" },
    { label: "10" },
    { label: "11" },
    { label: "12" },
    { label: "13" },
    { label: "14" },
    { label: "15" },
    { label: "16" },
    { label: "17" },
    { label: "18" },
    { label: "19" },
    { label: "20" },
    { label: "21" },
    { label: "22" },
    { label: "23" },
  ]);







  const [value, setvalue] = useState([]);
  console.log(value);
  console.log(clients);

  const fetchingclientdata = async () => {
    const data = await axios.get("http://localhost:5000/api/clientall");
    await setclientdata(data.data);

    data.data.map((gg) => {
      setoptions((e) => [
        ...e,
        { label: gg.name, value: gg._id, name: gg.name },
      ]);
    });
    console.log(options);
    console.log(clientdata);
  };

  const fetchinguserdata = async () => {
    const data = await axios.get("http://localhost:5000/api/user/allusers");
    await setuserdata(data.data);

    data.data.map((gg) => {
      setuseroptions((e) => [
        ...e,
        { label: gg.name, value: gg._id, name: gg.name },
      ]);
    });
  };

  const fetchingupdateddata = async () => {
    const data = await axios.get("http://localhost:5000/api/onetask/" + id);
    await settaskdata(data.data);

    setclients(data.data.clients);
    setname(data.data.name);
    setrecurringtask(data.data.recurringtask)
    setdescription(data.data.description);
    setstatus(data.data.status);
    setusers(data.data.users)
  };

  useEffect(() => {
    fetchingupdateddata();
    fetchingclientdata();
    fetchinguserdata();
    console.log(localdata);
    setlocaldata(JSON.parse(localStorage.getItem("adminInfo")));

    console.log("gg");
  }, []);

  const FormSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const config = {
        "Content-type": "application/json",
      };
      console.log(status);
      const formdata = new FormData();
      formdata.append("name", name);
      formdata.append("description", description);
      formdata.append("status", status);
      formdata.append("users", JSON.stringify(users));
      formdata.append("clients", JSON.stringify(clients));
      formdata.append("taskfile", taskfile);
      formdata.append("recurringtask", recurringtask);

      const { data } = await axios
        .post(
          "http://localhost:5000/api/updatetasks/" + id,
          {
            name,
            description,
            status,
            users,
            clients,
            recurringtask
          },
          config
        )
        .then((data) => {
          console.log(data.data);
          setsuccessfull("Task Updated Successfully");
          setLoading(false);
          setError(false);
        })
        .catch((err) => {
          setError("Invalid Email or Password");
          setLoading(false);
        });
    } catch (error) {
      // console.log(error)
      // setError(error)
      // setLoading(false);
    }
  };

  const FormSubmitFile = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const config = {
        "Content-type": "application/json",
      };

      const formdata = new FormData();

      formdata.append("taskfile", taskfile);
      formdata.append("users", JSON.stringify(users));

      const { data } = await axios
        .post(
          "http://localhost:5000/api/updatetaskfile/" + id,
          formdata,
          config
        )
        .then((data) => {
          console.log(data.data);
          setsuccessfull("Task File Updated Successfully");
          setLoading(false);
          setError(false);
        })
        .catch((err) => {
          setError("Invalid Email or Password");
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
    }
  };

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
      <Header />
      <Sidebar />
      <Card className="p-3">
        {/* Error Display */}
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h4 className="main-heading ">UPDATE TASK</h4>
          <div>
            <Link
              role="button"
              to={`/alltasks/taskchat/${id}`}
              style={{
                color: "white",
                borderColor: "white",
              }}
              className="btn btn-outline-dark "
            >
              Chat
            </Link>
          </div>
        </div>
        <Form action="#" onSubmit={FormSubmit} encType="multipart/form-data">
          <div className="form-group mb-3">
            {/* <label className="form-label" htmlFor="exampleFormControlInput1">
              Select Clients
            </label>
             
              <MultiSelect
                options={options}
                value={clients}
                onChange={setclients}
                labelledBy="Select"
                styles={{ backgroundColor: "black", color: "black" }}
              /> */}

            {/* <DropDown value={clients1} options={options}
                   handleChange={setclients1}
                   multi={true}
                   /> */}

            <label
              className="form-label mt-3"
              htmlFor="exampleFormControlInput1"
            >
              Task Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setname(e.target.value)}
              className="form-control "
              id="exampleFormControlInput1 "
              placeholder="name@example.com"
            />

            <label
              className="form-label mt-3"
              htmlFor="exampleFormControlInput1"
            >
              Task Description
            </label>
            <input
              type="text"
              value={description}
              onChange={(e) => setdescription(e.target.value)}
              className="form-control "
              id="exampleFormControlInput1 "
              placeholder="name@example.com"
            />

            <label
              className="form-label mt-3"
              htmlFor="exampleFormControlInput1"
            >
              Select Users
            </label>
            <Select
              styles={colourStyles}
              options={useroptions}
              onSelect={(opt) =>
                setusers({
                  name: opt.name,
                  value: opt.value,
                  label: opt.name,
                })
              }
              onChange={(opt) =>
                setusers({
                  name: opt.name,
                  value: opt.value,
                  label: opt.name,
                })
              }
            />

            <label
              className="form-label mt-3"
              htmlFor="exampleFormControlInput1"
            >
              Select Recurring Task Time
            </label>

            <Select
              styles={colourStyles}
              options={recurropt}
              defaultInputValue={recurringtask}
              onSelect={(opt) => setrecurringtask(opt.label)}
              onChange={(opt) => setrecurringtask(opt.label)}
            />

            <button
              onClick={FormSubmit}
              style={{ color: "white", borderColor: "white" }}
              className="btn btn-outline-dark mt-3"
            >
              Update Task
            </button>

            <input
              type="file"
              className="form-control mt-3"
              id="exampleFormControlFile1"
            />
            <button
              onClick={FormSubmitFile}
              style={{ color: "white", borderColor: "white" }}
              className="btn btn-outline-dark mt-3"
            >
              Update Task
            </button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default AdminUpdateTask;
