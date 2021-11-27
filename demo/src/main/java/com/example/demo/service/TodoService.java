package com.example.demo.service;

import org.springframework.stereotype.Service;

@Service //Stereotype annotation -> @component is included 
//Business logic service layer  

public class TodoService {
	
	public String testService() {
		return "test Service";
	}
}
