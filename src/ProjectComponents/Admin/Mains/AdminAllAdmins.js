import React from "react";
import Header from "../header";
import Sidebar from "../sidebarmain";
import { Link, useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import {
  Card,
  CardBody,
  CardExpandToggler,
} from "../../../components/card/card.jsx";

const AdminAllAdmins = () => {

  let [admindata, setadmindata] = useState();
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errormessage, seterrormessage] = useState(false);
  const [successful, setsuccessfull] = useState("");

  const handleShow = () => setShow(!show);

  const fetchingadmindata = async () => {
    const data = await axios.get("http://localhost:5000/api/alladmins");
    const data2 = localStorage.getItem("adminInfo");
    const data1 = JSON.parse(data2);
    //   console.log(data1)

    // data.data = data.data.filter((e) => e._id != data1._id);
    console.log(data.data);
    //   console.log(data.data)
    await setadmindata(data.data);

    // console.log(admindata);
  };

  const updateData = (id) => {
    navigate("/alladmins/updateadmin/" + id);
  };

  const DeleteUser = async (id) => {
    setLoading(true)
    const data = await axios.post(
      "http://localhost:5000/api/deleteadmin/" + id
    );
    setLoading(false)
    setsuccessfull("Admin Deleted Successfully")
    console.log(data.data.message);
    handleShow();
  };

  useEffect(() => {
    fetchingadmindata();
  }, [show]);







  return (
    <div>
      <Header />
      <Sidebar />
      <div>
        <div className="d-flex align-items-center mb-3">
          <div>
            <h1 className="page-header mb-0">ALL ADMINS</h1>
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
                      <th className="border-top-0 pt-0 pb-2">Name</th>
                      <th className="border-top-0 pt-0 pb-2">Email</th>
                      <th className="border-top-0 pt-0 pb-2">Update</th>
                      <th className="border-top-0 pt-0 pb-2">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {admindata === [] && <div>No data to show</div>}
                    {admindata &&
                      admindata.map((e) => {
                        return (
                          <tr>
                            <td>{e.name}</td>

                            <td>{e.emailid}</td>

                            <td>
                              <button
                                className="btn btn-outline-dark"
                                style={{ borderColor: "white", color: "white" }}
                                variant="dark"
                                onClick={() => updateData(e._id)}
                              >
                                Update
                              </button>{" "}
                            </td>
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

export default AdminAllAdmins;
