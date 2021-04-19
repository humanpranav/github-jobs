import React from "react";
import { useSelector } from "react-redux";
import Job from "./Job";
import SearchBar from "./SearchBar";

export default function JobsDisplay(props) {
  const jobs = useSelector((state) => state.job_reducer.filteredJobs);

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
        {jobs.map((item, i) => {
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
    </div>
  );
}
