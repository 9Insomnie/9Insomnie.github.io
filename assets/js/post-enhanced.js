// Post Page Enhanced Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Typewriter Effect
    const typingText = document.querySelector('.typing-text');
    
    if (typingText && typingText.hasAttribute('data-text')) {
        const text = typingText.getAttribute('data-text');
        typingText.textContent = '';
        let i = 0;
        
        function typeChar() {
            if (i < text.length) {
                typingText.textContent += text.charAt(i);
                i++;
                setTimeout(typeChar, 100);
            }
        }
        
        setTimeout(typeChar, 500);
    }
    
    // Reading Progress Bar (Enhanced for Article Content)
    // This logic is specific to the article content area
    function createAndInitProgressBar() {
        // Create progress bar elements if they don't exist
        if (!document.querySelector('.reading-progress-bar')) {
            const barContainer = document.createElement('div');
            barContainer.className = 'reading-progress-bar';
            
            const barFill = document.createElement('div');
            barFill.className = 'progress-fill';
            
            barContainer.appendChild(barFill);
            document.body.appendChild(barContainer);
        }
        
        updateReadingProgress();
    }

    function updateReadingProgress() {
        const article = document.querySelector('.article-content');
        const progressBar = document.querySelector('.progress-fill');
        
        if (!article || !progressBar) return;
        
        const articleTop = article.offsetTop;
        const articleHeight = article.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrollTop = window.pageYOffset;
        
        const startReading = articleTop - windowHeight / 2;
        const endReading = articleTop + articleHeight - windowHeight / 2;
        
        if (scrollTop >= startReading && scrollTop <= endReading) {
            const progress = ((scrollTop - startReading) / (endReading - startReading)) * 100;
            progressBar.style.width = Math.min(100, Math.max(0, progress)) + '%';
        } else if (scrollTop > endReading) {
            progressBar.style.width = '100%';
        } else {
            progressBar.style.width = '0%';
        }
    }
    
    // Table of Contents Generation
    function generateTableOfContents() {
        const articleBody = document.querySelector('.article-body');
        const tocNav = document.getElementById('table-of-contents');
        
        if (!articleBody || !tocNav) return;
        
        const headings = articleBody.querySelectorAll('h2, h3, h4');
        if (headings.length === 0) {
            tocNav.innerHTML = '<p class="toc-empty">No headings found</p>';
            return;
        }

        const ul = document.createElement('ul');
        
        headings.forEach((heading, index) => {
            const id = 'heading-' + index;
            heading.id = id;
            
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = '#' + id;
            a.textContent = heading.textContent;
            a.className = 'toc-link';
            a.setAttribute('data-level', heading.tagName.toLowerCase());
            
            // Indentation based on heading level
            const level = parseInt(heading.tagName.charAt(1));
            a.style.paddingLeft = (level - 2) * 1 + 'rem';
            
            li.appendChild(a);
            ul.appendChild(li);
        });
        
        tocNav.appendChild(ul);
        
        // Smooth scroll for TOC links
        tocNav.addEventListener('click', function(e) {
            if (e.target.classList.contains('toc-link')) {
                e.preventDefault();
                const targetId = e.target.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Update URL hash without jumping
                    history.pushState(null, null, '#' + targetId);
                }
            }
        });
    }
    
    // Highlight Active TOC Item
    function highlightCurrentTocItem() {
        const headings = document.querySelectorAll('.article-body h2, .article-body h3, .article-body h4');
        const tocLinks = document.querySelectorAll('.toc-link');
        
        if (headings.length === 0) return;

        let currentHeading = null;
        const scrollTop = window.pageYOffset + 100;
        
        headings.forEach(heading => {
            if (heading.offsetTop <= scrollTop) {
                currentHeading = heading;
            }
        });
        
        tocLinks.forEach(link => link.classList.remove('active'));
        
        if (currentHeading) {
            const activeLink = document.querySelector(`a[href="#${currentHeading.id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    }
    
    // Back to Top Button Visibility
    const backToTopBtn = document.getElementById('backToTop');
    
    function toggleBackToTop() {
        if (!backToTopBtn) return;
        
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    }
    
    window.scrollToTop = function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    
    // Like Functionality
    window.toggleLike = function(button) {
        button.classList.toggle('liked');
        const countSpan = button.querySelector('.like-count');
        let count = parseInt(countSpan.textContent);
        
        if (button.classList.contains('liked')) {
            count++;
            // Animation
            button.style.transform = 'scale(1.1)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 200);
        } else {
            count--;
        }
        
        countSpan.textContent = count;
        
        // Save to localStorage
        const postId = window.location.pathname;
        localStorage.setItem(`liked_${postId}`, button.classList.contains('liked'));
        localStorage.setItem(`likeCount_${postId}`, count);
    };
    
    // Copy Article Content
    window.copyArticleContent = function() {
        const articleBody = document.querySelector('.article-body');
        if (articleBody) {
            const text = articleBody.innerText;
            navigator.clipboard.writeText(text).then(() => {
                const button = document.querySelector('.copy-button');
                const originalText = button.querySelector('.copy-text').textContent;
                button.querySelector('.copy-text').textContent = 'Copied!';
                setTimeout(() => {
                    button.querySelector('.copy-text').textContent = originalText;
                }, 2000);
            });
        }
    };
    
    // Copy Link Functionality
    window.copyToClipboard = function(text) {
        navigator.clipboard.writeText(text).then(() => {
            const button = event.target.closest('.share-btn');
            if (button) {
                const iconSpan = button.querySelector('.share-icon');
                const originalIcon = iconSpan.textContent;
                iconSpan.textContent = '✓';
                setTimeout(() => {
                    iconSpan.textContent = originalIcon;
                }, 2000);
            }
        });
    };
    
    // Initialize
    createAndInitProgressBar();
    generateTableOfContents();
    
    // Check local storage for likes
    const postId = window.location.pathname;
    const isLiked = localStorage.getItem(`liked_${postId}`) === 'true';
    const savedCount = localStorage.getItem(`likeCount_${postId}`);
    
    const likeBtn = document.querySelector('.like-button');
    if (likeBtn) {
        if (isLiked) {
            likeBtn.classList.add('liked');
        }
        if (savedCount) {
            likeBtn.querySelector('.like-count').textContent = savedCount;
        }
    }

    // Event Listeners
    window.addEventListener('scroll', function() {
        updateReadingProgress();
        highlightCurrentTocItem();
        toggleBackToTop();
    });
});
