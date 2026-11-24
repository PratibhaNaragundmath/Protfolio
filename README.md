<<<<<<< HEAD
# Pratibha Naragundmath – Personal Portfolio Website

A modern, responsive, high-performance personal portfolio website built with **HTML5, CSS3, JavaScript, and Bootstrap 5.3**, crafted specifically from Pratibha Naragundmath's resume.

---

## 🌟 Key Features

- **Responsive & Mobile-First Design**: Optimized for smartphones, tablets, laptops, and wide desktop displays using Bootstrap 5.3 flexbox and grid system.
- **Dark & Light Mode Switcher**: Seamless theme toggle with automatic system preference detection and `localStorage` state persistence.
- **Interactive Typing Effect**: Dynamic role title rotation in the hero banner.
- **Project Filter Tabs**: Easily filter between *All*, *Web Applications*, and *Java & Software* projects.
- **Experience Timeline**: Polished chronological presentation of internship roles (Mevi Technology, Edunet, Elewayte).
- **Interactive Resume Modal**: View the complete resume cleanly formatted in a pop-up modal with a one-click **"Print / Save as PDF"** button.
- **Interactive Contact Form**: Complete with Bootstrap form validation and toast notification feedback on submit.
- **Quick Copy Buttons**: One-click copy for email and phone number with dynamic copied feedback.
- **Extracurricular & Certifications Showcase**: Verified badge display for Oracle OCI 2025 AI Foundations, Infosys Springboard, NPTEL, and Hackathons.

---

## 📁 Project Structure

```
portfolio/
├── index.html        # Main HTML structure with semantic sections
├── css/
│   └── style.css     # Custom modern styling, CSS variables, dark/light theme rules
├── js/
│   └── script.js     # Theme switcher, typing animation, filters, form handler, copy tools
└── README.md         # Documentation & deployment guide
```

---

## 🚀 How to Run Locally

### Option 1: Direct File Opening
Double click `index.html` or right-click and choose **"Open with Google Chrome"** (or any modern web browser).

### Option 2: Live Server in VS Code
1. Open the folder in VS Code.
2. Install the **Live Server** extension.
3. Click **"Go Live"** in the bottom status bar or right click `index.html` > **"Open with Live Server"**.

### Option 3: Python Simple HTTP Server
Open PowerShell in the `portfolio` folder and run:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

---

## 🌐 How to Deploy for Free

### 1. GitHub Pages (Recommended)
1. Initialize a git repository and push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/pratibhanaragundmath/<repo-name>.git
   git push -u origin main
   ```
2. In your repository on GitHub, go to **Settings > Pages**.
3. Under **Branch**, select `main` and `/root`, then click **Save**.
4. Your site will be live at: `https://pratibhanaragundmath.github.io/<repo-name>/`

### 2. Netlify
1. Go to [Netlify.com](https://www.netlify.com/).
2. Drag and drop the `portfolio` folder directly into Netlify Drop.
3. Your website will be live in seconds with an SSL certificate.

---

## 🛠️ Personalization & Customization

- **Profile Picture**: In `index.html`, inside `.hero-avatar-inner`, replace the `<i class="bi bi-person-fill"></i>` icon with an `<img>` tag:
  ```html
  <img src="path/to/your-photo.jpg" alt="Pratibha Naragundmath" class="img-fluid rounded-circle">
  ```
- **Social Links**: Update your GitHub, LinkedIn, and contact info in `index.html`.
- **New Projects**: Add new project cards inside `<div class="row g-4">` in the `#projects` section using the `project-item` class.
=======
# Protfolio
>>>>>>> a7966ae5e4992fe901a81289ba4644bd68383ed5
