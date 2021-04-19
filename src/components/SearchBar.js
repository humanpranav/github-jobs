import React, { useState } from "react";
import "../SearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { faSearch, faLocationArrow } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar() {
  const jobs = useSelector((store) => store.job_reducer.jobs);
  const toggleSwitch = useSelector((store) => store.themereducer.switch);
  const [filter1, setFilter1] = useState("");
  const [location, setLocation] = useState("");
  const [fulltime, setFulltime] = useState(false);

  const dispatch = useDispatch();
  const handleSubmit = () => {
    console.log("coming here", location, fulltime, filter1);
    let value = filter1.toLowerCase();

    let jobarray = jobs.slice();

    let filteredjobs = jobarray.filter((item) => {
      return (
        (item.company.toLowerCase().includes(value) ||
          item.description.toLowerCase().includes(value) ||
          item.title.toLowerCase().includes(value)) &&
        (location !== ""
          ? item.location.toLowerCase().includes(location.toLowerCase())
          : true) &&
        (fulltime ? item.type == "Full Time" : true)
      );
    });
    console.log("filtered data", filteredjobs);
    dispatch({ type: "filterJobs", payload: filteredjobs });
  };

  return (
    <div
      style={{ backgroundColor: toggleSwitch ? "#19212D" : "#fff" }}
      className="search-bar"
    >
      <div
        style={{
          display: "flex",
          flex: 4,
          overflow: "hidden",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "transparent",
        }}
      >
        <div className="hide-on-mob">
          <FontAwesomeIcon
            style={{ margin: "10px", color: toggleSwitch ? "white" : "black" }}
            icon={faSearch}
          />
        </div>
        <input
          style={{
            flex: 1,
            height: "100%",
            color: toggleSwitch ? "white" : "black",
            borderRightColor: toggleSwitch ? "black" : "#eee",
            backgroundColor: "transparent",
            borderLeftColor: "transparent",
            paddingLeft: "10px",
          }}
          onChange={(e) => {
            setFilter1(e.target.value);
          }}
          type="text"
          placeholder="Filter by title, company, expertise"
        />
      </div>
      <div
        className="hide-on-mob"
        style={{
          display: "flex",
          flex: 4,
          overflow: "hidden",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "transparent",
          paddingLeft: "10px",
        }}
      >
        <div>
          <FontAwesomeIcon
            style={{ margin: "10px", color: toggleSwitch ? "white" : "black" }}
            icon={faLocationArrow}
          />
        </div>
        <input
          style={{
            flex: 1,
            height: "100%",
            color: toggleSwitch ? "white" : "black",
            borderRightColor: toggleSwitch ? "black" : "#eee",
            borderLeftColor: "transparent",
            backgroundColor: "transparent",
          }}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
          type="text"
          placeholder="Filter by Location"
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          flex: 3,
          padding: "5px",
        }}
        className="hide-on-mob"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            flex: 1,
            borderLeftColor: "transparent",
          }}
        >
          <input
            checked={fulltime}
            onChange={() => {
              setFulltime(!fulltime);
            }}
            style={{ borderLeftColor: "transparent" }}
            type={"checkbox"}
          />
          <p
            style={{
              fontWeight: "600",
              margin: "0px",
              fontSize: "12px",
              color: toggleSwitch ? "white" : "black",
            }}
          >
            Only Full Time
          </p>
        </div>
        <button
          style={{
            backgroundColor: "#5865E0",
            color: "white",
            fontWeight: "600",
            borderColor: "transparent",
            borderRadius: "5px",
            padding: "10px",
            fontSize: "15px",
          }}
          onClick={handleSubmit}
        >
          Search
        </button>
      </div>
      <div className="show-on-mob">
        <button
          style={{
            backgroundColor: "#5865E0",
            color: "white",
            fontWeight: "600",
            borderColor: "transparent",
            borderRadius: "5px",
            padding: "10px",
            fontSize: "15px",
          }}
          onClick={handleSubmit}
        >
          <FontAwesomeIcon style={{ margin: "10px" }} icon={faSearch} />
        </button>
      </div>
    </div>
  );
}
