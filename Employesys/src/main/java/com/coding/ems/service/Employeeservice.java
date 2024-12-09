package com.coding.ems.service;

import java.util.List;

import com.coding.ems.dto.Employeedto;

public interface Employeeservice  {
	



	Employeedto createEmployee(Employeedto employeedto);
	
	Employeedto getEmployeeById (Long  id);

	List <Employeedto> getAllEmployee();
	
	Employeedto updateEmployee (Long id , Employeedto updateEmployee);
	
	Employeedto deteleEmployee (Long id);
}
