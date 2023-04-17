import React from 'react';
import Form from '../Form/form';
import FormSideImage from '../SideImage/FormSideImage';
import './SignupPage.css'
function SignupPage() {
    return (
        <>
            <div className='container d-flex flex-column align-items-center justify-content-center'>   
                <div className='row w-100 g-0 position-relative'>
                    <div className='col-12 col-md-5 formContanier'>
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