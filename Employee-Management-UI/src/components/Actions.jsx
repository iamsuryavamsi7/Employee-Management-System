import React from 'react'
import { deleteEmployee } from '../Store/userSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const Actions = ({employeeId}) => {
    
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const deleteButtonFunction = async (e, id) => {

        e.preventDefault();

        const response = await fetch("http://localhost:7777/api/v1/employees/" + id, {
            method: "DELETE"
        });

        if ( !response.ok ) {

            throw new Error("Something went wrong");

        } else {

            dispatch(deleteEmployee(id));

            console.log('Emplyoee with ' + id + ' ID deleted')

        }

    }

    return (

        <>
        
            <button
                className='bg-green-500 px-5 h-10 text-xl rounded-lg font-bold racking-wider text-white hover:opacity-80 active:opacity-60 mx-5'
                onClick={(id) => navigate(`/updateEmployee/${employeeId}`)}
            > Edit </button>
            <button
                className='bg-red-500 px-5 h-10 text-xl rounded-lg font-bold racking-wider text-white hover:opacity-80 active:opacity-60'
                onClick={(e, id) => deleteButtonFunction(e, employeeId)}
            > Delete </button>

        </>

    )

}

export default Actions