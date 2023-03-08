import React from "react";
import Header from "../header";
import Sidebar from "../sidebarmain";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { MultiSelect } from "react-multi-select-component";
import {
  Card,
  CardBody,
  CardExpandToggler,
} from "../../../components/card/card.jsx";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";

const UserCreateTask = () => {
  const [errormessage, seterrormessage] = useState(false);

  const [id, setid] = useState();
  const [description, setdescription] = useState();
  const [name, setname] = useState();
  //   const [status, setstatus] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [error1, setError1] = useState(false);
  const [successful, setsuccessfull] = useState("");
  const [clients1, setclients1] = useState([]);

  const [selectform, setselectform] = useState([]);

  let [clientdata, setclientdata] = useState();
  let [userdata, setuserdata] = useState();
  const [localdata, setlocaldata] = useState();
  //   const [users, setuser] = useState();
  const [recurropt, setrecurropt] = useState([
    { label: "Yes" },
    { label: "No" },
  ]);
  const [recurringtask, setrecurringtask] = useState();

  const [options, setoptions] = useState([]);
  const [users1, setusers1] = useState([]);
  const [useroptions, setuseroptions] = useState([]);

  const [taskfile, settaskfile] = useState();

  // const options = [
  //   { label: "Grapes 🍇", value: "grapes" },
  //   { label: "Mango 🥭", value: "mango" },
  //   { label: "Strawberry 🍓", value: "strawberry", disabled: true },
  // ];
  const [value, setvalue] = useState([]);
  console.log(value);
  const Changing = () => {
    setvalue([...value, value]);
  };
  console.log(clients1);

  const fetchingclientdata = async () => {
    const data = await axios.get(
      "https://coming-to-me-from-backend.onrender.com/api/clientall"
    );
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
    const data = await axios.get(
      "https://coming-to-me-from-backend.onrender.com/api/user/allusers"
    );
    console.log("User data:", data.data);
    await setuserdata(data.data);
    console.log(data.data);

    data.data.map((gg) => {
      setuseroptions((e) => [
        ...e,
        { label: gg.name, value: gg._id, name: gg.name },
      ]);
    });

    console.log("Local Data", localdata);
  };

  useEffect(() => {
    setlocaldata(JSON.parse(localStorage.getItem("userInfo")));
    fetchingclientdata();
    fetchinguserdata();

    console.log("gg");
  }, []);

  const handleuserchange = (e) => {
    // console.log("Users:",users);
  };

  //     useEffect(() => {

  //     handleuserchange();
  //   }, [users]);

  const FormSubmit = async (e) => {
    console.log("Went into the function");
    e.preventDefault();

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
    console.log("User all data:", useroptions);
    // console.log("User single data:", users);
    console.log(data1.data.message);
    if (data1.data.message == "Yes") {
      setsuccessfull("");
      console.log("Setting error");
      setError1("Task with this name already Exist");
      return;
    } else {
      console.log("Went into else gg ");
      setError1("");
      for (var i = 0; i < clients1.length; i++) {
        console.log("Inside clients");

        try {
          console.log("Inside try");

          setLoading(true);
          const config = {
            "Content-type": "application/json",
          };
          //   if (users) {
          //     setstatus("Assigned");
          //   } else {
          //     setstatus("Unassigned");
          //   }
          //   console.log(status);
          // console.log(status)
          // console.log(clients1[i].name)
          const clients = clients1[i];
          // setuser({
          //     name: localdata.name,
          //     value: localdata._id,
          //     label:localdata.name
          // })

          const users = {
            name: localdata.name,
            value: localdata._id,
            label: localdata.name,
          };
          setrecurringtask("No");
          const createdby = { _id: localdata._id, name: localdata.name };
          const status = "Assigned";
          console.log("Users data:", users);
          console.log("Users for submission");

          // console.log(createdby)
          const formdata = new FormData();
          formdata.append("createdby", JSON.stringify(createdby));
          formdata.append("name", name);
          formdata.append("description", description);
          formdata.append("status", status);
          formdata.append("users", JSON.stringify(users));
          formdata.append("clients", JSON.stringify(clients));
          formdata.append("recurringtask", recurringtask);
          formdata.append("taskfile", taskfile);

          console.log("form data set", formdata);
          await axios
            .post(
              "https://coming-to-me-from-backend.onrender.com/api/taskregister",
              formdata,
              config
            )
            .then((data) => {
              console.log("Came into then");
              console.log(data.data);
              setsuccessfull("Task Registered Successfully");
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
      }
    }
  };

  return (
    <div>
      {" "}
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

        <h4 className="main-heading mb-3">CREATE NEW TASK</h4>
        <Form action="#" onSubmit={FormSubmit} encType="multipart/form-data">
          <div className="form-group mb-3">
            <label className="form-label" htmlFor="exampleFormControlInput1">
              Select Clients
            </label>
            {options && (
              <MultiSelect
                options={options}
                value={clients1}
                onChange={setclients1}
                labelledBy="Select"
                styles={{ backgroundColor: "black", color: "black" }}
              />

              //    <DropDown value={clients1} options={options}
              //     handleChange={setclients1}
              //     multi={true}
              //     />
            )}

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

            <input
              type="file"
              className="form-control mt-3"
              id="exampleFormControlFile1"
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

export default UserCreateTask;
