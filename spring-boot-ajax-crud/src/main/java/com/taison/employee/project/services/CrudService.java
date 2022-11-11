package com.taison.employee.project.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.taison.employee.project.model.Company;
import com.taison.employee.project.repository.CrudRepositoryEmployee;

@Service
public class CrudService  {
	
	@Autowired
	private CrudRepositoryEmployee crudRepository;
	
	public List<Company> getCompanyList() {
		return crudRepository.findAll();
	}
	
	public Company getCompanyById(Integer id) {
		return crudRepository.findById(id).get();
	}
	
	public void saveOrUpdateCompany(Company company) {
		
		if(company.getId() == null) {
			crudRepository.save(company);
		}else {
			if(company.getId() != null) {
				company.setName(company.getName());
				crudRepository.save(company);				
			}
			
		}
		
	}
	
	public void deleteCompany(Integer id) {
		crudRepository.deleteById(id);
	}
	
}
