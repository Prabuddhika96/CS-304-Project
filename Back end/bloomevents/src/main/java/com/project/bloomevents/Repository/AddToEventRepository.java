package com.project.bloomevents.Repository;

import com.project.bloomevents.Model.AddToEvent;
import com.project.bloomevents.Model.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
@Repository
public interface AddToEventRepository extends JpaRepository<AddToEvent,Integer> {
    @Transactional
    @Modifying
    @Query("update AddToEvent a set a.isPlaced = ?1 where a.event = ?2")
    int placePackages(boolean isPlaced, Event event);

    @Query(value = "SELECT COUNT(add_to_event_id) FROM bloomeventsdb.addtoevent WHERE event_id=?1", nativeQuery = true)
    int getPackageCountByEventId(int eventId);

}
