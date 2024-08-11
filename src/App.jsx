import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddEmployee from './components/AddEmployee'
import EmployeeList from './components/EmployeeList'
import EditEmployee from './components/EditEmployee'

function App() {
	
	const [count, setCount] = useState(0)

	return (
		<>

			<BrowserRouter>

				<NavBar />

				<Routes>

					<Route index element={<EmployeeList />} />
					<Route path='/' element={<EmployeeList />} />
					<Route path='/addEmployee' element={<AddEmployee />} />
					<Route path='/editEmployee/:id' element={<EditEmployee />} />

				</Routes>

			</BrowserRouter>
		
		</>
	)
}

export default App
