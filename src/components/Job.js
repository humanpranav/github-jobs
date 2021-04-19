import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
let color = () => {
  let col = ["#CE161F", "#0071B5", "#FC9A02", "#660066", "##FFC0CB", "#63B71C"];
  let index = Math.floor(Math.random() * col.length);
  console.log(col[index]);
  return col[index];
};

export default function Job({ job, onClick, ...props }) {
  const darkMode = useSelector((store) => store.themereducer.switch);
  const calculateDate = (time) => {
    var date1 = new Date(time);
    var date2 = new Date();

    var Difference_In_Time = date2.getTime() - date1.getTime();

    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    return Math.floor(Difference_In_Days);
  };
  return (
    <Card
      onClick={onClick}
      className={`job_card_container  ${darkMode ? "dark1" : "light-mode"} `}
    >
      <Card.Body>
        <div>
          <div style={{ backgroundColor: color() }} className="imageContainer">
            <img
              className="d-none d-md-block"
              width="30px"
              src={job.company_logo}
            />
          </div>
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "10px" }}
          >
            <p style={{ color: "grey", fontSize: 12 }}>
              {calculateDate(job.created_at)} days ago{" "}
            </p>
            <div
              style={{
                width: "5px",
                height: "5px",
                backgroundColor: "grey",
                margin: "5px",
                borderRadius: "5px",
              }}
            ></div>
            <p style={{ color: "grey", fontSize: 12 }}> {job.type}</p>
          </div>

          <p
            style={{
              fontSize: "18px",
              fontWeight: 600,
              fontFamily: "sans-serif",
              margin: "5px",
            }}
          >
            {job.title}
          </p>
          <p style={{ margin: "3px", color: "grey" }}>{job.company}</p>
          <p style={{ color: "purple", marginTop: "16px", fontSize: "13px" }}>
            {job.location}
          </p>
        </div>
      </Card.Body>
    </Card>
  );
}
