import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Comment = lazy(() => import("../views/ui/Comment.js"));
const AddEvent = lazy(() => import("../views/ui/AddEvent.js"));
const Events = lazy(() => import("../views/ui/Events.js"));
const PassedEvents = lazy(() => import("../views/ui/PassedEvents.js"));
const Starter = lazy(() => import("../views/Starter.js"));
const About = lazy(() => import("../views/About.js"));
const Alerts = lazy(() => import("../views/ui/Alerts"));
const Badges = lazy(() => import("../views/ui/Badges"));
const Buttons = lazy(() => import("../views/ui/Buttons"));
const Cards = lazy(() => import("../views/ui/Cards"));
const Grid = lazy(() => import("../views/ui/Grid"));
const Tables = lazy(() => import("../views/ui/Tables"));
const Forms = lazy(() => import("../views/ui/Forms"));
const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs"));
const Login = lazy(() => import("../views/ui/Login"));
const Registration = lazy(() => import("../views/ui/Registration"));
const Profile = lazy(() => import("../views/ui/Profile"));


/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/starter" /> },
      { path: "/event", exact: true, element: <Events /> },
      { path: "/passedEvents", exact: true, element: <PassedEvents /> },
      { path: "/addEvent", exact: true, element: <AddEvent /> },
      { path: "/comment", exact: true, element: <Comment /> },
      { path: "/starter", exact: true, element: <Starter /> },
      { path: "/about", exact: true, element: <About /> },
      { path: "/alerts", exact: true, element: <Alerts /> },
      { path: "/badges", exact: true, element: <Badges /> },
      { path: "/buttons", exact: true, element: <Buttons /> },
      { path: "/cards", exact: true, element: <Cards /> },
      { path: "/grid", exact: true, element: <Grid /> },
      { path: "/table", exact: true, element: <Tables /> },
      { path: "/forms", exact: true, element: <Forms /> },
      { path: "/breadcrumbs", exact: true, element: <Breadcrumbs /> },
      { path: "/login", exact: true, element: <Login /> },
      { path: "/registration", exact: true, element: <Registration /> },
      { path: "/profile", exact: true, element: <Profile /> },
    ],
  },
];

export default ThemeRoutes;
