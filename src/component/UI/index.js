import React from 'react';
import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import TableData from './TableData';
import Modal from './Modal';
import Pagignation from './pagignation';
function Index() {
    return (
        <>
            <div className='main container bg-light'>
                <div className='row d-flex justify-content-center align-items-center py-4
                 g-0'>
                    <div className='col-5 col-md-8 overflow mb-2'>
                        <TableData />
                    </div>
                    <div className='col-7 col-md-4 d-flex justify-content-center align-items-center '>
                        <Modal />
                    </div>
                </div>
                <div className='row g-0'>
                    <div className='col-12'>
                        <Pagignation />
                    </div>
                </div>
            </div>
        </>);
}

export default Index;