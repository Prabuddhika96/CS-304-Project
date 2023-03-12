package com.project.bloomevents.Repository;

import com.project.bloomevents.Model.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface EventRepository extends JpaRepository<Event,Integer> {
    @Transactional
    @Modifying
    @Query("update Event e set e.isPlaced = ?1, e.placedDate=?3, e.placedTime=?4 where e.eventId = ?2")
    int placeEvent(boolean isPlaced, int eventId,String placedDate,String placedTime);
    @Query(value = "SELECT * FROM bloomeventsdb.event WHERE user_id=?1", nativeQuery = true)
    List<Event> getEventsByUserId(int userId);
}
