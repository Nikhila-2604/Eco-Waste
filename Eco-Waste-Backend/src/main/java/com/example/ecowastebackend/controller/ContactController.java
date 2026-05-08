package com.example.ecowastebackend.controller;

import com.example.ecowastebackend.entity.Contact;
import com.example.ecowastebackend.service.ContactService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@RequiredArgsConstructor
@CrossOrigin
public class ContactController {

    private final ContactService contactService;

    @PostMapping("/submit")
    public ResponseEntity<Contact> submitContact(@RequestBody Contact contact) {
        return ResponseEntity.ok(contactService.saveContact(contact));
    }
}