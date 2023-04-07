import React from 'react';
import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import TableData from './TableData';

function Index() {
    return (
        <>
            <div className='main h-100'>
                <div className='row g-0 h-100'>
                    <div className='col-6'>
                        <TableData />
                    </div>
                    <div className='col-6 h-100'>
                        
                    </div>
                </div>
            </div>
        </>);
}

export default Index;