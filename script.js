// ============================================
// INITIALIZE AOS (Scroll Animations)
// ============================================
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// ============================================
// CUSTOM CURSOR GLOW
// ============================================
const cursor = document.querySelector('.cursor-glow');
if (cursor) {
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
}

// ============================================
// VIDEO BACKGROUND CONTROLS
// ============================================
const bgVideo = document.getElementById('bgVideo');
let isMuted = true;
let isPlaying = true;

// Mute/Unmute
const muteBtn = document.getElementById('muteBtn');
if (muteBtn && bgVideo) {
    muteBtn.addEventListener('click', () => {
        isMuted = !isMuted;
        bgVideo.muted = isMuted;
        muteBtn.textContent = isMuted ? '🔊' : '🔇';
    });
}

// Pause/Play
const pauseBtn = document.getElementById('pauseBtn');
if (pauseBtn && bgVideo) {
    pauseBtn.addEventListener('click', () => {
        isPlaying = !isPlaying;
        if (isPlaying) {
            bgVideo.play();
            pauseBtn.textContent = '⏸';
        } else {
            bgVideo.pause();
            pauseBtn.textContent = '▶';
        }
    });
}

// ============================================
// PARTICLE BACKGROUND SYSTEM
// ============================================
function createParticles() {
    const container = document.getElementById('particleContainer');
    if (!container) return;
    
    const particleCount = 80;
    const colors = ['#007aff', '#00c6fb', '#ffffff', '#ff9500', '#ff2d55'];
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 4 + 2;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 10;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}%;
            top: ${y}%;
            background: ${color};
            border-radius: 50%;
            opacity: ${Math.random() * 0.5 + 0.2};
            animation: floatParticle ${duration}s ${delay}s infinite ease-in-out;
            box-shadow: 0 0 ${size * 2}px ${color}40;
            pointer-events: none;
        `;
        
        container.appendChild(particle);
    }
}

// Particle Animation Keyframes (add to CSS via JS)
const particleStyles = document.createElement('style');
particleStyles.textContent = `
    @keyframes floatParticle {
        0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.2;
        }
        25% {
            transform: translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px) scale(1.2);
        }
        50% {
            transform: translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px) scale(0.8);
            opacity: 0.5;
        }
        75% {
            transform: translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px) scale(1.1);
        }
    }
