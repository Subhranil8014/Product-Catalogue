package com.security.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.security.dao.Logindao;
import com.security.model.Login;

@Service
public class CustomUserDetailsService implements UserDetailsService{
	
	@Autowired
	private Logindao logindao;
	
	List<Login> allUser=new ArrayList<>();
	
	
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		allUser=logindao.findAll();
		for(int i=0;i<=allUser.size();i++) {
		if(username.equals(allUser.get(i).getEmailId())) {
			return new User(allUser.get(i).getEmailId(),allUser.get(i).getPwd(),new ArrayList<>());
		}}
			
		throw new UsernameNotFoundException("User not found!!");
		
	
		
	}

}
