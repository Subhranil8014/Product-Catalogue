package com.security.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.security.model.Shipping;

public interface Shipdao extends JpaRepository<Shipping, Integer>{

	Shipping findByPincode(int pin);

}
