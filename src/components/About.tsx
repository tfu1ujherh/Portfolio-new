import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, GraduationCap, Heart } from 'lucide-react';

const About: React.FC = () => {
  const aboutItems = [
    {
      icon: Briefcase,
      title: 'Current Role',
      description: 'Student At Parul University',
      color: 'from-violet-500 to-purple-500',
    },
    {
      icon: MapPin,
      title: 'Location',
      description: 'Vadodara,Gujarat',
      color: 'from-sky-500 to-blue-500',
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'CSE -Artificial Intelligence - Parul University',
      color: 'from-emerald-500 to-green-500',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Travelling',
      color: 'from-pink-500 to-red-500',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-600 to-pink-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
           Aspiring Software Developer with a strong focus on backend development and web technologies. Passionate about building efficient, scalable, and user-focused solutions. Strong in problem-solving and Data Structures & Algorithms, with a commitment to applying technical expertise to develop innovative solutions and achieve meaningful outcomes in complex and fast-paced environments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {aboutItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center mb-4`}>
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-violet-100 to-pink-100 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl">
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              When I’m not coding, I’m exploring emerging technologies, sharpening my skills through open-source contributions, or spending time in nature to recharge. I believe the most effective solutions arise from deeply understanding both the technical challenges and the real-world needs of users.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;