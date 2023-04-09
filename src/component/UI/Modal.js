import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { useSelector } from "react-redux";
function Modal() {
  const modalshow = useSelector((state) => state);
  console.log(modalshow.hoverData);
  return (
    <>
      {modalshow.modalToggle &&
        modalshow.hoverData &&
        modalshow.hoverData.map((data, index) => (
          <div
            className="py-3 col-md-8 col-9 d-flex justify-content-end justify-content-sm-center flex-column"
            key={index}
          >
            <div className="row d-flex justify-content-center flex-column py-5 modal-border border">
              <div className="col-12 d-flex justify-content-center flex-column text-center">
                <div className="col-12 d-flex justify-content-center">
                  <img
                    src={data.src}
                    className="img"
                    height="120px"
                    width="120px"
                    alt="data"
                  />
                </div>
                <div className="col-12 d-flex justify-content-center flex-column text-center">
                  <p className="display-5 p-0 m-0 font-weight-bold">
                    {data.name}
                    <sup className= {` ${data.status === "Active" ?"text-success ":"text-danger"} active font-weight-bold`} >
                      .
                    </sup>
                  </p>
                  <span className="text-secondary">{data.email}</span>
                </div>
                <div className="col py-2">
                  <p className="display-5 p-0 m-0 font-weight-bold">
                    Your Plan: Standard
                  </p>
                </div>
                <div className="col">
                  <button className= {` btn btn-primary ${data.status === "Active" ?"btn-success":"btn-warning"} font-weight-bold px-2 py-sm-2 px-sm-5 `} >
                    {data.status} User
                  </button>
                </div>
              </div>
              <div className="col-12 d-flex justify-content-center flex-column pt-3">
                <div className="col ps-3">
                  <span className="font-weight-bold plan-user">Plan Uses</span>
                </div>
                <div className="col-12 d-flex justify-content-center">
                  <div className="progress">
                    <div
                      className={`progress-bar ${data.status === "Active" ?"bg-success":"bg-warning"}`}
                      role="progressbar"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: `${data.progress}%` }} // increase the width to 75%
                    ></div>
                  </div>
                </div>
                <div className="col-12 mt-3 d-flex justify-content-center text-center position-relative">
                  <div className="col-5">
                    <p className="p-0 m-0 display-5">2,450</p>
                    <span>Click reviewd</span>
                  </div>
                  <div className="col-2">
                    <div className="vertical"></div>
                  </div>
                  <div className="col-5">
                    <p className="p-0 m-0 display-5">5000</p>
                    <span>Monthly clicks</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}

export default Modal;
// w-100 d-flex justify-content-center align-items-center h-100
