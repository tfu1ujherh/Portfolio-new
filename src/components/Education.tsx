import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Star, Calendar, MapPin, Trophy } from 'lucide-react';

const Education: React.FC = () => {
  const educationData = [
  {
    level: "Bachelor's Degree",
    degree: "B.Tech in Computer Science & Engineering - AI",
    institution: "Parul University",
    location: "Vadodara, Gujarat",
    duration: "2022 - Present",
    grade: "CGPA: 7.89",
    description:
      "Pursuing a Bachelor’s degree with a specialization in Artificial Intelligence. Focused on backend development and software engineering principles. Engaged in hands-on projects, research, and continuous skill development through academic and extracurricular initiatives.",
    achievements: [
      "NCC Cadet",
      "Participated in SIH Hackthon",
      "Developed a full-stack StudyCircle portal as a major project"
    ],
    subjects: [
      "Data Structures",
      "Algorithms",
      "Machine Learning",
      "JAVA",
      "Database Systems",
      "Computer Networks"
    ],
    color: "from-purple-500 via-violet-500 to-indigo-500",
    icon: GraduationCap,
    bgPattern: "university"
  },
  {
    level: "Intermediate / 12th Grade",
    degree: "Higher Secondary",
    institution: "AP Model School & Jr. College",
    location: "Visakhapatnam, Andhra Pradesh",
    duration: "2020 - 2022",
    grade: "Percentage: 81.2%",
    description:
      "Completed higher secondary education with a focus on the Science stream (PCM + Computer Science). Built a strong academic base in core subjects while actively participating in extracurricular and technical activities.",
    achievements: [
      "Represented school in debate/public speaking contests",
      "Anchored technical fests or annual days",
      
    ],
    subjects: ["Physics", "Chemistry", "Mathematics", "English"],
    color: "from-emerald-500 via-teal-500 to-cyan-500",
    icon: BookOpen,
    bgPattern: "college"
  },
  {
    level: "10th Grade",
    degree: "Secondary School",
    institution: "AP Model School & Jr. College",
    location: "Visakhapatnam, Andhra Pradesh",
    duration: "2020",
    grade: "Percentage: 96.2%",
    description:
      "Excelled in secondary education with top grades in all subjects. Developed a keen interest in problem-solving, mathematics, and analytical thinking. Recognized for academic excellence and active participation in extracurricular activities.",
    achievements: [
      "Participated in regional or state-level Science Exhibition",
      "Captain leader of a sports/cultural team",
      
    ],
    subjects: ["Mathematics", "Science", "English", "Social Studies"],
    color: "from-orange-500 via-red-500 to-pink-500",
    icon: Award,
    bgPattern: "school"
  }
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
      y: 100,
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

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/10 dark:to-indigo-900/10 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl"
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
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-6 shadow-2xl"
          >
            <GraduationCap className="w-10 h-10 text-white" />
          </motion.div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
            Educational Journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive academic foundation built through excellence and dedication
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {educationData.map((education, index) => (
            <motion.div
              key={education.level}
              variants={cardVariants}
              className="group relative"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Education Card */}
                <motion.div
                  whileHover={{ 
                    scale: 1.02,
                    rotateY: index % 2 === 0 ? 2 : -2,
                  }}
                  className={`lg:col-span-8 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'} relative`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300" />
                  <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-md p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/30">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                          className={`w-16 h-16 bg-gradient-to-r ${education.color} rounded-2xl flex items-center justify-center shadow-lg`}
                        >
                          <education.icon className="w-8 h-8 text-white" />
                        </motion.div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                            {education.degree}
                          </h3>
                          <p className="text-lg text-indigo-600 dark:text-indigo-400 font-semibold">
                            {education.institution}
                          </p>
                        </div>
                      </div>
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.5 }}
                        className={`px-4 py-2 bg-gradient-to-r ${education.color} text-white rounded-full text-sm font-bold shadow-lg`}
                      >
                        {education.level}
                      </motion.div>
                    </div>

                    {/* Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                        <Calendar className="w-5 h-5 text-indigo-500" />
                        <span className="font-medium">{education.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                        <MapPin className="w-5 h-5 text-indigo-500" />
                        <span className="font-medium">{education.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                        <Trophy className="w-5 h-5 text-yellow-500" />
                        <span className="font-bold text-green-600 dark:text-green-400">{education.grade}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {education.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-3 flex items-center space-x-2">
                        <Star className="w-5 h-5 text-yellow-500" />
                        <span>Key Achievements</span>
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {education.achievements.map((achievement, i) => (
                          <motion.div
                            key={achievement}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center space-x-2 text-gray-600 dark:text-gray-300"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                            <span className="text-sm">{achievement}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Subjects */}
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-3">
                        Core Subjects
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {education.subjects.map((subject, i) => (
                          <motion.span
                            key={subject}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05 }}
                            whileHover={{ scale: 1.1 }}
                            className={`px-3 py-1 bg-gradient-to-r ${education.color} text-white text-xs font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300`}
                          >
                            {subject}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Decorative Element */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className={`lg:col-span-4 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} flex justify-center`}
                >
                  <div className="relative">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className={`w-48 h-48 bg-gradient-to-r ${education.color} rounded-full opacity-20 blur-xl`}
                    />
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      className={`absolute inset-8 bg-gradient-to-r ${education.color} rounded-full flex items-center justify-center shadow-2xl`}
                    >
                      <education.icon className="w-16 h-16 text-white" />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;