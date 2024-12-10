import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { createEmployee, getEmployee, updateEmployee } from '../Service/EmployeeService'

function EmployeeComponent() {

    const [firstname,setfirstname]=useState('')
    const [lastname,setlastname]=useState('')
    const [email,setemail]=useState('')

    const [errors ,seterrors] = useState({
        firstname:'',
        lastname:'',
        email:''
    })
    
    const Navigator = useNavigate();
    
    const {id} = useParams();
    
    
    
    useEffect(()=>{
        if(id){
            getEmployee(id).then((response) => {
                setfirstname(response.date.firstname),
                setlastname(response.data.lastname),
                setemail(response.data.email)
            }).catch(error => {
                console.error(error);
            })
        }
    },[id])
    
    
    function saveorupdateEmployee (e){
    e.preventDefault();
    
    if(validateForm()){
        const employee = {firstname,lastname,email}
        console.log(employee);
    
        if(id){
            updateEmployee(id,employee).then((response)=>{
                console.log(response.data);
                Navigator('/employees')
            }).catch(error => {
                console.error(error);
            })
        }
        else{
            createEmployee(employee).then((response)=>{
                console.log(response.data);
                Navigator('/employees')
            }).catch(error => {
                console.error(error);
            })
    
        }
    }
    }
    
    function validateForm (){
        let valid = true ;
    
        const errorcopy = {...errors}
    
        if(firstname.trim()){
            errorcopy.firstname='';
        }
        else{
            errorcopy.firstname='Fisrtname is required'
            valid=false;
        }
        if(lastname.trim()){
            errorcopy.lastname='';
        }
        else{
            errorcopy.lastname=' Lastname is required'
            valid=false;
        }
        if(email.trim()){
            errorcopy.email='';
        }
        else{
            errorcopy.email='Email is required'
            valid=false;
        }
        seterrors(errorcopy);
        return valid;
    }
    
    function pageTitle (){
        if(id){
            return <h2 className='text-center '>UPDATE EMPLOYEE</h2>
        }
        else{
           return  <h2 className='text-center '>ADD EMPLOYEE</h2>
        }
    }
    

  return (
    <div>
        <div className='container'>
            <br/> 
            <br/> 
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3 ' >
                    {
                        pageTitle()
                    }
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>FIRST NAME</label>
                                <input
                                onChange={(e) => setfirstname(e.target.value)}
                                
                                className={`form-control ${errors.firstname ? 'is-invalid' : ''}`}
                                type='text'
                                placeholder='Enter Employee First Name'
                                name='firstname'
                                value={firstname}
                                >
                                </input>
                                {errors.firstname && <div className='invalid-feedback'> {errors.firstname}</div>}
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>LAST NAME</label>
                                <input
                                onChange={ (e) => setlastname(e.target.value)} 
                                className={`form-control ${errors.lastname ? 'is-invalid' : ''}`}
                                type='text'
                                placeholder='Enter Employee Last Name'
                                name='lastname'
                                value={lastname}
                                >
                                </input>
                                {errors.lastname && <div className='invalid-feedback'> {errors.lastname}</div>}
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>E-MAIL</label>
                                <input
                                onChange={ (e) => setemail(e.target.value)} 
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                type='email'
                                placeholder='Enter Employee E-mail'
                                name='email'
                                value={email}
                                >
                                </input>
                                {errors.email && <div className='invalid-feedback'> {errors.email}</div>}
                            </div>
                            <button className='btn btn-success' onClick={saveorupdateEmployee}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default EmployeeComponent