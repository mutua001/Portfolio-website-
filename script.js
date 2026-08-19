// Mobile Menu Toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('hidden');
}

// Parallax Scroll Effect for Background Elements
window.addEventListener('scroll', function() {
    const parallaxElements = document.querySelectorAll('.parallax-element');
    const scrollY = window.pageYOffset;
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1); // Different speeds for each element
        const yPos = scrollY * speed;
        element.style.transform = `translateY(${yPos}px)`;
    });

    // Navigation active state
    updateNavigation();
});

// Picture Upload Handler
function handlePictureUpload(event) {
    const file = event.target.files[0];
    if (file) {
        // Check file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
            alert('File size must be less than 5MB');
            return;
        }

        // Check file type
        if (!file.type.startsWith('image/')) {
            alert('Please upload an image file');
            return;
        }

        // Read and display the image
        const reader = new FileReader();
        reader.onload = function(e) {
            const profilePic = document.getElementById('profilePicture');
            const uploadPrompt = document.getElementById('uploadPrompt');
            
            profilePic.src = e.target.result;
            profilePic.style.display = 'block';
            uploadPrompt.style.display = 'none';
            
            // Store in localStorage for persistence
            localStorage.setItem('profilePicture', e.target.result);
        };
        reader.readAsDataURL(file);
    }
}

// Load saved profile picture on page load
window.addEventListener('load', function() {
    const savedPic = localStorage.getItem('profilePicture');
    if (savedPic) {
        const profilePic = document.getElementById('profilePicture');
        const uploadPrompt = document.getElementById('uploadPrompt');
        
        profilePic.src = savedPic;
        profilePic.style.display = 'block';
        uploadPrompt.style.display = 'none';
    }
});

// Smooth scroll behavior for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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

// Contact Form Handler
function handleFormSubmit(event) {
    event.preventDefault();
    
    const form = document.getElementById('contactForm');
    const statusDiv = document.getElementById('formStatus');
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    
    // Display success message (in production, this would send to a server)
    statusDiv.classList.remove('hidden', 'bg-red-900', 'text-red-100');
    statusDiv.classList.add('bg-green-100', 'text-green-800');
    statusDiv.innerHTML = `
        <div>
            <p class="font-semibold mb-1">✓ Message Sent Successfully!</p>
            <p class="text-sm">Thank you for reaching out. I'll get back to you within 24 hours.</p>
        </div>
    `;
    
    // Reset form
    form.reset();
    
    // Hide message after 5 seconds
    setTimeout(() => {
        statusDiv.classList.add('hidden');
    }, 5000);
}

// Scroll animations - add visual effects when elements come into view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe project cards and service cards for fade-in animation
document.querySelectorAll('.project-card, .bg-white').forEach(element => {
    if (element.classList.contains('project-card') || (element.classList.contains('bg-white') && element.classList.contains('p-8'))) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    }
});

// Add keyboard navigation support
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const mobileMenu = document.getElementById('mobileMenu');
        if (!mobileMenu.classList.contains('hidden')) {
            toggleMobileMenu();
        }
    }
});

// Lazy load images (for better performance)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img.lazy').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add active state to navigation links based on scroll position
function updateNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    let current = '';
    sections.forEach(section => {
        if (pageYOffset >= section.offsetTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('text-blue-400');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('text-blue-400');
        }
    });
}

async function loadManagedGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    if (!galleryGrid || window.location.protocol === 'file:') return;

    try {
        const response = await fetch('/api/gallery');
        if (!response.ok) return;

        const gallery = await response.json();
        galleryGrid.innerHTML = gallery.map(item => `
            <div class="group relative h-40 overflow-hidden rounded-lg border border-gray-300 bg-gradient-to-br from-gray-100 to-gray-200 transition hover:border-blue-500">
                <img src="/${item.src}" alt="${item.alt}" class="h-full w-full object-cover" onerror="this.style.display='none'">
                <div class="absolute inset-0 flex items-end bg-black bg-opacity-0 p-3 transition group-hover:bg-opacity-20">
                    <p class="text-sm font-semibold text-gray-900 opacity-0 transition group-hover:opacity-100">${item.caption}</p>
                </div>
            </div>
        `).join('');
    } catch (error) {
        console.warn('Managed gallery unavailable; showing the built-in gallery.', error);
    }
}

document.addEventListener('DOMContentLoaded', loadManagedGallery);
