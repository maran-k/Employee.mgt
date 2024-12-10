package com.coding.ems.mapper;

import com.coding.ems.dto.Employeedto;
import com.coding.ems.entity.Empentity;

public class Employeemapper {

	public static Employeedto mapToEmployeedto(Empentity emp) {
		return new Employeedto(

				emp.getId(), emp.getFirstname(), emp.getLastname(), emp.getEmail()

		);

	}

	public static Empentity mapToEmpentity(Employeedto empdto) {
		return new Empentity(

				empdto.getId(), empdto.getFirstname(), empdto.getLastname(), empdto.getEmail()

		);
	}
}
