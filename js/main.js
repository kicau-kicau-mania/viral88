// Data konten viral
const trendingData = [
    { title: "Tantangan 88 Detik", views: "14.2M", trend: "+220%" },
    { title: "Viral Dance Challenge", views: "9.8M", trend: "+178%" },
    { title: "Mystery Box Unboxing", views: "7.3M", trend: "+95%" },
    { title: "Tips Jadi Viral", views: "5.1M", trend: "+67%" }
];

// Render cards
function renderCards() {
    const container = document.getElementById('cardsContainer');
    if(!container) return;
    
    container.innerHTML = trendingData.map(item => `
        <div class="card">
            <div class="trend-badge">🔥 Trending</div>
            <h3>${item.title}</h3>
            <p>👁️ ${item.views} views</p>
            <p>📈 ${item.trend} growth</p>
        </div>
    `).join('');
}

// Form submission
function setupContactForm() {
    const form = document.getElementById('contactForm');
    const messageDiv = document.getElementById('formMessage');
    
    if(form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const msg = document.getElementById('message').value;
            
            messageDiv.innerHTML = '✨ Terima kasih! Pesan Anda sudah terkirim ke Viral88.';
            messageDiv.style.color = '#4caf50';
            form.reset();
            
            setTimeout(() => {
                messageDiv.innerHTML = '';
            }, 3000);
        });
    }
}

// Mobile menu toggle
function setupMobileMenu() {
    const toggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if(toggle && navLinks) {
        toggle.addEventListener('click', () => {
            if(navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '70px';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.backgroundColor = '#0f0f1a';
                navLinks.style.padding = '20px';
            }
        });
    }
}

// Button action
function startNow() {
    alert('🚀 Mempercepat konten Anda menjadi viral... Selamat datang di Viral88!');
}

// Smooth scroll
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Animation on scroll
function observeCards() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s';
        observer.observe(card);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderCards();
    setupContactForm();
    setupMobileMenu();
    setupSmoothScroll();
    observeCards();
    
    // Expose global function
    window.startNow = startNow;
    
    console.log('🔥 Viral88 siap membuat kontenmu trending!');
});
