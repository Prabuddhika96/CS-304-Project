package com.project.bloomevents.Package;

//import com.project.bloomevents.Booking.Booking;
import com.project.bloomevents.ServiceProvider.ServiceProvider;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name="packages")
public class Packages {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="package_id")
	private int package_id;

	@Column(name="package_name")
	private String package_name;

	@Column(name="price")
	private double price;

	@Column(name="description")
	private String description;
	
	@ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "provider_id", referencedColumnName = "provider_id")
    @JsonIgnoreProperties("packages")
	private ServiceProvider provider;

//	@OneToMany(mappedBy = "packages", cascade = CascadeType.MERGE)
//    @JsonIgnoreProperties("packages")
////	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
//	private List<Booking> booking;

	//getters and setters

	public int getPackage_id() {
		return package_id;
	}

	public void setPackage_id(int package_id) {
		this.package_id = package_id;
	}

	public ServiceProvider getProvider() {
		return provider;
	}

	public void setProvider(ServiceProvider provider) {
		this.provider = provider;
	}

	public String getPackage_name() {
		return package_name;
	}

	public void setPackage_name(String package_name) {
		this.package_name = package_name;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

//	public List<Booking> getBooking() {
//		return booking;
//	}
//
//	public void setBooking(List<Booking> booking) {
//		this.booking = booking;
//	}
}
