import React from "react";
import "../NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOn, faToggleOff } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, withRouter } from "react-router";

function NavBar(props) {
  const toggleSwitch = useSelector((store) => store.themereducer.switch);

  const dispatch = useDispatch();
  const handleChange = () => {
    dispatch({ type: "changeswitch", payload: !toggleSwitch });
  };
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="purple-header">
            <div
              className="logo-container"
              onClick={() => {
                props.history.push("/");
              }}
            >
              <p className="dev-text">devjobs</p>
            </div>

            <div className="menu-icon">
              {toggleSwitch ? (
                <FontAwesomeIcon
                  onClick={() => {
                    handleChange();
                  }}
                  icon={faToggleOn}
                />
              ) : (
                <FontAwesomeIcon
                  onClick={() => {
                    handleChange();
                  }}
                  icon={faToggleOff}
                />
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default withRouter(NavBar);
