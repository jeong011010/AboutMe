import { motion } from 'framer-motion'
import { HiAcademicCap, HiBriefcase, HiUser } from 'react-icons/hi'

const About = () => {
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
    <section id="about" className="section-container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0, margin: "0px 0px -200px 0px" }}
        variants={fadeInUp}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">About Me</span>
        </h2>
        <p className="text-gray-400 text-lg">프론트엔드 개발자로서의 저를 소개합니다</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0, margin: "0px 0px -100px 0px" }}
          variants={fadeInUp}
          className="card text-center"
        >
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-500/20 flex items-center justify-center">
            <HiUser className="w-8 h-8 text-blue-400" />
          </div>
          <h3 className="text-xl font-bold mb-2">개인 소개</h3>
          <p className="text-gray-400">
            "사용자가 실제로 겪는 문제를 어떻게 해결할 것인가"에 집중하는 프론트엔드 개발자입니다.
            좋은 코드보다 사용자에게 남는 경험을 만드는 것을 추구합니다.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
          className="card text-center"
        >
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-500/20 flex items-center justify-center">
            <HiAcademicCap className="w-8 h-8 text-purple-400" />
          </div>
          <h3 className="text-xl font-bold mb-2">학력</h3>
          <p className="text-gray-400">
            순천향대학교 컴퓨터소프트웨어공학과
            <br />
            Next.js App Router 기반 FE 아키텍처와 사용자 중심 기능 설계에 집중하고 있습니다.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.4 }}
          className="card text-center"
        >
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-pink-500/20 flex items-center justify-center">
            <HiBriefcase className="w-8 h-8 text-pink-400" />
          </div>
          <h3 className="text-xl font-bold mb-2">리더십</h3>
          <p className="text-gray-400">
            구름톤 유니브 순천향대 대표
            <br />
            오늘 순밥 팀 리더
            <br />
            Seasonthon 우수상 수상 (Wedit)
          </p>
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ delay: 0.6 }}
        className="mt-16 card"
      >
        <h3 className="text-2xl font-bold mb-4">개발 철학</h3>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-semibold text-lg mb-1">실서비스 경험</h4>
            <p className="text-gray-400">
              교내 실서비스 "오늘 순밥"을 기획 → 개발 → 출시 → 운영까지 직접 리딩하며
              실사용 데이터 기반 문제 해결 사이클을 온전히 경험했습니다.
            </p>
          </div>
          <div className="border-l-4 border-purple-500 pl-4">
            <h4 className="font-semibold text-lg mb-1">사용자 중심 설계</h4>
            <p className="text-gray-400">
              Google Analytics를 활용한 트래픽 분석과 서버 최적화로 운영 비용을 절감했습니다.
              사용자 피드백을 빠르게 반영할 수 있는 점검/업데이트 체계를 구축했습니다.
            </p>
          </div>
          <div className="border-l-4 border-pink-500 pl-4">
            <h4 className="font-semibold text-lg mb-1">기술로 문제 해결</h4>
            <p className="text-gray-400">
              기술은 사용자와 비즈니스의 연결을 단순하게 만드는 수단이라고 생각합니다.
              실제 사용자의 삶에 변화를 주는 프로덕트를 만들고자 합니다.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
