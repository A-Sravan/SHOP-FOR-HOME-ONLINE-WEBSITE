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

//import com.example.demo.entity.Blog;
import com.example.demo.entity.Product;
import com.example.demo.repo.ProductRepo;

@RestController
@CrossOrigin("*")
public class ProductController {
	@Autowired
    ProductRepo prodRep;
	Product p = new Product();
	Product p2 = new Product();
	
	@GetMapping("/products")
    public List<Product> index(){
//		p.setName("mohit");
//		p2.setName("saha");
        return prodRep.findAll();
    }
	
	@PostMapping("/product")
	public Product create(@RequestBody Product p) {
		return prodRep.save(p);
	}
	
	@DeleteMapping("/product/{prodId}")
	public void delete(@PathVariable("ProdId") Long prodId) {
		 prodRep.deleteById(prodId);
	}

}
