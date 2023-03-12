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
  let [userdata, setuserdata] = useState([]);

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errormessage, seterrormessage] = useState(false);
  const [successful, setsuccessfull] = useState("");

  const navigate = useNavigate();

  const handleShow = () => setShow(!show);

  const DeleteUser = async (id) => {
    setLoading(true);
    try {
      const data = await axios.post(
        "https://coming-to-me-from-backend.onrender.com/api/user/downloadactivitydelete/" +
          id
      );

      setLoading(false);
      setsuccessfull("Download Activity Deleted Successfully");
      console.log(data.data.message);
      setError(false);
      handleShow();
    } catch {
      setLoading(false);
      setError(true);
      seterrormessage("Couldnt delete the content.");
    }
  };

  const fetchinguserdata = async () => {
    const data = await axios.get(
      "https://coming-to-me-from-backend.onrender.com/api/user/downloadactivity"
    );
    await setuserdata(data.data);
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
                <div className="flex-fill position-relative"></div>
              </div>

              <div className="table-responsive">
                <table className="table table-hover text-nowrap">
                  <thead>
                    <tr>
                      <th className="border-top-0 pt-0 pb-2">Name</th>

                      <th className="border-top-0 pt-0 pb-2">Email</th>
                      <th className="border-top-0 pt-0 pb-2">
                        Downloaded Content
                      </th>
                      <th className="border-top-0 pt-0 pb-2">Time</th>
                      <th className="border-top-0 pt-0 pb-2">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {userdata == [] && <div>No data to show</div>} */}
                    {userdata &&
                      userdata.map((e) => {
                        return (
                          <tr>
                            <td>{e.name}</td>

                            <td>{e.email}</td>
                            <td>{e.activity}</td>
                            <td>{e.time}</td>
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

export default AdminAllUsers;
