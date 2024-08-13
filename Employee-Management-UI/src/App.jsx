import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import EmployeeLIst from './components/EmployeeLIst'
import UpdateEmployee from './components/UpdateEmployee'
import AddEmployee from './components/AddEmployee'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>

			<BrowserRouter>

				<Navbar />

				<Routes>

					<Route index element={<EmployeeLIst />} />
					<Route path='/'element={<EmployeeLIst />} />
					<Route path='/updateEmployee/:id' element={<UpdateEmployee />} />
					<Route path='/addEmployee' element={<AddEmployee />} />

				</Routes>

			</BrowserRouter>

		</>
  )
}

export default App
