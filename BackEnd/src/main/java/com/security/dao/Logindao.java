package com.security.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.security.model.Login;

public interface Logindao extends JpaRepository<Login, Integer>{

	Login findByEmailId(String user);
	
	List<Login> findAll();

}
