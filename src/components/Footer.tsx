import { motion } from 'framer-motion'
import { FaGithub, FaBlog } from 'react-icons/fa'
import { HiCode } from 'react-icons/hi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900/50 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center space-x-2 mb-4 md:mb-0"
          >
            <HiCode className="w-6 h-6 text-blue-400" />
            <span className="text-lg font-semibold">김정훈</span>
            <span className="text-gray-500">|</span>
            <span className="text-gray-400">Frontend Developer</span>
            <span className="text-gray-500">|</span>
            <span className="text-gray-400 text-sm">순천향대학교 컴퓨터소프트웨어공학과</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex space-x-6 mb-4 md:mb-0"
          >
            <a
              href="https://github.com/jeong011010"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://velog.io/@jeong011010/posts"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              <FaBlog size={24} />
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-sm"
          >
            © {currentYear} 김정훈. All rights reserved.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center text-gray-500 text-sm"
        >
          <p>Made with ❤️ using React, TypeScript, and Tailwind CSS</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
