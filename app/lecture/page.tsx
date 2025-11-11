export default function Lecture() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <a href="/dashboard" className="text-blue-600 hover:text-blue-700 mb-4 inline-block">
            ← Back to Dashboard
          </a>
          
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                📝 Week 10 - Deep Learning Architectures
              </h1>
              <p className="text-gray-600">
                MMAI 5500 • Nov 10, 2025 • 2:45:30
              </p>
            </div>
            
            <div className="flex gap-2">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                📄 Export PDF
              </button>
              <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition">
                🤖 Quiz Me
              </button>
            </div>
          </div>

          {/* Topics */}
          <div className="flex gap-2 flex-wrap mb-6">
            <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
              CNNs
            </span>
            <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
              Transformers
            </span>
            <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
              Attention Mechanisms
            </span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-gray-300 mb-6">
          <div className="flex gap-8">
            <button className="pb-3 border-b-2 border-blue-600 text-blue-600 font-semibold">
              AI Report
            </button>
            <button className="pb-3 text-gray-600 hover:text-gray-900">
              Transcript
            </button>
            <button className="pb-3 text-gray-600 hover:text-gray-900">
              Notes
            </button>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content (2/3) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Summary Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                📋 Summary
              </h2>
              <p className="text-gray-700 leading-relaxed">
                This lecture covered advanced deep learning architectures, focusing on 
                Convolutional Neural Networks (CNNs), Transformer models, and attention 
                mechanisms. The professor explained how CNNs revolutionized computer vision 
                tasks through learned feature hierarchies and how attention mechanisms enable 
                models to focus on relevant parts of input data.
              </p>
            </div>

            {/* Key Concepts */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                💡 Key Concepts
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Convolutional Neural Networks (CNNs)
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Specialized neural networks designed for processing grid-like data 
                    (images). Use convolution operations to detect features.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Attention Mechanisms
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Allow models to dynamically focus on relevant parts of input when 
                    making predictions. Core component of Transformers.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Transformer Architecture
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Modern architecture that uses self-attention mechanisms. Powers 
                    models like GPT, BERT, and Claude.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Items */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                ✅ Action Items
              </h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">
                      Complete CNN implementation assignment
                    </p>
                    <p className="text-sm text-gray-600">Due: Nov 17, 2025</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">
                      Read "Attention is All You Need" paper
                    </p>
                    <p className="text-sm text-gray-600">Mentioned at 1:23:45</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">
                      Practice backpropagation for CNNs
                    </p>
                    <p className="text-sm text-gray-600">Review for midterm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar (1/3) */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-gray-900 mb-4">📊 Stats</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600">Duration</p>
                  <p className="text-lg font-semibold">2 hours 45 minutes</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Word Count</p>
                  <p className="text-lg font-semibold">12,450 words</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Topics Covered</p>
                  <p className="text-lg font-semibold">3 major topics</p>
                </div>
              </div>
            </div>

            {/* Related Lectures */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-gray-900 mb-4">🔗 Related</h3>
              <div className="space-y-3">
                <a href="#" className="block hover:bg-gray-50 p-2 rounded transition">
                  <p className="text-sm font-medium text-blue-600">
                    Week 5 - Neural Networks Basics
                  </p>
                  <p className="text-xs text-gray-500">Prerequisite</p>
                </a>
                <a href="#" className="block hover:bg-gray-50 p-2 rounded transition">
                  <p className="text-sm font-medium text-blue-600">
                    Week 9 - NLP Fundamentals
                  </p>
                  <p className="text-xs text-gray-500">Related topic</p>
                </a>
              </div>
            </div>

            {/* AI Chat */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg shadow-md p-6 border border-purple-200">
              <h3 className="font-semibold text-gray-900 mb-3">🤖 Ask AI</h3>
              <p className="text-sm text-gray-700 mb-4">
                Have questions about this lecture? Ask the AI assistant!
              </p>
              <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition">
                Start Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}