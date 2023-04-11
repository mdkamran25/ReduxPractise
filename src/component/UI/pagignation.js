import React from "react";
import ReactPaginate from "react-paginate";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import axios from "axios";
import { showData } from "../action/indexAction";
import { useDispatch } from "react-redux";
function Pagignation() {
    const handlePageClick = (data) => {
        console.log(data.selected , "page");
    }
    useEffect(()=>{
        const getUser = async (dispatch, getState) => {
          const {data} = await axios.get('https://reqres.in/api/users?page=1')
          dispatch(showData(data.data));
        }
        getUser();
      }, []);   
  
  return (
    <>
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        pageCount={6}
        marginPagesDisplayed={3}
        pageRangeDisplayed={6}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={'active'}
      />
    </>
  );
}

export default Pagignation;
