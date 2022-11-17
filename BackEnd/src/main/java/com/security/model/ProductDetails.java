package com.security.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class ProductDetails {
	
	@Id
	private String code;
	private String name;
	private String brand;
	private String image;
	private String description;
	private int price;
	
	public ProductDetails() {
		super();
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	@Override
	public String toString() {
		return "ProductDetails [code=" + code + ", name=" + name + ", brand=" + brand + ", description=" + description
				+ ", image=" + image + ", price=" + price + "]";
	}
	
	
	
	

}
