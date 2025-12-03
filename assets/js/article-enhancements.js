// 文章页面增强功能

class ArticleEnhancements {
    constructor() {
        this.init();
    }

    init() {
        this.setupCodeBlocks();
        this.setupImageGallery();
        this.setupSmoothScrolling();
        this.setupKeyboardNavigation();
        this.setupPrintFriendly();
        this.setupReadingTime();
        this.setupArticleAnalytics();
    }

    // 代码块增强功能
    setupCodeBlocks() {
        const codeBlocks = document.querySelectorAll('pre code');
        
        codeBlocks.forEach((block, index) => {
            const pre = block.parentElement;
            
            // 添加语言标识
            const language = this.detectLanguage(block);
            pre.setAttribute('data-lang', language);
            
            // 添加复制按钮
            this.addCopyButton(pre);
            
            // 添加行号
            this.addLineNumbers(block);
            
            // 添加代码折叠功能
            this.addCollapsibleFeature(pre);
            
            // 添加语法高亮增强
            this.enhanceSyntaxHighlighting(block);
        });
    }

    detectLanguage(codeBlock) {
        const className = codeBlock.className;
        const match = className.match(/language-(\w+)/);
        return match ? match[1] : 'text';
    }

    addCopyButton(pre) {
        const button = document.createElement('button');
        button.className = 'code-copy-btn';
        button.textContent = 'Copy';
        button.onclick = () => this.copyCode(pre, button);
        pre.appendChild(button);
    }

