package com.example.ecowastebackend.service;

import com.example.ecowastebackend.entity.Blog;
import com.example.ecowastebackend.repository.BlogRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class BlogService {

    private final BlogRepository blogRepository;

    public Blog addBlog(Blog blog) {
        blog.setCreatedDate(LocalDate.now());
        return blogRepository.save(blog);
    }

    public List<Blog> getAllBlogs() {
        return blogRepository.findAll();
    }
}