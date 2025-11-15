import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { SiCplusplus, SiCsharp, SiPython, SiReact } from 'react-icons/si'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

interface Repository {
  id: number
  name: string
  description: string
  html_url: string
  homepage: string
  language: string
  stargazers_count: number
  forks_count: number
}

const Projects = () => {
  const [repos, setRepos] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/jeong011010/repos?sort=updated&per_page=6')
        const data = await response.json()
        setRepos(data)
        setLoading(false)
      } catch (error) {
        console.error('Failed to fetch repositories:', error)
        // Fallback data
        setRepos([
          {
            id: 1,
            name: 'climbmate-ai',
            description: 'AI-powered climbing problem analyzer with FastAPI + React',
            html_url: 'https://github.com/jeong011010/climbmate-ai',
            homepage: '',
            language: 'Python',
            stargazers_count: 1,
            forks_count: 0,
          },
          {
            id: 2,
            name: 'solved.ac',
            description: 'Algorithm problem solving repository',
            html_url: 'https://github.com/jeong011010/solved.ac',
            homepage: '',
            language: 'C++',
            stargazers_count: 1,
            forks_count: 0,
          },
          {
            id: 3,
            name: 'VRmuseum',
            description: 'VR museum project built with Unity and C#',
            html_url: 'https://github.com/jeong011010/VRmuseum',
            homepage: '',
            language: 'C#',
            stargazers_count: 0,
            forks_count: 0,
          },
        ])
        setLoading(false)
      }
    }
    fetchRepos()
  }, [])

  const getLanguageIcon = (language: string) => {
    switch (language) {
      case 'TypeScript':
      case 'JavaScript':
      case 'React':
        return SiReact
      case 'Python':
        return SiPython
      case 'C++':
        return SiCplusplus
      case 'C#':
        return SiCsharp
      default:
        return SiReact
    }
  }

  const getLanguageColor = (language: string) => {
    switch (language) {
      case 'TypeScript':
      case 'JavaScript':
      case 'React':
        return 'text-blue-400'
      case 'Python':
        return 'text-yellow-400'
      case 'C++':
        return 'text-blue-500'
      case 'C#':
        return 'text-purple-400'
      default:
        return 'text-gray-400'
    }
  }

  // 주요 프로젝트만 표시 (상세 페이지가 있는 프로젝트)
  const featuredProjects = projects.filter(p => p.overview)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="projects" className="section-container">
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
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg">제가 개발한 프로젝트들을 소개합니다</p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <motion.div
                key={project.name}
                variants={itemVariants}
                className="card overflow-hidden group hover:scale-105 transition-transform duration-300 flex flex-col h-full"
              >
                <Link to={`/project/${project.id}`} className="flex flex-col h-full">
                  {/* Project Image/Thumbnail */}
                  <div className={`bg-gradient-to-br ${project.color} p-6 relative overflow-hidden`}>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                        backgroundSize: '30px 30px'
                      }}></div>
                    </div>
                    
                    {/* Project Logo or Image */}
                    {project.images?.logo ? (
                      <div className="relative z-10 mb-4 flex justify-center">
                        <div className="w-24 h-24 rounded-lg bg-white/20 backdrop-blur-sm p-2 flex items-center justify-center shadow-lg border-2 border-white/30">
                          <img 
                            src={project.images.logo} 
                            alt={project.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                    ) : (project.images?.thumbnail || (project.images?.heroSlides && project.images.heroSlides.length > 0)) ? (
                      <div className="relative z-10 mb-4 flex justify-center">
                        <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm p-1.5 flex items-center justify-center shadow-lg border-2 border-white/30">
                          <img 
                            src={project.images?.thumbnail || project.images?.heroSlides?.[0]} 
                            alt={project.name}
                            className="w-full h-full object-cover rounded-full"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="relative z-10 mb-4 flex justify-center">
                        <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg border-2 border-white/30">
                          <span className="text-3xl font-bold text-white">{project.name.charAt(0)}</span>
                        </div>
                      </div>
                    )}
                    
                    <div className="text-center relative z-10">
                      <h3 className="text-xl font-bold text-white mb-1">{project.name}</h3>
                      {project.role && (
                        <p className="text-white/80 text-xs mb-3">{project.role}</p>
                      )}
                      <div className="flex flex-wrap justify-center gap-1.5">
                        {project.tech.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="px-2 py-0.5 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white">
                            +{project.tech.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Project Info */}
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-gray-300 mb-4 leading-relaxed text-sm line-clamp-3 flex-grow">
                      {project.description}
                    </p>
                    
                    {project.achievements && project.achievements.length > 0 && (
                      <div className="mb-4 pb-4 border-b border-gray-700">
                        <ul className="space-y-1.5 text-gray-400 text-xs">
                          {project.achievements.slice(0, 2).map((achievement, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="mr-1.5">✨</span>
                              <span className="line-clamp-1">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors">
                        자세히 보기 →
                      </span>
                      <div className="flex gap-2">
                        <a
                          href={project.github}
                          onClick={(e) => e.stopPropagation()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                          title="GitHub"
                        >
                          <FaGithub className="text-sm" />
                        </a>
                        {project.demo && (
                          <a
                            href={project.demo}
                            onClick={(e) => e.stopPropagation()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
                            title="Demo"
                          >
                            <FaExternalLinkAlt className="text-sm" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* GitHub Repositories */}
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <h3 className="text-2xl font-bold mb-6">GitHub Repositories</h3>
        </motion.div>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="card animate-pulse">
                <div className="h-4 bg-gray-700 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-700 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-700 rounded w-5/6"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo) => {
              const LanguageIcon = getLanguageIcon(repo.language || 'TypeScript')
              const languageColor = getLanguageColor(repo.language || 'TypeScript')

              return (
                <motion.div
                  key={repo.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="card group cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-xl font-bold group-hover:text-blue-400 transition-colors">
                      {repo.name}
                    </h4>
                    <LanguageIcon className={`w-6 h-6 ${languageColor}`} />
                  </div>
                  <p className="text-gray-400 mb-4 line-clamp-2">
                    {repo.description || 'No description available'}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      {repo.language && (
                        <span className="flex items-center space-x-1">
                          <LanguageIcon className={`w-4 h-4 ${languageColor}`} />
                          <span>{repo.language}</span>
                        </span>
                      )}
                      <span className="flex items-center space-x-1">
                        <FaGithub />
                        <span>{repo.stargazers_count}</span>
                      </span>
                    </div>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </motion.div>
              )
            })}
          </div>
        )}
      </motion.div>
    </section>
  )
}

export default Projects
