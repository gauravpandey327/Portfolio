# Gaurav Pandey Portfolio

A personal portfolio website built with React, showcasing my projects, skills, and professional experience in AI, Machine Learning, and Python development.

## 📋 Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)

## ✨ Features
- Responsive design for all devices
- Interactive UI with modern React components
- Project showcase with filtering capabilities
- Contact form for potential clients or employers
- Detailed About page with skills and experience

## 🔧 Prerequisites
Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14.0.0 or later)
- npm (comes with Node.js) or [Yarn](https://yarnpkg.com/)

## 🚀 Installation

### 1. Clone the repository
```bash
git clone https://github.com/gauravpandey327/portfolio.git
cd portfolio
```

### 2. Install dependencies
Using npm:
```bash
npm install
```

Or using Yarn:
```bash
yarn install
```

## 🖥️ Usage

### Development Environment
To run the project in development mode:

```bash
npm start
```

Or with Yarn:
```bash
yarn start
```

This will start the development server and open the application in your default browser at `http://localhost:3000`.

### Production Build
To create a production build:

```bash
npm run build
```

Or with Yarn:
```bash
yarn build
```

This will create an optimized build in the `build` folder.

### Running a Production Build Locally
To serve the production build locally:

```bash
npx serve -s build
```

## 📂 Project Structure
```
portfolio/
├── public/             # Static files and HTML template
├── src/                # Source code
│   ├── assets/         # Images, fonts, and other static resources
│   ├── components/     # Reusable React components
│   ├── pages/          # Page components
│   ├── styles/         # CSS/SCSS files
│   ├── App.js          # Main App component
│   └── index.js        # Entry point
├── package.json        # Project dependencies and scripts
└── README.md           # Project documentation
```

## 🔄 Customization
To customize this portfolio for your own use:

1. Update personal information in the `About.js`, `Home.js`, and `Contact.js` files
2. Replace project data in `Projects.js` with your own projects
3. Update the HeroSection component with your information
4. Replace images in the `assets` folder with your own
5. Modify styles in the `styles` directory as needed

## 🌐 Deployment
This project can be deployed to various platforms:

### GitHub Pages
```bash
npm install gh-pages --save-dev
```

Add these to your `package.json`:
```json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Then run:
```bash
npm run deploy
```

### Netlify or Vercel
1. Create an account on [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/)
2. Connect your GitHub repository
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `build`

## 💻 Technologies Used
- [React](https://reactjs.org/) - Frontend library
- [React Router](https://reactrouter.com/) - Navigation
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library
- [React Type Animation](https://www.npmjs.com/package/react-type-animation) - Text animations
- HTML5 & CSS3 - Structure and styling 