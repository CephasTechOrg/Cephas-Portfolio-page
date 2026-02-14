
// Your existing JavaScript code for other functionality (typing effect, navigation, etc.)
// Project data for modals
const projects = {
    1: {
        title: "Vital-Go",
        image: "https://img.freepik.com/premium-photo/medicine-doctor-working-with-digital-medical-interface-icons-hospital-background-healthcare-medical-technology-network-concept_265022-20251.jpg",
        description: "Vital-Go is a production-ready health platform that streams live vitals from wearables, layers AI-driven risk scoring, and lets doctors collaborate in real time through dashboards and video consults. It unifies patient timelines, alerts, and triage workflows so clinical teams can intervene before emergencies happen.",
        technologies: ["Python", "FastAPI", "PostgreSQL", "WebSockets", "AI Risk Engines", "WebRTC", "React"],
        demoLink: "#",
        codeLink: "#"
    },
    2: {
        title: "Interview Prep AI",
        image: "assets/images/interview.png",
        description: "Interview Prep AI is a full-stack mock interview platform built with FastAPI and PostgreSQL that helps users practice for technical and behavioral interviews at top tech companies like Amazon, Apple, and Microsoft. The platform uses JWT authentication and an intelligent feedback system powered by RAG (Retrieval Augmented Generation) with embeddings to generate relevant follow-up questions from curated question banks covering software engineering and cybersecurity roles.",
        technologies: ["Python", "FastAPI", "PostgreSQL", "RAG", "LLMs", "JWT Auth", "Vector Embeddings", "React"],
        demoLink: "#",
        codeLink: "#"
    },
    3: {
        title: "PedraX",
        image: "assets/images/pderax.png",
        description: "PedraX accepts PDFs, Word documents, or spreadsheets, extracts their contents with a FastAPI processing pipeline, and routes the text to AI models for summarization, question generation, and branded exports. Users receive downloadable PDF, DOCX, or TXT reports complete with custom logos and comprehension checks.",
        technologies: ["Python", "FastAPI", "OpenAI API", "PDF Processing", "PostgreSQL", "AWS S3", "Vue.js"],
        demoLink: "#",
        codeLink: "#"
    },
    4: {
        title: "Resume Job Match Evaluator",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
        description: "The Resume Job Match Evaluator compares a candidate's resume against job, scholarship, or academic program descriptions pulled from the backend. It computes fit scores, visualizes strengths versus gaps, generates improvement prompts, and produces printable reports so applicants can take action quickly.",
        technologies: ["Python", "FastAPI", "React", "D3.js", "NLP Models", "Redis", "Tailwind CSS"],
        demoLink: "#",
        codeLink: "#"
    },
    5: {
        title: "TinyChatGPT",
        image: "assets/images/uai.jpg",
        description: "TinyChatGPT is a from-scratch, decoder-only Transformer (GPT-style) chatbot project built to learn the full training pipeline end-to-end. It starts small on CPU (laptop-friendly) and scales to GPU/cloud later using the same architecture and codebase.",
        technologies: ["Python", "PyTorch", "Transformers", "NumPy", "CUDA", "Deep Learning", "NLP"],
        demoLink: "#",
        codeLink: "#"
    },
    6: {
        title: "Smart Budget Pro",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
        description: "Smart Budget Pro helps thousands of users control their finances from a published mobile app. It tracks day-to-day spend, income streams, saving goals, and automatically renders charts so people understand where money goes each day, week, month, or year.",
        technologies: ["Flutter", "Dart", "Firebase", "REST APIs", "PostgreSQL", "RevenueCat"],
        demoLink: "#",
        codeLink: "#"
    },
    7: {
        title: "MTN Data Automation",
        image: "assets/images/MTN.jpg",
        description: "An MTN bundle marketplace with user and admin portals. Customers purchase data bundles, complete payments, and the system routes confirmations to admins who approve and trigger automated bundle provisioning. Audit trails keep every request traceable end-to-end.",
        technologies: ["Python", "FastAPI", "PostgreSQL", "Flutter Web", "Paystack API", "Celery", "Redis"],
        demoLink: "#",
        codeLink: "#"
    },
    8: {
        title: "Chrome Extension Builder",
        image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=900&q=80",
        description: "A Node.js service that powers a Chrome extension infused with DeepSeek AI. Users can highlight text in any tab, fire prompts, and receive contextual answers, drafts, or code snippets without leaving the browser.",
        technologies: ["Node.js", "Express", "Chrome APIs", "DeepSeek API", "TypeScript", "WebSockets"],
        demoLink: "#",
        codeLink: "#"
    },
    9: {
        title: "OpenAI Website Builder",
        image: "https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=900&q=80",
        description: "A TypeScript-driven studio where founders select a site type, fill prompt placeholders, and let the AI agent craft full HTML/CSS/JS templates. Users preview results instantly, then download or publish to Netlify straight from the interface.",
        technologies: ["TypeScript", "Node.js", "Next.js", "Tailwind CSS", "OpenAI API", "Prisma"],
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
    mobileNavToggle.setAttribute('aria-expanded', (!isActive).toString());

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
        mobileNavToggle.setAttribute('aria-expanded', 'false');
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
    initScrollAnimations();
    initAssistiveTools();
});

