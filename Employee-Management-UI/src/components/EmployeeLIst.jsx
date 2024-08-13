import React, { useEffect } from 'react'
import { fetchedUsers } from '../Store/userSlice'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Actions from './Actions';

const EmployeeLIst = () => {

    let employees = useSelector((state) => state.user.employees);

    let status = useSelector((state) => state.user.status);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {

        dispatch(fetchedUsers());

    }, []);

    return (

        <div className="w-full my-28">

            <div className="m-10">

                <button
                    className='px-3 h-12 text-xl font-bold bg-gray-500 hover:opacity-70 transition duration-300 rounded-lg active:bg-white active:border-black border-2'
                    onClick={() => navigate("/addEmployee")}
                > Add Employee </button>

            </div>

            <div className="m-10 mt-0">

                <table
                    className='w-full text-left'
                >

                    <thead>

                        <tr
                            className='bg-gray-500 h-16 text-lg'
                        >

                            <th
                                className='px-10'
                            > First Name </th>
                            <th
                                className='px-10'         
                            > Last Name </th>
                            <th
                                className='px-10'
                            > Email </th>
                            <th
                                className='px-10 text-center'
                            > Actions </th>

                        </tr>

                    </thead>

                    {status = 'completed' && (

                        <tbody>

                            {employees.map((employee) => (

                                <tr
                                    className='h-16 text-lg shadow-lg'
                                    key={employee.id}
                                >

                                    <td
                                        className='px-10'
                                    > {employee.firstName}  </td>
                                    <td
                                        className='px-10'         
                                    > {employee.lastName} </td>
                                    <td
                                        className='px-10'
                                    > {employee.emailId} </td>
                                    <td
                                        className='px-10 text-center'
                                    >  
                                    
                                        <Actions 
                                            employeeId = {employee.id}
                                        />

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    )}

                </table>

            </div>

        </div>

    )

}

export default EmployeeLIst