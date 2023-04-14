import React from 'react';
import img from "./formImage.png";

function FormSideImage() {
    return ( 
    <>
        <div className='container-fluid d-flex align-items-center'>
            <div className='row g-0'>
                <div className='col-12'>
                <img src={img}  height="100%" width="100%" alt="Form Side Image" />
                </div>
            </div>
        </div>
    </> );
}

export default FormSideImage;