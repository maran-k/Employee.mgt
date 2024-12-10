
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ListEmployeeComponent from './Components/ListEmployeeComponent.jsx'
import EmployeeComponent from './Components/EmployeeComponent.jsx'
import HeaderComponent from './Components/HeaderComponent.jsx'
import FooterComponent from './Components/FooterComponent.jsx'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <HeaderComponent/>
    
    <Routes>

    <Route path='/' element= {<ListEmployeeComponent/>}></Route>

    <Route path='/employees' element={<ListEmployeeComponent/>}></Route>

    <Route path='/add-employee' element={<EmployeeComponent/>}></Route>

    <Route path='/update-employee/:id' element={<EmployeeComponent/>}></Route>
 
   </Routes>





    <FooterComponent/>
    </BrowserRouter>
    </>
  )
}

export default App
