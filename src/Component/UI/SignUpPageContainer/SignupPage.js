import React from 'react';
import Form from '../Form/form';
import FormSideImage from '../SideImage/FormSideImage';
import './SignupPage.css'
function SignupPage() {
    return (
        <>
            <div className='col-12  d-flex flex-column align-items-center justify-content-center'>
                <div className='row g-0'>
                   
                </div>    
                <div className='row g-0 position-relative'>
                    <div className='col-6 signUp_text float-start position-absolute'>
                        <h1>SignUp</h1>
                    </div>
                    <div className='col-12 col-md-5 formContanier d-flex align-items-center'>
                        <Form />
                    </div>
                    <div className='col-md-7 d-none d-md-block'>
                        <FormSideImage />
                    </div>
                </div>
            </div>
        </>);
}

export default SignupPage;