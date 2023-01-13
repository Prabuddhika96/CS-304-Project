package com.project.bloomevents.Repository;

import com.project.bloomevents.Model.LoginDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface LoginDetailsRepository extends JpaRepository<LoginDetails, Integer> {
    @Transactional
    @Modifying
    @Query("update LoginDetails l set l.password = ?1 where l.loginId = ?2")
    int updatePassword(String password, int loginId);
}
