document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.site-header');
    const nav = document.querySelector('.site-header .main-nav');
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelectorAll('.nav-links a');
    const searchTriggers = document.querySelectorAll('[data-search-trigger]');
    const searchOverlay = document.querySelector('.search-overlay');
    const searchInput = document.querySelector('#search-input');
    const closeSearchButton = document.querySelector('[data-close-search]');
    const revealItems = document.querySelectorAll('.reveal');

    function updateHeaderState() {
        if (!header) return;

        if (window.scrollY > 30) {
            header.classList.add('scrolled');
            header.classList.add('compact');
        } else {
            header.classList.remove('scrolled');
            header.classList.remove('compact');
        }
    }

    function toggleMobileMenu() {
        if (!document.body.classList.contains('nav-open')) {
            document.body.classList.add('nav-open');
            navToggle.setAttribute('aria-expanded', 'true');
        } else {
            document.body.classList.remove('nav-open');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    }

    function closeMobileMenu() {
        document.body.classList.remove('nav-open');
        if (navToggle) {
            navToggle.setAttribute('aria-expanded', 'false');
        }
    }

    function openSearchOverlay() {
        if (!searchOverlay) return;
        searchOverlay.classList.add('active');
        setTimeout(() => {
            if (searchInput) searchInput.focus();
        }, 60);
    }

    function closeSearchOverlay() {
        if (!searchOverlay) return;
        searchOverlay.classList.remove('active');
        if (searchInput) searchInput.blur();
    }

    function initializeReveal() {
        if (!('IntersectionObserver' in window)) {
            revealItems.forEach((item) => item.classList.add('visible'));
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });

        revealItems.forEach((item) => observer.observe(item));
    }

    if (navToggle) {
        navToggle.addEventListener('click', toggleMobileMenu);
    }

    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            closeMobileMenu();
        });
    });

    searchTriggers.forEach((trigger) => {
        trigger.addEventListener('click', openSearchOverlay);
    });

    if (closeSearchButton) {
        closeSearchButton.addEventListener('click', closeSearchOverlay);
    }

    if (searchOverlay) {
        searchOverlay.addEventListener('click', (event) => {
            if (event.target === searchOverlay) {
                closeSearchOverlay();
            }
        });
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && searchOverlay && searchOverlay.classList.contains('active')) {
            closeSearchOverlay();
        }
    });

    updateHeaderState();
    window.addEventListener('scroll', updateHeaderState);
    initializeReveal();
});
