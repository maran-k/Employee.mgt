import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { deleteEmployee, listemployee } from '../Service/EmployeeService';

function ListEmployeeComponent() {

    const [employee , setemployee] = useState([]);

    const Navigator = useNavigate();

    useEffect(()=> {
        getAllEmployee();
    },[])

    function getAllEmployee(){
        listemployee().then((response)=>{
            setemployee(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function addNewEmployee (){
        Navigator('/add-employee')
    }

    function updateEmployee(id){
        Navigator(`/update-employee/${id}`)
    }

    function removeEmployee (id){
        console.log(id);
        if (window.confirm('Are you sure you want to delete this employee?')) {
        deleteEmployee(id).then((response)=>{
            getAllEmployee();
        }).catch(error =>{
            console.error(error);
            setError('Failed to delete employee. Please try again later.');
        })
    }
    }



  return (
    <div className='container'>
        <h1 className='text text-center'>LIST OF EMPLOYEES </h1>
        <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>
        <table className='table table-striped table table-bordered'>
            <thead>
                <tr class="text-center">
                    <th>ID</th>
                    <th>FIRSTNAME</th>
                    <th>LASTNAME</th>
                    <th>E-MAIL</th>
                    <th>ACTION</th>
                </tr>
            </thead>
            <tbody>
                {
                    employee.map(emp =>
                        <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.firstname}</td>
                            <td>{emp.lastname}</td>
                            <td>{emp.email}</td>
                            <td class="text-center">
                                <button className='btn btn-success ' onClick={()=> updateEmployee(emp.id)}>Update</button>
                                <button className='btn btn-danger' onClick={()=> removeEmployee(emp.id)}
                                    style={{ marginLeft:'10px' }}
                                    >delete</button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>

    </div>

   
  )
}

export default ListEmployeeComponent