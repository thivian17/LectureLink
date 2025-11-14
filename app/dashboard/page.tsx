export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Top Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-2xl">🎙️</span>
              </div>
              <span className="text-2xl font-bold text-gray-800">LectureLink</span>
            </div>

            {/* Search & Actions */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search lectures..."
                  className="pl-10 pr-4 py-2 bg-gray-100 border-none rounded-xl focus:ring-2 focus:ring-blue-500 transition w-64"
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  🔍
                </span>
              </div>
              
              <button className="p-2 hover:bg-gray-100 rounded-xl transition">
                <span className="text-2xl">🔔</span>
              </button>
              
              <button className="p-2 hover:bg-gray-100 rounded-xl transition">
                <span className="text-2xl">⚙️</span>
              </button>

              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                T
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-8 py-10">
        {/* Welcome Header */}
        <div className="mb-10 fade-in">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Welcome back, Thivian! 👋
          </h1>
          <p className="text-lg text-gray-600">
            Ready to make the most of today's lectures?
          </p>
        </div>

        {/* Quick Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white rounded-2xl p-6 border border-gray-200 smooth-hover">
            <div className="flex items-center justify-between mb-3">
              <span className="text-3xl">📚</span>
              <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded-full font-semibold">
                +3 this week
              </span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">42</div>
            <div className="text-sm text-gray-600">Total Lectures</div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200 smooth-hover">
            <div className="flex items-center justify-between mb-3">
              <span className="text-3xl">⏱️</span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">87h</div>
            <div className="text-sm text-gray-600">Time Recorded</div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200 smooth-hover">
            <div className="flex items-center justify-between mb-3">
              <span className="text-3xl">✅</span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">12</div>
            <div className="text-sm text-gray-600">Action Items</div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200 smooth-hover">
            <div className="flex items-center justify-between mb-3">
              <span className="text-3xl">📊</span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">12/50</div>
            <div className="text-sm text-gray-600">Monthly Limit</div>
          </div>
        </div>

        {/* Main Recording Card - Hero Feature */}
        <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-3xl shadow-2xl p-10 mb-10 relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500 opacity-10 rounded-full blur-3xl"></div>
          
          <div className="relative grid lg:grid-cols-2 gap-10">
            {/* Left Side - Recording Interface */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">🎙️</span>
                <h2 className="text-3xl font-bold text-white">Record New Lecture</h2>
              </div>

              {/* Timer Display */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-6 border border-white/20">
                <div className="text-center">
                  <div className="text-6xl font-mono font-bold text-white mb-2 tracking-tight">
                    00:00:00
                  </div>
                  <p className="text-blue-100 text-lg">Ready to record</p>
                </div>
              </div>

              {/* Waveform Visualization */}
              <div className="bg-blue-900/30 backdrop-blur-md rounded-2xl p-6 mb-6 border border-white/10">
                <div className="flex gap-1.5 items-end h-24 justify-center">
                  {[35, 60, 45, 75, 50, 85, 55, 70, 60, 90, 50, 80, 55, 65, 75, 50, 70, 60, 85, 55].map((height, i) => (
                    <div
                      key={i}
                      className="w-2 bg-gradient-to-t from-blue-300 to-white rounded-full opacity-50"
                      style={{ height: `${height}%` }}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Control Buttons */}
              <div className="space-y-4">
                <button className="w-full bg-white text-blue-600 py-5 rounded-2xl font-bold text-xl hover:bg-blue-50 transition shadow-2xl hover:scale-[1.02] transform duration-200 flex items-center justify-center gap-3">
                  <span className="text-3xl">●</span>
                  Start Recording
                </button>

                <div className="grid grid-cols-2 gap-4">
                  <button className="bg-white/20 backdrop-blur-md text-white py-3 rounded-xl font-semibold hover:bg-white/30 transition border border-white/20">
                    <span className="mr-2">⏸</span>
                    Pause
                  </button>
                  <button className="bg-white/20 backdrop-blur-md text-white py-3 rounded-xl font-semibold hover:bg-white/30 transition border border-white/20">
                    <span className="mr-2">📤</span>
                    Upload File
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side - Lecture Details Form */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Lecture Details
              </h3>

              <div className="space-y-5">
                <div>
                  <label className="block text-white font-semibold mb-2 text-sm">
                    Lecture Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Week 10 - Neural Networks"
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl focus:ring-2 focus:ring-white focus:border-white transition text-white placeholder-blue-200"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2 text-sm">
                    Course *
                  </label>
                  <select className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl focus:ring-2 focus:ring-white transition text-white">
                    <option className="text-gray-900">Select a course</option>
                    <option className="text-gray-900">MMAI 5500 - Applied ML</option>
                    <option className="text-gray-900">MMAI 5400 - Data Mining</option>
                    <option className="text-gray-900">MMAI 5300 - Analytics</option>
                    <option className="text-gray-900">+ Add New Course</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-semibold mb-2 text-sm">
                      Quality
                    </label>
                    <select className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white text-sm">
                      <option className="text-gray-900">High</option>
                      <option className="text-gray-900">Medium</option>
                      <option className="text-gray-900">Low</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2 text-sm">
                      Professor
                    </label>
                    <input
                      type="text"
                      placeholder="Optional"
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-blue-200 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2 text-sm">
                    Tags (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., midterm, important, chapter-5"
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-blue-200 text-sm"
                  />
                </div>

                {/* Quick Tips */}
                <div className="bg-blue-900/30 backdrop-blur-md rounded-xl p-4 border border-white/10 mt-6">
                  <h4 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                    <span>💡</span> Quick Tips
                  </h4>
                  <ul className="text-blue-100 text-xs space-y-1">
                    <li>• Place device near speaker for best quality</li>
                    <li>• Recording continues in background</li>
                    <li>• Processing takes 5-10 minutes after</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Lectures & Summary Preview */}
        <div className="grid lg:grid-cols-3 gap-8 mb-10">
          {/* Recent Lecture 1 */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 smooth-hover cursor-pointer">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center text-2xl shadow-lg">
                📊
              </div>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-semibold">
                Processed
              </span>
            </div>
            
            <h3 className="font-bold text-gray-900 text-lg mb-2">
              Week 9 - Deep Learning Basics
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              MMAI 5500 - Applied ML
            </p>

            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span>⏱️ 1h 23m</span>
              <span>📅 2 days ago</span>
            </div>

            {/* Preview of Summary Features */}
            <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm">✨</span>
                <span className="text-xs font-semibold text-blue-700">AI Summary Ready</span>
              </div>
              <div className="space-y-2 text-xs text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">•</span>
                  <span>12 Key Concepts extracted</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-500">•</span>
                  <span>8 Definitions identified</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">•</span>
                  <span>3 Action Items found</span>
                </div>
              </div>
            </div>

            <button className="w-full mt-4 py-2.5 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transition text-sm">
              View Summary
            </button>
          </div>

          {/* Recent Lecture 2 */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 smooth-hover cursor-pointer">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center text-2xl shadow-lg">
                📈
              </div>
              <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full font-semibold">
                Processing
              </span>
            </div>
            
            <h3 className="font-bold text-gray-900 text-lg mb-2">
              Week 8 - Clustering Methods
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              MMAI 5400 - Data Mining
            </p>

            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span>⏱️ 58m</span>
              <span>📅 3 days ago</span>
            </div>

            {/* Processing State */}
            <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-100">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm">⏳</span>
                <span className="text-xs font-semibold text-yellow-700">Generating Summary...</span>
              </div>
              <div className="w-full bg-yellow-200 rounded-full h-2 overflow-hidden">
                <div className="bg-yellow-500 h-2 rounded-full shimmer" style={{ width: '65%' }}></div>
              </div>
              <p className="text-xs text-gray-600 mt-2">Estimated time: 3 minutes</p>
            </div>

            <button className="w-full mt-4 py-2.5 bg-gray-200 text-gray-500 rounded-xl font-semibold cursor-not-allowed text-sm">
              Processing...
            </button>
          </div>

          {/* Recent Lecture 3 */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 smooth-hover cursor-pointer">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center text-2xl shadow-lg">
                💼
              </div>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-semibold">
                Processed
              </span>
            </div>
            
            <h3 className="font-bold text-gray-900 text-lg mb-2">
              Week 11 - Marketing Analytics
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              MMAI 5300 - Business Analytics
            </p>

            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span>⏱️ 1h 45m</span>
              <span>📅 5 days ago</span>
            </div>

            <div className="bg-green-50 rounded-xl p-4 border border-green-100">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm">✨</span>
                <span className="text-xs font-semibold text-green-700">AI Summary Ready</span>
              </div>
              <div className="space-y-2 text-xs text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">•</span>
                  <span>15 Key Concepts extracted</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-500">•</span>
                  <span>6 Definitions identified</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">•</span>
                  <span>5 Action Items found</span>
                </div>
              </div>
            </div>

            <button className="w-full mt-4 py-2.5 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transition text-sm">
              View Summary
            </button>
          </div>
        </div>

        {/* Courses Overview */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Your Courses</h2>
            <button className="text-blue-600 font-semibold hover:text-blue-700 transition">
              View All →
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Course 1 */}
            <div className="bg-white rounded-2xl p-6 border-2 border-blue-200 smooth-hover cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-blue-600 mb-1">
                    MMAI 5500
                  </h3>
                  <p className="text-sm text-gray-600">Applied Machine Learning</p>
                </div>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              </div>

              <div className="flex gap-4 text-sm text-gray-600 mb-4">
                <span>📝 12 lectures</span>
                <span>⏱️ Today</span>
              </div>

              <div className="bg-blue-50 rounded-lg p-3 mb-3">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Progress</span>
                  <span className="font-semibold text-blue-600">75%</span>
                </div>
                <div className="w-full bg-blue-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>

              <p className="text-xs text-gray-500">Week 9 of 12</p>
            </div>

            {/* Course 2 */}
            <div className="bg-white rounded-2xl p-6 border-2 border-purple-200 smooth-hover cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-purple-600 mb-1">
                    MMAI 5400
                  </h3>
                  <p className="text-sm text-gray-600">Data Mining</p>
                </div>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              </div>

              <div className="flex gap-4 text-sm text-gray-600 mb-4">
                <span>📝 8 lectures</span>
                <span>⏱️ 5 days ago</span>
              </div>

              <div className="bg-purple-50 rounded-lg p-3 mb-3">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Progress</span>
                  <span className="font-semibold text-purple-600">62%</span>
                </div>
                <div className="w-full bg-purple-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '62%' }}></div>
                </div>
              </div>

              <p className="text-xs text-gray-500">Week 8 of 13</p>
            </div>

            {/* Course 3 */}
            <div className="bg-white rounded-2xl p-6 border-2 border-green-200 smooth-hover cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-green-600 mb-1">
                    MMAI 5300
                  </h3>
                  <p className="text-sm text-gray-600">Business Analytics</p>
                </div>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              </div>

              <div className="flex gap-4 text-sm text-gray-600 mb-4">
                <span>📝 15 lectures</span>
                <span>⏱️ 1 week ago</span>
              </div>

              <div className="bg-green-50 rounded-lg p-3 mb-3">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Progress</span>
                  <span className="font-semibold text-green-600">88%</span>
                </div>
                <div className="w-full bg-green-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '88%' }}></div>
                </div>
              </div>

              <p className="text-xs text-gray-500">Week 11 of 13</p>
            </div>
          </div>
        </div>

        {/* Action Items Section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Upcoming Action Items</h2>
            <button className="text-blue-600 font-semibold hover:text-blue-700 transition">
              View All →
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border-l-4 border-red-500 shadow-sm">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📝</span>
                  <div>
                    <h3 className="font-bold text-gray-900">Assignment 3 Due</h3>
                    <p className="text-sm text-gray-600">MMAI 5500 - Applied ML</p>
                  </div>
                </div>
                <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full font-semibold">
                  Tomorrow
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Complete neural network implementation and submit via portal
              </p>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-semibold hover:bg-blue-600 transition">
                  Mark Complete
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-200 transition">
                  Snooze
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border-l-4 border-yellow-500 shadow-sm">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📚</span>
                  <div>
                    <h3 className="font-bold text-gray-900">Read Chapter 7</h3>
                    <p className="text-sm text-gray-600">MMAI 5400 - Data Mining</p>
                  </div>
                </div>
                <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full font-semibold">
                  This Week
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Clustering algorithms and K-means implementation
              </p>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-semibold hover:bg-blue-600 transition">
                  Mark Complete
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-200 transition">
                  Snooze
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}