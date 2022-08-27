package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.DiscountCoupon;
import com.example.demo.repo.DiscountRepo;

@RestController
@CrossOrigin("*")
public class DiscountController {

	@Autowired
	DiscountRepo disRepo;
	
	@GetMapping("/discountCoupons")
	public List<DiscountCoupon> showAll(){
		return disRepo.findAll();
	}
	
	@PostMapping("/discountCoupons")
	public DiscountCoupon create(@RequestBody DiscountCoupon d) {
		return disRepo.save(d);
	}
	
	@DeleteMapping("/discountCoupons")
	public void delete(@PathVariable long id) {
	    disRepo.deleteById(id);
	}
	
}
