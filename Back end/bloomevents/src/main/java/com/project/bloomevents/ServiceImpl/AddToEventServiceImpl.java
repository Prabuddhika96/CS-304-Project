package com.project.bloomevents.ServiceImpl;

import com.project.bloomevents.DTO.AddToEventDTO;
import com.project.bloomevents.DTO.EventDTO;
import com.project.bloomevents.Model.AddToEvent;
import com.project.bloomevents.Model.Event;
import com.project.bloomevents.Repository.AddToEventRepository;
import com.project.bloomevents.Service.AddToEventService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AddToEventServiceImpl implements AddToEventService {
    @Autowired
    private AddToEventRepository addToEventRepo;
    @Autowired
    private EventServiceImpl eventServiceImpl;
    @Autowired
    private ModelMapper modelMapper;

    @Override
    public List<AddToEventDTO> getAllAddToEvent() {
        try{
            List<AddToEvent> list=addToEventRepo.findAll();
            return modelMapper.map(list, new TypeToken<List<AddToEventDTO>>(){}.getType());
        }
        catch (Exception e){
            System.out.println(e.toString());
            return null;
        }
    }

    @Override
    public AddToEventDTO addPackageToEvent(AddToEventDTO data) {
        try{
//            modelMapper.typeMap(AddToEvent.class,AddToEventDTO.class).addMappings(modelMapper->{
//                modelMapper.map(src->src.getPackages().getPackageId(),
//                        AddToEventDTO::setPackagesPackageId);
//            });
            AddToEvent mappeddata=modelMapper.map(data,AddToEvent.class);
            AddToEvent savedData=addToEventRepo.save(mappeddata);
            return modelMapper.map(savedData, new TypeToken<AddToEventDTO>(){}.getType());
//            return data;
        }
        catch (Exception e){
            System.out.println(e.toString());
            return null;
        }
    }

    @Override
    public int getPackageCountByEventId(int eventId) {
        try{
            return addToEventRepo.getPackageCountByEventId(eventId);
        }
        catch (Exception e){
            System.out.println(e.toString());
            return -1;
        }
    }

    @Override
    public boolean placePackages(int eventId){
        try{
            EventDTO event=eventServiceImpl.getEventById(eventId);
            int success=addToEventRepo.placePackages(true, modelMapper.map(event, Event.class));
            System.out.println(success);
            if(success>=0){
                return true;
            }
            return false;
        }
        catch (Exception e){
            System.out.println(e.toString());
            return false;
        }
    }

    @Override
    public List<AddToEventDTO> getPackagesByEventId(int eventId) {
        try{
            List<AddToEvent> list=addToEventRepo.getPackagesByEventId(eventId);
            return modelMapper.map(list, new TypeToken<List<AddToEventDTO>>(){}.getType());
        }
        catch (Exception e){
            System.out.println(e.toString());
            return null;
        }
    }

    @Override
    public boolean deletePackageById(int addToEventId) {
        try{
            int delete =addToEventRepo.deletePackage(addToEventId);
            if(delete==1){
                return true;
            }
            return false;
        }
        catch (Exception e){
            System.out.println(e.toString());
            return false;
        }
    }
}
