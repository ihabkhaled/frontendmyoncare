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
import React, { Component, useState } from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";

import AdminNavbar from "components/Navbars/AdminNavbar";
import Footer from "components/Footer/Footer";
import Sidebar from "components/Sidebar/Sidebar";
import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";
import axiosInstance from "../modules/axiosInstance";
import Login from "../views/Login";
import Register from "../views/Register";

import routes from "routes.js";

import sidebarImage from "assets/img/sidebar-3.jpg";

function Admin() {
  const [image, setImage] = React.useState(sidebarImage);
  const [color, setColor] = React.useState("black");
  const [hasImage, setHasImage] = React.useState(true);
  const mainPanel = React.useRef(null);
  const [tokenValid, setTokenValid] = React.useState("");

  const isTokenValid = async () => {
    let response = await axiosInstance.get(`checkSession`);

    if (response.data.forceLogoutToken == true) {
      setTokenValid(false);
    } else {
      setTokenValid(true);
    }
  };

  React.useEffect(async () => {
    await isTokenValid();
  }, []);

  if (tokenValid) {
    return (
      <>
        <div className="wrapper">
          {routes.map((prop, key) => {
            return (
              <Route
                path={prop.path}
                render={() =>
                  tokenValid ? (
                    <>
                      {prop.layout.side && (
                        <Sidebar
                          color={color}
                          image={hasImage ? image : ""}
                          routes={routes}
                        />
                      )}
                      <div className="main-panel" ref={mainPanel}>
                        {prop.layout.header && <AdminNavbar />}
                        <div className="content">
                          <prop.component />
                        </div>
                        {prop.layout.footer && <Footer />}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="main-panel" ref={mainPanel}>
                        <div className="content">
                          {prop.path == "/register" ||
                          prop.path == "/login" ||
                          prop.path == "/" ? (
                            <>
                              <prop.component />
                            </>
                          ) : (
                            "login"
                          )}
                        </div>
                      </div>
                    </>
                  )
                }
                key={key}
              />
            );
          })}
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="main-panel" ref={mainPanel}>
          <div className="content">
            {window.location.pathname == "/register" ? (
              <>
                <Register />
              </>
            ) : window.location.pathname == "/login" ||
              window.location.pathname == "/" ? (
              <>
                <Login />
              </>
            ) : (
              <Login />
            )}
          </div>
        </div>
      </>
    );
  }
}

export default Admin;
