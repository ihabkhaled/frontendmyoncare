/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import TableList from "views/TableList.js";
import Login from "views/Login";
import Register from "views/Register";

const dashboardRoutes = [
  {
    path: "/user/:userId",
    name: "Edit User",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: {
      header: true,
      footer: true,
      side: true,
    },
    auth: false,
  },
  {
    path: "/users",
    name: "Users List",
    icon: "nc-icon nc-notes",
    component: TableList,
    layout: {
      header: true,
      footer: true,
      side: true,
    },
    auth: true,
  },
  {
    path: "/login",
    name: "Login",
    icon: "nc-icon nc-chart-pie-35",
    component: Login,
    layout: {
      header: false,
      footer: false,
      side: false,
    },
    auth: false,
  },
  {
    path: "/register",
    name: "Register",
    icon: "nc-icon nc-chart-pie-35",
    component: Register,
    layout: {
      header: false,
      footer: false,
      side: false,
    },
    auth: false,
  },
  {
    path: "/",
    name: "Login",
    icon: "nc-icon nc-chart-pie-35",
    component: Login,
    layout: {
      header: false,
      footer: false,
      side: false,
    },
    auth: false,
  },
];

export default dashboardRoutes;
