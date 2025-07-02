"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}></div>
      </div>
      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center py-12 gap-4">
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Alistair Kane</h1>
        <div className="flex flex-wrap gap-4 items-center justify-center text-muted-foreground text-sm">
          <span className="flex items-center gap-1"><Mail size={16} /> alistair.a.kane@gmail.com</span>
          <span className="flex items-center gap-1"><Phone size={16} /> +44 7879 718598</span>
          <span className="flex items-center gap-1"><MapPin size={16} /> Glasgow, Scotland</span>
          <a href="https://linkedin.com/in/alistair-kane" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline"><Linkedin size={16} /> LinkedIn</a>
        </div>
      </header>

      <main className="flex-1 w-full max-w-3xl mx-auto px-4 flex flex-col gap-12">
        {/* Profile Section */}
        <section className="flex flex-col gap-2 items-center text-center">
          <h2 className="text-xl font-semibold relative group inline-block">
            Profile
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></div>
          </h2>
          <p className="text-muted-foreground max-w-xl">
            Experienced software developer with over 7 years of commercial experience, focused on delivering high-quality front-end solutions using React, Angular, and TypeScript. I bring strong problem-solving skills and a collaborative approach to working within development teams. I&apos;m motivated by opportunities to take ownership of projects and make a meaningful impact through well-crafted software.
          </p>
        </section>

        {/* Skills Section */}
        <section className="flex flex-col items-center relative z-20">
          <h2 className="text-xl font-semibold mb-4 relative group inline-block">
            Skills
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></div>
          </h2>
          <div className="flex flex-col gap-4 w-full max-w-4xl">
            {/* Frontend */}
            <div className="flex flex-wrap gap-2 justify-center">
              {["HTML/CSS", "JavaScript", "TypeScript", "React", "Angular", "Vite"].map(skill => (
                <div
                  key={skill}
                  className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium bg-secondary text-secondary-foreground cursor-pointer relative z-10 hover:scale-110"
                  style={{ transition: 'all 0.3s ease' }}
                >
                  {(skill === "React" || skill === "JavaScript" || skill === "TypeScript" || skill === "Angular" || skill === "HTML/CSS" || skill === "Vite") && (
                    <svg className="mr-1" width="14" height="14" viewBox="0 0 20 20" fill="gold" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
                    </svg>
                  )}
                  {skill}
                </div>
              ))}
            </div>

            {/* Backend */}
            <div className="flex flex-wrap gap-2 justify-center">
              {["Java", "Spring", "Spring Boot", ".NET", "C#", "Entity Framework"].map(skill => (
                <div
                  key={skill}
                  className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium bg-secondary text-secondary-foreground cursor-pointer relative z-10 hover:scale-110"
                  style={{ transition: 'all 0.3s ease' }}
                >
                  {skill}
                </div>
              ))}
            </div>

            {/* DevOps */}
            <div className="flex flex-wrap gap-2 justify-center">
              {["Docker", "Kubernetes", "AWS", "Azure"].map(skill => (
                <div
                  key={skill}
                  className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium bg-secondary text-secondary-foreground cursor-pointer relative z-10 hover:scale-110"
                  style={{ transition: 'all 0.3s ease' }}
                >
                  {skill}
                </div>
              ))}
            </div>

            {/* Testing */}
            <div className="flex flex-wrap gap-2 justify-center">
              {["Cypress", "Cucumber", "Mocha", "Jasmine", "React Testing Library"].map(skill => (
                <div
                  key={skill}
                  className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium bg-secondary text-secondary-foreground cursor-pointer relative z-10 hover:scale-110"
                  style={{ transition: 'all 0.3s ease' }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section>
          <div className="text-center mb-4">
            <h2 className="text-xl font-semibold relative group inline-block">
              Work Experience
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></div>
            </h2>
          </div>
          <div className="grid gap-6">
            <Card
              className="transition-all duration-300"
              style={{
                backgroundColor: '#111827',
                transform: 'translateY(0)',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.boxShadow = '0 8px 12px -1px rgba(0, 0, 0, 0.4), 0 4px 6px -1px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)';
              }}
            >
              <CardHeader>
                <CardTitle>Senior Software Developer, hyble</CardTitle>
                <span className="text-xs text-muted-foreground">Nov 2023 – present | Edinburgh, Scotland</span>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground flex flex-col gap-2">
                <ul className="list-disc list-inside">
                  <li>Improved the turnaround time for orders by over 50% by delivering features to improve efficiency in the most critical part of the business</li>
                  <li>Providing technical expertise and judgement while mentoring and upskilling team members</li>
                  <li>Improving coding standards and promoting modern practices</li>
                </ul>
              </CardContent>
            </Card>
            <Card
              className="transition-all duration-300"
              style={{
                backgroundColor: '#111827',
                transform: 'translateY(0)',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.boxShadow = '0 8px 12px -1px rgba(0, 0, 0, 0.4), 0 4px 6px -1px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)';
              }}
            >
              <CardHeader>
                <CardTitle>Product Developer, AND Digital</CardTitle>
                <span className="text-xs text-muted-foreground">Sep 2022 – Nov 2023 | Glasgow, Scotland</span>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground flex flex-col gap-2">
                <ul className="list-disc list-inside">
                  <li>Entrusted to work on the company&apos;s biggest client, delivering critical accessibility features with React and GraphQL</li>
                  <li>Significantly improved the existing codebase by clearing technical debt and promoting best practices across multiple teams</li>
                  <li>Delivered high priority features under intense time pressure and ensured accessibility standards were met on a shared component library</li>
                </ul>
              </CardContent>
            </Card>
            <Card
              className="transition-all duration-300"
              style={{
                backgroundColor: '#111827',
                transform: 'translateY(0)',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.boxShadow = '0 8px 12px -1px rgba(0, 0, 0, 0.4), 0 4px 6px -1px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)';
              }}
            >
              <CardHeader>
                <CardTitle>Senior Associate Software Developer, SAS</CardTitle>
                <span className="text-xs text-muted-foreground">Mar 2020 – Sep 2022 | Glasgow, Scotland</span>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground flex flex-col gap-2">
                <ul className="list-disc list-inside">
                  <li>Primarily worked in Angular, delivered features and technical improvements on software of critical importance to law enforcement internationally</li>
                  <li>Modernized legacy AngularJS code to bring the app to date with modern web standards, significantly improving speed and efficiency</li>
                  <li>Delivered critical hot fixes for customers by analyzing reported errors and using problem solving abilities to reach pragmatic solutions</li>
                  <li>Played a pivotal role in building a shared component library from scratch and scaling it into the most widely adopted component library of the company</li>
                </ul>
              </CardContent>
            </Card>
            <Card
              className="transition-all duration-300"
              style={{
                backgroundColor: '#111827',
                transform: 'translateY(0)',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.boxShadow = '0 8px 12px -1px rgba(0, 0, 0, 0.4), 0 4px 6px -1px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)';
              }}
            >
              <CardHeader>
                <CardTitle>Junior Software Developer, CezanneHR</CardTitle>
                <span className="text-xs text-muted-foreground">Jun 2019 – Mar 2020 | Glasgow, Scotland</span>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground flex flex-col gap-2">
                <ul className="list-disc list-inside">
                  <li>Collaborated within a small agile team, playing a vital role in a major overhaul of the UI of a cloud-based HR software platform</li>
                  <li>Modernized legacy code and implemented testing across the product to increase consistency and robustness</li>
                </ul>
              </CardContent>
            </Card>
            <Card
              className="transition-all duration-300"
              style={{
                backgroundColor: '#111827',
                transform: 'translateY(0)',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.boxShadow = '0 8px 12px -1px rgba(0, 0, 0, 0.4), 0 4px 6px -1px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)';
              }}
            >
              <CardHeader>
                <CardTitle>Software Development Instructor, CodeClan</CardTitle>
                <span className="text-xs text-muted-foreground">Feb 2018 – Jun 2019 | Glasgow, Scotland</span>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground flex flex-col gap-2">
                <ul className="list-disc list-inside">
                  <li>Provided lessons, technical support and guidance to students and acted as a first point of contact during assignments and projects</li>
                  <li>Contributed to course curriculum by writing and teaching lessons relating to software development, primarily focusing on emerging technologies</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Education Section */}
        <section>
          <div className="text-center mb-4">
            <h2 className="text-xl font-semibold relative group inline-block">
              Education
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></div>
            </h2>
          </div>
          <div className="grid gap-6">
            <Card
              className="transition-all duration-300"
              style={{
                backgroundColor: '#111827',
                transform: 'translateY(0)',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.boxShadow = '0 8px 12px -1px rgba(0, 0, 0, 0.4), 0 4px 6px -1px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)';
              }}
            >
              <CardHeader>
                <CardTitle>PSM1, scrum.org</CardTitle>
                <span className="text-xs text-muted-foreground">Dec 2024</span>
              </CardHeader>
            </Card>
            <Card
              className="transition-all duration-300"
              style={{
                backgroundColor: '#111827',
                transform: 'translateY(0)',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.boxShadow = '0 8px 12px -1px rgba(0, 0, 0, 0.4), 0 4px 6px -1px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)';
              }}
            >
              <CardHeader>
                <CardTitle>Professional Development Award, Software Development, CodeClan</CardTitle>
                <span className="text-xs text-muted-foreground">Sep 2017 – Jan 2018</span>
              </CardHeader>
            </Card>
            <Card
              className="transition-all duration-300"
              style={{
                backgroundColor: '#111827',
                transform: 'translateY(0)',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.boxShadow = '0 8px 12px -1px rgba(0, 0, 0, 0.4), 0 4px 6px -1px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)';
              }}
            >
              <CardHeader>
                <CardTitle>Master of Arts, Music and Digital Information Studies, University of Glasgow</CardTitle>
                <span className="text-xs text-muted-foreground">2010 – 2014 | Glasgow, Scotland</span>
              </CardHeader>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 flex justify-center items-center border-t mt-12 text-sm text-muted-foreground">
        © 2025 Alistair Kane. All rights reserved.
      </footer>
    </div>
  );
}
