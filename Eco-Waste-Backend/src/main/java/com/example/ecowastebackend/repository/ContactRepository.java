package com.example.ecowastebackend.repository;

import com.example.ecowastebackend.entity.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactRepository extends JpaRepository<Contact, Long> {
}