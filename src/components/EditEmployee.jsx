import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const EditEmployee = () => {

    const navigate = useNavigate();

    const {id} = useParams();

    const [employee, setEmployee] = useState({
        id: id,
        firstName: "",
        lastName: "",
        email: ""
    });    

    const handleChange = (e) => {

        const value = e.target.value;

        setEmployee({...employee, [e.target.name]: value});

    }

    const cancelButtonFunction = (e) => {

        e.preventDefault();

        setEmployee({
            id: "",
            firstName: "",
            lastName: "",
            email: ""
        })

    }

    const backButtonFunction = (e) => {

        e.preventDefault();

        navigate("/");

    }

    const updateFunction = async (e) => {

        e.preventDefault();

        try{

            const response = await fetch("http://ec2-13-60-194-171.eu-north-1.compute.amazonaws.com:7777/api/v1/employee" + id, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(employee)
            })

            navigate("/");

        }catch(error){

            console.log(error);

        }

    }

    useEffect(() => {

        const fetchData = async () => {

            try{

                const response = await EmployeeService.getEmployeeById(id);

                setEmployee(response.data);

            }catch(error){

                console.log(error);

            }

        }

        fetchData();

    }, [])

    return (

        <div className="flex items-center justify-center w-full shadow-xl relative">

            <div className="absolute left-10 top-5">

                <button
                    className='px-2 py-2 bg-gray-500 text-white rounded-xl font-mono text-xl tracking-wider'
                    onClick={backButtonFunction}
                > Back </button>

            </div>

            <div className="my-10 px-10 py-10 shadow-2xl">

                <p
                    className='font-thin text-xl tracking-wider'
                > Update Employee</p>

                <form
                    className='mt-10'
                >

                    <label
                        className='mr-5 font-monnameo tracking-wider'
                    > First Name :-  </label>
                    <input onChange={(e) => {handleChange(e)}} name="firstName" value={employee.firstName} type='text' placeholder='Enter Your First Name' className='text-red-500 border-green-500 border-solid border-2 rounded-md mt-5 pl-5 ml-[40px] font-mono' /> <br />

                    <label
                        className='mr-5 font-mono tracking-wider'
                    > Last Name :-  </label>
                    <input onChange={(e) => {handleChange(e)}} name="lastName" value={employee.lastName} type='text' placeholder='Enter Your First Name' className='text-red-500 border-green-500 border-solid border-2 rounded-md mt-5 pl-5 ml-[10px] font-mono' /> <br />

                    <label
                        className='mr-5 font-mono tracking-wider'
                    > Email :-  </label>
                    <input onChange={(e) => {handleChange(e)}} name="email" value={employee.email} type='email' placeholder='Enter Your First Name' className='text-red-500 border-green-500 border-solid border-2 rounded-md mt-5 pl-5 ml-[52px] font-mono' /> <br />

                    <div className="mt-10">

                        <button
                            className='bg-green-500 text-white px-3 py-2 rounded-lg text-lg font-bold tracking-wider mr-5 cursor-pointer'
                            onClick={updateFunction}
                        >
                            Update
                        </button>

                        <button
                            className='bg-red-500 text-white px-3 py-2 rounded-lg text-lg font-bold tracking-wider mr-5 cursor-pointer'
                            onClick={cancelButtonFunction}
                            >
                            Clear
                        </button>
                        
                    </div>

                </form>

            </div>

        </div>

    )

}

export default EditEmployee