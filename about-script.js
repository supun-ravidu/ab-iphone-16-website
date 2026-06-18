// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Mobile menu toggle
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

if (menuIcon && navLinks) {
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuIcon.classList.toggle('active');
    });
}

// Add mobile styles
const mobileStyles = document.createElement('style');
mobileStyles.textContent = `
    .nav-links.active {
        display: flex !important;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: rgba(0,0,0,0.95);
        padding: 2rem;
        gap: 1.5rem;
        align-items: center;
        border-top: 1px solid rgba(255,255,255,0.1);
    }
    
    .menu-icon.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .menu-icon.active span:nth-child(2) {
        opacity: 0;
    }
    
    .menu-icon.active span:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -5px);
    }
`;
document.head.appendChild(mobileStyles);

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.75)';
    }
});

// Parallax effect for hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.about-hero');
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        hero.style.opacity = 1 - (scrolled / (window.innerHeight * 0.8));
    }
});

// Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Add hover animation to profile card
const profileCard = document.querySelector('.profile-card');
if (profileCard) {
    profileCard.addEventListener('mouseenter', () => {
        profileCard.style.transform = 'scale(1.02)';
    });
    profileCard.addEventListener('mouseleave', () => {
        profileCard.style.transform = 'scale(1)';
    });
}

// Typewriter effect for hero title
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    
    // Start typewriter after page load
    setTimeout(typeWriter, 500);
}

// Console welcome
console.log('%c👨‍💻 Supun Rathnyaka', 'color: #007aff; font-size: 20px; font-weight: bold;');
console.log('%c🇱🇰 Sri Lankan Developer | Flutter & Firebase Expert', 'color: #fff; font-size: 14px;');
console.log('%c🚀 Building innovative apps and smart solutions', 'color: #00c6fb; font-size: 12px;');
console.log('%c🔗 GitHub: https://github.com/supun-ravidu', 'color: #34c759; font-size: 12px;');

// Animate skill tags on hover
document.querySelectorAll('.skill-tags span').forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.background = '#007aff';
    });
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.background = 'rgba(0,122,255,0.2)';
    });
});

// Project card click handler
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function() {
        const projectName = this.querySelector('h4')?.textContent || 'Project';
        alert(`🔍 Explore ${projectName}\n\nThis project showcases innovative Flutter & Firebase development.\n\n💡 Check out more on GitHub!`);
    });
});

// Scroll to top button
const scrollTopBtn = document.createElement('div');
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: #007aff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.3s;
    z-index: 1000;
    font-size: 24px;
    box-shadow: 0 4px 15px rgba(0,122,255,0.3);
    color: #fff;
    border: none;
`;
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.style.opacity = '1';
    } else {
        scrollTopBtn.style.opacity = '0';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});