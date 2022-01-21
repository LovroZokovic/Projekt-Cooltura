import { Button, Nav, NavItem } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import probg from "../assets/images/bg/logo_small.png";

const navigation = [
  {
    title: "Events",
    href: "/starter",
    icon: "bi bi-calendar4-event",
  },
  {
    title: "MyPassedEvents",
    href: "/passedEvents",
    icon: "bi bi-clock-history",
  },
  {
    title: "MyFutureEvents",
    href: "/futureEvents",
    icon: "bi bi-chevron-double-right",
  },
  {
    title: "AddEvent",
    href: "/addEvent",
    icon: "bi bi-plus-lg",
  },
  {
    title: "About",
    href: "/profile",
    icon: "bi bi-people",
  },
];

function logoutUser(){
  console.log("LogoutUser");
  sessionStorage.data = undefined;
  console.log(sessionStorage.data)
  window.location.replace("http://localhost:3000/#/Starter");
}

function checkLogin(){
  if(sessionStorage.data === undefined){
    return <a href="/#/login">Login</a>
  }
  else{
    return <a href="/#/starter" onClick={logoutUser()}>Logout</a>
  }
}

function checkSession(href){
    if(sessionStorage.data === undefined){
      return "/starter"
    }
    return href;
}

const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();
  let state = {
    mssg: ""
  };
  return (
    <div>
      <div className="d-flex align-items-center"></div>
      <div>
        <div className="p-3 d-flex">
          <img src={probg} alt="user" width="150"  />
          <Button
            color="white"
            className="ms-auto text-white d-lg-none"
            onClick={() => showMobilemenu()}
          >
            <i className="bi bi-x"></i>
          </Button>
        </div>
        <div className="bg-dark text-white p-2 opacity-75">
          {checkLogin()}
        </div>
      </div>
      <div className="p-3 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={checkSession(navi.href)}
                className={
                  location.pathname === navi.href
                    ? "active nav-link py-3"
                    : "nav-link text-secondary py-3"
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
