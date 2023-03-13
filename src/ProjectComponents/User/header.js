import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const [data, setdata] = useState("");
  const [show, setshow] = useState(true)
  
  const showing = () => {
    setshow(!show)
  }
  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    console.log("Functiuon run");
    navigate("/userlogin")
    CheckingAuth()
    
  };


  const CheckingAuth = async () => {
    const data1 = localStorage.getItem("userInfo");
    console.log("Auth checked");
    if (data1) {
      await setdata(JSON.parse(localStorage.getItem("userInfo")));
    } else {
      navigate("/userlogin")
    };
    showing()
  };
 


  useEffect(() => {
    CheckingAuth();
  }, [data]);

  const notificationData = [
    {
      icon: "bi bi-bag text-theme",
      title: "NEW ORDER RECEIVED ($1,299)",
      time: "JUST NOW",
    },
    {
      icon: "bi bi-person-circle text-theme",
      title: "3 NEW ACCOUNT CREATED",
      time: "2 MINUTES AGO",
    },
    {
      icon: "bi bi-gear text-theme",
      title: "SETUP COMPLETED",
      time: "3 MINUTES AGO",
    },
    {
      icon: "bi bi-grid text-theme",
      title: "WIDGET INSTALLATION DONE",
      time: "5 MINUTES AGO",
    },
    {
      icon: "bi bi-credit-card text-theme",
      title: "PAYMENT METHOD ENABLED",
      time: "10 MINUTES AGO",
    },
  ];

  const toggleAppSidebarDesktop = () => {
    var elm = document.querySelector(".app");
    elm.classList.toggle("app-sidebar-collapsed");
  };

  const toggleAppSidebarMobile = () => {
    var elm = document.querySelector(".app");
    elm.classList.toggle("app-sidebar-mobile-toggled");
  };

  const toggleAppHeaderSearch = () => {
    var elm = document.querySelector(".app");
    elm.classList.toggle("app-header-menu-search-toggled");
  };

  return (
    <div
      style={{ backgroundColor: "white" }}
      id="header"
      className="app-header"
    >
      <div className="desktop-toggler">
        <button
          type="button"
          className="menu-toggler"
          onClick={toggleAppSidebarDesktop}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      <div className="mobile-toggler">
        <button
          type="button"
          className="menu-toggler"
          onClick={toggleAppSidebarMobile}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      <div className="brand">
        <Link to="/useropentasks" className="brand-logo">
          <span className="brand-text">
            <img
              src="/assets/img/user/mainlogo.svg"
              alt="Profile"
              height="60"
            />
          </span>
        </Link>
      </div>

      <div className="menu">
        {/* <div className="menu-item dropdown">
          <a href="#/" onClick={toggleAppHeaderSearch} className="menu-link">
            <div className="menu-icon">
              <i className="bi bi-search nav-icon"></i>
            </div>
          </a>
        </div> */}
        {/* <div className="menu-item dropdown dropdown-mobile-full">
          <a
            href="#/"
            data-bs-toggle="dropdown"
            data-bs-display="static"
            className="menu-link"
          >
            <div className="menu-icon">
              <i className="bi bi-grid-3x3-gap nav-icon"></i>
            </div>
          </a>
          <div className="dropdown-menu fade dropdown-menu-end w-300px text-center p-0 mt-1">
            <div className="row row-grid gx-0">
              <div className="col-4">
                <Link
                  to="/email/inbox"
                  className="dropdown-item text-decoration-none p-3 bg-none"
                >
                  <div className="position-relative">
                    <i className="bi bi-circle-fill position-absolute text-theme top-0 mt-n2 me-n2 fs-6px d-block text-center w-100"></i>
                    <i className="bi bi-envelope h2 opacity-5 d-block my-1"></i>
                  </div>
                  <div className="fw-500 fs-10px text-white">INBOX</div>
                </Link>
              </div>
              <div className="col-4">
                <Link
                  to="/pos/customer-order"
                  className="dropdown-item text-decoration-none p-3 bg-none"
                >
                  <div>
                    <i className="bi bi-hdd-network h2 opacity-5 d-block my-1"></i>
                  </div>
                  <div className="fw-500 fs-10px text-white">POS SYSTEM</div>
                </Link>
              </div>
              <div className="col-4">
                <Link
                  to="/calendar"
                  className="dropdown-item text-decoration-none p-3 bg-none"
                >
                  <div>
                    <i className="bi bi-calendar4 h2 opacity-5 d-block my-1"></i>
                  </div>
                  <div className="fw-500 fs-10px text-white">CALENDAR</div>
                </Link>
              </div>
            </div>
            <div className="row row-grid gx-0">
              <div className="col-4">
                <Link
                  to="/helper"
                  className="dropdown-item text-decoration-none p-3 bg-none"
                >
                  <div>
                    <i className="bi bi-terminal h2 opacity-5 d-block my-1"></i>
                  </div>
                  <div className="fw-500 fs-10px text-white">HELPER</div>
                </Link>
              </div>
              <div className="col-4">
                <Link
                  to="/settings"
                  className="dropdown-item text-decoration-none p-3 bg-none"
                >
                  <div className="position-relative">
                    <i className="bi bi-circle-fill position-absolute text-theme top-0 mt-n2 me-n2 fs-6px d-block text-center w-100"></i>
                    <i className="bi bi-sliders h2 opacity-5 d-block my-1"></i>
                  </div>
                  <div className="fw-500 fs-10px text-white">SETTINGS</div>
                </Link>
              </div>
              <div className="col-4">
                <Link
                  to="/widgets"
                  className="dropdown-item text-decoration-none p-3 bg-none"
                >
                  <div>
                    <i className="bi bi-collection-play h2 opacity-5 d-block my-1"></i>
                  </div>
                  <div className="fw-500 fs-10px text-white">WIDGETS</div>
                </Link>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="menu-item dropdown dropdown-mobile-full">
          <a
            href="#/"
            data-bs-toggle="dropdown"
            data-bs-display="static"
            className="menu-link"
          >
            <div className="menu-icon">
              <i className="bi bi-bell nav-icon"></i>
            </div>
            <div className="menu-badge bg-theme"></div>
          </a>
          <div className="dropdown-menu dropdown-menu-end mt-1 w-300px fs-11px pt-1">
            <h6 className="dropdown-header fs-10px mb-1">NOTIFICATIONS</h6>
            <div className="dropdown-divider mt-1"></div>
            {notificationData.length > 0 ? (
              notificationData.map((notification, index) => (
                <a
                  href="#/"
                  key={index}
                  className="d-flex align-items-center py-10px dropdown-item text-wrap"
                >
                  <div className="fs-20px">
                    <i className={notification.icon}></i>
                  </div>
                  <div className="flex-1 flex-wrap ps-3">
                    <div className="mb-1 text-white">{notification.title}</div>
                    <div className="small">{notification.time}</div>
                  </div>
                  <div className="ps-2 fs-16px">
                    <i className="bi bi-chevron-right"></i>
                  </div>
                </a>
              ))
            ) : (
              <div className="dropdown-notification-item p-3 text-center">
                No record found
              </div>
            )}
            <hr className="bg-white-transparent-5 mb-0 mt-2" />
            <div className="py-10px mb-n2 text-center">
              <a href="#/" className="text-decoration-none fw-bold">
                SEE ALL
              </a>
            </div>
          </div>
        </div> */}
        <div className="menu-item dropdown dropdown-mobile-full">
          <a
            href="#/"
            data-bs-toggle="dropdown"
            data-bs-display="static"
            className="menu-link"
          >
            <div className="menu-img online">
              <img
                src="/assets/img/user/profile.jpg"
                alt="Profile"
                height="60"
              />
            </div>
            <div style={{color:"black"}} className="menu-text d-sm-block d-none">{data.name}</div>
          </a>
          <div className="dropdown-menu dropdown-menu-end me-lg-3 fs-11px mt-1">
            {/* <Link
              to="/profile"
              className="dropdown-item d-flex align-items-center"
            >
              PROFILE{" "}
              <i className="bi bi-person-circle ms-auto text-theme fs-16px my-n1"></i>
            </Link>
            <Link
              to="/email/inbox"
              className="dropdown-item d-flex align-items-center"
            >
              INBOX{" "}
              <i className="bi bi-envelope ms-auto text-theme fs-16px my-n1"></i>
            </Link>
            <Link
              to="/calendar"
              className="dropdown-item d-flex align-items-center"
            >
              CALENDAR{" "}
              <i className="bi bi-calendar ms-auto text-theme fs-16px my-n1"></i>
            </Link>
            <Link
              to="/settings"
              className="dropdown-item d-flex align-items-center"
            >
              SETTINGS{" "}
              <i className="bi bi-gear ms-auto text-theme fs-16px my-n1"></i>
            </Link> */}
            {/* <div className="dropdown-divider"></div> */}
            <Link
              className="dropdown-item d-flex align-items-center"
              onClick={handleLogout}
            >
              LOGOUT
              <i className="bi bi-toggle-off ms-auto text-theme fs-16px my-n1"></i>
            </Link>
          </div>
        </div>
      </div>

      <form className="menu-search" method="POST" name="header_search_form">
        <div className="menu-search-container">
          <div className="menu-search-icon">
            <i className="bi bi-search"></i>
          </div>
          <div className="menu-search-input">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Search menu..."
            />
          </div>
          <div className="menu-search-icon">
            <a href="#/" onClick={toggleAppHeaderSearch}>
              <i className="bi bi-x-lg"></i>
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Header;
