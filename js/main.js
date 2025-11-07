
// Your existing JavaScript code for other functionality (typing effect, navigation, etc.)
// Project data for modals
const projects = {
    1: {
        title: "AI-Powered Education Platform",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        description: "An intelligent learning platform that adapts to student needs using machine learning algorithms. The system analyzes learning patterns and customizes content delivery to optimize knowledge retention. Features include personalized learning paths, interactive assessments, and real-time progress tracking. This project demonstrates my ability to integrate AI technologies with user-centered design to create impactful educational tools.",
        technologies: ["Python", "TensorFlow", "React", "Node.js", "MongoDB"],
        demoLink: "#",
        codeLink: "#"
    },
    2: {
        title: "Healthcare Analytics Dashboard",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        description: "A comprehensive dashboard for healthcare providers to analyze patient data and predict health trends. The system processes large datasets to identify patterns and provide actionable insights. It includes features for patient monitoring, treatment effectiveness analysis, and predictive modeling for disease outbreaks. This project showcases my skills in data visualization, machine learning, and creating user-friendly interfaces for complex data.",
        technologies: ["Python", "FastAPI", "React", "D3.js", "PostgreSQL"],
        demoLink: "#",
        codeLink: "#"
    },
    3: {
        title: "Community Resource Finder",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        description: "A platform connecting underserved communities with local resources and support services. The application uses geolocation to help users find food banks, healthcare services, educational programs, and employment assistance in their area. It includes features for service providers to update their information and for users to leave reviews. This project reflects my commitment to using technology for social good and creating accessible solutions.",
        technologies: ["React", "Node.js", "Google Maps API", "Firebase", "Capacitor"],
        demoLink: "#",
        codeLink: "#"
    },
    4: {
        title: "E-commerce Analytics Platform",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        description: "An analytics platform for e-commerce businesses to track performance and customer behavior. The system provides insights on sales trends, customer segmentation, and product performance. Features include interactive dashboards, automated reporting, and predictive analytics for inventory management. This project demonstrates my ability to create data-driven solutions that help businesses make informed decisions.",
        technologies: ["React", "Node.js", "Python", "Chart.js", "PostgreSQL"],
        demoLink: "#",
        codeLink: "#"
    },
    5: {
        title: "Financial Planning App",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        description: "A mobile application that helps users manage their finances and plan for the future. The app includes features for budget tracking, expense categorization, savings goals, and investment tracking. It uses machine learning to provide personalized financial advice and spending insights. This project showcases my skills in mobile development and financial technology.",
        technologies: ["React Native", "Node.js", "Firebase", "TensorFlow", "Plaid API"],
        demoLink: "#",
        codeLink: "#"
    },
    6: {
        title: "IoT Home Automation",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        description: "A smart home system that allows users to control their home devices remotely. The system integrates with various IoT devices including lights, thermostats, and security cameras. Features include voice control, automation rules, and energy usage monitoring. This project demonstrates my ability to work with embedded systems and IoT technologies.",
        technologies: ["Arduino", "C++", "React Native", "Node.js", "MQTT"],
        demoLink: "#",
        codeLink: "#"
    }
};

// Typing effect
const words = ["Software Developer", "AI Engineer", "Tech Visionary", "Open Source Contributor"];
let idx = 0, char = 0;
const typingEl = document.getElementById('typing');

function type() {
    if (char <= words[idx].length) {
        typingEl.textContent = words[idx].slice(0, char);
        char++;
        setTimeout(type, 90);
    } else setTimeout(erase, 1000);
}

function erase() {
    if (char >= 0) {
        typingEl.textContent = words[idx].slice(0, char);
        char--;
        setTimeout(erase, 45);
    } else {
        idx = (idx + 1) % words.length;
        setTimeout(type, 200);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    type();
});

// Mobile navigation functionality - FIXED for stability
const mobileNavToggle = document.getElementById('mobileNavToggle');
const mobileNav = document.getElementById('mobileNav');
const mobileNavOverlay = document.getElementById('mobileNavOverlay');
const mobileNavLinks = document.querySelectorAll('.mobile-nav a');

