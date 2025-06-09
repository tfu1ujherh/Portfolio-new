import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Palette, Zap, Star } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Globe,
      color: 'from-blue-500 via-purple-500 to-pink-500',
      skills: [
        { name: 'React.js', level: 80, icon: '⚛️' },
        { name: 'TypeScript', level: 90, icon: '📘' },
        { name: 'Tailwind CSS', level: 92, icon: '🎨' },
        { name: 'JavaScript', level: 85, icon: '⚡' },
      ],
    },
    {
      title: 'Backend Development',
      icon: Database,
      color: 'from-emerald-500 via-teal-500 to-cyan-500',
      skills: [
        { name: 'Node.js', level: 88, icon: '🟢' },
        { name: 'Express.js', level: 90, icon: '🚀' },
      { name: 'Spring', level: 50, icon: '🌱' },
      { name: 'MongoDB', level: 87, icon: '🍃' },
      ],
    },
    // {
    //   title: 'Tools & DevOps',
    //   icon: Code,
    //   color: 'from-orange-500 via-red-500 to-pink-500',
    //   skills: [
    //     { name: 'Git', level: 93, icon: '🔧' },
    //     { name: 'Docker', level: 78, icon: '🐳' },
    //     { name: 'AWS', level: 75, icon: '☁️' },
    //     { name: 'Figma', level: 85, icon: '🎯' },
    //     { name: 'Linux', level: 82, icon: '🐧' },
    //     { name: 'CI/CD', level: 80, icon: '🔄' },
    //   ],
    // },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay: 0.5,
      },
    }),
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-indigo-900/20 dark:to-purple-900/20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full mb-6"
          >
            <Zap className="w-8 h-8 text-white" />
          </motion.div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Crafting digital experiences with cutting-edge technologies and creative solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300" />
              <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20">
                {/* Category Header */}
                <div className="text-center mb-8">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl mb-4 shadow-lg`}
                  >
                    <category.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      custom={skillIndex}
                      variants={skillVariants}
                      className="group/skill"
                    >
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center space-x-3">
                          <motion.span
                            whileHover={{ scale: 1.3, rotate: 10 }}
                            className="text-2xl"
                          >
                            {skill.icon}
                          </motion.span>
                          <span className="text-gray-700 dark:text-gray-300 font-semibold">
                            {skill.name}
                          </span>
                        </div>
                        <motion.span
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: skillIndex * 0.1 + 1 }}
                          className="text-gray-600 dark:text-gray-400 font-bold"
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      
                      <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          custom={skill.level}
                          variants={progressVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                        >
                          <motion.div
                            animate={{ x: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute inset-0 bg-white/30 rounded-full"
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Skills Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 flex items-center justify-center space-x-2">
            <Star className="w-8 h-8 text-yellow-500" />
            <span>Additional Technologies</span>
            <Star className="w-8 h-8 text-yellow-500" />
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              
              { name: 'Java', color: 'from-orange-600 to-orange-700', icon: '☕' },
              { name: 'OOP', color: 'from-indigo-500 to-indigo-600', icon: '🧱' },
              { name: 'C', color: 'from-blue-500 to-blue-600', icon: '🔵' },
              { name: 'Data Structures', color: 'from-teal-500 to-teal-600', icon: '🧮' },
              { name: 'Algorithms', color: 'from-emerald-500 to-emerald-600', icon: '📐' },
              { name: 'DBMS', color: 'from-red-500 to-red-600', icon: '🗄️' },
              { name: 'OS', color: 'from-green-500 to-green-600', icon: '💻' },
              { name: 'Python', color: 'from-yellow-500 to-yellow-600', icon: '🐍' },
              { name: 'JavaScript', color: 'from-yellow-400 to-yellow-500', icon: '✨' },
              { name: 'MongoDB', color: 'from-emerald-600 to-emerald-700', icon: '🍃' },
              { name: 'Express.js', color: 'from-gray-500 to-gray-600', icon: '🚂' },
              { name: 'React', color: 'from-cyan-500 to-cyan-600', icon: '⚛️' },
              { name: 'Node.js', color: 'from-green-600 to-green-700', icon: '🌿' },
              { name: 'MySQL', color: 'from-blue-600 to-blue-700', icon: '🗃️' },
              { name: 'Git', color: 'from-red-600 to-red-700', icon: '🔧' },
              { name: 'GitHub', color: 'from-gray-800 to-gray-900', icon: '🐙' },
              { name: 'VS Code', color: 'from-indigo-600 to-indigo-700', icon: '🖊️' },
              { name: 'HTML', color: 'from-red-400 to-red-500', icon: '📄' },
              { name: 'CSS', color: 'from-blue-400 to-blue-500', icon: '🎨' },
              { name: 'Tailwind CSS', color: 'from-sky-400 to-sky-500', icon: '🌬️' },
  
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.2, 
                  rotate: 5,
                  transition: { duration: 0.2 }
                }}
                className={`group relative px-6 py-3 bg-gradient-to-r ${tech.color} text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}
              >
                <div className="flex items-center space-x-2">
                  <motion.span
                    whileHover={{ scale: 1.3 }}
                    className="text-lg"
                  >
                    {tech.icon}
                  </motion.span>
                  <span className="font-semibold text-sm">{tech.name}</span>
                </div>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;