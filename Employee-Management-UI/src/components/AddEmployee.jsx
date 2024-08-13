import React, { useState } from 'react'
import { fetchedUsers } from '../Store/userSlice'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [employee, setEmployee] = useState({
        id: "",
        firstName: "",
        lastName: "",
        emailId: ""
    });

    const onChangeFunction01 = (e) => {

        const value = e.target.value;

        setEmployee({...employee, [e.target.name] : value});

    }

    const addButtonFunction = async (e) => {

        e.preventDefault();

            const savedUser = await fetch("http://localhost:7777/api/v1/employees", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(employee)
            })


            if ( savedUser.ok ){

                dispatch(fetchedUsers());

                setEmployee({
                    id: "",
                    firstName: "",
                    lastName: "",
                    emailId: ""
                });
    
                navigate("/");

                console.log("Employee Added");

            } else if ( !savedUser.ok ){

                alert("Enter the details correctly")

                throw new Error("Something went wrong");

            }

    }

    const clearButton = (e) => {

        e.preventDefault();

        setEmployee({
            id: "",
            firstName: "",
            lastName: "",
            emailId: ""
        });

    }

    return (

        <>

            <button
                className='bg-gray-600 mt-5 px-2 h-10 text-white font-bold text-xl tracking-wider rounded-lg absolute left-10 hover:opacity-80 active:text-black active:opacity-100 top-24'
                onClick={() => navigate("/")}
            > Home </button>

            <div 
                className="flex items-center h-[500px] justify-center text-white my-36"
            >

                <div className="bg-gray-500 p-5 text-lg rounded-xl">

                    <p
                        className="mb-5 text-xl font-mono font-bold"
                    > Add Employee</p>

                    <label> First Name :- </label><br />
                    <input 
                        className='w-fit pl-5 rounded-lg my-5 text-black'
                        type="text"
                        placeholder='Enter your first name'
                        name='firstName'
                        value={employee.firstName}
                        onChange={(e) => onChangeFunction01(e)}
                    /><br />

                    <label> Last Name :- </label><br />
                    <input 
                        className='w-fit pl-5 rounded-lg my-5 text-black'
                        type="text"
                        placeholder='Enter your last name'
                        name='lastName'
                        value={employee.lastName}
                        onChange={(e) => onChangeFunction01(e)}
                    /><br />

                    <label> Email </label><br />
                    <input 
                        className='w-fit pl-5 rounded-lg my-5 text-black'
                        type="email"
                        placeholder='Enter your email'
                        name='emailId'
                        value={employee.emailId}
                        onChange={(e) => onChangeFunction01(e)}
                    /><br />

                    <div className="mt-5">

                        <button
                            className="bg-green-500 h-10 px-2 rounded-lg text-xl font-bold tracking-wider hover:bg-green-400 active:bg-green-600 transition duration mx-5"
                            onClick={(e) => addButtonFunction(e)}
                        > Add </button>

                        <button
                            className='bg-red-500 h-10 px-2 rounded-lg text-xl font-bold tracking-wider hover:bg-red-400 active:bg-red-600 transition duration'
                            onClick={(e) => clearButton(e)}
                        > Clear </button>

                    </div>

                </div>

            </div>

        </>

    )

}

export default AddEmployee