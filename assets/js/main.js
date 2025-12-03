// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
            });
        });
    }
});

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
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
});

// Add reading progress bar
function createReadingProgressBar() {
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress-bar';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: #007bff;
        z-index: 9999;
        transition: width 0.3s ease;
    `;
    document.body.appendChild(progressBar);
    
    function updateProgress() {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    }
    
    window.addEventListener('scroll', updateProgress);
}

// Initialize reading progress bar on post pages
document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.post')) {
        createReadingProgressBar();
    }
});

// Add copy functionality to code blocks
document.addEventListener('DOMContentLoaded', function() {
    const codeBlocks = document.querySelectorAll('pre code');
    
    codeBlocks.forEach(codeBlock => {
        const button = document.createElement('button');
        button.className = 'copy-button';
        button.textContent = '复制';
        button.style.cssText = `
            position: absolute;
            top: 0.5rem;
            right: 0.5rem;
            background: #007bff;
            color: white;
            border: none;
            padding: 0.25rem 0.5rem;
            border-radius: 3px;
            cursor: pointer;
            font-size: 0.8rem;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        
        const pre = codeBlock.parentElement;
        pre.style.position = 'relative';
        pre.appendChild(button);
        
        pre.addEventListener('mouseenter', () => {
            button.style.opacity = '1';
        });
        
        pre.addEventListener('mouseleave', () => {
            button.style.opacity = '0';
        });
        
        button.addEventListener('click', () => {
            const text = codeBlock.textContent;
            navigator.clipboard.writeText(text).then(() => {
                button.textContent = '已复制!';
                setTimeout(() => {
                    button.textContent = '复制';
                }, 2000);
            });
        });
    });
});

// Add scroll to top button
function createScrollToTopButton() {
    const button = document.createElement('button');
    button.className = 'scroll-to-top';
    button.innerHTML = '↑';
    button.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        background: #007bff;
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.5rem;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
    `;
    
    document.body.appendChild(button);
    
    function toggleButton() {
        if (window.pageYOffset > 300) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    }
    
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', toggleButton);
}

// Initialize scroll to top button
document.addEventListener('DOMContentLoaded', createScrollToTopButton);