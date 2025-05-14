import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="py-8 px-4 max-w-6xl mx-auto">
      <div class="flex items-center mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-indigo-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        <h2 class="text-3xl font-bold text-gray-800">Welcome to My Professional Blog</h2>
      </div>
      
      <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-md p-6 mb-8 border border-blue-100 transform transition duration-300 hover:shadow-lg">
        <div class="flex items-start">
          <div class="flex-shrink-0 mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div class="ml-4">
            <h3 class="text-xl font-semibold mb-2 text-blue-800">Welcome to My Professional Portfolio</h3>
            <p class="mb-4 text-blue-600">This blog showcases my professional journey, skills, and expertise in software development.</p>
            <div class="flex flex-wrap gap-4">
              <a routerLink="/blog" class="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                Read My Blog
              </a>
              <a routerLink="/profile" class="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                View My Profile
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div class="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transform transition duration-300 hover:shadow-lg hover:-translate-y-1">
          <div class="p-6">
            <div class="flex items-center justify-center mb-4">
              <div class="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
            </div>
            <h3 class="text-xl font-semibold text-center mb-2 text-gray-800">Professional Experience</h3>
            <p class="text-gray-600 text-center">Explore my professional journey and work experience in the tech industry.</p>
            <div class="mt-4 text-center">
              <a routerLink="/profile" class="inline-flex items-center text-indigo-600 hover:text-indigo-800">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div class="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transform transition duration-300 hover:shadow-lg hover:-translate-y-1">
          <div class="p-6">
            <div class="flex items-center justify-center mb-4">
              <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
            </div>
            <h3 class="text-xl font-semibold text-center mb-2 text-gray-800">Technical Skills</h3>
            <p class="text-gray-600 text-center">Discover my technical expertise and skills in software development.</p>
            <div class="mt-4 text-center">
              <a routerLink="/profile" class="inline-flex items-center text-blue-600 hover:text-blue-800">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div class="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transform transition duration-300 hover:shadow-lg hover:-translate-y-1">
          <div class="p-6">
            <div class="flex items-center justify-center mb-4">
              <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
            </div>
            <h3 class="text-xl font-semibold text-center mb-2 text-gray-800">Latest Articles</h3>
            <p class="text-gray-600 text-center">Read my latest thoughts and insights on technology and development.</p>
            <div class="mt-4 text-center">
              <a routerLink="/blog" class="inline-flex items-center text-purple-600 hover:text-purple-800