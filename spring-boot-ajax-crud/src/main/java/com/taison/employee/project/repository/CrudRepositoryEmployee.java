package com.taison.employee.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.taison.employee.project.model.Company;

public interface CrudRepositoryEmployee extends JpaRepository<Company, Integer> {

}
