package com.security.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Shipping {
	
	@Id
	private int pincode;
	private String status;
	private String time;
	
	
	
	public Shipping() {
		super();
	}
	public int getPincode() {
		return pincode;
	}
	public void setPincode(int pincode) {
		this.pincode = pincode;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	@Override
	public String toString() {
		return "Shipping [pincode=" + pincode + ", status=" + status + ", time=" + time + "]";
	}
	
	

}
