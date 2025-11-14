import { motion } from 'framer-motion'
import { skills } from '../data/skills'

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="skills" className="section-container bg-gray-800/30">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0, margin: "0px 0px -200px 0px" }}
        variants={containerVariants}
      >
        <motion.div
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">기술 ⌨️</span>
          </h2>
          <p className="text-gray-400 text-lg">각 스택별 핵심 역량을 정리했습니다</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="card group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Icon
                    className={`w-10 h-10 ${skill.color} group-hover:scale-110 transition-transform flex-shrink-0`}
                  />
                  <h3 className="text-xl font-semibold text-gray-200">{skill.name}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.capabilities.map((capability, idx) => (
                    <li key={idx} className="text-gray-300 text-sm flex items-start">
                      <span className="text-blue-400 mr-2 mt-1">•</span>
                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

      </motion.div>
    </section>
  )
}

export default Skills
