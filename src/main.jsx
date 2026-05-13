import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app.jsx'
import './index.css'

// Scroll progress and cursor glow logic
if (typeof window !== 'undefined') {
  window.addEventListener('scroll', () => {
    const progressBar = document.getElementById('progress-bar');
    if (progressBar) {
      const s = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      progressBar.style.width = (s * 100) + '%';
    }
  });

  document.addEventListener('mousemove', e => {
    const cg = document.getElementById('cg');
    if (cg) {
      cg.style.left = e.clientX + 'px';
      cg.style.top = e.clientY + 'px';
    }
  });
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
