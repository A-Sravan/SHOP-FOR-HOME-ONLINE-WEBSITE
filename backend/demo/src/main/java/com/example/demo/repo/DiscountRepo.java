package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.demo.entity.DiscountCoupon;
@Repository
@CrossOrigin("http://localhost:4200")
public interface DiscountRepo extends JpaRepository<DiscountCoupon, Long>{

}
