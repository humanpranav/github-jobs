import React from "react";
import { useSelector } from "react-redux";

let color = () => {
  let col = ["#CE161F", "#0071B5", "#FC9A02", "#660066", "##FFC0CB", "#63B71C"];
  let index = Math.floor(Math.random() * col.length);
  console.log(col[index]);
  return col[index];
};

export default function Detail(props) {
  const toggleSwitch = useSelector((store) => store.themereducer.switch);
  const jobs = useSelector((state) => state.job_reducer.filteredJobs);
  let { id } = props.match.params;
  console.log(jobs);
  let item = jobs.length > 0 ? jobs[id] : {};

  const calculateDate = (time) => {
    var date1 = new Date(time);
    var date2 = new Date();

    var Difference_In_Time = date2.getTime() - date1.getTime();

    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    return Math.floor(Difference_In_Days);
  };
  return (
    <div
      style={{
        color: toggleSwitch ? "#fff" : "black",
      }}
    >
      <div className="detailContainer">
        <div>
          <div
            className={`flex-row row-to-col-mob Detail-head  ${
              toggleSwitch ? "dark1" : "light-mode"
            }`}
            style={{ borderRadius: 5 }}
          >
            <div style={{ backgroundColor: color() }} className="detail-Logo">
              <img
                className="d-none d-md-block"
                width="50px"
                src={item.company_logo}
              />
            </div>
            <div
              className="flex-row"
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "space-between",
                marginInline: "20px",
              }}
            >
              <div>
                <p style={{ fontSize: "17px", fontWeight: 600 }}>
                  {item.company}
                </p>
              </div>
            </div>
            <div style={{ margin: "10px" }}>
              <a href={item.company_url} target="_blank" className="button">
                Company Site
              </a>
            </div>
          </div>
          <div style={{ margin: "60px" }}></div>
          <div
            style={{
              backgroundColor: toggleSwitch ? "#19212D" : "#fff",
              padding: "35px",
            }}
          >
            <div
              className="row-to-col-mob"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "10px",
                  }}
                >
                  <p style={{ color: "grey", fontSize: 12 }}>
                    {calculateDate(item.created_at)} days ago{" "}
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
                  <p style={{ color: "grey", fontSize: 12 }}> {item.type}</p>
                </div>
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: 700,
                    marginTop: "0px",
                  }}
                >
                  {item.title}
                </p>
              </div>
              <div>
                <button className="button">Apply Now</button>
              </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: item.description }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
