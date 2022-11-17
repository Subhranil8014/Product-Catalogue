package com.security.daoimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Component;

import com.security.dao.Productdao;
import com.security.model.ProductDetails;

@Component
public class ProductDaoimpl {
	
	@Autowired
	Productdao repo;
	
	public List<ProductDetails> getByName(String name) {
		return repo.findByName(name);
	}
	
	public List<ProductDetails> getByCode(String code) {
		return repo.findByCode(code);
	}
	
	public List<ProductDetails> getByBrand(String brand) {
		return repo.findByBrand(brand);
	}
	
	public List<ProductDetails> getProducts(){
		return repo.findAll();
	}
	
	public List<ProductDetails> sortByPrice(){
		List<ProductDetails> all= repo.findAll();
		
	}

}
