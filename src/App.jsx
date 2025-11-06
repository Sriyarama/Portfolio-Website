import React from 'react';
import { Mail, Linkedin, Github, MapPin, Award, Briefcase, GraduationCap, Code, ChevronDown, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const skills = {
    'Languages': ['Python', 'Java', 'C++', 'C', 'JavaScript'],
    'AI/ML': ['TensorFlow', 'PyTorch', 'scikit-learn', 'LLMs', 'RAG'],
    'Web': ['FastAPI', 'Material-UI', 'jsPsych', 'React'],
    'Tools': ['Git', 'Docker', 'GCP', 'VS Code', 'pandas', 'NumPy']
  };

  const projects = [
    {
      title: 'ML-Driven Places Attribute Conflation',
      org: 'Overture Maps / Project Terraforma',
      tech: ['Python', 'Machine Learning', 'Geospatial Data', 'Data Processing'],
      description: 'Developing machine learning models to conflate place attributes from multiple data sources, resolving conflicts and improving data quality for the Overture Maps Foundation.',
      highlights: [
        'Building ML models for attribute conflict resolution across geospatial datasets',
        'Processing and analyzing large-scale place attribution data',
        'Contributing to open geospatial data infrastructure'
      ],
      github: 'https://github.com/project-terraforma/ML-Attacking-Places-Attribution-Conflation',
      status: 'In Progress'
    }
  ];

  const experience = [
    {
      title: 'Undergraduate Research Assistant',
      org: 'UC Santa Cruz',
      period: 'March 2023 - Present',
      points: [
        'Developed web-based experiments using jsPsych for efficient data collection',
        'Performed scientific research with electrochemical sensors and data analysis',
        'Explored GitHub collaboration visualization in classroom settings'
      ]
    },
    {
      title: 'University Hired Peer Advisor',
      org: 'UC Santa Cruz',
      period: 'Sep 2023 - Jan 2024',
      points: [
        'Mentored 200+ freshmen with academic guidance',
        'Collaborated with professors and faculty on student support',
        'Maintained classroom materials and campus guidance programs'
      ]
    },
    {
      title: 'Generative Art Research Assistant',
      org: 'UC Santa Cruz',
      period: 'Jan 2023 - July 2023',
      points: [
        'Explored intersection of art and algorithmic processes with graduate students',
        'Experimented with Processing, p5.js, and TensorFlow for generative artworks',
        'Engaged with research on randomness, patterns, and emergence systems'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-24 sm:py-32">
          <div className="text-center space-y-6">
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight animate-fade-in">
              Sriya Ramachandruni
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 max-w-2xl mx-auto">
              Computer Science Student | AI/ML Enthusiast | Research Assistant
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a href="mailto:sramach5@ucsc.edu" className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-6 py-3 rounded-full transition-all backdrop-blur-sm">
                <Mail size={20} />
                <span>Email</span>
              </a>
              <a href="https://www.linkedin.com/in/sriya-ramachandruni-341b57225/" className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-6 py-3 rounded-full transition-all backdrop-blur-sm">
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/Sriyarama" className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-6 py-3 rounded-full transition-all backdrop-blur-sm">
                <Github size={20} />
                <span>GitHub</span>
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 pt-6 text-sm">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Santa Cruz, CA</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-green-400/30 rounded-full backdrop-blur-sm">🇺🇸 US Citizen</span>
              </div>
            </div>
          </div>
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-white/70" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        {/* About Section */}
        <section className="bg-white rounded-2xl shadow-lg p-8 sm:p-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
              <GraduationCap size={24} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">About Me</h2>
          </div>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              I'm a final-year Computer Science undergraduate at UC Santa Cruz with a strong passion for AI/ML and research. 
              With a 3.7 GPA and hands-on experience across research, web development, and data science, I bring both technical 
              depth and creative problem-solving to every project.
            </p>
            <p>
              Currently, I'm working on machine learning models for geospatial data conflation with Overture Maps, tackling 
              real-world problems in data quality and attribute resolution. My experience spans developing web-based experiments, 
              exploring generative AI, and mentoring fellow students.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 pt-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl">
                <div className="text-2xl font-bold text-indigo-600">3.7</div>
                <div className="text-sm text-gray-600">GPA</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-xl">
                <div className="text-2xl font-bold text-purple-600">200+</div>
                <div className="text-sm text-gray-600">Students Mentored</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl">
                <div className="text-2xl font-bold text-green-600">2026</div>
                <div className="text-sm text-gray-600">Graduation Year</div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="bg-white rounded-2xl shadow-lg p-8 sm:p-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
              <Code size={24} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Featured Projects</h2>
          </div>
          <div className="space-y-6">
            {projects.map((project, idx) => (
              <div key={idx} className="border-2 border-blue-100 rounded-xl p-6 hover:border-blue-300 transition-colors">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
                      {project.status && (
                        <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                          {project.status}
                        </span>
                      )}
                    </div>
                    <p className="text-indigo-600 font-medium">{project.org}</p>
                  </div>
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-lg transition-colors text-sm font-medium"
                    >
                      <Github size={16} />
                      <span>View Code</span>
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
                
                <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-600 mb-2">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, hidx) => (
                      <li key={hidx} className="text-gray-700 flex gap-2 text-sm">
                        <span className="text-blue-500 mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="bg-white rounded-2xl shadow-lg p-8 sm:p-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
              <Code size={24} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Technical Skills</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="space-y-3">
                <h3 className="font-semibold text-lg text-indigo-600">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="bg-white rounded-2xl shadow-lg p-8 sm:p-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
              <Briefcase size={24} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Experience</h2>
          </div>
          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <div key={idx} className="border-l-4 border-indigo-500 pl-6 pb-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                    <p className="text-indigo-600 font-medium">{exp.org}</p>
                  </div>
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full w-fit">{exp.period}</span>
                </div>
                <ul className="space-y-2">
                  {exp.points.map((point, pidx) => (
                    <li key={pidx} className="text-gray-700 flex gap-2">
                      <span className="text-indigo-500 mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl shadow-lg p-8 sm:p-12 text-white">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap size={32} />
            <h2 className="text-3xl font-bold">Education</h2>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold">University of California, Santa Cruz</h3>
              <p className="text-blue-100 text-lg">Bachelor of Science in Computer Science</p>
              <p className="text-blue-200">September 2022 - June 2026 | GPA: 3.7</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mt-4">
              <p className="text-sm text-blue-100 mb-2">Relevant Coursework:</p>
              <div className="flex flex-wrap gap-2">
                {['Artificial Intelligence', 'AI for Health', 'Data Structures & Algorithms', 'Computer Systems Design', 
                  'Probability Theory', 'Computer Architecture', 'Algorithm Analysis', 'Cryptography'].map(course => (
                  <span key={course} className="px-3 py-1 bg-white/20 rounded-full text-sm">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Certification Section */}
        <section className="bg-white rounded-2xl shadow-lg p-8 sm:p-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
              <Award size={24} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Certifications</h2>
          </div>
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border-l-4 border-orange-500">
            <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-gray-800">Oracle Cloud Infrastructure 2024 Generative AI</h3>
                <p className="text-gray-600 mt-1">Oracle - Austin, TX</p>
                <ul className="mt-3 space-y-1 text-gray-700">
                  <li>• Understanding of Large Language Models (LLMs)</li>
                  <li>• Proficient in OCI Generative AI Service</li>
                  <li>• Built RAG-based chatbots using OCI</li>
                </ul>
              </div>
              <div className="text-sm text-gray-600 text-right">
                <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium w-fit ml-auto">
                  Valid: July 2024 - July 2026
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Profile Highlights */}
        <section className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl shadow-lg p-8 sm:p-12 text-white">
          <h2 className="text-3xl font-bold mb-6">Why Work With Me</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2">🇺🇸 US Citizen</h3>
              <p className="text-blue-100 text-sm">No work permit or visa issues for employment in the US</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2">🌍 Bi-Cultural Comfort</h3>
              <p className="text-blue-100 text-sm">Seamless collaboration across US and Indian teams</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2">📍 Geographic Flexibility</h3>
              <p className="text-blue-100 text-sm">Comfortable working from either US or India</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">Let's Connect!</h3>
          <p className="text-gray-400 mb-6">I'm always excited to discuss new opportunities and collaborations</p>
          <div className="flex justify-center gap-4">
            <a href="mailto:sramach5@ucsc.edu" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors font-medium">
              Get In Touch
            </a>
          </div>
          <p className="text-gray-500 mt-8 text-sm">© 2025 Sriya Ramachandruni</p>
        </div>
      </footer>
    </div>
  );
}
