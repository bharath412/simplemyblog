import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  postId: number = 0;
  post: any = null;
  
  // Sample data - in a real app this would come from a service
  blogPosts = [
    {
      id: 1,
      title: 'My Professional Journey',
      date: '2023-12-15',
      summary: 'A brief overview of my career path and professional experiences.',
      content: `<p>I started my career in software development after completing my degree in Computer Science. 
                Over the years, I've worked with various technologies and frameworks, continuously expanding my skillset.</p>
                <p>My journey has taken me through roles in web development, application architecture, and team leadership.</p>
                <p>Some key milestones in my career:</p>
                <ul>
                  <li>Began as a junior developer at a startup, focusing on frontend technologies</li>
                  <li>Moved to a mid-sized company where I developed full-stack skills</li>
                  <li>Took on a senior role with architecture responsibilities</li>
                  <li>Currently leading development teams and setting technical direction</li>
                </ul>
                <p>Throughout this journey, I've remained committed to continuous learning and staying current with industry trends and best practices.</p>`
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
                </ul>
                <p>Beyond technical skills, I've developed expertise in:</p>
                <ul>
                  <li>Agile methodologies and project management</li>
                  <li>Technical leadership and mentoring</li>
                  <li>System architecture and design patterns</li>
                  <li>Performance optimization and scalability</li>
                </ul>
                <p>I believe in a pragmatic approach to technology, choosing the right tool for each specific challenge rather than adhering to a single technology stack.</p>`
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
                <p>Each project presented unique challenges that helped me grow professionally.</p>
                <p>For the e-commerce platform, I implemented:</p>
                <ul>
                  <li>Microservices architecture using Spring Boot</li>
                  <li>Event-driven communication between services</li>
                  <li>Responsive frontend with Angular and Tailwind CSS</li>
                  <li>Containerization with Docker and orchestration with Kubernetes</li>
                </ul>
                <p>The healthcare management system required:</p>
                <ul>
                  <li>Strict security measures and HIPAA compliance</li>
                  <li>Real-time data processing with Apache Kafka</li>
                  <li>Integration with various third-party healthcare APIs</li>
                </ul>
                <p>These projects have strengthened my abilities in system design, performance optimization, and delivering complex solutions.</p>`
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.postId = +params['id']; // Convert string to number
      this.loadPost();
    });
  }

  loadPost(): void {
    // In a real app, this would be a service call
    this.post = this.blogPosts.find(post => post.id === this.postId);
  }
}