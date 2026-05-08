package com.example.ecowastebackend.controller;

import com.example.ecowastebackend.entity.Blog;
import com.example.ecowastebackend.service.BlogService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/blogs")
@RequiredArgsConstructor
@CrossOrigin
public class BlogController {

    private final BlogService blogService;

    // Add new blog (for admin use)
    @PostMapping("/add")
    public ResponseEntity<Blog> addBlog(@RequestBody Blog blog) {
        return ResponseEntity.ok(blogService.addBlog(blog));
    }

    // Get all blogs (for frontend display)
    @GetMapping
    public ResponseEntity<List<Blog>> getAllBlogs() {
        return ResponseEntity.ok(blogService.getAllBlogs());
    }
}