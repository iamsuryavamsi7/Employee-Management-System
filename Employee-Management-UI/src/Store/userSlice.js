import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const state = {
    employees: [],
    status: "",
    error: false
}

export const fetchedUsers = createAsyncThunk("employees/get", async () => {

    try{

        const response = await fetch("http://localhost:7777/api/v1/employees", {

            method: "GET"

        })

        const data = await response.json();

        return data;

    }catch(error){

        throw error

    }

});

const userSlice = createSlice({
    name: "user",
    initialState: state,
    reducers: {

        deleteEmployee: (state, action) => {

            state.employees = state.employees.filter((prevElem) => (prevElem.id !== action.payload));

        }

    },
    extraReducers: (builder) => {

        builder.addCase( fetchedUsers.pending, (state, action) => {

            state.status = 'pending'
            state.error = false

        }).addCase( fetchedUsers.fulfilled, (state, action) => {

            state.employees = action.payload
            state.status = 'completed'
            state.error = false

        }).addCase( fetchedUsers.rejected, (state, action) => {

            state.employees = []
            state.status = 'error'
            state.error = action.error.message

        })

    }
});

export const { deleteEmployee } = userSlice.actions

export default userSlice;