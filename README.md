# 🌟 Portfolio Website

A modern, immersive portfolio website built with React, Three.js, and Framer Motion. Features stunning 3D animations, smooth scrolling, and a fully responsive design.

![Portfolio Preview](https://img.shields.io/badge/React-18.3.1-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-6.0.1-purple?logo=vite)
![Three.js](https://img.shields.io/badge/Three.js-0.171.0-black?logo=three.js)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4.0.0-cyan?logo=tailwindcss)

## ✨ Features

- 🎨 **Immersive 3D Background** - Interactive 3D elements powered by Three.js
- 🎭 **Smooth Animations** - Fluid transitions using Framer Motion
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- 🌙 **Dark Theme** - Modern dark mode design with neon accents
- ⚡ **Fast Performance** - Built with Vite for lightning-fast load times
- 🎯 **Smooth Scrolling** - Seamless navigation between sections
- 💼 **Project Showcase** - Display your work with images and descriptions
- 📬 **Contact Form** - Easy way for visitors to get in touch

## 🛠️ Tech Stack

### Core
- **React** (18.3.1) - UI library
- **Vite** (6.0.1) - Build tool and dev server
- **JavaScript** - Programming language

### 3D & Animation
- **Three.js** (0.171.0) - 3D graphics library
- **@react-three/fiber** (8.17.10) - React renderer for Three.js
- **@react-three/drei** (9.117.3) - Useful helpers for React Three Fiber
- **Framer Motion** (11.15.0) - Animation library

### Styling
- **Tailwind CSS** (4.0.0) - Utility-first CSS framework
- **PostCSS** (8.4.49) - CSS processor
- **Autoprefixer** (10.4.20) - CSS vendor prefixing

### Routing
- **React Router DOM** (7.1.1) - Client-side routing

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16.0.0 or higher)
- **npm** (v7.0.0 or higher) or **yarn**

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 📦 Build for Production

To create an optimized production build:

```bash
npm run build
```
or
```bash
yarn build
```

The build files will be generated in the `dist` folder.

## 🎨 Customization

### Update Personal Information

1. **Hero Section** - Edit `src/sections/Hero.jsx`
   - Update your name and tagline
   - Replace profile image in `src/assets/profile.jpg`

2. **About Section** - Edit `src/sections/About.jsx`
   - Update your bio
   - Modify skills and proficiency levels

3. **Experience** - Edit `src/sections/Experience.jsx`
   - Add your work experience and internships

4. **Projects** - Edit `src/sections/Projects.jsx`
   - Add your projects with descriptions and tags
   - Add project images to `src/assets/`

5. **Contact** - Edit `src/sections/Contact.jsx`
   - Customize contact form (add backend integration if needed)

### Color Scheme

The color scheme is defined in `tailwind.config.js`:
- **Primary**: `#0a0a0a` (Dark background)
- **Secondary**: `#1a1a1a` (Card backgrounds)
- **Accent**: `#00f3ff` (Cyan/Neon blue)

## 📁 Project Structure

```
portfolio/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images and media files
│   ├── components/     # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── CanvasContainer.jsx
│   │   └── Hero3D.jsx
│   ├── sections/       # Page sections
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── tailwind.config.js  # Tailwind configuration
├── vite.config.js      # Vite configuration
└── package.json        # Dependencies
```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Netlify
1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`

### GitHub Pages
```bash
npm run build
# Deploy the dist folder to gh-pages branch
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

**Vishnu V**

- Portfolio: [Your Portfolio URL]
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- Three.js community for amazing 3D capabilities
- Framer Motion for smooth animations
- Tailwind CSS for rapid styling

---

⭐ **Star this repo if you found it helpful!**
