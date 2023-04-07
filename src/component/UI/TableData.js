import React from 'react';
import "./index.css"
import img from '../Img/kpf.png';
import lock from "../Img/lock.png";
import deleted from "../Img/delete.png"
import 'bootstrap/dist/css/bootstrap.min.css';

function TableData() {
    return (
        <>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col w-100">Status</th>
                        <th scope="col">Access</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className='d-flex flex-row'>
                                <div>
                                    <img className='img' src={img} width="40px" height="40px" />
                                </div>
                                <div className='ps-2'>
                                    <span className='m-0 d-block'> Md Kamran</span>
                                    <span className='text-secondary '>mdkamran12310@gmail.com</span>
                                </div>
                            </div>
                        </td>
                        <td className='text-success'>Active</td>
                        <td>Owner</td>
                        <td><img src={lock} width="25px" height="25px" /></td>
                    </tr>
                    <tr>
                        <td>
                            <div className=' d-flex flex-row'>
                                <div>
                                    <img className='img' src={img} width="40px" height="40px" />
                                </div>
                                <div className='ps-2'>
                                    <span className='m-0 d-block'> Md Kamran</span>
                                    <span className='text-secondary '>mdkamran12310@gmail.com</span>
                                </div>
                            </div>


                        </td>
                        <td className='px-0'>
                            <select className="form-select bg-light border border-0" aria-label="Default select example">
                                <option value="1">Inactive</option>
                                <option value="2">Active</option>
                            </select>
                        </td>
                        <td>Owner</td>
                        <td><img src={deleted} width="25px" height="25px" /></td>
                    </tr>
                </tbody>
            </table>
        </>);
}

export default TableData;