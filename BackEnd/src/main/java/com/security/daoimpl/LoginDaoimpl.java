package com.security.daoimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;

import com.security.dao.Logindao;
import com.security.model.Login;

@Component
public class LoginDaoimpl {
	
	@Autowired
	Logindao repo;
	
	public List<Login> getUsers(){
		return repo.findAll();
		
	}
	
	public Login authUser(String user) {
		Login login=repo.findByEmailId(user);
		return login;
	}
	
	public void addUser(Login login) {
		//if(repo.findByEmailId(login.getEmailId())==null) {
		 repo.save(login);
		//else
			
	}
	

}
