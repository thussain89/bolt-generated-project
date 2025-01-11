import React, { useState } from 'react'
    import { FaMoon, FaSun, FaArrowDown } from 'react-icons/fa'
    import { FiMenu, FiX } from 'react-icons/fi'

    function App() {
      const [darkMode, setDarkMode] = useState(false)
      const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

      const toggleDarkMode = () => {
        setDarkMode(!darkMode)
        document.documentElement.classList.toggle('dark')
      }

      const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
        setMobileMenuOpen(false)
      }

      return (
        <div className="min-h-screen">
          {/* Navigation */}
          <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-dark/90 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-20 items-center">
                <div className="flex items-center">
                  <img src="/logo.svg" alt="Pulse Active Logo" className="h-10" />
                  <span className="ml-3 text-xl font-bold">Pulse Active</span>
                </div>
                <div className="hidden md:flex items-center space-x-8">
                  <button onClick={() => scrollToSection('hero')} className="hover:text-primary">Home</button>
                  <button onClick={() => scrollToSection('about')} className="hover:text-primary">About</button>
                  <button onClick={() => scrollToSection('features')} className="hover:text-primary">Features</button>
                  <button onClick={() => scrollToSection('pricing')} className="hover:text-primary">Pricing</button>
                  <button onClick={() => scrollToSection('testimonials')} className="hover:text-primary">Testimonials</button>
                  <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                    {darkMode ? <FaSun /> : <FaMoon />}
                  </button>
                </div>
                <div className="md:hidden flex items-center">
                  <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
                    {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                  </button>
                </div>
              </div>
            </div>
          </nav>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden fixed top-20 left-0 right-0 bg-white dark:bg-dark z-40">
              <div className="flex flex-col space-y-4 p-4">
                <button onClick={() => scrollToSection('hero')} className="text-left">Home</button>
                <button onClick={() => scrollToSection('about')} className="text-left">About</button>
                <button onClick={() => scrollToSection('features')} className="text-left">Features</button>
                <button onClick={() => scrollToSection('pricing')} className="text-left">Pricing</button>
                <button onClick={() => scrollToSection('testimonials')} className="text-left">Testimonials</button>
              </div>
            </div>
          )}

          {/* Hero Section */}
          <section id="hero" className="section flex items-center justify-center">
            <div className="max-w-4xl text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
                Transform Your Fitness with AI
              </h1>
              <p className="text-xl mb-8 animate-fade-in">
                Your personalized fitness journey starts here. AI-powered workout plans, nutrition tracking, and real-time coaching.
              </p>
              <div className="space-x-4 animate-slide-up">
                <button className="btn-primary">Get Started</button>
                <button className="btn-secondary">Learn More</button>
              </div>
              <div className="mt-12 animate-slide-up">
                <button onClick={() => scrollToSection('features')} className="p-4 rounded-full bg-primary/10 hover:bg-primary/20 transition-all">
                  <FaArrowDown className="animate-bounce" />
                </button>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="section bg-gray-100 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-12">About Pulse Active</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">AI-Driven Fitness Planning</h3>
                  <p className="text-lg">
                    Our advanced AI analyzes your fitness level, goals, and preferences to create personalized workout plans that evolve with you.
                  </p>
                  <p className="text-lg">
                    With real-time feedback and adaptive programming, you'll always have the perfect workout for your current state.
                  </p>
                </div>
                <div className="bg-gray-200 dark:bg-gray-700 rounded-lg p-8">
                  <h4 className="text-xl font-bold mb-4">Key Benefits:</h4>
                  <ul className="space-y-3">
                    <li>✓ Personalized workout plans</li>
                    <li>✓ Real-time performance tracking</li>
                    <li>✓ Adaptive AI coaching</li>
                    <li>✓ Nutritional guidance</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="section">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {/* Feature Cards */}
                <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-2xl font-bold mb-4">AI Workout Plans</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Get personalized workout plans based on your fitness level, goals, and preferences.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-2xl font-bold mb-4">Nutrition Tracking</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Track your daily macros and get personalized nutrition recommendations.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-2xl font-bold mb-4">AI Trainer Chat</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Real-time AI coaching for exercise customization and form correction.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section id="pricing" className="section bg-gray-100 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-12">Pricing</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-gray-700 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">Free Plan</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Basic features to get you started
                  </p>
                  <button className="btn-primary">Get Started</button>
                </div>
                <div className="bg-primary p-8 rounded-lg text-white">
                  <h3 className="text-2xl font-bold mb-4">Premium Plan</h3>
                  <p className="mb-6">
                    Full access to all features including AI Trainer Chat
                  </p>
                  <button className="btn-secondary">Upgrade Now</button>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section id="testimonials" className="section">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-12">What Our Users Say</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {/* Testimonial Cards */}
                <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    "Pulse Active transformed my fitness journey! The AI plans are spot on."
                  </p>
                  <p className="font-bold">- Sarah L.</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    "I love the real-time feedback and adaptive workouts. Highly recommend!"
                  </p>
                  <p className="font-bold">- Michael T.</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    "The nutrition tracking is a game-changer. Best fitness app I've used!"
                  </p>
                  <p className="font-bold">- Emily R.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-dark text-white py-12">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid md:grid-cols-4 gap-8">
                <div>
                  <img src="/logo.svg" alt="Pulse Active Logo" className="h-10 mb-4" />
                  <p className="text-gray-400">© 2023 Pulse Active. All rights reserved.</p>
                </div>
                <div>
                  <h4 className="font-bold mb-4">Quick Links</h4>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-400 hover:text-primary">About</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-primary">Features</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-primary">Pricing</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-primary">Contact</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-4">Contact Us</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>Email: support@pulseactive.com</li>
                    <li>Phone: +1 (555) 123-4567</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-primary">Facebook</a>
                    <a href="#" className="text-gray-400 hover:text-primary">Twitter</a>
                    <a href="#" className="text-gray-400 hover:text-primary">Instagram</a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      )
    }

    export default App
