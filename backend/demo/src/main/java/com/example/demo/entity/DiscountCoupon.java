package com.example.demo.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class DiscountCoupon {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String coupons;

	@Override
	public String toString() {
		return "DiscountCoupon [id=" + id + ", coupons=" + coupons + "]";
	}

	public DiscountCoupon() {
		super();
		// TODO Auto-generated constructor stub
	}

	public DiscountCoupon(String coupons) {
		super();
		this.coupons = coupons;
	}

	public String getCoupons() {
		return coupons;
	}

	public void setCoupons(String coupons) {
		this.coupons = coupons;
	}
}
