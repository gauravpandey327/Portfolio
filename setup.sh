#!/bin/bash

echo "📦 Setting up Gaurav Pandey's Portfolio project..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js v14 or later."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 14 ]; then
    echo "❌ Node.js version $NODE_VERSION detected. Please upgrade to v14 or later."
    exit 1
fi

echo "✅ Node.js v$(node -v) detected"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm."
    exit 1
fi

echo "✅ npm v$(npm -v) detected"

# Check if package.json exists
if [ ! -f package.json ]; then
    echo "⚠️ package.json not found, initializing project..."
    npm init -y
    
    # Add React dependencies
    echo "📦 Adding React dependencies..."
    npm install react react-dom react-scripts react-router-dom react-icons react-type-animation
    
    # Update package.json scripts
    sed -i 's/"test": "echo \\"Error: no test specified\\" && exit 1"/"start": "react-scripts start",\n    "build": "react-scripts build",\n    "test": "react-scripts test",\n    "eject": "react-scripts eject"/' package.json
    
    echo "✅ Project initialized with basic React dependencies"
fi

# Create virtual environment (optional)
echo "🔨 Creating a Python virtual environment (optional)..."
if command -v python3 &> /dev/null; then
    python3 -m venv venv
    
    # Activate the virtual environment based on OS
    if [[ "$OSTYPE" == "darwin"* ]] || [[ "$OSTYPE" == "linux-gnu"* ]]; then
        source venv/bin/activate
    elif [[ "$OSTYPE" == "msys" ]] || [[ "$OSTYPE" == "cygwin" ]] || [[ "$OSTYPE" == "win32" ]]; then
        source venv/Scripts/activate
    fi
    
    echo "✅ Virtual environment created and activated"
else
    echo "⚠️ Python 3 not found. Skipping virtual environment creation."
fi

# Install dependencies
echo "🔨 Installing project dependencies..."
npm install

# Create necessary directories if they don't exist
echo "🔨 Setting up project structure..."
mkdir -p public src/assets/projects src/components src/pages src/styles

# Create empty files if they don't exist to avoid errors
if [ ! -f src/index.js ]; then
    echo "⚠️ Missing core files, creating basic project structure..."
    
    # Create index.js if it doesn't exist
    if [ ! -f src/index.js ]; then
        echo "Creating src/index.js..."
        cat > src/index.js << 'EOL'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
EOL
    fi
    
    # Create App.js if it doesn't exist
    if [ ! -f src/App.js ]; then
        echo "Creating src/App.js..."
        cat > src/App.js << 'EOL'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
EOL
    fi
    
    # Create reportWebVitals.js if it doesn't exist
    if [ ! -f src/reportWebVitals.js ]; then
        echo "Creating src/reportWebVitals.js..."
        cat > src/reportWebVitals.js << 'EOL'
const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
EOL
    fi
    
    # Create basic CSS files
    if [ ! -f src/index.css ]; then
        echo "Creating src/index.css..."
        cat > src/index.css << 'EOL'
body {
  margin: 0;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}
EOL
    fi
    
    if [ ! -f src/App.css ]; then
        echo "Creating src/App.css..."
        cat > src/App.css << 'EOL'
/* Global Styles */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Poppins', sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f9f9f9;
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  list-style: none;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Button Styles */
.btn {
  display: inline-flex;
  align-items: center;
  padding: 12px 24px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary {
  background-color: #2563eb;
  color: white;
  border: none;
}

.btn-primary:hover {
  background-color: #1d4ed8;
}

.btn-secondary {
  background-color: transparent;
  color: #2563eb;
  border: 2px solid #2563eb;
}

.btn-secondary:hover {
  background-color: rgba(37, 99, 235, 0.1);
}
EOL
    fi
fi

echo "✅ All dependencies installed successfully!"

# Ask user if they want to start the development server
read -p "Do you want to start the development server now? (y/n): " choice
if [[ "$choice" =~ ^[Yy]$ ]]; then
    echo "🚀 Starting the development server..."
    echo "📝 The website will open in your default browser at http://localhost:3000"
    echo "🛑 Press Ctrl+C to stop the server"
    npm start
else
    echo "ℹ️ You can start the server later by running 'npm start'"
fi 