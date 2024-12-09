package com.coding.ems.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.coding.ems.dto.Employeedto;
import com.coding.ems.entity.Empentity;
import com.coding.ems.exception.ResourceNotFoundExpection;
import com.coding.ems.mapper.Employeemapper;
import com.coding.ems.repository.Emprepos;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor

public class Employeeserviceimpl implements Employeeservice {

	@Autowired
	private Emprepos emprepos;

	@Override
	public Employeedto createEmployee(Employeedto employeedto) {
		Empentity empentity = Employeemapper.mapToEmpentity(employeedto);
		Empentity createEmployee = emprepos.save(empentity);
		return Employeemapper.mapToEmployeedto(createEmployee);

	}

	@Override
	public Employeedto getEmployeeById(Long id) {
		Empentity empentity = emprepos.findById(id)
				.orElseThrow(() -> new ResourceNotFoundExpection("Employee is not exists with given Id: " + id));
		return Employeemapper.mapToEmployeedto(empentity);
	}

	@Override
	public List<Employeedto> getAllEmployee() {
		List<Empentity> employees = emprepos.findAll();
		return employees.stream().map((employee) -> Employeemapper.mapToEmployeedto(employee))
				.collect(Collectors.toList());
	}

	@Override
	public Employeedto updateEmployee(Long id, Employeedto updateEmployee) {
		Empentity employee = emprepos.findById(id)
				.orElseThrow(() -> new ResourceNotFoundExpection("Employee is not exists with given Id: " + id));

		employee.setFirstname(updateEmployee.getFirstname());
		employee.setLastname(updateEmployee.getLastname());
		employee.setEmail(updateEmployee.getEmail());

		Empentity updatedEmployee = emprepos.save(employee);
		return Employeemapper.mapToEmployeedto(updatedEmployee);
	}

	@Override
	public Employeedto deteleEmployee(Long id) {
		Empentity employee = emprepos.findById(id)
				.orElseThrow(() -> new ResourceNotFoundExpection("Employee is not exists with given Id: " + id));
		
		emprepos.deleteById(id);
		return null;

		
	}

}
