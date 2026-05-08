package com.example.ecowastebackend.repository;

import com.example.ecowastebackend.entity.Blog;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BlogRepository extends JpaRepository<Blog, Long> {
}