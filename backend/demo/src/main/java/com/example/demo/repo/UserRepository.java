package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.demo.entity.User;
@CrossOrigin("http://localhost:4200")
public interface UserRepository extends JpaRepository<User, Long> {

    public User findByUsername(String username);
}
