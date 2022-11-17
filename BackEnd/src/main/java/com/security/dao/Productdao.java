package com.security.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.security.model.ProductDetails;

public interface Productdao extends JpaRepository<ProductDetails, Integer>{

	//ProductDetails findByName(String name);

	List<ProductDetails> findByCode(String code);

	List<ProductDetails> findByBrand(String brand);
	
	List<ProductDetails> findByName(String name);
	
	
	
	
	

}
