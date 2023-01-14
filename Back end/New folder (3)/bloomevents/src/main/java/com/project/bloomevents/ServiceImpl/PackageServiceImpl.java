package com.project.bloomevents.ServiceImpl;

import com.project.bloomevents.DTO.PackageDTO;
import com.project.bloomevents.Model.Packages;
import com.project.bloomevents.Repository.PackageRepository;
import com.project.bloomevents.Service.PackageService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PackageServiceImpl implements PackageService {
    @Autowired
    private PackageRepository packageRepo;
    @Autowired
    private ModelMapper modelMapper;

    @Override
    public List<PackageDTO> getAllpackages() {
        try{
            List<Packages> list = packageRepo.findAll();
            return modelMapper.map(list, new TypeToken<List<PackageDTO>>() {
            }.getType());
        }
        catch(Exception e){
            System.out.println(e.toString());
            return null;
        }
    }
}
