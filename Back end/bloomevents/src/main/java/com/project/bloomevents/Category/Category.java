package com.project.bloomevents.Category;

import java.util.List;

import com.project.bloomevents.ServiceProvider.ServiceProvider;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="category")
public class Category {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="category_id")
	private int category_id;
	
	@Column(name="categoty_name")
	private String categoty_name;
	
	@OneToMany(mappedBy = "category", cascade = CascadeType.MERGE)
	@JsonIgnoreProperties("category")
//	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
	private List<ServiceProvider> providers;
	
	public int getCategory_id() {
		return category_id;
	}
	public void setCategory_id(int category_id) {
		this.category_id = category_id;
	}
	public String getCategoty_name() {
		return categoty_name;
	}
	public void setCategoty_name(String categoty_name) {
		this.categoty_name = categoty_name;
	}
	public List<ServiceProvider> getProviders() {
		return providers;
	}
	public void setProviders(List<ServiceProvider> providers) {
		this.providers = providers;
	}
	
	
}
