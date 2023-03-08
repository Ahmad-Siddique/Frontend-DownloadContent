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

const AdminAllUsers = () => {
  let [userdata, setuserdata] = useState();

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errormessage, seterrormessage] = useState(false);
  const [successful, setsuccessfull] = useState("");

  const navigate = useNavigate();

  const handleShow = () => setShow(!show);

  const fetchinguserdata = async () => {
    const data = await axios.get("http://localhost:5000/api/user/useractivity");
    await setuserdata(data.data);
  };

  const updateData = (id) => {
    navigate("/alladmins/updateuser/" + id);
  };

  const DeleteUser = async (id) => {
    const data = await axios.post(
      "http://localhost:5000/api/user/deleteuser/" + id
    );
    console.log(data.data.message);
    handleShow();
  };

  useEffect(() => {
    fetchinguserdata();
  }, [show]);

  return (
    <div>
      <Header />
      <Sidebar />
      <div>
        <div className="d-flex align-items-center mb-3">
          <div>
            <h1 className="page-header mb-0">ALL USERS</h1>
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
                      placeholder="Search Users"
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
                      <th className="border-top-0 pt-0 pb-2">Name</th>

                      <th className="border-top-0 pt-0 pb-2">Email</th>
                      <th className="border-top-0 pt-0 pb-2">Activity</th>
                      <th className="border-top-0 pt-0 pb-2">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userdata === [] && <div>No data to show</div>}
                    {userdata &&
                      userdata.map((e) => {
                        return (
                          <tr>
                            <td>{e.name}</td>

                            <td>{e.email}</td>
                            <td>{e.activity}</td>
                            <td>{e.time}</td>
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

export default AdminAllUsers;
