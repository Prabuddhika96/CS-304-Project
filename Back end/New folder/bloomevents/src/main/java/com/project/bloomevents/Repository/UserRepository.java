package com.project.bloomevents.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.bloomevents.Model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

}