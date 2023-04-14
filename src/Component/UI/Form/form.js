import React from 'react';
import './form.css'
import { useFormik } from 'formik';

function Form() {
    const validate = values => {
        const errors = {};
        if (!values.firstName) {
          errors.firstName = 'Required';
        } else if (values.firstName.length > 15) {
          errors.firstName = 'Must be 15 characters or less';
        }
      
        if (!values.lastName) {
          errors.lastName = 'Required';
        } else if (values.lastName.length > 20) {
          errors.lastName = 'Must be 20 characters or less';
        }
      
        if (!values.email) {
          errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }
      
        return errors;
      };
    const formik = useFormik({
        initialValues: {
            Name: '',
            email: '',
        },
        validate,
        onSubmit: values => {
            console.log(values);
        },
    });

    return (
        <>
            <div className='container-fluid d-flex align-items-center'>
                <div className='row w-100 g-0'>
                    <div className='col-12'>
                        <form onSubmit={formik.handleSubmit}>

                            <div className='col text-center'>
                                <label htmlFor="files" className="btn">Photo +</label>
                                <input id="files" type="file" name="files" />
                            </div>

                            <div className='col pb-1'>
                                <label className='pb-2 mt-3'htmlFor='Name' >Name</label>
                                <input
                                 type="text"
                                 id="Name"
                                 name='Name' 
                                 onChange={formik.handleChange}
                                 value={formik.values.Name}
                                />
                                {formik.errors.Name ? <div>{formik.errors.Name}</div> : null}
                            </div>

                            <div className='col py-2'>
                                <label className='pb-2 mt-3'>Email</label>
                                <input type="text" />
                            </div>

                            <div className='col py-2'>
                                <label className='pb-2 mt-3'>PhoneNo</label>
                                <input type="text" />
                            </div>

                            <div className='col py-2'>
                                <label className='pb-2 mt-3'>Password</label>
                                <input type="text" />
                            </div>

                            <div className='col py-2'>
                                <label className='pb-2 mt-3'>Confirm Password</label>
                                <input type="text" />
                            </div>

                            <div className='col-12 mt-3'>
                                <button type='submit' className='btn btn-primary px-3 me-3 py-1'>Submit</button>
                                <button type='reset' className='btn btn-danger px-3 py-1'>Reset</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Form;

