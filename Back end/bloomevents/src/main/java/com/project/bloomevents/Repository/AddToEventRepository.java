package com.project.bloomevents.Repository;

import com.project.bloomevents.Model.AddToEvent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface AddToEventRepository extends JpaRepository<AddToEvent,Integer> {
    @Query(value = "SELECT COUNT(add_to_event_id) FROM bloomeventsdb.addtoevent WHERE event_id=?1", nativeQuery = true)
    int getPackageCountByEventId(int eventId);
}
