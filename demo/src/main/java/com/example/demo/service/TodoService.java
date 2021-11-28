package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.slf4j.Logger;
import org.springframework.stereotype.Service;
import com.example.demo.model.TodoEntity;
import com.example.demo.persistence.TodoRepository;

@Service //Stereotype annotation -> @component is included 
//Business logic service layer  

public class TodoService {
	
	@Autowired
	private TodoRepository repository;
	
	public String testService() {
		//create Todo entity
		TodoEntity entity = TodoEntity.builder().title("My first todo item").build();
		//Save Todo entity
		repository.save(entity);
		//Retrieve TodoEntity
		TodoEntity savedEntity = repository.findById(entity.getId()).get();
		return savedEntity.getTitle();
	}
}
