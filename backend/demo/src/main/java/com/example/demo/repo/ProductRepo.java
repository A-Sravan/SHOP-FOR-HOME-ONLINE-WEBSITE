package com.example.demo.repo;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;


import com.example.demo.entity.Product;
@Repository
@CrossOrigin("http://localhost:4200")
public interface ProductRepo  extends JpaRepository<Product, Long> {
	//it return the command like select * from product where id=id
		Page<Product> findByCategoryId(@RequestParam("id") Long id, Pageable pageable);
		//it will expose the endpoint with search on the name like select * from product where name like %:name%
		Page<Product> findByNameContaining(@RequestParam("name") String name,Pageable pageable);

}

