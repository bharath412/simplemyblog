import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogPosts = [
    {
      id: 1,
      title: 'My Professional Journey',
      date: '2023-12-15',
      summary: 'A brief overview of my career path and professional experiences.',
      content: `<p>I started my career in software development after completing my degree in Computer Science. 
                Over the years, I've worked with various technologies and frameworks, continuously expanding my skillset.</p>
                <p>My journey has taken me through roles in web development, application architecture, and team leadership.</p>`
    },
    {
      id: 2,
      title: 'Skills & Expertise',
      date: '2023-12-18',
      summary: 'Detailed breakdown of my technical skills and areas of expertise.',
      content: `<p>My core technical skills include:</p>
                <ul>
                  <li>Frontend: Angular, React, JavaScript/TypeScript</li>
                  <li>Backend: Spring Boot, Node.js, Java, Python</li>
                  <li>Database: MySQL, PostgreSQL, MongoDB</li>
                  <li>DevOps: Docker, Kubernetes, CI/CD pipelines</li>
                </ul>`
    },
    {
      id: 3,
      title: 'Recent Projects',
      date: '2023-12-22',
      summary: 'Showcase of my recent professional projects and achievements.',
      content: `<p>Some of my recent projects include:</p>
                <ul>
                  <li>E-commerce platform with microservices architecture</li>
                  <li>Healthcare management system with real-time data processing</li>
                  <li>Financial analytics dashboard with interactive visualizations</li>
                </ul>
                <p>Each project presented unique challenges that helped me grow professionally.</p>`
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}