export default function Record() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <a href="/dashboard" className="text-gray-400 hover:text-white transition">
            ← Back to Dashboard
          </a>
          <h1 className="text-3xl font-bold">🎙️ New Recording</h1>
          <div className="w-32"></div> {/* Spacer for centering */}
        </div>

        {/* Recording Card */}
        <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 mb-8">
          {/* Lecture Info Form */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Lecture Details</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Lecture Name
                </label>
                <input
                  type="text"
                  placeholder="e.g., Week 10 - Deep Learning"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Course
                </label>
                <select className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white">
                  <option>Select a course</option>
                  <option>MMAI 5500 - Applied Machine Learning</option>
                  <option>MMAI 5400 - Data Mining</option>
                  <option>MMAI 5300 - Business Analytics</option>
                  <option>+ Add New Course</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Recording Quality
                </label>
                <select className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white">
                  <option>High (best quality, more storage)</option>
                  <option>Medium (balanced)</option>
                  <option>Low (save battery/storage)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Recording Interface */}
          <div className="border-t border-gray-700 pt-8">
            <div className="text-center">
              {/* Status */}
              <div className="mb-6">
                <p className="text-gray-400 text-sm mb-2">Status</p>
                <p className="text-2xl font-bold text-gray-300">Ready to Record</p>
              </div>

              {/* Timer Display */}
              <div className="mb-6">
                <div className="text-6xl font-mono font-bold text-blue-400">
                  00:00:00
                </div>
                <p className="text-sm text-gray-400 mt-2">Duration</p>
              </div>

              {/* Waveform Visualization Placeholder */}
              <div className="bg-gray-900 rounded-lg p-8 mb-6 h-32 flex items-center justify-center">
                <div className="flex gap-1 items-end h-16">
                  {[...Array(50)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 bg-blue-500 opacity-30"
                      style={{ height: `${Math.random() * 100}%` }}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Recording Controls */}
              <div className="flex gap-4 justify-center mb-6">
                <button className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 rounded-full text-xl font-semibold transition flex items-center gap-2">
                  <span className="text-2xl">🔴</span>
                  Start Recording
                </button>
              </div>

              {/* File Info */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-sm text-gray-400 mb-1">File Size</p>
                  <p className="text-lg font-semibold">0 MB</p>
                </div>
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-sm text-gray-400 mb-1">Format</p>
                  <p className="text-lg font-semibold">WebM</p>
                </div>
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-sm text-gray-400 mb-1">Last Save</p>
                  <p className="text-lg font-semibold">--</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div className="bg-blue-900 bg-opacity-50 border border-blue-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            💡 Recording Tips
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>• Place your device close to the speaker for better audio quality</li>
            <li>• Ensure you have enough battery (3-hour recording uses ~15-20%)</li>
            <li>• Keep the app open or use screen lock - recording continues in background</li>
            <li>• Auto-save creates backups every 5 minutes</li>
            <li>• Processing takes 5-10 minutes after recording completes</li>
          </ul>
        </div>
      </div>
    </div>
  )
}