`;
document.head.appendChild(particleStyles);

// Initialize particles
createParticles();

// ============================================
// VIDEO MODAL FOR TRAILER (Enhanced)
// ============================================
const videoModal = document.getElementById('videoModal');
const trailerIframe = document.getElementById('trailerIframe');
const watchTrailerBtn = document.getElementById('watchTrailerBtn');
const closeModal = document.querySelector('.close-modal');

if (watchTrailerBtn && videoModal && trailerIframe) {
    watchTrailerBtn.addEventListener('click', () => {
        videoModal.classList.add('active');
        // Enable autoplay for better experience
        trailerIframe.src = 'https://www.youtube.com/embed/VDJlWuxMnjg?autoplay=1&rel=0&modestbranding=1&showinfo=0';
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
    });
}

if (closeModal && videoModal && trailerIframe) {
    closeModal.addEventListener('click', () => {
        videoModal.classList.remove('active');
        trailerIframe.src = 'https://www.youtube.com/embed/VDJlWuxMnjg?rel=0&modestbranding=1&showinfo=0';
        document.body.style.overflow = '';
    });
}

if (videoModal && trailerIframe) {
    videoModal.addEventListener('click', (e) => {
        if (e.target === videoModal) {
            videoModal.classList.remove('active');
            trailerIframe.src = 'https://www.youtube.com/embed/VDJlWuxMnjg?rel=0&modestbranding=1&showinfo=0';
            document.body.style.overflow = '';
        }
    });
}

// ============================================
// ADD FLOATING PARTICLES TO THE MODAL
// ============================================
function addModalParticles() {
    const modal = document.querySelector('.video-modal');
    if (!modal) return;
    
    const particleContainer = document.createElement('div');
    particleContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        overflow: hidden;
        z-index: -1;
    `;
    
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 3 + 1;
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            background: rgba(255,255,255,0.1);
            border-radius: 50%;
            animation: floatParticle ${Math.random() * 15 + 10}s ${Math.random() * 5}s infinite ease-in-out;
        `;
        particleContainer.appendChild(particle);
    }
    
    modal.appendChild(particleContainer);
}

// Call this after modal is created
document.addEventListener('DOMContentLoaded', addModalParticles);

// ============================================
// NEWSLETTER FORM
// ============================================
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        const email = emailInput ? emailInput.value : '';
        if (email) {
            alert(`✅ Thank you for subscribing!\n📧 We'll send updates to: ${email}\n\n🎉 You'll be the first to know about iPhone 16!`);
            newsletterForm.reset();
        }
    });
}

// ============================================
// SMOOTH SCROLLING WITH NAVBAR OFFSET
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        if (target) {
            const navHeight = document.querySelector('.navbar')?.offsetHeight || 60;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        navbar.style.backdropFilter = 'blur(20px)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.75)';
    }
});

// ============================================
// TECH SPECS TABS
// ============================================
const tabBtns = document.querySelectorAll('.tab-btn');
const specPanels = document.querySelectorAll('.spec-panel');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabId = btn.getAttribute('data-tab');
        
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        specPanels.forEach(panel => panel.classList.remove('active'));
        const targetPanel = document.getElementById(tabId);
        if (targetPanel) {
            targetPanel.classList.add('active');
        }
    });
});

// ============================================
// COLOR SELECTOR WITH IMAGE CHANGE
// ============================================
const colorOptions = document.querySelectorAll('.color-option');
const heroPhoneImg = document.querySelector('.hero .phone-img');
const galleryImages = document.querySelectorAll('.gallery-img');

const colorImagesMap = {
    black: {
        hero: 'https://images.unsplash.com/photo-1726732946451-98690db97aae?w=600&auto=format',
        gallery: [
            'https://images.unsplash.com/photo-1726587912121-ea21fcc57ff8?w=600&auto=format',
            'https://images.unsplash.com/photo-1759588071781-2c3ba9128497?w=600&auto=format'
        ]
    },
    white: {
        hero: 'https://images.unsplash.com/photo-1726587912121-ea21fcc57ff8?w=600&auto=format',
        gallery: [
            'https://images.unsplash.com/photo-1726732946451-98690db97aae?w=600&auto=format',
            'https://images.unsplash.com/photo-1727079547627-836b0e391f21?w=600&auto=format'
        ]
    },
    natural: {
        hero: 'https://images.unsplash.com/photo-1759588071781-2c3ba9128497?w=600&auto=format',
        gallery: [
            'https://images.unsplash.com/photo-1726587912121-ea21fcc57ff8?w=600&auto=format',
            'https://images.unsplash.com/photo-1726732946451-98690db97aae?w=600&auto=format'
        ]
    },
    blue: {
        hero: 'https://images.unsplash.com/photo-1727079547627-836b0e391f21?w=600&auto=format',
        gallery: [
            'https://images.unsplash.com/photo-1759588071781-2c3ba9128497?w=600&auto=format',
            'https://images.unsplash.com/photo-1726587912121-ea21fcc57ff8?w=600&auto=format'
        ]
    }
};

if (colorOptions.length > 0 && heroPhoneImg) {
    colorOptions.forEach(option => {
        option.addEventListener('click', () => {
            const color = option.getAttribute('data-color');
            const colorData = colorImagesMap[color];
            
            // Change hero image
            if (colorData && colorData.hero) {
                heroPhoneImg.src = colorData.hero;
            }
            
            // Change gallery images
            if (colorData && colorData.gallery && galleryImages.length > 0) {
                galleryImages.forEach((img, index) => {
                    if (index < colorData.gallery.length) {
                        img.src = colorData.gallery[index];
                    }
                });
            }
            
            // Update active state
            colorOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
        });
    });
}

// ============================================
// GALLERY ITEMS CLICK HANDLER
// ============================================
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        const title = this.querySelector('h3')?.textContent || 'iPhone 16';
        alert(`✨ Explore ${title} on iPhone 16 Pro ✨`);
    });
});

// ============================================
// PARALLAX EFFECT FOR HERO
// ============================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const phone = document.querySelector('.phone-3d');
    
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.15}px)`;
    }
    
    if (phone) {
        phone.style.transform = `rotateY(${scrolled * 0.03}deg) rotateX(${scrolled * 0.02}deg)`;
    }
});

// ============================================
// DYNAMIC ISLAND ANIMATION
// ============================================
const dynamicIsland = document.querySelector('.dynamic-island-3d');
if (dynamicIsland) {
    setInterval(() => {
        dynamicIsland.style.transform = 'translateX(-50%) scale(1.1)';
        setTimeout(() => {
            dynamicIsland.style.transform = 'translateX(-50%) scale(1)';
        }, 300);
    }, 4000);
}

// ============================================
// PRICE CARDS HOVER EFFECT
// ============================================
document.querySelectorAll('.price-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        if (!card.classList.contains('featured')) {
            card.style.transform = 'translateY(0)';
        } else {
            card.style.transform = 'scale(1.05)';
        }
    });
});

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .gallery-item, .price-card, .comparison-row').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// ============================================
// PRE-ORDER BUTTON HANDLERS
// ============================================
// General pre-order buttons
document.querySelectorAll('.btn-primary:not(.price-card .btn-primary)').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Thank you for your interest! iPhone 16 will be available for pre-order soon.');
    });
});

