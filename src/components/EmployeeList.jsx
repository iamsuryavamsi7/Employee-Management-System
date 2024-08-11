import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Employees from './Employees';

const EmployeeList = () => {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);

    const [employees, setEmployees] = useState(null);

    const deleteButtonFunction = (e, id) => {

        e.preventDefault();

        try{

            fetch("http://ec2-13-60-194-171.eu-north-1.compute.amazonaws.com:7777/api/v1/employee/" + id, {
                method: "DELETE"
            }).then((res) => {

                alert("Employee Deleted");

                if(employees){

                    setEmployees((prevElement) => {

                        return prevElement.filter((employee) => employee.id !== id);

                    })

                }

            })

        }catch(error){

            console.log(error);

        }

    }

    useEffect(() => {

        const fetchData = async () => {

            setLoading(true);

            try{

                const response = await fetch("http://ec2-13-60-194-171.eu-north-1.compute.amazonaws.com:7777/api/v1/employee", {
                    method: "GET",
                })

                const fetchedData = await response.json();

                setEmployees(fetchedData);

            }catch(error){

                console.log(error);

            }

            setLoading(false);

        }

        fetchData();

    }, [])

    return (

        <div className="w-full my-10">

            <div className="mx-10">

                <button
                    className='bg-gray-500 rounded-lg px-3 py-2 font-mono font-bold text-white tracking-wider text-xl'
                    onClick={() => navigate('/addEmployee')}
                >Add Employee</button>

            </div>

            <div className="mx-10 my-10">

                <table
                    className='w-full'
                >

                    <thead
                        className='bg-gray-500'
                    >

                        <tr
                            className='h-20 text-center'
                        >

                            <th> First Name </th>
                            <th> Last Name </th>
                            <th> Email </th>
                            <th> Actions </th>

                        </tr>

                    </thead>

                    {!loading && (

                        <tbody>

                            {employees.map((employee) => (

                              <Employees 
                                employee={employee}
                                key={employee.id}
                                deleteButtonFunction={deleteButtonFunction}
                              />

                            ))}

                        </tbody>

                    )}

                </table>

            </div>

        </div>

    )

}

export default EmployeeList