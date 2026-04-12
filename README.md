# 🌐 Ngozika Nwachukwu — 3D Interactive Portfolio

🚀 Live Site: https://ngozikanwachukwu.com

---

## 🧠 Overview

This is a fully interactive 3D portfolio built using **React Three Fiber**, designed to create an immersive experience for users exploring my work, skills, and projects.

Instead of a traditional static website, this portfolio uses a **3D environment** where users can navigate a virtual workspace and interact with objects to discover different sections of my profile.

---

## ✨ Key Features

- 🖥️ **Interactive 3D Environment**
  - Built with React Three Fiber and Drei
  - Smooth camera transitions and object-based navigation

- 💻 **MacBook System (Multi-Phase UI)**
  - Boot animation, screensaver, and desktop interface
  - Contains:
    - About Me
    - Skills
    - Experience
    - Projects
    - Testimonials

- 🖼️ **Vision Board**
  - Interactive photo wall with zoom and overlay functionality
  - Desktop-only feature with enhanced UI interactions

- 🎵 **Record Player**
  - Animated vinyl with synchronized audio playback
  - Custom overlay UI with playback controls

- 📚 **Favorite Book Section**
  - Interactive zoom and overlay with external link integration

- 🔗 **External Links**
  - GitHub and LinkedIn frames embedded into the 3D environment

- 📱 **Responsive Design**
  - Desktop: full 3D interaction + camera transitions
  - Mobile: optimized interactions (bounce animations, overlays instead of zoom)

---

## 🛠️ Tech Stack

- **Frontend**
  - React
  - React Three Fiber (R3F)
  - Drei

- **Animation & Interaction**
  - @tweenjs/tween.js
  - react-spring

- **Audio**
  - use-sound

- **Routing**
  - React Router

- **Deployment**
  - Vercel (CI/CD pipeline with GitHub integration)

- **Domain & DNS**
  - Namecheap (custom domain + DNS configuration)

---

## ⚙️ Architecture Highlights

- **Scene-based architecture**
  - Global scene controller manages camera modes
  - Individual objects handle their own interactions

- **State-driven camera system**
  - `cameraMode` controls transitions between views
  - Smooth tween-based animations

- **Overlay system**
  - Uses Drei `Html` for 2D UI inside 3D space
  - Delayed rendering tied to camera transitions

- **MacBook iframe system**
  - Dedicated route (`/macbook`) rendered inside iframe
  - Custom Vercel rewrite configuration to support routing in production

---

## 🚀 Deployment

This project is fully deployed using **Vercel** with automatic CI/CD