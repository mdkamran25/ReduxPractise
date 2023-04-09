import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import { showModaled } from "../action/indexAction";

function TableData() {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col w-100">Status</th>
            <th scope="col">Access</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {data.list &&
            data.list.map((list, index) => (
              <tr
                key={index}
                onMouseEnter={() => dispatch(showModaled(index))}
                onMouseLeave={() => dispatch(showModaled(index))}
              >
                <td>
                  <div className="d-flex flex-row">
                    <div>
                      <img
                        className="img"
                        src={list.src}
                        width="40px"
                        height="40px"
                      />
                    </div>
                    <div className="ps-2">
                      <span className="m-0 d-block">{list.name}</span>
                      <span className="text-secondary">{list.email}</span>
                    </div>
                  </div>
                </td>
                <td className="px-0">
                  {list.status === "Active" ? (
                    <span className="text-success fw-normal ps-1">Active</span>
                  ) : (
                    <select
                      className="form-select border border-0 select"
                      aria-label="Default select example"
                    >
                      <option value="1" className="bg-light">
                        {list.status}
                      </option>
                      <option value="2" className="bg-light">
                        Active
                      </option>
                    </select>
                  )}
                </td>
                <td>{list.access}</td>
                <td>
                  <img src={list.icon} width="25px" height="25px" />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default TableData;
