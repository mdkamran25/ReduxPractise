import React from 'react';
import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import TableData from './TableData';
import Modal from './Modal';
function Index() {
    return (
        <>
            <div className='main container bg-light'>
                <div className='row d-flex justify-content-center align-items-center g-0'>
                    <div className='col-4 col-md-8'>
                        <TableData />
                    </div>
                    <div className='col-8 col-md-4 d-flex justify-content-center align-items-center'>
                        <Modal />
                    </div>
                </div>
            </div>
        </>);
}

export default Index;