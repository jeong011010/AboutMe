import { motion } from 'framer-motion'
import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import ImageSlider from '../components/ImageSlider'
import Navbar from '../components/Navbar'
import { getProjectById } from '../data/projects'

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const project = id ? getProjectById(id) : undefined

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">프로젝트를 찾을 수 없습니다</h1>
          <Link to="/" className="text-blue-400 hover:text-blue-300">
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    )
  }

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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <Navbar scrollY={0} />
      
      <div className="section-container pt-32">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <button
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
          >
            <FaArrowLeft />
            <span>뒤로 가기</span>
          </button>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className={`bg-gradient-to-br ${project.color} rounded-xl p-6 mb-8 text-white relative overflow-hidden`}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          
          {/* Background Image Overlay */}
          {project.images?.heroSlides && project.images.heroSlides.length > 0 && (
            <div className="absolute inset-0 opacity-20">
              <img 
                src={project.images.heroSlides[0]} 
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-transparent"></div>
            </div>
          )}
          
          <div className="flex items-center gap-6 relative z-10">
            {/* Left: Logo/Image */}
            <div className="flex-shrink-0">
              {project.images?.logo ? (
                <div className="w-24 h-24 rounded-xl bg-white/20 backdrop-blur-md p-2 flex items-center justify-center shadow-lg border border-white/30">
                  <img 
                    src={project.images.logo} 
                    alt={`${project.name} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
              ) : project.images?.heroSlides && project.images.heroSlides.length > 0 ? (
                <div className="w-24 h-24 rounded-xl bg-white/20 backdrop-blur-md p-2 flex items-center justify-center shadow-lg border border-white/30">
                  <img 
                    src={project.images.heroSlides[0]} 
                    alt={`${project.name} logo`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ) : (
                <div className="w-24 h-24 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-lg border border-white/30">
                  <span className="text-4xl font-bold">{project.name.charAt(0)}</span>
                </div>
              )}
            </div>

            {/* Right: Project Info */}
            <div className="flex-grow min-w-0">
              <div className="flex flex-wrap items-center gap-4 mb-3">
                <h1 className="text-2xl md:text-3xl font-bold">{project.name}</h1>
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
                    title="GitHub"
                  >
                    <FaGithub className="text-sm" />
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
                      title="Demo"
                    >
                      <FaExternalLinkAlt className="text-sm" />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-white/90 mb-3 text-sm md:text-base">{project.description}</p>
              <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-white/80">
                {project.role && (
                  <span>역할: {project.role}</span>
                )}
                {project.period && (
                  <span>• 기간: {project.period}</span>
                )}
                {project.team && (
                  <span>• 팀: {project.team}</span>
                )}
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* Hero Slides */}
          {project.images?.heroSlides && project.images.heroSlides.length > 0 && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
              className="card"
            >
              <ImageSlider images={project.images.heroSlides} alt={`${project.name} hero`} />
            </motion.div>
          )}

          {/* Overview */}
          {project.overview && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.15 }}
              className="card"
            >
              <h2 className="text-3xl font-bold mb-4 gradient-text">살펴보기</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                {project.overview}
              </p>
            </motion.div>
          )}

          {/* Screenshots - Only show if screenshots exist */}
          {project.images?.screenshots && project.images.screenshots.length > 0 && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="card"
            >
              <h2 className="text-3xl font-bold mb-6 gradient-text">서비스 화면</h2>
              <ImageSlider images={project.images.screenshots} alt={`${project.name} service screenshots`} />
            </motion.div>
          )}

          {/* Contributions / 개발 주요사항 */}
          {project.contributions && project.contributions.length > 0 && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="card"
            >
              <h2 className="text-3xl font-bold mb-6 gradient-text">개발 주요사항</h2>
              <ul className="space-y-3">
                {project.contributions.map((contribution, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1 text-xl">•</span>
                    <span className="text-gray-300 text-lg">{contribution}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Key Features with Troubleshooting */}
          {project.keyFeatures && project.keyFeatures.map((feature, featureIndex) => (
            <motion.div
              key={featureIndex}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.3 + featureIndex * 0.1 }}
              className="card"
            >
              <h2 className="text-3xl font-bold mb-4 gradient-text">{feature.title}</h2>
              <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                {feature.description}
              </p>

              {/* Feature Images */}
              {feature.images && feature.images.length > 0 && (
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {feature.images.map((img, imgIndex) => (
                    <div key={imgIndex} className="rounded-lg overflow-hidden border border-gray-700 bg-gray-800/50">
                      <img 
                        src={img} 
                        alt={`${feature.title} ${imgIndex + 1}`}
                        className="w-full h-auto max-h-[400px] object-contain"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Troubleshooting Section */}
              {feature.troubleshooting && (
                <div className="mt-8 pt-8 border-t border-gray-700">
                  <h3 className="text-2xl font-bold mb-6 text-yellow-400">트러블 슈팅</h3>
                  
                  {/* Problem */}
                  <div className="mb-6">
                    <div className="flex items-center mb-3">
                      <span className="text-red-400 text-2xl mr-2">●</span>
                      <h4 className="text-xl font-semibold text-red-400">문제 배경</h4>
                    </div>
                    <p className="text-gray-300 leading-relaxed pl-8">
                      {feature.troubleshooting.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="mb-6">
                    <div className="flex items-center mb-3">
                      <span className="text-yellow-400 text-2xl mr-2">☆</span>
                      <h4 className="text-xl font-semibold text-yellow-400">해결 방법</h4>
                    </div>
                    <p className="text-gray-300 leading-relaxed pl-8">
                      {feature.troubleshooting.solution}
                    </p>
                  </div>

                  {/* Before/After Comparison */}
                  {feature.troubleshooting.comparison && (
                    <div className="mb-6">
                      <div className="flex items-center mb-3">
                        <span className="text-blue-400 text-2xl mr-2">💡</span>
                        <h4 className="text-xl font-semibold text-blue-400">이전 코드와 비교</h4>
                      </div>
                      <p className="text-gray-300 leading-relaxed pl-8">
                        {feature.troubleshooting.comparison}
                      </p>
                    </div>
                  )}

                  {/* Before/After Images */}
                  {feature.troubleshooting.images && (
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      {feature.troubleshooting.images.before && (
                        <div>
                          <p className="text-gray-400 mb-2 text-sm font-semibold">throttle 적용 전</p>
                          <div className="rounded-lg overflow-hidden border border-gray-700 bg-gray-800/50">
                            <img 
                              src={feature.troubleshooting.images.before} 
                              alt="Before throttle"
                              className="w-full h-auto max-h-[400px] object-contain"
                            />
                          </div>
                        </div>
                      )}
                      {feature.troubleshooting.images.after && (
                        <div>
                          <p className="text-gray-400 mb-2 text-sm font-semibold">throttle 적용 후</p>
                          <div className="rounded-lg overflow-hidden border border-gray-700 bg-gray-800/50">
                            <img 
                              src={feature.troubleshooting.images.after} 
                              alt="After throttle"
                              className="w-full h-auto max-h-[400px] object-contain"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Learnings */}
                  {feature.troubleshooting.learnings && feature.troubleshooting.learnings.length > 0 && (
                    <div>
                      <div className="flex items-center mb-3">
                        <span className="text-green-400 text-2xl mr-2">💰</span>
                        <h4 className="text-xl font-semibold text-green-400">해당 경험을 통해 알게된 점</h4>
                      </div>
                      <ul className="space-y-2 pl-8">
                        {feature.troubleshooting.learnings.map((learning, learningIndex) => (
                          <li key={learningIndex} className="flex items-start">
                            <span className="text-green-400 mr-2 mt-1">•</span>
                            <span className="text-gray-300">{learning}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          ))}

          {/* Architecture */}
          {project.architecture && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.5 }}
              className="card"
            >
              <h2 className="text-3xl font-bold mb-4 gradient-text">개발 관련 설명</h2>
              {project.images?.architecture && (
                <div className="mb-6 rounded-lg overflow-hidden border border-gray-700 bg-gray-800/50">
                  <img 
                    src={project.images.architecture} 
                    alt={`${project.name} architecture`}
                    className="w-full h-auto max-h-[500px] object-contain"
                  />
                </div>
              )}
              <p className="text-gray-300 leading-relaxed text-lg">
                {project.architecture.description}
              </p>
            </motion.div>
          )}

          {/* Achievements */}
          {project.achievements && project.achievements.length > 0 && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.6 }}
              className="card"
            >
              <h2 className="text-3xl font-bold mb-6 gradient-text">주요 성과</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-start p-4 bg-gray-700/50 rounded-lg"
                  >
                    <span className="text-yellow-400 mr-3 text-xl">✨</span>
                    <span className="text-gray-300">{achievement}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ProjectDetail