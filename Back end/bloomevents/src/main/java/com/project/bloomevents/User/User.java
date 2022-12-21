package com.project.bloomevents.User;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
//import com.project.bloomevents.Booking.Booking;
import com.project.bloomevents.Event.Event;
import com.project.bloomevents.Review.Review;
import jakarta.persistence.*;

import java.sql.Timestamp;
import java.util.List;

@Entity
@Table(name="user")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="user_id")
	private int user_id;
	
	@Column(name="first_name")
	private String first_name;
	
	@Column(name="last_name")
	private String last_name;
	
	@Column(name="mobile")
	private int mobile;
	
	@Column(name="district")
	private String district;
	
	@Column(name="last_login")
	private Timestamp last_login;
	
	@Column(name="is_admin")
	private int is_admin;

	@OneToMany(mappedBy = "user", cascade = CascadeType.MERGE)
	@JsonIgnoreProperties("user")
//	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
	private List<Event> event;

	@OneToMany(mappedBy = "user", cascade = CascadeType.MERGE)
	@JsonIgnoreProperties("user")
//	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
	private List<Review> reviews;

//	@OneToMany(mappedBy = "user", cascade = CascadeType.MERGE)
//	@JsonIgnoreProperties("user")
//	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
//	private List<Booking> bookings;


	//getters and setters
	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	public String getFirst_name() {
		return first_name;
	}

	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}

	public String getLast_name() {
		return last_name;
	}

	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}

	public int getMobile() {
		return mobile;
	}

	public void setMobile(int mobile) {
		this.mobile = mobile;
	}

	public String getDistrict() {
		return district;
	}

	public void setDistrict(String district) {
		this.district = district;
	}

	public Timestamp getLast_login() {
		return last_login;
	}

	public void setLast_login(Timestamp last_login) {
		this.last_login = last_login;
	}

	public int getIs_admin() {
		return is_admin;
	}

	public void setIs_admin(int is_admin) {
		this.is_admin = is_admin;
	}

	public List<Event> getEvent() {
		return event;
	}

	public void setEvent(List<Event> event) {
		this.event = event;
	}

	public List<Review> getReviews() {
		return reviews;
	}

	public void setReviews(List<Review> reviews) {
		this.reviews = reviews;
	}

//	public List<Booking> getBookings() {
//		return bookings;
//	}
//
//	public void setBookings(List<Booking> bookings) {
//		this.bookings = bookings;
//	}
}
