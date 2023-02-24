package com.project.bloomevents.ServiceImpl;

import com.project.bloomevents.DTO.AddToEventDTO;
import com.project.bloomevents.Model.AddToEvent;
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
            AddToEvent mappeddata=modelMapper.map(data,AddToEvent.class);
            //mappeddata.setPackages();
            //AddToEvent savedData=addToEventRepo.save(mappeddata);
            return modelMapper.map(mappeddata, new TypeToken<AddToEventDTO>(){}.getType());
//            return data;
        }
        catch (Exception e){
            System.out.println(e.toString());
            return null;
        }
    }
}
