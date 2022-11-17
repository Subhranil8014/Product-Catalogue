package com.security.controller;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.security.dao.Logindao;
import com.security.jwt.JwtUtil;
import com.security.model.JwtRequest;
import com.security.model.JwtResponse;
import com.security.model.Login;
import com.security.services.CustomUserDetailsService;

@RestController
@CrossOrigin
public class JwtController {
	@Autowired
	private CustomUserDetailsService customUserDetailsService;
	@Autowired
	private JwtUtil jwtUtil;
	@Autowired
	private AuthenticationManager authenticationManager;
	@Autowired
	private Logindao repo;
	
	@PostMapping("/token")
	public ResponseEntity<?> generateToken(@RequestBody JwtRequest jwtRequest) throws Exception{
		System.out.println(jwtRequest);
		try {
			
			this.authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(jwtRequest.getUsername(), jwtRequest.getPassword()));
			
		}catch(UsernameNotFoundException e) {
			e.printStackTrace();
			throw new Exception("Bad credentials!");
		}catch (BadCredentialsException e) {
			e.printStackTrace();
			throw new Exception("Bad Credentials");
		}
		
		UserDetails userDetails=this.customUserDetailsService.loadUserByUsername(jwtRequest.getUsername());
		String token=this.jwtUtil.generateToken(userDetails);
		System.out.println("jwt "+token);
		
		
		return ResponseEntity.ok(new JwtResponse(token));
	}
	
	@GetMapping("/currentUser")
	public Login getCurrentUser(Principal principal) {
		System.out.println(principal.getName());
		return repo.findByEmailId(principal.getName());
		//return  this.customUserDetailsService.loadUserByUsername(principal.getName());
	}
	
//	public Login authDetails() {
//		return repo.findByEmailId(getCurrentUser(UserDetails.getUsername());
//	}

}
