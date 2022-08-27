package com.example.demo.service;


import java.util.Set;

import com.example.demo.entity.User;
import com.example.demo.entity.UserRole;

public interface UserService {

    //creating user
    public User createUser(User user, Set<UserRole> userRoles);

    //get user by username
    public User getUser(String username);

//    //delete user by id
    public void deleteUser(Long userId);
    
    public void updateUser(User user);
}