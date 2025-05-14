package com.example.backend.controller;

import com.example.backend.model.BlogPost;
import com.example.backend.service.BlogPostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/blog")
public class BlogController {

    @Autowired
    private BlogPostService blogPostService;
    
    @GetMapping("/posts")
    public ResponseEntity<List<BlogPost>> getAllPosts() {
        return ResponseEntity.ok(blogPostService.getAllPublishedPosts());
    }
    
    @GetMapping("/posts/{id}")
    public ResponseEntity<BlogPost> getPostById(@PathVariable Long id) {
        return blogPostService.getPostById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
    
    @GetMapping("/author/{authorId}/posts")
    public ResponseEntity<List<BlogPost>> getPostsByAuthor(@PathVariable Long authorId) {
        return ResponseEntity.ok(blogPostService.getPostsByAuthor(authorId));
    }
    
    @PostMapping("/posts")
    public ResponseEntity<BlogPost> createPost(@RequestBody BlogPost blogPost) {
        return new ResponseEntity<>(blogPostService.createPost(blogPost), HttpStatus.CREATED);
    }
    
    @PutMapping("/posts/{id}")
    public ResponseEntity<BlogPost> updatePost(@PathVariable Long id, @RequestBody BlogPost blogPost) {
        return ResponseEntity.ok(blogPostService.updatePost(id, blogPost));
    }
    
    @DeleteMapping("/posts/{id}")
    public ResponseEntity<Void> deletePost(@PathVariable Long id) {
        blogPostService.deletePost(id);
        return ResponseEntity.noContent().build();
    }
}