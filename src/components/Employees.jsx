import React from 'react'
import { useNavigate } from 'react-router-dom'

const Employees = ({employee, deleteButtonFunction}) => {

    const navigate = useNavigate();

    const editButtonFunction = (e, id) => {

        e.preventDefault();

        navigate(`/editEmployee/${id}`);

    }

    return (

        <tr
        className='h-20 text-center shadow-lg'
        key={employee.id}
        >

            <td> {employee.firstName} </td>
            <td> {employee.lastName} </td>
            <td> {employee.email} </td>
            <td>

                <button
                    className='px-2 py-1 bg-green-500 rounded-xl font-bold font-mono text-lg mx-5'
                    onClick={(e, id) => editButtonFunction(e, employee.id)}
                >

                Edit

                </button>
                <button
                    className='px-2 py-1 bg-red-500 rounded-xl font-bold font-mono text-lg'
                    onClick={(e, id) => deleteButtonFunction(e, employee.id)}
                >Delete</button>

            </td>

        </tr>

    )

}

export default Employees