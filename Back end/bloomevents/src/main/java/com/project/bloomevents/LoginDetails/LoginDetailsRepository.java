package com.project.bloomevents.LoginDetails;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface LoginDetailsRepository extends JpaRepository<LoginDetails,Integer> {

    @Query(value="SELECT * FROM bloomevents.login_details WHERE login_id=?1", nativeQuery = true)
    LoginDetails getLoginDetails(int loginId);

    @Query(value="SELECT * FROM bloomevents.login_details WHERE email=?1", nativeQuery = true)
    LoginDetails validateEmail(String email);

    @Query(value="SELECT * FROM bloomevents.login_details WHERE email=?1 AND password=?2", nativeQuery = true)
    LoginDetails login(String email, String password);
}
