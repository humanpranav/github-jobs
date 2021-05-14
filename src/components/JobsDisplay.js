import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Job from "./Job";
import SearchBar from "./SearchBar";
import Button from "@material-ui/core/Button";

export default function JobsDisplay(props) {
  const jobs = useSelector((state) => state.job_reducer.filteredJobs);
  const [pageIndex, setpageIndex] = useState(0);
  const [paginatedData, setpaginatedData] = useState([]);
  useEffect(() => {
    let newjobs = [...jobs];

    let parray = newjobs.slice(pageIndex * 12, (pageIndex + 1) * 12);

    setpaginatedData(parray);
  }, [pageIndex, jobs]);
  const pagination = () => {
    let arr = [];
    for (let index = 0; index < jobs.length; index = index + 12) {
      arr.push(1);
    }
    // continue from here
    return arr.map((item, i) => {
      return (
        <Button
          style={{ backgroundColor: i == pageIndex ? "#5865e0" : "white" }}
          className="pagination-buttons"
          onClick={() => setpageIndex(i)}
        >
          {i}
        </Button>
      );
    });
  };

  console.log(paginatedData.length);
  console.log(jobs, "there");
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <SearchBar />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          maxWidth: "1500px",
          alignSelf: "center",
        }}
      >
        {paginatedData.map((item, i) => {
          return (
            <Job
              onClick={() => {
                props.history.push(`details/${i}`);
              }}
              key={i}
              job={item}
            />
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {pagination()}
      </div>
    </div>
  );
}
