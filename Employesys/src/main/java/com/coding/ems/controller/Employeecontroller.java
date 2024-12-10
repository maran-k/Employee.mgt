package com.coding.ems.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.coding.ems.dto.Employeedto;
import com.coding.ems.service.Employeeservice;

import lombok.AllArgsConstructor;


@CrossOrigin("*")
@RestController
@RequestMapping("/api/employees")
@AllArgsConstructor
public class Employeecontroller {

	@Autowired
	private Employeeservice employeeservice;

	@PostMapping
	public ResponseEntity<Employeedto> createEmployee(@RequestBody Employeedto employeedto) {
		Employeedto saveemployee = employeeservice.createEmployee(employeedto);
		return new ResponseEntity<>(saveemployee, HttpStatus.CREATED);
	}

	@GetMapping("{id}")
	public ResponseEntity<Employeedto> getEmpolyeeById(@PathVariable("id") Long id) {
		Employeedto getById = employeeservice.getEmployeeById(id);
		return new ResponseEntity<>(getById, HttpStatus.OK);
	}

	@GetMapping
	public ResponseEntity<List<Employeedto>> getAllEmployee() {
		List<Employeedto> getall = employeeservice.getAllEmployee();
		return new ResponseEntity<>(getall, HttpStatus.OK);
	}

	@PutMapping("{id}")
	public ResponseEntity<Employeedto> updateEmployee(@PathVariable("id") Long id,
			@RequestBody Employeedto updatedEmployee) {

		Employeedto employeedto = employeeservice.updateEmployee(id, updatedEmployee);

		return new ResponseEntity<>(employeedto, HttpStatus.OK);
	}

	@DeleteMapping("{id}")
	public ResponseEntity<String> updateEmployee(@PathVariable("id") Long id) {
		employeeservice.deteleEmployee(id);
		return ResponseEntity.ok("Employee Delete Successfully");
	}

}
