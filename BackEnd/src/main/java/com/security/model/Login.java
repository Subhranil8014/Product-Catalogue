package com.security.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Login {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long U_id;
	private String emailId;
	private String fName;
	private String lName;
	private String pwd;
	
	
	public Login() {
	super();
	}




	public String getEmailId() {
		return emailId;
	}


	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}


	public String getfName() {
		return fName;
	}


	public void setfName(String fName) {
		this.fName = fName;
	}


	public String getlName() {
		return lName;
	}


	public void setlName(String lName) {
		this.lName = lName;
	}


	public String getPwd() {
		return pwd;
	}


	public void setPwd(String pwd) {
		this.pwd = pwd;
	}


	@Override
	public String toString() {
		return "Login [ emailId=" + emailId + ", fName=" + fName + ", lName=" + lName + ", pwd=" + pwd
				+ "]";
	}
	
	

	
	
	
	

}
