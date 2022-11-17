package com.security.daoimpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.security.dao.Shipdao;
import com.security.model.Shipping;

@Component
public class ShipDaoimpl {
	
	@Autowired
	Shipdao repo;
	
	public Shipping checkPincode(int pin) {
		return repo.findByPincode(pin);
	}

}
