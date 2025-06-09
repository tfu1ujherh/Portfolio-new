import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Wanderlust',
      description: 'A full-stack hotel reservation platform featuring real-time room availability, secure booking and payment integration, and an admin panel for managing listings and customer data.',
      image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/27408181.webp?k=31ef73e3c1440252c2486ba625238938f23f9a864d77777616b8619cea24b01e&o=',
      technologies: ['Node.js', 'Express.js', 'ejs', 'MongoDB'],
      liveUrl: '#',
      githubUrl: 'https://github.com/tfu1ujherh/WanderLust',
      featured: false,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      id: 2,
      title: 'The Way',
      description: 'A career guidance platform helping students explore courses and government job opportunities after 10th, 12th, and graduation and offers personalized recommendations, career roadmaps.',
      image: 'https://www.aihr.com/wp-content/uploads/career-progression-framework-template-cover-image.jpg',
      technologies: ['React','Node.js' ,'Express.js', 'MongoDB', 'Tailwind'],
      liveUrl: '#',
      githubUrl: 'https://github.com/tfu1ujherh/The-Way',
      featured: false,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      id: 3,
      title: 'Food Delivery',
      description: 'An online food ordering platform that enables users to browse restaurants, place orders, and track deliveries in real-time.Includes user authentication, secure payments.',
      image: 'https://www.gloriafood.com/wp-content/uploads/2021/03/How_to_Improve_Your_Food_Delivery_Service_in_2022_-_fb.png',
      technologies: ['React.js', 'MongoDB', 'Node.js','Express.js', 'TypeScript'],
      liveUrl: '#',
      githubUrl: 'https://github.com/tfu1ujherh/Food-delivery',
      featured: false,
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'A real-time weather application that displays current conditions and forecasts using location-based data.Features a clean UI, search functionality, and dynamic weather updates via third-party APIs.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'Weather API'],
      liveUrl: '#',
      githubUrl: 'https://github.com/tfu1ujherh/Weather-App-React',
      featured: false,
      gradient: 'from-sky-500 to-indigo-500',
    },
    {
      id: 5,
      title: 'Study Circle',
      description: 'An interactive learning platform offering study materials, quizzes, and collaborative tools for students, include topic-wise resources, performance tracking, and a discussion forum for peer learning.',
      image: 'https://t3.ftcdn.net/jpg/01/82/66/68/360_F_182666897_UfdRhd3kobBzVUKdsXLaoIc5rytojol4.jpg',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'API'],
      liveUrl: '#',
      githubUrl: 'https://github.com/tfu1ujherh/StudyCircle',
      featured: false,
      gradient: 'from-rose-500 to-pink-500',
    },
    {
      id: 6,
      title: 'Milk Way',
      description: 'A platform that lets users easily order fresh milk directly from nearby local farms with simple booking.Ensures quality and freshness by connecting consumers to trusted local dairy providers.',
      image: 'https://media.istockphoto.com/id/1297005860/photo/raw-milk-being-poured-into-container.jpg?s=612x612&w=0&k=20&c=5Xumh49_zYs9GjLkGpZXM41tS17K8M-svN9jLMv0JpE=',
      technologies: ['React.js', 'Node.js', 'Express.ja', 'MongoBD', 'Mapbox'],
      liveUrl: '#',
      githubUrl: 'https://github.com/tfu1ujherh/MilkWay',
      featured: false,
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-600 to-pink-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              {project.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <div className="flex items-center space-x-1 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    <Star className="w-3 h-3" />
                    <span>Featured</span>
                  </div>
                </div>
              )}

              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-80 transition-opacity duration-300`}></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.liveUrl}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                      aria-label="View Live Demo"
                    >
                      <ExternalLink className="w-5 h-5 text-gray-700" />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                      aria-label="View Source Code"
                    >
                      <Github className="w-5 h-5 text-gray-700" />
                    </motion.a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-violet-100 dark:bg-gray-700 text-violet-700 dark:text-violet-300 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <motion.a
                    href={project.liveUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 text-center py-2 bg-gradient-to-r from-violet-600 to-pink-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 text-center py-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:border-violet-600 hover:text-violet-600 dark:hover:text-violet-400 transition-all duration-300"
                  >
                    GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/tfu1ujherh?tab=repositories"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
          >
            <Github className="w-5 h-5" />
            <span>View More Projects on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;