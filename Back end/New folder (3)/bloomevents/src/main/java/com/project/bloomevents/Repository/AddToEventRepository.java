package com.project.bloomevents.Repository;

import com.project.bloomevents.Model.AddToEvent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AddToEventRepository extends JpaRepository<AddToEvent,Integer> {
}
