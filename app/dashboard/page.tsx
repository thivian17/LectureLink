export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Top Navigation Bar */}
      <nav className="bg-white border-b border-gray-200 px-8 py-4 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">
            🎙️ LectureLink
          </h1>
          <div className="flex gap-4 items-center">
            <button className="text-gray-600 hover:text-gray-900 transition">
              🔍 Search
            </button>
            <button className="text-gray-600 hover:text-gray-900 transition">
              ⚙️ Settings
            </button>
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
              T
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* Welcome Header */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, Thivian! 👋
          </h2>
          <p className="text-gray-600">Ready to record your next lecture?</p>
        </div>

        {/* UNIFIED RECORDING CARD - BLUE GRADIENT */}
        <div className="bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 rounded-2xl shadow-xl p-6 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* LEFT SIDE - Recording Controls */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                🎙️ Record Lecture
              </h3>

              {/* Timer */}
              <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-4 backdrop-blur-sm text-center">
                <div className="text-5xl font-mono font-bold text-white mb-1">
                  00:00:00
                </div>
                <p className="text-blue-50 text-sm">Ready to Record</p>
              </div>

              {/* Waveform */}
              <div className="bg-blue-900 bg-opacity-30 rounded-lg p-3 h-20 flex items-center justify-center overflow-hidden mb-4">
                <div className="flex gap-1 items-end h-14 w-full waveform-animated">
                  {[3, 8, 4, 12, 6, 15, 9, 5, 11, 7, 14, 8, 4, 10, 6, 13, 7, 5, 12, 8, 6, 14, 9, 4, 11].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-white rounded-full transition-all duration-300"
                      style={{ 
                        height: `${height * 4}%`,
                        animationDelay: `${i * 0.05}s`
                      }}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Control Buttons */}
              <div className="space-y-3">
                <button className="w-full bg-white text-blue-600 py-3 rounded-lg font-bold text-lg hover:bg-blue-50 transition flex items-center justify-center gap-2 shadow-lg hover:scale-105 transform duration-200">
                  <span className="text-2xl">●</span>
                  Start Recording
                </button>

                <button className="w-full bg-blue-800 text-white py-2 rounded-lg font-semibold transition flex items-center justify-center gap-2 opacity-50 cursor-not-allowed">
                  <span>⏸</span>
                  Pause Recording
                </button>

                <button className="w-full bg-white bg-opacity-20 text-white py-2 rounded-lg font-semibold hover:bg-opacity-30 transition flex items-center justify-center gap-2 backdrop-blur-sm">
                  <span>📤</span>
                  Upload File Instead
                </button>
              </div>
            </div>

            {/* RIGHT SIDE - Lecture Details */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                📝 Lecture Details
              </h3>

              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Lecture Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Week 10 - Deep Learning"
                    className="w-full px-4 py-3 border-2 border-white border-opacity-30 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg focus:ring-2 focus:ring-white focus:border-white transition text-white placeholder-blue-100"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Course *
                  </label>
                  <select className="w-full px-4 py-3 border-2 border-white border-opacity-30 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg focus:ring-2 focus:ring-white focus:border-white transition text-white">
                    <option className="text-gray-900">Select a course</option>
                    <option className="text-gray-900">MMAI 5500 - Applied ML</option>
                    <option className="text-gray-900">MMAI 5400 - Data Mining</option>
                    <option className="text-gray-900">MMAI 5300 - Analytics</option>
                    <option className="text-gray-900">+ Add New Course</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Quality
                    </label>
                    <select className="w-full px-3 py-2 text-sm border-2 border-white border-opacity-30 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg focus:ring-2 focus:ring-white transition text-white">
                      <option className="text-gray-900">High</option>
                      <option className="text-gray-900">Medium</option>
                      <option className="text-gray-900">Low</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Tags
                    </label>
                    <input
                      type="text"
                      placeholder="optional"
                      className="w-full px-3 py-2 text-sm border-2 border-white border-opacity-30 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg focus:ring-2 focus:ring-white transition text-white placeholder-blue-100"
                    />
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-2 pt-2">
                  <div className="bg-white bg-opacity-20 rounded-lg p-3 backdrop-blur-sm text-center">
                    <p className="text-2xl font-bold text-white">35</p>
                    <p className="text-xs text-blue-50">Lectures</p>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-3 backdrop-blur-sm text-center">
                    <p className="text-2xl font-bold text-white">87h</p>
                    <p className="text-xs text-blue-50">Recorded</p>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-3 backdrop-blur-sm text-center">
                    <p className="text-2xl font-bold text-white">12/50</p>
                    <p className="text-xs text-blue-50">This Month</p>
                  </div>
                </div>

                {/* Plan Badge */}
                <div className="bg-white bg-opacity-20 rounded-lg p-3 backdrop-blur-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-white">Student Plan - $5.99/mo</span>
                    <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                      ACTIVE
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MY COURSES SECTION */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              📚 My Courses
            </h2>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-semibold hover:scale-105 transform duration-200">
              + Add Course
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Course Card 1 */}
            <div className="bg-white p-5 rounded-xl shadow-md border-2 border-gray-200 hover:border-blue-500 hover:shadow-xl transition cursor-pointer transform hover:scale-105 duration-200">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-bold text-blue-600 mb-1">
                    MMAI 5500
                  </h3>
                  <p className="text-gray-600 text-sm">Applied Machine Learning</p>
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                  Active
                </span>
              </div>
              <div className="flex justify-between text-sm text-gray-500 mb-3">
                <span>📝 12 lectures</span>
                <span>⏱️ 2 days ago</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div className="bg-blue-600 h-2 rounded-full transition-all duration-500" style={{ width: '75%' }}></div>
              </div>
              <p className="text-xs text-gray-500">Week 10 of 13</p>
            </div>

            {/* Course Card 2 */}
            <div className="bg-white p-5 rounded-xl shadow-md border-2 border-gray-200 hover:border-green-500 hover:shadow-xl transition cursor-pointer transform hover:scale-105 duration-200">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-bold text-green-600 mb-1">
                    MMAI 5400
                  </h3>
                  <p className="text-gray-600 text-sm">Data Mining</p>
                </div>
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                  Active
                </span>
              </div>
              <div className="flex justify-between text-sm text-gray-500 mb-3">
                <span>📝 8 lectures</span>
                <span>⏱️ 5 days ago</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div className="bg-green-600 h-2 rounded-full transition-all duration-500" style={{ width: '62%' }}></div>
              </div>
              <p className="text-xs text-gray-500">Week 8 of 13</p>
            </div>

            {/* Course Card 3 */}
            <div className="bg-white p-5 rounded-xl shadow-md border-2 border-gray-200 hover:border-purple-500 hover:shadow-xl transition cursor-pointer transform hover:scale-105 duration-200">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-bold text-purple-600 mb-1">
                    MMAI 5300
                  </h3>
                  <p className="text-gray-600 text-sm">Business Analytics</p>
                </div>
                <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded">
                  Active
                </span>
              </div>
              <div className="flex justify-between text-sm text-gray-500 mb-3">
                <span>📝 15 lectures</span>
                <span>⏱️ 1 week ago</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div className="bg-purple-600 h-2 rounded-full transition-all duration-500" style={{ width: '88%' }}></div>
              </div>
              <p className="text-xs text-gray-500">Week 11 of 13</p>
            </div>
          </div>
        </section>

        {/* RECENT RECORDINGS SECTION */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              🎙️ Recent Recordings
            </h2>
            <button className="text-blue-600 hover:text-blue-700 font-semibold transition">
              View All →
            </button>
          </div>

          <div className="space-y-4">
            {/* Lecture Item 1 */}
            <div className="bg-white p-5 rounded-xl shadow-md border-2 border-gray-200 hover:border-blue-400 hover:shadow-xl transition transform hover:scale-[1.02] duration-200">
              <div className="flex justify-between items-start gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-2xl shadow-lg flex-shrink-0">
                    📝
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      Week 10 - Deep Learning Architectures
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      MMAI 5500 • Nov 10, 2025 • 2:45:30
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
                        CNNs
                      </span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
                        Transformers
                      </span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
                        Attention
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 flex-shrink-0">
                  <a href="/lecture">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-semibold text-sm whitespace-nowrap">
                      View
                    </button>
                  </a>
                  <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition font-semibold text-sm whitespace-nowrap">
                    Quiz
                  </button>
                </div>
              </div>
            </div>

            {/* Lecture Item 2 */}
            <div className="bg-white p-5 rounded-xl shadow-md border-2 border-gray-200 hover:border-green-400 hover:shadow-xl transition transform hover:scale-[1.02] duration-200">
              <div className="flex justify-between items-start gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center text-2xl shadow-lg flex-shrink-0">
                    📝
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      Week 9 - NLP Fundamentals
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      MMAI 5500 • Nov 3, 2025 • 3:02:15
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                        Tokenization
                      </span>
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                        Embeddings
                      </span>
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                        BERT
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 flex-shrink-0">
                  <a href="/lecture">
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition font-semibold text-sm whitespace-nowrap">
                      View
                    </button>
                  </a>
                  <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition font-semibold text-sm whitespace-nowrap">
                    Quiz
                  </button>
                </div>
              </div>
            </div>

            {/* Lecture Item 3 */}
            <div className="bg-white p-5 rounded-xl shadow-md border-2 border-gray-200 hover:border-purple-400 hover:shadow-xl transition transform hover:scale-[1.02] duration-200">
              <div className="flex justify-between items-start gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-2xl shadow-lg flex-shrink-0">
                    📝
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      Week 8 - Ensemble Methods
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      MMAI 5400 • Oct 28, 2025 • 2:30:45
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full font-medium">
                        Random Forests
                      </span>
                      <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full font-medium">
                        Boosting
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 flex-shrink-0">
                  <a href="/lecture">
                    <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition font-semibold text-sm whitespace-nowrap">
                      View
                    </button>
                  </a>
                  <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition font-semibold text-sm whitespace-nowrap">
                    Quiz
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}