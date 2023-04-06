import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { addTodo } from '../action/indexAction';
function Todo() {
    const [inputData, setInputData] = useState('');
    const dispatch = useDispatch();

    console.log(inputData);
    return ( <>
        <div className='container  d-flex justify-content-center'>
            <div className='row g-0'>
                <div className='col-12 pt-5'>
                    <input type='text' placeholder='add todo' onChange={(e) => setInputData(e.target.value)} />
                    <button type='button' className='btn btn-primary' onClick={() => dispatch(addTodo(inputData))}>+</button>
                </div>
            </div>
            <div className='row g-0'>
                <div className='col-12'>
                    
                </div>
            </div>
        </div>
    </> );
}

export default Todo;