package com.example.backend.service;

import com.example.backend.model.BlogPost;
import com.example.backend.repository.BlogPostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class BlogPostService {

    @Autowired
    private BlogPostRepository blogPostRepository;
    
    public List<BlogPost> getAllPublishedPosts() {
        return blogPostRepository.findByPublishedTrueOrderByCreatedAtDesc();
    }
    
    public List<BlogPost> getPostsByAuthor(Long authorId) {
        return blogPostRepository.findByAuthorIdOrderByCreatedAtDesc(authorId);
    }
    
    public Optional<BlogPost> getPostById(Long id) {
        return blogPostRepository.findById(id);
    }
    
    public BlogPost createPost(BlogPost blogPost) {
        blogPost.setCreatedAt(LocalDateTime.now());
        blogPost.setUpdatedAt(LocalDateTime.now());
        return blogPostRepository.save(blogPost);
    }
    
    public BlogPost updatePost(Long id, BlogPost blogPostDetails) {
        BlogPost existingPost = blogPostRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Blog post not found with id: " + id));
        
        existingPost.setTitle(blogPostDetails.getTitle());
        existingPost.setSummary(blogPostDetails.getSummary());
        existingPost.setContent(blogPostDetails.getContent());
        existingPost.setUpdatedAt(LocalDateTime.now());
        existingPost.setPublished(blogPostDetails.isPublished());
        
        return blogPostRepository.save(existingPost);
    }
    
    public void deletePost(Long id) {
        BlogPost post = blogPostRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Blog post not found with id: " + id));
        
        blogPostRepository.delete(post);
    }
}