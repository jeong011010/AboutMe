import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { Link, useLocation } from 'react-router-dom'

interface NavbarProps {
  scrollY: number
}

const Navbar = ({ scrollY }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const location = useLocation()

  const navItems = [
    { name: 'Home', href: '/#home', hash: 'home' },
    { name: 'About', href: '/#about', hash: 'about' },
    { name: 'Skills', href: '/#skills', hash: 'skills' },
    { name: 'Projects', href: '/#projects', hash: 'projects' },
    { name: 'Contact', href: '/#contact', hash: 'contact' },
  ]

  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection('')
      return
    }

    const handleScroll = () => {
      const sections = navItems.map(item => item.hash)
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/">
            <motion.div
              className="text-xl font-bold text-white cursor-pointer flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-blue-400">&lt;</span>
              <span>Portfolio</span>
              <span className="text-blue-400">/&gt;</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  if (location.pathname !== '/') {
                    // 홈이 아닌 경우 홈으로 이동 후 스크롤
                    window.location.href = item.href
                    setTimeout(() => {
                      const element = document.getElementById(item.hash)
                      element?.scrollIntoView({ behavior: 'smooth' })
                    }, 100)
                  } else {
                    // 홈에 있을 때는 바로 스크롤
                    const element = document.getElementById(item.hash)
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }
                }}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === item.hash
                    ? 'text-blue-400'
                    : 'text-gray-300 hover:text-blue-400'
                }`}
              >
                {item.name}
                {activeSection === item.hash && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-gray-900/95 backdrop-blur-md"
        >
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  setIsOpen(false)
                  if (location.pathname !== '/') {
                    window.location.href = item.href
                    setTimeout(() => {
                      const element = document.getElementById(item.hash)
                      element?.scrollIntoView({ behavior: 'smooth' })
                    }, 100)
                  } else {
                    const element = document.getElementById(item.hash)
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }
                }}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  activeSection === item.hash
                    ? 'text-blue-400 bg-gray-800'
                    : 'text-gray-300 hover:text-blue-400 hover:bg-gray-800'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar
