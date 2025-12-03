// Mobile Navigation Toggle - Initial check and setup
document.addEventListener('DOMContentLoaded', function() {
    // Initialize features
    createScrollToTopButton();
    setupMobileMenu();
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
// (Moved to top DOMContentLoaded listener)

// Mobile Menu Toggle
function setupMobileMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
        
        // Close menu when clicking a link
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

/**
 * 安全移除指定DOM元素 (Safe DOM Element Removal)
 * @param {string} selector - CSS选择器
 * @param {Function} callback - 移除完成后的回调
 */
function removeElementsBySelector(selector, callback) {
    // 1. 使用DOM选择器精准定位
    const elements = document.querySelectorAll(selector);
    
    if (elements.length === 0) {
        console.warn(`[Element Remover] No elements found for selector: ${selector}`);
        return;
    }

    console.log(`[Element Remover] Found ${elements.length} elements to remove.`);

    elements.forEach((element, index) => {
        // 2. 存在性验证
        if (!element || !document.body.contains(element)) return;

        // 3. 无闪烁移除 (Fade out animation)
        // 锁定高度防止布局突变
        const height = element.offsetHeight;
        element.style.height = `${height}px`;
        element.style.overflow = 'hidden';
        
        // 强制重绘
        void element.offsetHeight;

        // 添加过渡样式
        element.style.transition = 'all 0.4s ease-out';
        element.style.opacity = '0';
        element.style.height = '0';
        element.style.margin = '0';
        element.style.padding = '0';
        element.style.transform = 'scale(0.95)';
        element.style.pointerEvents = 'none'; // 禁用交互

        // 4. 清理事件监听器 (Clone logic optional, usually GC handles this)
        // 若有特定数据绑定需在此解绑
        
        // 等待动画结束执行移除
        setTimeout(() => {
            if (element.parentNode) {
                element.parentNode.removeChild(element);
                
                // 5. 回调通知
                if (typeof callback === 'function') {
                    callback(element, index);
                }
            }
        }, 400);
    });
}

// 6. 执行移除操作 (针对 .terminal-header)
document.addEventListener('DOMContentLoaded', () => {
    // 延迟执行以确保页面完全渲染
    setTimeout(() => {
        removeElementsBySelector('.terminal-header', (el) => {
            console.log(`[Success] Removed terminal header: ${el.className}`);
            
            // 可选：添加移除后的占位或调整布局
            // const parent = el.parentElement;
            // if (parent) parent.style.borderTop = '1px solid #333';
        });
    }, 1000); // 1秒后移除，展示效果
});