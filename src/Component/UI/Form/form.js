import React from 'react';
import './form.css'
import { useFormik } from 'formik';
import { useDispatch} from "react-redux";
import { addData } from '../../Slice/signUpSlice';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Form() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let image = document.getElementById('file');
    const  [imageValidationError, setimageValidationError]=useState("");
    const initialValues = {
        file:"",
        name: "",
        email: "",
        phone:"",
        password: "",
        confirmPassword: "",
    };

    // const imageValidation = () => {
    //     console.log("helllo at enter")
    //         if (image && image.value) {
    //             if(!/[^\s]+(.*?).(jpg|jpeg|png|svg)$/i.test(image.value)){
    //                 setimageValidationError("Image must be in the format of jpeg/jpg/png/svg");
    //                 console.log(imageValidationError)
    //             }
    //             else {
    //                 if(image.files[0].size > 1024*1024){
    //                     setimageValidationError("Image size must be less than 1mb");
    //                     console.log(imageValidationError)
    //                 }
    //                 else{
    //                     setimageValidationError("");
    //                     console.log("added");
    //                 }
    //             }
    //         } else {
    //             // console.log("else")
    //             setimageValidationError('Required');
    //             console.log(imageValidationError)
    //         }
    //     } 
    const validate = values => {
        const errors = {};

        //Image Validation 
        if(!values.file){
            errors.file = "Required";
        }

        //Name Validation
        if (!values.name) {
          errors.name = 'Required';
        }else if (values.name.length < 4) {
            errors.name = 'Must be 4 characters or more';
        }
        else if (!/^[a-zA-Z, ]+$/.test(values.name)) {
            errors.name = 'Enter a Valid Name';
        }
        else if (values.name.length > 15) {
            errors.name = 'Must be 15 characters or less';
        }
        
        //Email Validation
        if (!values.email) {
          errors.email = 'Required';
        } else if (!/^(?=.{5,50}$)[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }

        //Phone Validation
        if (!values.phone) {
            errors.phone = 'Required';
        }
        else if (!/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/.test(values.phone)) {
            errors.phone = 'Invalid Phone Number';
        }

        //Password Validation
        if (!values.password) {
            errors.password = 'Required';
        }else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\*]).{8,15}$/.test(values.password)) {
            errors.password = 'Your Password must contain atleast one digit, one lowercase letter, one uppercase, some Special character(!@#\*) and must be of atleast length eight';
        } 

        //Confirm Password check
        if (!values.confirmPassword) {
            errors.confirmPassword = 'Required';
        }else if (values.confirmPassword !== values.password) {
            errors.confirmPassword = 'Password did not match';
        }

        return errors;
      };
    const formik = useFormik({
        initialValues,
        validate,
        onSubmit: (values, { resetForm }, ) => {
            const fr = new FileReader();
            fr.onload = () => {
            let url = fr.result;
            values.file = url;
            dispatch(addData(values));
            resetForm();
            };
            fr.readAsDataURL(image.files[0]);
            navigate('/home ')
        },
    });

    return (
        <>
            <div className='container-fluid container-fluid d-flex align-items-center'>
                <div className='row g-0'>
                <div className='col-6 signUp_text float-start pb-3'>
                        <h1>SignUp</h1>
                    </div>
                    <div className='col-12'>
                        <form onSubmit={formik.handleSubmit}>
                            <div className='col text-center'>
                                <label htmlFor="file" className="btn">Photo +</label>
                                <input 
                                    id="file" 
                                    type="file" 
                                    name="file" 
                                    onChange={formik.handleChange}
                                    // onClick = {()=> {imageValidation()}}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.file}
                                />
                                { formik.errors.file ? <div className='d-block'>{formik.errors.file}</div> :""}
                            </div>

                            <div className='col pb-1'>
                                <label className='pb-2 mt-3'htmlFor='Name'>Name</label>
                                <input
                                 type="text"
                                 id="name"
                                 name='name' 
                                 onChange={formik.handleChange}
                                 onBlur={formik.handleBlur}
                                 value={formik.values.name}
                                />
                                {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
                            </div>

                            <div className='col py-2'>
                                <label className='pb-2 mt-3' htmlFor='email'>Email</label>
                                <input 
                                    type="text" 
                                    id='email'
                                    name='email'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                />
                                {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
                            </div>

                            <div className='col py-2'>
                                <label className='pb-2 mt-3' htmlFor='phone'>PhoneNo</label>
                                <input type="text"
                                    id='phone'
                                    name='phone'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.phone}
                                />
                                {formik.touched.phone && formik.errors.phone ? <div>{formik.errors.phone}</div> : null}
                            </div>

                            <div className='col py-2'>
                                <label className='pb-2 mt-3' htmlFor='password'>Password</label>
                                <input type="password"
                                    id='password'
                                    name='password'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}
                                />
                                {formik.touched.password && formik.errors.password ? <div className='password'>{formik.errors.password}</div> : null}
                            </div>

                            <div className='col py-2'>
                                <label className='pb-2 mt-3' htmlFor='confirmPassword'>Confirm Password</label>
                                <input type="password" 
                                    id='confirmPassword'
                                    name='confirmPassword'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.confirmPassword}
                                />
                                {formik.touched.confirmPassword && formik.errors.confirmPassword ? <div>{formik.errors.confirmPassword}</div> : null}
                            </div>

                            <div className='col-12 mt-3'>
                                <button type='submit' 
                                    className='btn btn-primary px-3 me-3 py-1'
                                    disabled={!(formik.dirty && formik.isValid)}
                                >Submit
                                </button>
                                <button type='reset' onClick={()=>{formik.resetForm();}} className='btn btn-danger px-3 py-1'>Reset</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Form;

