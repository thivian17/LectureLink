export default function LectureSummary() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Top Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <a href="/dashboard" className="text-gray-600 hover:text-gray-900 transition font-medium">
                ← Back
              </a>
              <div className="h-6 w-px bg-gray-300"></div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl">🎙️</span>
                </div>
                <span className="text-2xl font-bold text-gray-800">LectureLink</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition">
                <span className="mr-2">📤</span>
                Export
              </button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transition">
                <span className="mr-2">⭐</span>
                Save
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-8 py-10">
        {/* Lecture Header */}
        <div className="mb-10 fade-in">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-3">
                Week 9 - Deep Learning Basics
              </h1>
              <div className="flex items-center gap-4 text-gray-600">
                <span className="flex items-center gap-2">
                  <span className="text-xl">📚</span>
                  <span className="font-semibold">MMAI 5500 - Applied Machine Learning</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-2">
                  <span>⏱️</span>
                  <span>1h 23m</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-2">
                  <span>📅</span>
                  <span>Nov 10, 2024</span>
                </span>
              </div>
            </div>

            <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full font-semibold text-sm">
              ✓ Processed
            </span>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-4 border border-blue-200">
              <div className="text-3xl font-bold text-blue-600 mb-1">12</div>
              <div className="text-sm text-gray-600">Key Concepts</div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-purple-200">
              <div className="text-3xl font-bold text-purple-600 mb-1">8</div>
              <div className="text-sm text-gray-600">Definitions</div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-green-200">
              <div className="text-3xl font-bold text-green-600 mb-1">3</div>
              <div className="text-sm text-gray-600">Action Items</div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-yellow-200">
              <div className="text-3xl font-bold text-yellow-600 mb-1">15</div>
              <div className="text-sm text-gray-600">Important Points</div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Action Items Section */}
            <section className="bg-white rounded-2xl p-8 border-2 border-red-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center text-2xl">
                  ✅
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Action Items</h2>
                  <p className="text-sm text-gray-600">Tasks and assignments mentioned in lecture</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-red-50 rounded-xl p-5 border border-red-200">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-gray-900">Complete Assignment 3</h3>
                    <span className="text-xs bg-red-200 text-red-800 px-2 py-1 rounded-full font-semibold">
                      DUE TOMORROW
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 mb-3">
                    Implement a basic neural network using PyTorch. Submit via the course portal by 11:59 PM.
                  </p>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-red-500 text-white rounded-lg text-sm font-semibold hover:bg-red-600 transition">
                      Mark Complete
                    </button>
                    <button className="px-4 py-2 bg-red-100 text-red-700 rounded-lg text-sm font-semibold hover:bg-red-200 transition">
                      Add to Calendar
                    </button>
                  </div>
                </div>

                <div className="bg-yellow-50 rounded-xl p-5 border border-yellow-200">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-gray-900">Read Chapter 5</h3>
                    <span className="text-xs bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full font-semibold">
                      THIS WEEK
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 mb-3">
                    Review backpropagation and gradient descent algorithms before next lecture.
                  </p>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg text-sm font-semibold hover:bg-yellow-600 transition">
                      Mark Complete
                    </button>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-5 border border-blue-200">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-gray-900">Midterm Preparation</h3>
                    <span className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded-full font-semibold">
                      NOV 25
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 mb-3">
                    Midterm will cover all neural network architectures discussed in weeks 7-10.
                  </p>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-semibold hover:bg-blue-600 transition">
                      Create Study Plan
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Key Concepts Section */}
            <section className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-2xl">
                  🎯
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Key Concepts</h2>
                  <p className="text-sm text-gray-600">Main topics covered in this lecture</p>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="bg-blue-50 rounded-xl p-5 border border-blue-200">
                  <h3 className="font-bold text-blue-900 mb-2 text-lg">Neural Network Architecture</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    A neural network consists of interconnected layers of neurons (nodes) that process information. 
                    Each connection has a weight that is adjusted during training to minimize error. The basic 
                    architecture includes input layer, hidden layers, and output layer.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="text-xs bg-blue-200 text-blue-800 px-3 py-1 rounded-full font-semibold">
                      Core Concept
                    </span>
                    <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                      Timestamp: 12:34
                    </span>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-5 border border-blue-200">
                  <h3 className="font-bold text-blue-900 mb-2 text-lg">Activation Functions</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Functions that introduce non-linearity into the network, enabling it to learn complex patterns. 
                    Common examples include ReLU (Rectified Linear Unit), Sigmoid, and Tanh. ReLU is most popular 
                    for hidden layers due to its computational efficiency.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="text-xs bg-blue-200 text-blue-800 px-3 py-1 rounded-full font-semibold">
                      Core Concept
                    </span>
                    <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                      Timestamp: 23:15
                    </span>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-5 border border-blue-200">
                  <h3 className="font-bold text-blue-900 mb-2 text-lg">Backpropagation</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    The algorithm used to train neural networks by computing gradients of the loss function with 
                    respect to each weight. Works backwards from output to input layer, using chain rule to 
                    efficiently calculate gradients.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="text-xs bg-blue-200 text-blue-800 px-3 py-1 rounded-full font-semibold">
                      Core Concept
                    </span>
                    <span className="text-xs bg-red-100 text-red-700 px-3 py-1 rounded-full">
                      Important for Exam
                    </span>
                    <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                      Timestamp: 45:22
                    </span>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-5 border border-blue-200">
                  <h3 className="font-bold text-blue-900 mb-2 text-lg">Gradient Descent</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Optimization algorithm that iteratively adjusts weights to minimize the loss function. 
                    Variants include batch gradient descent, stochastic gradient descent (SGD), and mini-batch 
                    gradient descent.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="text-xs bg-blue-200 text-blue-800 px-3 py-1 rounded-full font-semibold">
                      Core Concept
                    </span>
                    <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                      Timestamp: 56:10
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Definitions Section */}
            <section className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center text-2xl">
                  📖
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Definitions</h2>
                  <p className="text-sm text-gray-600">Important terms and their meanings</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 bg-purple-50 rounded-r-xl p-5">
                  <h3 className="font-bold text-purple-900 mb-2">Perceptron</h3>
                  <p className="text-gray-700">
                    The simplest type of artificial neuron, consisting of inputs, weights, a bias, and an 
                    activation function. It takes multiple inputs, multiplies each by a weight, sums them up, 
                    adds a bias, and passes the result through an activation function.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 bg-purple-50 rounded-r-xl p-5">
                  <h3 className="font-bold text-purple-900 mb-2">Loss Function (Cost Function)</h3>
                  <p className="text-gray-700">
                    A mathematical function that measures the difference between predicted output and actual 
                    output. Common examples include Mean Squared Error (MSE) for regression and Cross-Entropy 
                    Loss for classification tasks.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 bg-purple-50 rounded-r-xl p-5">
                  <h3 className="font-bold text-purple-900 mb-2">Learning Rate</h3>
                  <p className="text-gray-700">
                    A hyperparameter that controls how much to adjust the weights during training. Too high a 
                    learning rate can cause the model to converge too quickly to a suboptimal solution, while 
                    too low a rate can make training extremely slow.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 bg-purple-50 rounded-r-xl p-5">
                  <h3 className="font-bold text-purple-900 mb-2">Epoch</h3>
                  <p className="text-gray-700">
                    One complete pass through the entire training dataset. Training a neural network typically 
                    requires multiple epochs to achieve good performance.
                  </p>
                </div>
              </div>
            </section>

            {/* Full Transcript Section */}
            <section className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-500 rounded-xl flex items-center justify-center text-2xl">
                    📝
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Full Transcript</h2>
                    <p className="text-sm text-gray-600">Complete lecture transcription</p>
                  </div>
                </div>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition text-sm">
                  <span className="mr-2">🔍</span>
                  Search
                </button>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 max-h-96 overflow-y-auto">
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    <span className="text-xs text-gray-500 font-mono mr-3">[00:00:12]</span>
                    Good morning everyone! Today we're going to dive into the fundamentals of deep learning, 
                    specifically neural networks. This is one of the most exciting topics in machine learning, 
                    and it forms the foundation for modern AI applications.
                  </p>
                  <p>
                    <span className="text-xs text-gray-500 font-mono mr-3">[00:00:45]</span>
                    Let's start by understanding what a neural network actually is. At its core, a neural 
                    network is inspired by the biological neural networks in our brains. Just as neurons in 
                    our brain connect to form complex networks that can learn and adapt...
                  </p>
                  <p>
                    <span className="text-xs text-gray-500 font-mono mr-3">[00:01:23]</span>
                    The basic building block is called a perceptron. Think of it as a simple decision-making 
                    unit that takes several inputs, processes them, and produces an output. Each input has a 
                    weight associated with it, which determines how important that input is...
                  </p>
                  <p className="text-sm text-gray-500 italic text-center py-4">
                    • • • Click "Expand" to view full transcript • • •
                  </p>
                </div>
              </div>

              <button className="w-full mt-4 py-3 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transition">
                Expand Full Transcript
              </button>
            </section>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Study Report Card */}
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">📚</span>
                <h3 className="text-2xl font-bold">Study Report</h3>
              </div>
              
              <p className="text-green-100 mb-6">
                Get an AI-generated study guide with practice questions and concept explanations.
              </p>

              <button className="w-full py-3 bg-white text-green-600 rounded-xl font-bold hover:bg-green-50 transition">
                Generate Study Report
              </button>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">Lecture Statistics</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Duration</span>
                  <span className="font-semibold text-gray-900">1h 23m</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Word Count</span>
                  <span className="font-semibold text-gray-900">12,450</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Speaking Rate</span>
                  <span className="font-semibold text-gray-900">150 wpm</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">File Size</span>
                  <span className="font-semibold text-gray-900">142 MB</span>
                </div>
              </div>
            </div>

            {/* Related Lectures */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">Related Lectures</h3>
              
              <div className="space-y-3">
                <a href="#" className="block p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition border border-blue-200">
                  <div className="font-semibold text-blue-900 text-sm mb-1">
                    Week 8 - Introduction to ML
                  </div>
                  <div className="text-xs text-gray-600">MMAI 5500 • 2 weeks ago</div>
                </a>

                <a href="#" className="block p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition border border-blue-200">
                  <div className="font-semibold text-blue-900 text-sm mb-1">
                    Week 7 - Linear Regression
                  </div>
                  <div className="text-xs text-gray-600">MMAI 5500 • 3 weeks ago</div>
                </a>

                <a href="#" className="block p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition border border-blue-200">
                  <div className="font-semibold text-blue-900 text-sm mb-1">
                    Week 10 - CNNs Preview
                  </div>
                  <div className="text-xs text-gray-600">MMAI 5500 • Next week</div>
                </a>
              </div>
            </div>

            {/* Tags */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">Tags</h3>
              
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                  neural-networks
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                  deep-learning
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                  machine-learning
                </span>
                <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold">
                  exam-important
                </span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold">
                  assignment-related
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}