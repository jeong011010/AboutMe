import { motion } from 'framer-motion'
import { FaGithub, FaBlog, FaEnvelope, FaLinkedin } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

const Contact = () => {
  const contactInfo = [
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'github.com/jeong011010',
      href: 'https://github.com/jeong011010',
      color: 'text-gray-100',
    },
    {
      icon: FaBlog,
      label: 'Blog',
      value: 'velog.io/@jeong011010',
      href: 'https://velog.io/@jeong011010/posts',
      color: 'text-green-400',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/정훈-김',
      href: 'https://www.linkedin.com/in/%EC%A0%95%ED%9B%88-%EA%B9%80-b05009343/',
      color: 'text-blue-500',
    },
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'jeong01101095@gmail.com',
      href: 'mailto:jeong01101095@gmail.com',
      color: 'text-blue-400',
    },
  ]

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="contact" className="section-container bg-gray-800/30">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0, margin: "0px 0px -200px 0px" }}
        variants={fadeInUp}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">Contact</span>
        </h2>
        <p className="text-gray-400 text-lg">
          함께 일하고 싶으신가요? 언제든지 연락주세요!
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon
            return (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={contact.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0, margin: "0px 0px -100px 0px" }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="card text-center group"
              >
                <Icon
                  className={`w-12 h-12 mx-auto mb-4 ${contact.color} group-hover:scale-110 transition-transform`}
                />
                <h3 className="text-lg font-semibold mb-2">{contact.label}</h3>
                <p className="text-gray-400 text-sm break-all">{contact.value}</p>
              </motion.a>
            )
          })}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0, margin: "0px 0px -100px 0px" }}
          variants={fadeInUp}
          className="card text-center"
        >
          <h3 className="text-2xl font-bold mb-4">연락 주시면 빠르게 답변드리겠습니다!</h3>
          <p className="text-gray-400 mb-6">
            프로젝트 협업, 기술 질문, 또는 단순히 인사하고 싶으시다면 언제든지 연락주세요.
          </p>
          <div className="flex justify-center space-x-4">
            <motion.a
              href="https://github.com/jeong011010"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors flex items-center space-x-2"
            >
              <FaGithub />
              <span>GitHub 방문</span>
            </motion.a>
            <motion.a
              href="mailto:jeong01101095@gmail.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors flex items-center space-x-2"
            >
              <HiMail />
              <span>이메일 보내기</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