function toggleMobileNav() {
    const isActive = mobileNav.classList.contains('active');

    // Prevent body scroll when mobile nav is open
    document.body.style.overflow = isActive ? 'auto' : 'hidden';

    // Toggle classes
    mobileNav.classList.toggle('active');
    mobileNavOverlay.classList.toggle('active');

    // Prevent multiple rapid clicks
    mobileNavToggle.style.pointerEvents = 'none';
    setTimeout(() => {
        mobileNavToggle.style.pointerEvents = 'auto';
    }, 300);
}

mobileNavToggle.addEventListener('click', toggleMobileNav);
mobileNavOverlay.addEventListener('click', toggleMobileNav);

// Close mobile nav when a link is clicked
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        mobileNavOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerHeight = document.querySelector('.site-header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll handler
let scrollTimeout;
window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav a, .mobile-nav a');

        let current = '';
        const headerHeight = document.querySelector('.site-header').offsetHeight;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - headerHeight - 50)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });

        // Header scroll effect
        const header = document.getElementById('siteHeader');
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Check visibility for fade-in animations
        checkVisibility();
    }, 10);
});

// Initialize header state
document.addEventListener('DOMContentLoaded', function () {
    const header = document.getElementById('siteHeader');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    }

    checkVisibility();
});

// Animation on scroll
function checkVisibility() {
    const elements = document.querySelectorAll('.fade-in');

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const isVisible = (elementTop < window.innerHeight - 100) && (elementBottom > 0);

        if (isVisible) {
            element.classList.add('visible');
        }
    });
}

// Project modal functionality
const modal = document.getElementById('project-modal');
const closeModal = document.querySelector('.close-modal');
const modalTitle = document.getElementById('modal-title');
const modalImage = document.getElementById('modal-image');
const modalDescription = document.getElementById('modal-description');
const modalTech = document.getElementById('modal-tech');
const modalLinks = document.getElementById('modal-links');

// Open modal when "View Details" is clicked
document.querySelectorAll('.view-details').forEach(button => {
    button.addEventListener('click', function () {
        const projectId = this.getAttribute('data-project');
        const project = projects[projectId];

        if (project) {
            modalTitle.textContent = project.title;
            modalImage.src = project.image;
            modalDescription.textContent = project.description;

            // Clear and add technology tags
            modalTech.innerHTML = '';
            project.technologies.forEach(tech => {
                const techTag = document.createElement('span');
                techTag.className = 'tech-tag';
                techTag.textContent = tech;
                modalTech.appendChild(techTag);
            });

            // Clear and add project links
            modalLinks.innerHTML = '';
            const demoLink = document.createElement('a');
            demoLink.href = project.demoLink;
            demoLink.className = 'portfolio-link';
            demoLink.innerHTML = '<i class="fas fa-external-link-alt"></i> Live Demo';
            modalLinks.appendChild(demoLink);

            const codeLink = document.createElement('a');
            codeLink.href = project.codeLink;
            codeLink.className = 'portfolio-link';
            codeLink.innerHTML = '<i class="fab fa-github"></i> Source Code';
            modalLinks.appendChild(codeLink);

            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });
});

// Close modal when X is clicked
closeModal.addEventListener('click', function () {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside the content
window.addEventListener('click', function (e) {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Download CV functionality
document.querySelectorAll('.download, .mobile-download').forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        // Replace with the actual path to your CV file
        const cvUrl = 'path/to/your/cv.pdf';

        // Create a temporary anchor element to trigger download
        const link = document.createElement('a');
        link.href = cvUrl;
        link.download = 'Cephas_Osei-Bonsu_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});

// Contact Me button functionality
document.querySelectorAll('.btn.outline').forEach(button => {
    button.addEventListener('click', function () {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });
});

// Hire Me button functionality
document.querySelectorAll('.btn.hire').forEach(button => {
    button.addEventListener('click', function () {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });
});