import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    // {
    //   type: 'work',
    //   title: 'Senior Full-Stack Developer',
    //   company: 'TechCorp Solutions',
    //   location: 'San Francisco, CA',
    //   period: '2022 - Present',
    //   description: 'Lead development of scalable web applications using React, Node.js, and cloud technologies. Mentored junior developers and improved system performance by 40%.',
    //   technologies: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'Docker'],
    //   color: 'from-blue-500 to-cyan-500',
    // },
    // {
    //   type: 'work',
    //   title: 'Full-Stack Developer',
    //   company: 'InnovateLab',
    //   location: 'Remote',
    //   period: '2020 - 2022',
    //   description: 'Developed and maintained multiple client projects, focusing on modern web technologies and user experience optimization.',
    //   technologies: ['Vue.js', 'Python', 'MongoDB', 'GraphQL'],
    //   color: 'from-emerald-500 to-teal-500',
    // },
    // {
    //   type: 'education',
    //   title: 'Master of Computer Science',
    //   company: 'Stanford University',
    //   location: 'Stanford, CA',
    //   period: '2019 - 2021',
    //   description: 'Specialized in Software Engineering and Machine Learning. Graduated Magna Cum Laude with GPA 3.8/4.0.',
    //   technologies: ['Algorithms', 'ML', 'Data Structures', 'Systems Design'],
    //   color: 'from-purple-500 to-pink-500',
    // },
    {
      type: 'work',
      title: 'Void Tech',
      company: '',
      location: 'Vadodara',
      period: 'Feb 2025 - May 2025',
      description: 'Built responsive web applications and collaborated with design teams to create intuitive user interfaces.',
      technologies: ['JavaScript', 'React', 'CSS3', 'REST APIs'],
      color: 'from-orange-500 to-red-500',
    },
    {
  type: 'work',
  title: 'Artificial Intelligence Intern',
  company: 'Teachnook',
  location: 'Bangalore',
  period: 'Mar 2023 - Apr 2023',
  description: 'Worked on AI-related projects, developing and optimizing algorithms. Gained hands-on experience in Python, and contributed to frontend tasks using HTML and CSS.',
  technologies: ['Python', 'HTML', 'CSS'],
  color: 'from-blue-500 to-indigo-500',
},

    
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-600 to-pink-500 bg-clip-text text-transparent">
            Experience 
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey 
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-violet-500 to-pink-500"></div>

          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${experience.color} border-4 border-white dark:border-gray-900 shadow-lg`}></div>
              </div>

              {/* Content Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}
              >
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${experience.color} flex items-center justify-center mr-3`}>
                      {experience.type === 'work' ? (
                        <Briefcase className="w-5 h-5 text-white" />
                      ) : (
                        <GraduationCap className="w-5 h-5 text-white" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                        {experience.title}
                      </h3>
                      <p className="text-violet-600 dark:text-violet-400 font-medium">
                        {experience.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm mb-3 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{experience.period}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{experience.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {experience.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;