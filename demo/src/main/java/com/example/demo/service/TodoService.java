package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import com.example.demo.model.TodoEntity;
import com.example.demo.persistence.TodoRepository;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service //Stereotype annotation -> @component is included 
//Business logic service layer  

public class TodoService {
	
	@Autowired
	private TodoRepository repository; 
	
	public List<TodoEntity> update(final TodoEntity entity){
		validate(entity);
		final Optional<TodoEntity> original = repository.findById(entity.getId());
		
		original.ifPresent(todo ->{
			todo.setTitle(entity.getTitle());
			todo.setDone(entity.isDone());
			
			repository.save(todo);
		});
		
		return retrieve(entity.getUserId());
	}
	
	public List<TodoEntity> retrieve(final String userId){
		return repository.findByUserId(userId);
	}
	
	public List<TodoEntity> create(final TodoEntity entity){
		//validations
		validate(entity);
		
		repository.save(entity);
		
		log.info("Entity Id: {} is saved.", entity.getId());
		
		return repository.findByUserId(entity.getUserId());
	}
	public List<TodoEntity> delete(final TodoEntity entity){
		
		validate(entity);
		
		try {
			repository.delete(entity);
		}catch(Exception e) {
			log.error("error deleting entity ", entity.getId(),e);
			throw new RuntimeException("error deleting entity" + entity.getId());
		}
		
		return retrieve(entity.getId());
		
	}
	private void validate(final TodoEntity entity) {
		if(entity == null) {
			log.warn("Entity cannot be null");
			throw new RuntimeException("Entity cannot be null.");
		}
		if(entity.getUserId()==null) {
			log.warn("Unknown user");
			throw new RuntimeException("Unknown user");
		}
	}
	
	
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
