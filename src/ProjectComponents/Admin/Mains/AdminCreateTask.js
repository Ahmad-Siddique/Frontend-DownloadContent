import React from "react";
import Header from "../header";
import Sidebar from "../sidebarmain";
import { MultiSelect } from "react-multi-select-component";
import Select from "react-select";
import { useEffect } from "react";
import { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";
import Form from "react-bootstrap/Form";
import {
  Card,
  CardBody,
  CardExpandToggler,
} from "../../../components/card/card.jsx";

const AdminCreateTask = () => {
  const [id, setid] = useState();
  const [description, setdescription] = useState();
  const [name, setname] = useState();
  const [status, setstatus] = useState("UnAssigned");
  const [clients1, setclients1] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errormessage, seterrormessage] = useState(false);
  const [error1, setError1] = useState(false);
  const [successful, setsuccessfull] = useState("");

  const [selectform, setselectform] = useState([]);

  let [clientdata, setclientdata] = useState();
  let [userdata, setuserdata] = useState();
  const [localdata, setlocaldata] = useState();
  const [users, setuser] = useState({});
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
  const [recurringtask, setrecurringtask] = useState();

  const [options, setoptions] = useState([]);
  const [users1, setusers1] = useState([]);
  const [useroptions, setuseroptions] = useState([]);

  const [taskfile, settaskfile] = useState("");

  const [value, setvalue] = useState([]);
  console.log(value);
  const Changing = () => {
    setvalue([...value, value]);
  };
  console.log(clients1);

  useEffect(() => {
    console.log(localdata);
    setlocaldata(JSON.parse(localStorage.getItem("adminInfo")));

    console.log("gg");
  }, []);

  const handleuserchange = (e) => {
    console.log("User data", users);
  };

  useEffect(() => {
    handleuserchange();
  }, [users]);

  const handleclientchange = (e) => {
    console.log("client data", clients1);
  };

  useEffect(() => {
    handleclientchange();
  }, [clients1]);

  const FormSubmit = async (e) => {
    console.log("Went into the function");
    e.preventDefault();
    if (name === "" || description === "" || taskfile === "") {
      setError(true);
      seterrormessage("Please provide valid credetials");
      return;
    }
    const config = {
      "Content-type": "application/json",
    };
    const data1 = await axios.post(
      "https://coming-to-me-from-backend.onrender.com/api/taskexist",
      {
        name,
      },
      config
    );
    console.log(data1.data.message);
    if (data1.data.message == "Yes") {
      setError(true);
      setsuccessfull("");
      console.log("Setting error");
      seterrormessage("Content with this name already Exist");
      return;
    } else {
      console.log("Went into else gg ");
      setError1("");

      try {
        console.log("Inside try");

        setLoading(true);
        const config = {
          "Content-type": "application/json",
        };
        if (Object.getOwnPropertyNames(users).length === 0) {
          setstatus("Unssigned");
        } else {
          setstatus("Assigned");
        }
        console.log(status);
        // console.log(status)
        // console.log(clients1[i].name)

        console.log("Users for submission");

        // console.log(createdby)
        const formdata = new FormData();

        formdata.append("name", name);
        formdata.append("description", description);
        formdata.append("taskfile", taskfile);
        console.log("form data set");
        await axios
          .post(
            "https://coming-to-me-from-backend.onrender.com/api/taskregister",
            formdata,
            config
          )
          .then((data) => {
            console.log(data.data);
            setsuccessfull("Task Registered Successfully");

            setLoading(false);
            setError(false);
          })
          .catch((err) => {
            setError(true);
            seterrormessage(err.message);
            setsuccessfull("");
            setLoading(false);
          });
      } catch (error) {
        console.log(error);
        setError(true);
        setsuccessfull("");
        seterrormessage(error.message);
        setLoading(false);
      }
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

  const DropDown = (props) => {
    const options = props.multi
      ? [{ label: "Select All", value: "all" }, ...props.options]
      : props.options;
    console.log(options);
    return (
      <div className={`react-select-wrapper ${props.multi ? "multi" : ""}`}>
        <Select
          name="example"
          styles={colourStyles}
          options={options}
          multi={props.multi}
          value={props.value ? props.value : null}
          onChange={(selected) => {
            props.multi &&
            selected.length &&
            selected.find((option) => option.value === "all")
              ? props.handleChange(options.slice(1))
              : !props.multi
              ? props.handleChange((selected && selected.value) || null)
              : props.handleChange(selected);
          }}
        />
      </div>
    );
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

        <h4 className="main-heading mb-3">CREATE Downloadable file</h4>
        <Form action="#" onSubmit={FormSubmit} encType="multipart/form-data">
          <div className="form-group mb-3">
            <label
              className="form-label mt-3"
              htmlFor="exampleFormControlInput1"
            >
              Content Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setname(e.target.value)}
              className="form-control "
              id="exampleFormControlInput1 "
              placeholder="Content Name"
            />

            <label
              className="form-label mt-3"
              htmlFor="exampleFormControlInput1"
            >
              Content Description
            </label>
            <input
              type="text"
              value={description}
              onChange={(e) => setdescription(e.target.value)}
              className="form-control "
              id="exampleFormControlInput1 "
              placeholder="Content Description"
            />

            <input
              type="file"
              className="form-control mt-3"
              id="exampleFormControlFile1"
              onChange={(e) => settaskfile(e.target.files[0])}
            />

            <button
              onClick={FormSubmit}
              style={{ color: "white", borderColor: "white" }}
              className="btn btn-outline-dark mt-3"
            >
              Create Task
            </button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default AdminCreateTask;