// Animation on scroll
function checkVisibility() {
    if (window.__animObserverInitialized) return;
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

function initScrollAnimations() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elements = document.querySelectorAll('.fade-in');
    if (!elements.length) return;

    if (prefersReducedMotion) {
        elements.forEach(el => el.classList.add('visible'));
        return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(el => observer.observe(el));
    window.__animObserverInitialized = true;
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
            closeModal.focus();
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

// Close modal with Escape key
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Download CV functionality
document.querySelectorAll('.download, .mobile-download').forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        const cvUrl = 'resume/Cephas.pdf';

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

// Back to Top Button
const createBackToTopButton = () => {
    const button = document.createElement('button');
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    button.className = 'back-to-top';
    button.setAttribute('aria-label', 'Back to top');
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(90deg, var(--accent), var(--accent-2));
        color: #00202b;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        z-index: 999;
        box-shadow: 0 4px 15px rgba(16, 183, 255, 0.3);
        transition: all 0.3s ease;
        opacity: 0;
        transform: translateY(20px);
    `;

    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-5px)';
        button.style.boxShadow = '0 6px 20px rgba(16, 183, 255, 0.4)';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
        button.style.boxShadow = '0 4px 15px rgba(16, 183, 255, 0.3)';
    });

    document.body.appendChild(button);

    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            button.style.display = 'flex';
            setTimeout(() => {
                button.style.opacity = '1';
                button.style.transform = 'translateY(0)';
            }, 10);
        } else {
            button.style.opacity = '0';
            button.style.transform = 'translateY(20px)';
            setTimeout(() => {
                if (window.scrollY <= 300) {
                    button.style.display = 'none';
                }
            }, 300);
        }
    });
};

// Initialize back to top button
document.addEventListener('DOMContentLoaded', createBackToTopButton);

// Scroll progress indicator
const progressBar = document.getElementById('scrollProgressBar');
if (progressBar) {
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    });
}

// Assistive tools
function initAssistiveTools() {
    const toggle = document.getElementById('assistiveToggle');
    const panel = document.getElementById('assistivePanel');
    if (!toggle || !panel) return;

    const increaseText = document.getElementById('increaseText');
    const decreaseText = document.getElementById('decreaseText');
    const resetText = document.getElementById('resetText');
    const toggleContrast = document.getElementById('toggleContrast');
    const toggleMotion = document.getElementById('toggleMotion');
    const body = document.body;
    const state = {
        fontScale: parseFloat(localStorage.getItem('assistiveFontScale')) || 1,
        contrast: localStorage.getItem('assistiveContrast') === '1',
        reduceMotion: localStorage.getItem('assistiveMotion') === '1'
    };

    const applyState = () => {
        body.style.fontSize = `${16 * state.fontScale}px`;
        body.classList.toggle('high-contrast', state.contrast);
        body.classList.toggle('reduce-motion', state.reduceMotion);
    };

    const persist = () => {
        localStorage.setItem('assistiveFontScale', state.fontScale);
        localStorage.setItem('assistiveContrast', state.contrast ? '1' : '0');
        localStorage.setItem('assistiveMotion', state.reduceMotion ? '1' : '0');
    };

    applyState();

    toggle.addEventListener('click', () => {
        const isOpen = panel.classList.toggle('active');
        toggle.setAttribute('aria-expanded', isOpen.toString());
    });

    const adjustFont = (delta) => {
        state.fontScale = Math.min(1.4, Math.max(0.85, +(state.fontScale + delta).toFixed(2)));
        applyState();
        persist();
    };

    increaseText?.addEventListener('click', () => adjustFont(0.05));
    decreaseText?.addEventListener('click', () => adjustFont(-0.05));
    resetText?.addEventListener('click', () => { state.fontScale = 1; applyState(); persist(); });

    toggleContrast?.addEventListener('click', () => {
        state.contrast = !state.contrast;
        applyState();
        persist();
    });

    toggleMotion?.addEventListener('click', () => {
        state.reduceMotion = !state.reduceMotion;
        applyState();
        persist();
    });
}
