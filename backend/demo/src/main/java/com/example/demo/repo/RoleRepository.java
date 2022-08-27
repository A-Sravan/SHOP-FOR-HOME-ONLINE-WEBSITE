package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.demo.entity.Role;
@CrossOrigin("http://localhost:4200")
public interface RoleRepository extends JpaRepository<Role,Long> {
}
