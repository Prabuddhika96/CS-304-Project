package com.project.bloomevents.Category;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping
public class CategoryController {

	@Autowired
	private CategoryService services;
	
	@GetMapping("/getAllCategories")
	private List<Category> getAllCategories(){
		return services.getAllCategories();
	}

	@PostMapping("/addCategory")
	public Category addCategory(@RequestBody Category catData){
		return services.addCategory(catData);
	}
}
