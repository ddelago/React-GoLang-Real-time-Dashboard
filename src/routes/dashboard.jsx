import Dashboard from "views/Dashboard/Dashboard";
import MPCV from "views/MPCV/MPCV";
import PM from "views/PM/PM";
import Robotics from "views/Robotics/Robotics";
import SubSys from "views/SubSys/SubSys";
import CamsLights from "views/CamsLights/CamsLights";
import RemoteOperations from "views/RemoteOperations/RemoteOperations";
import User from 'views/User/User';
// import Upgrade from "views/Upgrade/Upgrade";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-home",
    component: Dashboard
  },
  {
    path: "/mpcv",
    name: "MPCV GN&C",
    icon: "pe-7s-compass",
    component: MPCV
  },
  {
    path: "/pm",
    name: "PM GN&C",
    icon: "pe-7s-compass",
    component: PM
  },
  {
    path: "/robotics",
    name: "Robotics",
    icon: "pe-7s-config",
    component: Robotics
  },
  { 
    path: "/subsys", 
    name: "SubSystems", 
    icon: "pe-7s-tools", 
    component: SubSys 
  },
  { 
    path: "/CamsLights", 
    name: "Cameras and Lights", 
    icon: "pe-7s-video", 
    component: CamsLights 
  },
  {
    path: "/RemoteOperations",
    name: "Remote Operations",
    icon: "pe-7s-joy",
    component: RemoteOperations
  },
  {
    upgrade: true,
    path: "/login",
    name: "Login",
    icon: "pe-7s-rocket",
    component: User
  },
  { redirect: true, path: "/", to: "/dashboard", name: "Dashboard" }
];

export default dashboardRoutes;
