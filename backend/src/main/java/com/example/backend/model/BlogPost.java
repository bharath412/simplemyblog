package com.example.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "blog_posts")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class BlogPost {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String title;
    
    @Column(length = 500)
    private String summary;
    
    @Column(columnDefinition = "TEXT")
    private String content;
    
    private LocalDateTime createdAt;
    
    private LocalDateTime updatedAt;
    
    @Column(name = "author_id")
    private Long authorId;
    
    private boolean published = true;
}