    copyCode(pre, button) {
        const code = pre.querySelector('code');
        const text = code.textContent;
        
        navigator.clipboard.writeText(text).then(() => {
            button.textContent = 'Copied!';
            button.classList.add('copied');
            
            setTimeout(() => {
                button.textContent = 'Copy';
                button.classList.remove('copied');
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy code: ', err);
        });
    }

    addLineNumbers(block) {
        const lines = block.textContent.split('\n');
        if (lines.length > 5) { // 只为长代码添加行号
            block.classList.add('line-numbers');
            
            let numberedContent = '';
            lines.forEach((line, index) => {
                numberedContent += `<span class="line">${line}</span>\n`;
            });
            
            block.innerHTML = numberedContent;
        }
    }

    addCollapsibleFeature(pre) {
        if (pre.textContent.split('\n').length > 20) { // 只为长代码添加折叠
            const header = document.createElement('div');
            header.className = 'code-collapsible-header';
            
            const title = document.createElement('span');
            title.textContent = `${this.detectLanguage(pre.querySelector('code'))} - Click to expand/collapse`;
            
            const icon = document.createElement('span');
            icon.className = 'code-collapsible-icon';
            icon.textContent = '▼';
            
            header.appendChild(title);
            header.appendChild(icon);
            
            const content = document.createElement('div');
            content.className = 'code-collapsible-content';
            content.appendChild(pre.cloneNode(true));
            
            const wrapper = document.createElement('div');
            wrapper.className = 'code-collapsible';
            wrapper.appendChild(header);
            wrapper.appendChild(content);
            
            header.onclick = () => {
                wrapper.classList.toggle('collapsed');
                icon.textContent = wrapper.classList.contains('collapsed') ? '▶' : '▼';
            };
            
            pre.parentNode.replaceChild(wrapper, pre);
        }
    }

    enhanceSyntaxHighlighting(block) {
        // 添加特殊的语法高亮增强
        const language = this.detectLanguage(block);
        
        if (language === 'python') {
            this.highlightPythonKeywords(block);
        } else if (language === 'javascript') {
            this.highlightJavaScriptKeywords(block);
        } else if (language === 'bash' || language === 'shell') {
            this.highlightBashCommands(block);
        }
    }

    highlightPythonKeywords(block) {
        const keywords = ['def', 'class', 'import', 'from', 'if', 'else', 'elif', 'for', 'while', 'try', 'except', 'finally', 'with', 'as', 'return', 'yield', 'lambda', 'and', 'or', 'not', 'in', 'is'];
        this.highlightKeywords(block, keywords, 'code-keyword');
    }

    highlightJavaScriptKeywords(block) {
        const keywords = ['function', 'const', 'let', 'var', 'if', 'else', 'for', 'while', 'do', 'switch', 'case', 'default', 'break', 'continue', 'return', 'try', 'catch', 'finally', 'throw', 'async', 'await', 'class', 'extends', 'import', 'export', 'from'];
        this.highlightKeywords(block, keywords, 'code-keyword');
    }

    highlightBashCommands(block) {
        const commands = ['echo', 'cd', 'ls', 'pwd', 'mkdir', 'rm', 'cp', 'mv', 'cat', 'grep', 'find', 'chmod', 'chown', 'sudo', 'apt', 'yum', 'systemctl', 'service'];
        this.highlightKeywords(block, commands, 'code-function');
    }

    highlightKeywords(block, keywords, className) {
        let html = block.innerHTML;
        keywords.forEach(keyword => {
            const regex = new RegExp(`\\b${keyword}\\b`, 'g');
            html = html.replace(regex, `<span class="${className}">${keyword}</span>`);
        });
        block.innerHTML = html;
    }

    // 图片画廊功能
    setupImageGallery() {
        const images = document.querySelectorAll('.article-body img');
        
        images.forEach((img, index) => {
            // 添加图片包装器
            const wrapper = document.createElement('div');
            wrapper.className = 'image-wrapper';
            wrapper.style.position = 'relative';
            wrapper.style.display = 'inline-block';
            wrapper.style.cursor = 'pointer';
            
            img.parentNode.insertBefore(wrapper, img);
            wrapper.appendChild(img);
            
            // 添加放大图标
            const zoomIcon = document.createElement('div');
            zoomIcon.className = 'zoom-icon';
            zoomIcon.innerHTML = '🔍';
            zoomIcon.style.cssText = `
                position: absolute;
                top: 10px;
                right: 10px;
                background: rgba(0, 0, 0, 0.7);
                color: #00ff41;
                padding: 5px;
                border-radius: 3px;
                font-size: 1.2rem;
                opacity: 0;
                transition: opacity 0.3s ease;
                z-index: 10;
            `;
            wrapper.appendChild(zoomIcon);
            
            // 鼠标悬停效果
            wrapper.addEventListener('mouseenter', () => {
                zoomIcon.style.opacity = '1';
            });
            
            wrapper.addEventListener('mouseleave', () => {
                zoomIcon.style.opacity = '0';
            });
            
            // 点击放大
            wrapper.addEventListener('click', () => {
                this.openImageModal(img.src, img.alt);
            });
            
            // 添加图片标题
            if (img.alt) {
                const caption = document.createElement('div');
                caption.className = 'image-caption';
                caption.textContent = img.alt;
                caption.style.cssText = `
                    text-align: center;
                    color: #a0a0a0;
                    font-size: 0.9rem;
                    margin-top: 0.5rem;
                    font-style: italic;
                `;
                wrapper.parentNode.insertBefore(caption, wrapper.nextSibling);
            }
        });
    }

    openImageModal(src, alt) {
        // 创建模态框
        const modal = document.createElement('div');
        modal.className = 'image-modal';
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            cursor: pointer;
        `;
        
        const img = document.createElement('img');
        img.src = src;
        img.alt = alt;
        img.style.cssText = `
            max-width: 90%;
            max-height: 90%;
            border: 2px solid #00ff41;
            box-shadow: 0 0 30px rgba(0, 255, 65, 0.5);
        `;
        
        modal.appendChild(img);
        document.body.appendChild(modal);
        
        // 点击关闭
        modal.addEventListener('click', () => {
            document.body.removeChild(modal);
        });
        
        // ESC键关闭
        document.addEventListener('keydown', function closeModal(e) {
            if (e.key === 'Escape') {
                document.body.removeChild(modal);
                document.removeEventListener('keydown', closeModal);
            }
        });
    }

    // 平滑滚动
    setupSmoothScrolling() {
        // 为所有锚链接添加平滑滚动
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
    }

    // 键盘导航
    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            // 左右箭头键导航到上一篇/下一篇文章
            if (e.key === 'ArrowLeft') {
                const prevLink = document.querySelector('.nav-previous .nav-link');
                if (prevLink) {
                    prevLink.click();
                }
            } else if (e.key === 'ArrowRight') {
                const nextLink = document.querySelector('.nav-next .nav-link');
                if (nextLink) {
                    nextLink.click();
                }
            }
            
            // ESC键关闭模态框
            if (e.key === 'Escape') {
                const modal = document.querySelector('.image-modal');
                if (modal) {
                    modal.click();
                }
            }
        });
    }

    // 打印友好功能
    setupPrintFriendly() {
        // 添加打印按钮
        const printButton = document.createElement('button');
        printButton.className = 'print-button';
        printButton.innerHTML = '🖨️ Print';
        printButton.style.cssText = `
            position: fixed;
            bottom: 100px;
            right: 2rem;
            background: rgba(0, 0, 0, 0.8);
            border: 1px solid #00ff41;
            color: #00ff41;
            padding: 0.5rem 1rem;
            border-radius: 5px;
            cursor: pointer;
            font-family: 'Fira Code', monospace;
            font-size: 0.8rem;
            z-index: 1000;
            transition: all 0.3s ease;
        `;
        
        printButton.addEventListener('click', () => {
            window.print();
        });
        
        document.body.appendChild(printButton);
        
        // 打印样式
        const printStyles = document.createElement('style');
        printStyles.textContent = `
            @media print {
                .print-button,
                .back-to-top,
                .code-copy-btn,
                .share-buttons,
                .reading-progress-bar,
                .content-sidebar {
                    display: none !important;
                }
                
                body {
                    background: white !important;
                    color: black !important;
                }
                
                .article-content {
                    border: none !important;
                    box-shadow: none !important;
                }
                
                pre {
                    border: 1px solid #ccc !important;
                    background: #f5f5f5 !important;
                    color: black !important;
                }
                
                code {
                    color: black !important;
                    background: #f0f0f0 !important;
                }
            }
        `;
        document.head.appendChild(printStyles);
    }

    // 阅读时间计算
    setupReadingTime() {
        const articleBody = document.querySelector('.article-body');
        if (articleBody) {
            const wordCount = articleBody.textContent.split(/\s+/).length;
            const readingTime = Math.ceil(wordCount / 200); // 假设每分钟200字
            
            const readingTimeElement = document.querySelector('.time-text');
            if (readingTimeElement) {
                readingTimeElement.textContent = `${readingTime} min read`;
            }
        }
    }

    // 文章分析
    setupArticleAnalytics() {
        const articleBody = document.querySelector('.article-body');
        if (!articleBody) return;
        
        // 统计代码块数量
        const codeBlocks = articleBody.querySelectorAll('pre').length;
        
        // 统计图片数量
        const images = articleBody.querySelectorAll('img').length;
        
        // 统计标题数量
        const headings = articleBody.querySelectorAll('h1, h2, h3, h4, h5, h6').length;
        
        // 创建分析面板
        const analyticsPanel = document.createElement('div');
        analyticsPanel.className = 'article-analytics';
        analyticsPanel.style.cssText = `
            background: rgba(0, 0, 0, 0.5);
            border: 1px solid #333;
            border-radius: 5px;
            padding: 1rem;
            margin: 2rem 0;
            font-family: 'Fira Code', monospace;
            font-size: 0.8rem;
            color: #a0a0a0;
        `;
        
        analyticsPanel.innerHTML = `
            <div style="display: flex; gap: 2rem; flex-wrap: wrap;">
                <div>
                    <span style="color: #00ff41;">📊</span>
                    Code Blocks: <span style="color: #00ff41;">${codeBlocks}</span>
                </div>
                <div>
                    <span style="color: #00d9ff;">🖼️</span>
                    Images: <span style="color: #00d9ff;">${images}</span>
                </div>
                <div>
                    <span style="color: #9d4edd;">📋</span>
                    Headings: <span style="color: #9d4edd;">${headings}</span>
                </div>
            </div>
        `;
        
        // 插入到文章末尾
        articleBody.appendChild(analyticsPanel);
    }
}

// 初始化文章增强功能
document.addEventListener('DOMContentLoaded', function() {
    // 只在文章页面初始化
    if (document.querySelector('.post-container')) {
        new ArticleEnhancements();
    }
});

// 额外的实用功能
window.ArticleUtils = {
    // 高亮代码行
    highlightLine: function(preElement, lineNumber) {
        const lines = preElement.querySelectorAll('.line');
        if (lines[lineNumber - 1]) {
            lines[lineNumber - 1].classList.add('highlight-line');
            setTimeout(() => {
                lines[lineNumber - 1].classList.remove('highlight-line');
            }, 3000);
        }
    },
    
    // 添加代码注释
    addCodeComment: function(preElement, lineNumber, comment) {
        const lines = preElement.querySelectorAll('.line');
        if (lines[lineNumber - 1]) {
            const commentElement = document.createElement('span');
            commentElement.className = 'code-comment-inline';
            commentElement.textContent = ` // ${comment}`;
            commentElement.style.cssText = `
                color: #7ec699;
                font-style: italic;
                margin-left: 2rem;
            `;
            lines[lineNumber - 1].appendChild(commentElement);
        }
    },
    
    // 切换代码折叠
    toggleCodeCollapse: function(preElement) {
        const collapsible = preElement.closest('.code-collapsible');
        if (collapsible) {
            collapsible.classList.toggle('collapsed');
            const icon = collapsible.querySelector('.code-collapsible-icon');
            icon.textContent = collapsible.classList.contains('collapsed') ? '▶' : '▼';
        }
    }
};

// 添加CSS样式用于动态创建的元素
const additionalStyles = document.createElement('style');
additionalStyles.textContent = `
    .image-wrapper {
        position: relative;
        display: inline-block;
        margin: 1rem 0;
        border-radius: 8px;
        overflow: hidden;
        border: 1px solid #333;
        transition: all 0.3s ease;
    }
    
    .image-wrapper:hover {
        border-color: #00ff41;
        box-shadow: 0 0 20px rgba(0, 255, 65, 0.3);
    }
    
    .zoom-icon {
        position: absolute;
        top: 10px;
        right: 10px;
        background: rgba(0, 0, 0, 0.8);
        color: #00ff41;
        padding: 8px;
        border-radius: 4px;
        font-size: 1.2rem;
        opacity: 0;
        transition: opacity 0.3s ease;
        cursor: pointer;
        z-index: 10;
    }
    
    .image-wrapper:hover .zoom-icon {
        opacity: 1;
    }
    
    .image-caption {
        text-align: center;
        color: #a0a0a0;
        font-size: 0.9rem;
        margin-top: 0.5rem;
        font-style: italic;
        padding: 0.5rem;
        background: rgba(0, 0, 0, 0.3);
        border-radius: 4px;
    }
    
    .image-modal {
        cursor: pointer;
        backdrop-filter: blur(5px);
    }
    
    .image-modal img {
        max-width: 90vw;
        max-height: 90vh;
        object-fit: contain;
        border: 2px solid #00ff41;
        box-shadow: 0 0 30px rgba(0, 255, 65, 0.5), 0 0 60px rgba(0, 255, 65, 0.3);
        animation: modalGlow 2s ease-in-out infinite alternate;
    }
    
    @keyframes modalGlow {
        from { box-shadow: 0 0 30px rgba(0, 255, 65, 0.5), 0 0 60px rgba(0, 255, 65, 0.3); }
        to { box-shadow: 0 0 40px rgba(0, 255, 65, 0.7), 0 0 80px rgba(0, 255, 65, 0.5); }
    }
    
    .print-button {
        font-family: 'Fira Code', monospace;
        font-size: 0.8rem;
        transition: all 0.3s ease;
    }
    
    .print-button:hover {
        background: rgba(0, 255, 65, 0.2) !important;
        box-shadow: 0 0 15px rgba(0, 255, 65, 0.5) !important;
        transform: translateY(-2px) !important;
    }
    
    .article-analytics {
        border: 1px solid rgba(0, 255, 65, 0.3) !important;
        background: linear-gradient(135deg, rgba(0, 255, 65, 0.1) 0%, rgba(0, 217, 255, 0.1) 100%) !important;
    }
    
    .code-comment-inline {
        color: #7ec699 !important;
        font-style: italic !important;
        opacity: 0.8 !important;
    }
`;

document.head.appendChild(additionalStyles);