package com.project.bloomevents.User;

import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.sql.Timestamp;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>{
    @Query(value="SELECT * FROM bloomevents.user WHERE user_id=?1", nativeQuery = true)
    User CheckUser(@Param(value = "user_d") int user_id);

}
