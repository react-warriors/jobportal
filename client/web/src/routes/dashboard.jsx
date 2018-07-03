import Dashboard from "../views/Dashboard/Dashboard";
import UserProfile from "../views/UserProfile/UserProfile";
import TableList from "../views/TableList/TableList";
import Typography from "../views/Typography/Typography";
import Icons from "../views/Icons/Icons";
import Maps from "../views/Maps/Maps";
import Notifications from "../views/Notifications/Notifications";
import SignIn from "../views/SignIn/SignIn";
import ViewJobs from "../views/ViewJobs/ViewJobs";

const dashboardRoutes = [
  {
    path: "/ViewJobs",
    name: "View Jobs",
    icon: "pe-7s-search",
    component: ViewJobs
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "pe-7s-user",
    component: UserProfile
  },
  {
    path: "/table",
    name: "Candidate list",
    icon: "pe-7s-note2",
    component: TableList
  },
  {
    path: "/typography",
    name: "Job description",
    icon: "pe-7s-news-paper",
    component: Typography
  },
  { path: "/maps", name: "Maps", icon: "pe-7s-map-marker", component: Maps },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "pe-7s-bell",
    component: Notifications
  },
  {
    path: "/signin",
    name: "SignIn",
    icon: "pe-7s-bell",
    component: SignIn
  },
  //default to view jobs
  { redirect: true, path: "/", to: "/ViewJobs", name: "ViewJobs" }
];

export default dashboardRoutes;