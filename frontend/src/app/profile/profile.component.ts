import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  profile = {
    name: 'John Doe',
    title: 'Senior Software Engineer',
    bio: 'Passionate software engineer with over 8 years of experience building web applications and distributed systems.',
    email: 'john.doe@example.com',
    location: 'San Francisco, CA',
    social: [
      { name: 'LinkedIn', url: 'https://linkedin.com/in/johndoe', icon: 'linkedin' },
      { name: 'GitHub', url: 'https://github.com/johndoe', icon: 'github' },
      { name: 'Twitter', url: 'https://twitter.com/johndoe', icon: 'twitter' }
    ],
    skills: [
      { name: 'Angular', level: 90 },
      { name: 'Spring Boot', level: 85 },
      { name: 'JavaScript/TypeScript', level: 95 },
      { name: 'Java', level: 80 },
      { name: 'SQL', level: 75 },
      { name: 'Docker', level: 70 }
    ],
    experience: [
      {
        company: 'Tech Innovations Inc.',
        position: 'Senior Software Engineer',
        period: '2020 - Present',
        description: 'Leading development of cloud-native applications using microservices architecture.'
      },
      {
        company: 'Digital Solutions LLC',
        position: 'Software Engineer',
        period: '2017 - 2020',
        description: 'Developed and maintained enterprise web applications using Angular and Spring Boot.'
      },
      {
        company: 'StartUp Ventures',
        position: 'Junior Developer',
        period: '2015 - 2017',
        description: 'Contributed to frontend development using JavaScript and modern frameworks.'
      }
    ],
    education: [
      {
        institution: 'University of Technology',
        degree: 'M.S. in Computer Science',
        year: '2015'
      },
      {
        institution: 'State University',
        degree: 'B.S. in Software Engineering',
        year: '2013'
      }
    ]
  };
}