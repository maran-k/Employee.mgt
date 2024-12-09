package com.coding.ems.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.coding.ems.entity.Empentity;

public interface Emprepos extends JpaRepository<Empentity,Long > {

}
