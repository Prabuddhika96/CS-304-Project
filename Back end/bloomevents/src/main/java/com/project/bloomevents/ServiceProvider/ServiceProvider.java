package com.project.bloomevents.ServiceProvider;

import java.util.List;

import com.project.bloomevents.Category.Category;
import com.project.bloomevents.Package.Packages;
import com.project.bloomevents.Review.Review;
import com.project.bloomevents.User.User;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="service_provider")
public class ServiceProvider{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="provider_id")
	private int provider_id;

	@Column(name="business_name")
	private String business_name;

	@Column(name="facebook")
	private String facebook;

	@Column(name="instagram")
	private String instagram;

	@Column(name="website")
	private String website;

	@Column(name = "rating")
	private double rating;

	@OneToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name="user_id")
//	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
//	@JsonIgnoreProperties("providers")
	private User user;
	
	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name="category_id",referencedColumnName = "category_id")
	@JsonIgnoreProperties("providers")
//	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
	private Category category;
	
	@OneToMany(mappedBy = "provider",cascade = CascadeType.MERGE)
	@JsonIgnoreProperties("provider")
//	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
	private List<Packages> packages;

	@OneToMany(mappedBy = "provider", cascade = CascadeType.MERGE)
	@JsonIgnoreProperties("provider")
//	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
	private List<Review> reviews;




	//getters and setters
	public int getProvider_id() {
		return provider_id;
	}

	public void setProvider_id(int provider_id) {
		this.provider_id = provider_id;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public String getBusiness_name() {
		return business_name;
	}

	public void setBusiness_name(String business_name) {
		this.business_name = business_name;
	}

	public String getFacebook() {
		return facebook;
	}

	public void setFacebook(String facebook) {
		this.facebook = facebook;
	}

	public String getInstagram() {
		return instagram;
	}

	public void setInstagram(String instagram) {
		this.instagram = instagram;
	}

	public String getWebsite() {
		return website;
	}

	public void setWebsite(String website) {
		this.website = website;
	}
	
	public List<Packages> getPackages() {
		return packages;
	}

	public void setPackages(List<Packages> packages) {
		this.packages = packages;
	}

	public List<Review> getReviews() {
		return reviews;
	}

	public void setReviews(List<Review> reviews) {
		this.reviews = reviews;
	}

	public double getRating() {
		return rating;
	}

	public void setRating(double rating) {
		this.rating = rating;
	}
	
}