// Price card pre-order buttons
document.querySelectorAll('.price-card .btn-primary').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const card = btn.closest('.price-card');
        const model = card?.querySelector('h3')?.textContent || 'iPhone 16';
        const price = card?.querySelector('.price')?.textContent || '';
        alert(`✨ You selected ${model}\n💰 ${price}\n📱 Pre-order will start soon!\n💝 Thank you for your interest!`);
    });
});

// ============================================
// SCROLL TO TOP BUTTON
// ============================================
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

// ============================================
// MOBILE MENU TOGGLE
// ============================================
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

if (menuIcon && navLinks) {
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuIcon.classList.toggle('active');
    });
}

// Add mobile menu styles dynamically
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

// ============================================
// COMPARISON TABLE INTERACTIONS
// ============================================
document.querySelectorAll('.comparison-row:not(.header)').forEach(row => {
    row.addEventListener('click', function() {
        this.style.background = 'rgba(0,122,255,0.1)';
        setTimeout(() => {
            this.style.background = 'transparent';
        }, 500);
    });
});

// ============================================
// VIDEO BACKGROUND FALLBACK
// ============================================
// If the video doesn't load, use a fallback
if (bgVideo) {
    bgVideo.addEventListener('error', function() {
        this.style.display = 'none';
        const wrapper = document.querySelector('.video-background-wrapper');
        if (wrapper) {
            wrapper.style.background = 'linear-gradient(135deg, #1a1a1a, #000)';
        }
    });
}

// ============================================
// KEYBOARD SHORTCUTS
// ============================================
document.addEventListener('keydown', (e) => {
    // Escape key to close video modal
    if (e.key === 'Escape' && videoModal && videoModal.classList.contains('active')) {
        videoModal.classList.remove('active');
        if (trailerIframe) {
            trailerIframe.src = 'https://www.youtube.com/embed/VDJlWuxMnjg?rel=0&modestbranding=1&showinfo=0';
        }
        document.body.style.overflow = '';
    }
    
    // T key to open trailer
    if (e.key === 't' && watchTrailerBtn) {
        watchTrailerBtn.click();
    }
    
    // M key to toggle mute
    if (e.key === 'm' && bgVideo) {
        isMuted = !isMuted;
        bgVideo.muted = isMuted;
        if (muteBtn) {
            muteBtn.textContent = isMuted ? '🔊' : '🔇';
        }
    }
    
    // Space key to toggle play/pause
    if (e.key === ' ' && bgVideo && e.target === document.body) {
        e.preventDefault();
        isPlaying = !isPlaying;
        if (isPlaying) {
            bgVideo.play();
            if (pauseBtn) {
                pauseBtn.textContent = '⏸';
            }
        } else {
            bgVideo.pause();
            if (pauseBtn) {
                pauseBtn.textContent = '▶';
            }
        }
    }
});

// ============================================
// CONSOLE WELCOME MESSAGES
// ============================================
console.log('%c📱 AB iPhone 16 Pro - Cinematic Experience', 'color: #007aff; font-size: 24px; font-weight: bold;');
console.log('%c✨ Hero section features animated particle background', 'color: #00c6fb; font-size: 14px;');
console.log('%c🎬 Click "Watch trailer" to see the official concept video', 'color: #ff9500; font-size: 14px;');
console.log('%c⌨️ Keyboard shortcuts: [T] Trailer | [M] Mute | [Space] Play/Pause | [Esc] Close', 'color: #34c759; font-size: 12px;');
console.log('%c📧 Subscribe to our newsletter for exclusive updates!', 'color: #ff2d55; font-size: 12px;');

// ============================================
// LOADING COMPLETE
// ============================================
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    console.log('✅ Website fully loaded! Ready to experience iPhone 16.');
});

// ============================================
// AMBIENT SOUND EFFECT (Optional)
// ============================================
// Create subtle ambient sound effect using Web Audio API
// This creates a subtle background ambiance - uncomment to enable
/*
function createAmbientSound() {
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const gainNode = audioCtx.createGain();
        gainNode.gain.value = 0.03; // Very subtle
        
        const oscillator = audioCtx.createOscillator();
        oscillator.frequency.value = 80;
        oscillator.type = 'sine';
        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        
        document.addEventListener('click', () => {
            if (audioCtx.state === 'suspended') {
                audioCtx.resume();
            }
        });
        
        // Uncomment to start ambient sound
        // oscillator.start();
    } catch (e) {
        // Silently fail - ambient sound is optional
    }
}
// createAmbientSound();
*/

// ============================================
// SMOOTH SCROLL FOR "ABOUT" LINK (if exists)
// ============================================
const aboutLink = document.querySelector('a[href="#about"]');
if (aboutLink) {
    aboutLink.addEventListener('click', (e) => {
        e.preventDefault();
        const heroSection = document.querySelector('#hero');
        if (heroSection) {
            heroSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

console.log('🎮 Keyboard shortcuts loaded!');