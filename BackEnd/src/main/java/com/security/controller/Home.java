package com.security.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.security.daoimpl.LoginDaoimpl;
import com.security.daoimpl.ProductDaoimpl;
import com.security.daoimpl.ShipDaoimpl;
import com.security.model.Login;
import com.security.model.ProductDetails;
import com.security.model.Shipping;

@RestController
@CrossOrigin
public class Home {
	
	@Autowired
	private LoginDaoimpl login;
	@Autowired
	private ProductDaoimpl product;
	@Autowired
	private ShipDaoimpl ship;
	
	@RequestMapping("/welcome")
	public String welcome() {
		String text="this is a private page";
		return text;
	}
	
	
	@PostMapping("/addUser")
	public void addUser(@RequestBody Login newLogin) {
		
		 login.addUser(newLogin);
	}
	
	@GetMapping("/all")
	public List<Login> getUsers() {
		return login.getUsers();
		}
	
	@GetMapping("/auth/{email}")
	public Login verifyUser(@PathVariable String email) {
		return login.authUser(email);
	}
	
	@GetMapping("/product/{param}")
	public List<ProductDetails> getByParam(@PathVariable String param) {
		if (!product.getByName(param).isEmpty()) {
			System.out.println("hello name");
			List<ProductDetails> list=new ArrayList<>();
			list.addAll(product.getByName(param));
			return list;
		}
		else if(!product.getByBrand(param).isEmpty()) {
			System.out.println("hello brand");
			List<ProductDetails> list=new ArrayList<>();
			list.addAll(product.getByBrand(param));
			return list;
		}
		else if(!product.getByCode(param).isEmpty()) {
			System.out.println("hello code");
			List<ProductDetails> list=new ArrayList<>();
			list.addAll(product.getByCode(param));
			return list;
		}
		return null;
	}
	
	@GetMapping("/allProducts")
	public List<ProductDetails> getProducts(){
		return product.getProducts();
	}
	
	@GetMapping("/price")
	public List<ProductDetails> sortByPrice(){
		return product.sortByPrice();
	}
	
	
	@GetMapping("/ship/{pin}")
	public Shipping checkPincode(@PathVariable int pin) {
		return ship.checkPincode(pin);
	}

}
