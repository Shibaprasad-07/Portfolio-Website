// Portfolio JavaScript - Clean & Efficient

document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for navigation
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Scroll progress indicator
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);

    // Back to top button
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTop.className = 'scroll-top';
    backToTop.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(backToTop);

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Scroll events
    window.addEventListener('scroll', () => {
        // Progress bar
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrolled + '%';

        // Back to top button
        if (window.scrollY > 400) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('section, .card, .skill-card').forEach(el => {
        observer.observe(el);
    });

    // Enhanced hover effects for skill cards
    document.querySelectorAll('.skill-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Project cards hover effects
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            const img = this.querySelector('.card-img-top');
            if (img) {
                img.style.transform = 'scale(1.05)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const img = this.querySelector('.card-img-top');
            if (img) {
                img.style.transform = 'scale(1)';
            }
        });
    });

    // Dynamic year in footer
    const currentYear = new Date().getFullYear();
    const yearElements = document.querySelectorAll('footer p');
    yearElements.forEach(el => {
        if (el.textContent.includes('2025')) {
            el.textContent = el.textContent.replace('2025', currentYear);
        }
    });

    // Page load animation
    document.body.style.opacity = '0';
    window.addEventListener('load', () => {
        document.body.style.transition = 'opacity 0.6s ease';
        document.body.style.opacity = '1';
    });

    console.log('🚀 Portfolio loaded successfully!');
});

// Mobile Menu Toggle Functions
function toggleMobileMenu() {
    const navMenu = document.getElementById('nav-menu');
    const toggleBtn = document.querySelector('.mobile-toggle i');
    
    navMenu.classList.toggle('active');
    
    if (navMenu.classList.contains('active')) {
        toggleBtn.className = 'fas fa-times';
    } else {
        toggleBtn.className = 'fas fa-bars';
    }
}

function closeMobileMenu() {
    const navMenu = document.getElementById('nav-menu');
    const toggleBtn = document.querySelector('.mobile-toggle i');
    
    navMenu.classList.remove('active');
    toggleBtn.className = 'fas fa-bars';
}