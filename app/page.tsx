export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-800 to-blue-500 text-white">
      <div className="text-center">
        {/* Logo/Title */}
        <h1 className="text-7xl font-bold mb-4">
          🎙️ LectureLink
        </h1>
        
        {/* Tagline */}
        <p className="text-3xl mb-8 text-blue-100">
          The AI tutor that never misses a lecture.
        </p>
        
        {/* Description */}
        <p className="text-lg max-w-2xl mx-auto mb-12 text-blue-50">
          Learn smarter with instant summaries, key concepts, and tailored study guides built from your lectures.
        </p>
        
        {/* Buttons */}
        <div className="flex gap-4 justify-center">
          <a href="/login">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-lg text-xl font-semibold hover:bg-blue-50 transition">
              Get Started
            </button>
          </a>

          <a href="/dashboard">
            <button className="bg-blue-800 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-blue-700 transition border-2 border-white">
              View Demo
            </button>
          </a>

          <a href="/record">
            <button className="bg-red-600 text-white px-8 py-5 rounded-lg font-semibold hover:bg-red-700 transition">
              🔴 New Recording
            </button>
          </a>

        </div>
      </div> {/* ✅ this closing div was missing */}
    </main>
  )
}
