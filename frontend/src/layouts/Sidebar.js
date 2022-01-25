import { Button, Nav, NavItem } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import probg from "../assets/images/bg/logo_small.png";

const navigation = [
  {
    title: "Events",
    href: "/starter",
    icon: "bi bi-calendar4-event",
    requireAuth: false,
  },
  {
    title: "MyPassedEvents",
    href: "/passedEvents",
    icon: "bi bi-clock-history",
    requireAuth: true,
  },
  {
    title: "MyFutureEvents",
    href: "/futureEvents",
    icon: "bi bi-chevron-double-right",
    requireAuth: true,
  },
  {
    title: "AddEvent",
    href: "/addEvent",
    icon: "bi bi-plus-lg",
    requireAuth: true,
    requireRole: "Creator",
  },
  {
    title: "About",
    href: "/profile",
    icon: "bi bi-people",
    requireAuth: true,
  },
];

function parseJwt (token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
};

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
  const token = sessionStorage.getItem("LoginToken");
  const userData = token ? parseJwt(token) : null;
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
          {
            userData 
            ? (<a onClick={() => {
              sessionStorage.removeItem("LoginToken");
              window.location.href = '/';
            }}>Logout</a>)
            : (<a href="/#/login">Login</a>)
          }
        </div>
      </div>
      <div className="p-3 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.filter((nav) => {
            if (nav.requireAuth && !userData) {
              return false;
            }

            if (nav.requireRole && nav.requireRole !== userData.role) {
              return false;
            }

            return true;
          }).map((navi, index) => (
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
