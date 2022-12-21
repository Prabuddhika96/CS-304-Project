package com.project.bloomevents.Category;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CategoryService {
	@Autowired
	private CategoryRepository repo;

	public List<Category> getAllCategories() {
		return repo.findAll();
	}

	public Category addCategory(Category catData) {
		return repo.save(catData);
	}
}
