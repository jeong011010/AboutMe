import { motion } from 'framer-motion'
import { FaBlog, FaEnvelope, FaGithub } from 'react-icons/fa'
import { HiArrowDown, HiCode } from 'react-icons/hi'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="section-container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-6"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1"
            >
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                <HiCode className="w-16 h-16 text-blue-400" />
              </div>
            </motion.div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="gradient-text">Frontend Developer</span>
            <br />
            <span className="text-white">김정훈</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 mb-4 max-w-2xl mx-auto"
          >
            데이터를 기반으로 사용자의 문제를 해결하는 프론트엔드 개발자입니다.
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
          >
            단순한 UI 개발보다 "사용자가 실제로 겪는 문제를 어떻게 해결할 것인가"에 집중합니다.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6 mb-12"
          >
            <motion.a
              href="https://github.com/jeong011010"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:text-white hover:bg-blue-600 transition-colors"
              title="GitHub"
            >
              <FaGithub size={24} />
            </motion.a>
            <motion.a
              href="https://velog.io/@jeong011010/posts"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:text-white hover:bg-blue-600 transition-colors"
              title="Velog"
            >
              <FaBlog size={24} />
            </motion.a>
            <motion.a
              href="mailto:jeong01101095@gmail.com"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:text-white hover:bg-blue-600 transition-colors"
              title="Email"
            >
              <FaEnvelope size={24} />
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center"
          >
            <motion.a
              href="#about"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <HiArrowDown size={32} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  )
}

export default Hero
