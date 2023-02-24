package com.project.bloomevents.Repository;

import com.project.bloomevents.Model.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EventRepository extends JpaRepository<Event,Integer> {
    @Query(value = "SELECT * FROM bloomeventsdb.event WHERE user_id=?1", nativeQuery = true)
    List<Event> getEventsByUserId(int userId);
}
