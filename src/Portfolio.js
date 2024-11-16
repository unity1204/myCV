import React, { useState } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, ChevronRight } from 'lucide-react';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Student Satisfaction Survey Chatbot",
      category: "ai",
      description: ` Developed the Student Satisfaction Survey Chatbot (SSSC) at Universiti Tunku Abdul Rahman to improve 
                    student feedback collection through AI-driven conversational capabilities, addressing the limitations of 
                    traditional survey forms.`,

      features: ["NLP-powered responses", "Sentiment analysis", "Prompt engineering", "Database integration"],
      tech: ["Python", "NLP", "SQL"]
    },
    {
        id: 2,
        title: "Cardiovascular Risk Prediction System",
        category: "ai",
        description: "Developed as part of the Artificial Intelligence Techniques assignment to predict cardiovascular risk levels based on patient lifestyle and health-related data.",
        features: [
          "Risk classification (low, medium, high)",
          "Feature engineering",
          "Model comparison & optimization",
          "Data preprocessing of 17 features"
        ],
        tech: ["Python", "Machine Learning", "SelectKBest", "GridSearchCV"]
    },
    {
      id: 3,
      title: "Gesture-Based Mouse Control",
      category: "computer-vision",
      description: "Gesture detection system for mouse pointer control using hand movements.",
      features: ["Real-time tracking", "OpenCV integration", "System-level controls"],
      tech: ["Python", "OpenCV", "MediaPipe"]
    },
    {
        id: 4,
        title: "SFTP Program",
        category: "software",
        description: "Developed during internship at VAT Manufacturing Malaysia, developed a part of the C# program for secure file transfers with automated employee attendance tracking.",
        features: [
          "Automated file transfers",
          "Error checking",
          "Email alerts",
          "WinSCP integration"
        ],
        tech: ["C#", "WinSCP", "SFTP"]
      },
      {
        id: 5,
        title: "Inventory Management System",
        category: "software",
        description: "Created during internship, an SQLite-based database system for inventory tracking with stock management modules.",
        features: [
          "Stock in/out tracking",
          "Database optimization",
          "Inventory management",
          "Data validation"
        ],
        tech: ["SQLite", "C#", "Database Design"]
    },
    {
      id: 6,
      title: "Academic Advisor System",
      category: "web",
      description: "Appointment booking system for academic advisors and students.",
      features: ["Timetable management", "Appointment booking", "Academic performance tracking"],
      tech: ["RESTful API", "PHP", "Xampp"]
    },
    {
        id: 7,
        title: "Visitor Management System",
        category: "mobile",
        description: "Mobile app for secure visitor access in residential areas.",
        features: ["QR code scanning", "SOS alerts", "Announcement system"],
        tech: ["Java", "Android Studio", "Firebase"]
    },
    {
      id: 8,
      title: "Hospital Management System",
      category: "web",
      description: "Java-based system to manage employee details, patient symptoms, and diagnoses.",
      features: ["Object-oriented design", "Patient data management"],
      tech: ["Java", "Object-Oriented Programming"]
    },
    {
      id: 9,
      title: "Simple Game Mobile App",
      category: "mobile",
      description: "Android game app with a simple gameplay of touching highlighted targets within a time limit.",
      features: ["High score tracking", "Shared preferences for data persistence"],
      tech: ["Java", "Android Studio", "Shared Preferences"]
    },
    {
      id: 10,
      title: "Software Engineering Principles (Non-implementation)",
      category: "design",
      description: "A project on Customer Loyalty and Retention Application that focuses on software engineering principles like requirements analysis, modules block diagram design, system architectural patterns. This projects enhance understanding of the scrum framework, sprint cycle, sprint goals and sprint backlog.",
      features: ["Requirements analysis", "System design", "Scrum framework"],
      tech: ["UML", "MVC", "Scrum"]
    },
    {
      id: 11,
      title: "Analysis and Design of Information System (Non-implementation)",
      category: "design",
      description: "System design for a payment system using methodologies for information system analysis and design (no implementation).",
      features: ["Requirements analysis", "UML diagrams", "Logic modeling"],
      tech: ["UML", "System Design Methodologies"]
    },
    {
      id: 12,
      title: "Restaurant Front-End Website",
      category: "web",
      description: "Front-end website design for a restaurant with a modern and clean minimalist style.",
      features: ["Page navigation", "HTML/CSS/JS forms", "Transitions and interactive elements"],
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"]
    },
    {
      id: 13,
      title: "Server-Side Web Application",
      category: "web",
      description: "Simple web application with a PostgreSQL backend and MVC architecture.",
      features: ["Backend data processing", "Front-end rendering"],
      tech: ["PostgreSQL", "MVC"]
    }
  ];


  return (
    <div className="min-h-screen bg-slate-50 font-['Inter']">
      {/* Header/Hero Section */}
      <header className="bg-gradient-to-r from-rose-100 to-teal-100 py-20">
        <div className="container mx-auto px-4 flex items-center gap-8">
          <div className="w-32 h-32 rounded-full overflow-hidden bg-white shadow-lg">
            <img 
              src="photo.jpeg" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-4xl font-light mb-4 text-slate-800">Lee Wei Jin</h1>
            <p className="text-xl mb-6 text-slate-600 font-light">Fresh Graduate in Information Systems</p>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: Mail, text: "wjlee12012@gmail.com" },
                { icon: Phone, text: "012-2201204" },
                { icon: MapPin, text: "Bukit Mertajam, Penang" }
              ].map((item, index) => (
                <div key={index} 
                     className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-slate-600 hover:bg-white transition-all">
                  <item.icon size={16} />
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Skills Section with Animation */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-8 text-slate-800">Technical Expertise</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Languages",
                items: ["Python", "JavaScript", "Java", "C#", "C++", "SQL", "PHP"]
              },
              {
                title: "Frameworks",
                items: ["React", "Node.js", "Flask", ".NET", "Bootstrap"]
              },
              {
                title: "Tools & Databases",
                items: ["MySQL", "SQLite",  "Firebase", "MongoDB", "PostgreSQL", "Git"]
              }
            ].map((category, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-lg font-medium mb-4 text-slate-700">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm hover:bg-slate-200 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section with Filtering */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-8 text-slate-800">Featured Projects</h2>
          
          {/* Project Filter Tabs */}
          <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
            {['all', 'ai', 'web', 'mobile', 'computer-vision'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  activeTab === tab 
                    ? 'bg-slate-800 text-white' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects
              .filter(project => activeTab === 'all' || project.category === activeTab)
              .map((project) => (
                <div
                  key={project.id}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <h3 className="text-xl font-medium mb-3 text-slate-800">{project.title}</h3>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-slate-100 text-slate-600 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className={`overflow-hidden transition-all duration-300 ${
                      hoveredProject === project.id ? 'max-h-40' : 'max-h-0'
                    }`}>
                      <ul className="space-y-2 pt-4">
                        {project.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-slate-600">
                            <ChevronRight size={16} className="mr-2 text-slate-400" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* Experience Section with Timeline */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-8 text-slate-800">Experience</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-medium text-slate-800">VAT Manufacturing Malaysia</h3>
                  <p className="text-slate-600">Software Development Intern</p>
                </div>
                <span className="text-sm text-slate-500">2023</span>
              </div>
              <ul className="space-y-2">
                {[
                  "Developed SFTP program using C# for automated file transfers",
                  "Created SQLite-based inventory management system",
                  "Designed VBA macros for vendor communication automation"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-sm text-slate-600">
                    <ChevronRight size={16} className="mr-2 text-slate-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer with Social Links */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-8 mb-8">
            {[
              { icon: Github, link: "#" },
              { icon: Linkedin, link: "https://www.linkedin.com/in/lee-wei-jin-5331b6268/" },
              { icon: Mail, link: "mailto:wjlee12012@gmail.com" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                className="hover:text-teal-300 transition-colors p-2 hover:bg-white/10 rounded-full"
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
          <p className="text-center text-slate-400 text-sm">
            © 2024 Lee Wei Jin. Built with React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;

