package com.project.bloomevents.Controller;

import com.project.bloomevents.FileUpload.FileResponse;
import com.project.bloomevents.FileUpload.FileStorageService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.io.IOException;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/upload")
public class FileController {
    @Autowired
    private FileStorageService fileStorageService;


    // store function
    public ResponseEntity<FileResponse> uploadFile(MultipartFile file,String imgName, String imgCategory,String uploadDir){
        String fileName = fileStorageService.storeFile(file,imgName,uploadDir);
        String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/upload/"+imgCategory+"/")
                .path(fileName)
                .toUriString();

        FileResponse fileResponse = new FileResponse(fileName, fileDownloadUri, file.getContentType(), file.getSize());
        return new ResponseEntity<FileResponse>(fileResponse, HttpStatus.OK);
    }

    @PostMapping("/uploadprofilepic/{userId}")
    public ResponseEntity<FileResponse> ProfilePicture(@RequestParam("file") MultipartFile file,@PathVariable int userId){
        String imgName=Integer.toString(userId)+".jpg";
        return uploadFile(file,imgName,"profilePic","");
    }

    @GetMapping("/profilePic/{userId}")
    public ResponseEntity<Resource> downloadFile(@PathVariable int userId, HttpServletRequest request){
        String fileName=Integer.toString(userId)+".jpg";
        Resource resource = fileStorageService.loadFileAsResource(fileName,"");

        String contentType = null;

        try {
            contentType = request.getServletContext().getMimeType(resource.getFile().getAbsolutePath());
        }catch(IOException ex) {
            System.out.println("Could not determine fileType");
        }

        if(contentType==null) {
            contentType = "application/octet-stream";
        }

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(contentType))
                .body(resource);
    }
}
