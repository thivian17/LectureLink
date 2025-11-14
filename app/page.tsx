export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="px-8 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-2xl">🎙️</span>
            </div>
            <span className="text-2xl font-bold text-gray-800">LectureLink</span>
          </div>
          
          <div className="flex gap-4">
            <a href="/login">
              <button className="px-6 py-2.5 text-gray-700 hover:text-gray-900 font-medium transition">
                Log in
              </button>
            </a>
            <a href="/dashboard">
              <button className="px-6 py-2.5 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transition shadow-lg shadow-blue-200">
                Try Demo
              </button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-8 pt-20 pb-32 text-center fade-in">
        <div className="mb-8">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-8">
            ✨ Never miss a lecture again
          </span>
        </div>
        
        <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Your lectures,
          <br />
          <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
            brilliantly organized
          </span>
        </h1>
        
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
          Record, transcribe, and transform your lectures into structured study guides. 
          LectureLink helps you focus on learning, not note-taking.
        </p>
        
        <div className="flex gap-4 justify-center mb-16">
          <a href="/record">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl text-lg font-semibold hover:shadow-2xl hover:shadow-blue-300 transition transform hover:scale-105 flex items-center gap-3">
              <span className="text-2xl">🎙️</span>
              Start Recording
            </button>
          </a>
          
          <a href="#features">
            <button className="px-8 py-4 bg-white text-gray-700 rounded-2xl text-lg font-semibold hover:bg-gray-50 transition border-2 border-gray-200">
              Learn More
            </button>
          </a>
        </div>

        {/* Visual Preview */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 blur-3xl opacity-20 rounded-3xl"></div>
          <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <span className="text-sm text-gray-500 font-medium ml-2">Dashboard</span>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 mb-1">42</div>
                <div className="text-sm text-gray-600">Lectures</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl">
                <div className="text-3xl font-bold text-purple-600 mb-1">87h</div>
                <div className="text-sm text-gray-600">Recorded</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl">
                <div className="text-3xl font-bold text-green-600 mb-1">3.8</div>
                <div className="text-sm text-gray-600">Avg GPA</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-semibold">Recording Active</span>
                <div className="w-3 h-3 bg-red-400 rounded-full recording-pulse"></div>
              </div>
              <div className="text-5xl font-mono font-bold mb-4">00:42:18</div>
              <div className="flex gap-1 h-16 items-end">
                {[40, 60, 45, 80, 55, 70, 50, 85, 60, 75, 55, 90, 65, 70, 50].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-white/40 rounded-t"
                    style={{ height: `${h}%` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything you need to excel
            </h2>
            <p className="text-xl text-gray-600">
              Powerful features designed for student success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 smooth-hover">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg shadow-blue-200">
                📝
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Structured Summaries
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Get organized summaries with key concepts, definitions, and important points automatically extracted from your lectures.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-purple-100 smooth-hover">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg shadow-purple-200">
                ✅
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Action Items
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Never miss an assignment or deadline. We extract action items, homework, and important dates automatically.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border border-green-100 smooth-hover">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg shadow-green-200">
                🎯
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Key Concepts
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Focus on what matters. Our AI identifies and highlights the most important concepts for exam preparation.
              </p>
            </div>
          </div>

          {/* Additional Features */}
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-2xl border border-yellow-100 smooth-hover">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 shadow-lg shadow-yellow-200">
                  🔍
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Searchable Transcripts
                  </h3>
                  <p className="text-gray-600">
                    Find any topic or quote instantly with full-text search across all your lectures.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl border border-red-100 smooth-hover">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-500 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 shadow-lg shadow-red-200">
                  📚
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Study Reports
                  </h3>
                  <p className="text-gray-600">
                    Get comprehensive study guides with practice questions and concept explanations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-5xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Simple, student-friendly pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that fits your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Student Plan */}
            <div className="bg-white rounded-3xl p-8 border-2 border-gray-200 smooth-hover">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Student</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold text-blue-600">$5.99</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="text-green-500 text-xl">✓</span>
                  50 hours of recording per month
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="text-green-500 text-xl">✓</span>
                  AI-powered summaries
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="text-green-500 text-xl">✓</span>
                  Action item extraction
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="text-green-500 text-xl">✓</span>
                  Practice quiz generation
                </li>
              </ul>

              <button className="w-full py-4 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transition">
                Get Started
              </button>
            </div>

            {/* Pro Plan */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-8 text-white relative smooth-hover shadow-2xl shadow-blue-300">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                  MOST POPULAR
                </span>
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Pro</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold">$11.99</span>
                  <span className="text-blue-100">/month</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <span className="text-yellow-300 text-xl">✓</span>
                  Unlimited recording
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-yellow-300 text-xl">✓</span>
                  Advanced AI summaries
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-yellow-300 text-xl">✓</span>
                  Advanced study reports
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-yellow-300 text-xl">✓</span>
                  AI powered tutor
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-yellow-300 text-xl">✓</span>
                  Priority AI processing
                </li>
              </ul>

              <button className="w-full py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition">
                Upgrade to Pro
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to ace your classes?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Join thousands of students who are studying smarter with LectureLink
          </p>
          <a href="/record">
            <button className="px-10 py-5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl text-xl font-semibold hover:shadow-2xl hover:shadow-blue-300 transition transform hover:scale-105 inline-flex items-center gap-3">
              <span className="text-3xl">🎙️</span>
              Start Your First Lecture
            </button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-xl">🎙️</span>
            </div>
            <span className="text-xl font-bold text-white">LectureLink</span>
          </div>
          <p className="text-sm mb-6">
            Helping students learn better, one lecture at a time.
          </p>
          <div className="flex gap-6 justify-center text-sm">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </div>
          <p className="text-xs mt-6">
            © 2025 LectureLink. Made with ❤️ by students for students.
          </p>
        </div>
      </footer>
    </main>
  )
}