// 终端显示修复脚本

class TerminalFix {
    constructor() {
        this.init();
    }

    init() {
        this.fixTerminalAlignment();
        this.setupResponsiveTerminal();
        this.fixTypingEffects();
        this.setupTerminalAnimations();
    }

    // 修复终端对齐问题
    fixTerminalAlignment() {
        const terminals = document.querySelectorAll('.terminal-window, .simple-terminal .terminal-window');
        
        terminals.forEach(terminal => {
            const lines = terminal.querySelectorAll('.terminal-line, .terminal-prompt');
            
            lines.forEach(line => {
                // 确保使用flex布局
                line.style.display = 'flex';
                line.style.alignItems = 'center';
                line.style.justifyContent = 'flex-start';
                line.style.flexWrap = 'nowrap';
                line.style.gap = '0.3rem';
                
                // 修复子元素对齐
                const children = line.children;
                Array.from(children).forEach(child => {
                    child.style.margin = '0';
                    child.style.padding = '0';
                    child.style.flexShrink = '0';
                    child.style.whiteSpace = 'nowrap';
                });
                
                // 特殊处理命令部分
                const command = line.querySelector('.command, .command-text');
                if (command) {
                    command.style.flexShrink = '1';
                    command.style.overflow = 'hidden';
                    command.style.textOverflow = 'ellipsis';
                    command.style.maxWidth = 'calc(100% - 150px)';
                }
            });
        });
    }

    // 设置响应式终端
    setupResponsiveTerminal() {
        const handleResize = () => {
            const terminals = document.querySelectorAll('.terminal-window, .simple-terminal .terminal-window');
            const isMobile = window.innerWidth <= 768;
            
            terminals.forEach(terminal => {
                const lines = terminal.querySelectorAll('.terminal-line, .terminal-prompt');
                
                lines.forEach(line => {
                    if (isMobile) {
                        // 移动端优化
                        line.style.fontSize = '0.75rem';
                        line.style.gap = '0.2rem';
                        
                        const command = line.querySelector('.command, .command-text');
                        if (command) {
                            command.style.maxWidth = 'calc(100% - 120px)';
                        }
                    } else {
                        // 桌面端恢复
                        line.style.fontSize = '0.85rem';
                        line.style.gap = '0.3rem';
                        
                        const command = line.querySelector('.command, .command-text');
                        if (command) {
                            command.style.maxWidth = 'calc(100% - 150px)';
                        }
                    }
                });
            });
        };

        // 初始化和监听resize事件
        handleResize();
        window.addEventListener('resize', handleResize);
    }

    // 修复打字机效果
    fixTypingEffects() {
        const typingElements = document.querySelectorAll('.typing-command, .typing-text');
        
        typingElements.forEach(element => {
            // 确保容器正确设置
            const container = element.parentElement;
            if (container) {
                container.style.display = 'inline-flex';
                container.style.alignItems = 'baseline';
                container.style.flexWrap = 'wrap';
                container.style.gap = '0.2rem';
            }
            
            // 确保打字机效果不会破坏布局
            element.style.display = 'inline-block';
            element.style.minWidth = '1ch';
            element.style.wordBreak = 'break-all';
            element.style.whiteSpace = 'pre-wrap';
        });
    }

    // 设置终端动画
    setupTerminalAnimations() {
        // 修复光标动画
        const cursors = document.querySelectorAll('.cursor, .typing-cursor');
        cursors.forEach(cursor => {
            cursor.style.display = 'inline-block';
            cursor.style.width = '0.6em';
            cursor.style.textAlign = 'left';
            cursor.style.animation = 'blink 1s infinite';
        });

        // 修复输出动画
        const outputLines = document.querySelectorAll('.output-line');
        outputLines.forEach((line, index) => {
            line.style.display = 'block';
            line.style.textAlign = 'left';
            line.style.marginLeft = '0';
            line.style.paddingLeft = '0';
            
            // 添加渐入动画
            line.style.opacity = '0';
            line.style.transform = 'translateX(-10px)';
            line.style.transition = 'all 0.3s ease';
            
            // 延迟显示
            setTimeout(() => {
                line.style.opacity = '1';
                line.style.transform = 'translateX(0)';
            }, index * 200);
        });
    }

    // 修复特定终端组件
    fixSpecificTerminals() {
        // 修复首页终端
        const heroTerminal = document.querySelector('.hero-section .terminal-window');
        if (heroTerminal) {
            this.optimizeHeroTerminal(heroTerminal);
        }

        // 修复文章页面终端
        const postTerminals = document.querySelectorAll('.post-container .terminal-window');
        postTerminals.forEach(terminal => {
            this.optimizePostTerminal(terminal);
        });
    }

    // 优化首页终端
    optimizeHeroTerminal(terminal) {
        terminal.style.maxWidth = '100%';
        terminal.style.margin = '0 auto';
        
        const content = terminal.querySelector('.terminal-content');
        if (content) {
            content.style.textAlign = 'left';
            content.style.padding = '1rem';
        }
    }

    // 优化文章页面终端
    optimizePostTerminal(terminal) {
        terminal.style.margin = '1rem 0';
        
        const lines = terminal.querySelectorAll('.terminal-line');
        lines.forEach(line => {
            line.style.marginBottom = '0.5rem';
            line.style.fontSize = '0.85rem';
        });
    }

    // 动态调整终端大小
    adjustTerminalSize() {
        const terminals = document.querySelectorAll('.terminal-window, .simple-terminal .terminal-window');
        
        terminals.forEach(terminal => {
            const content = terminal.querySelector('.terminal-content');
            if (content) {
                // 根据内容动态调整高度
                const lineCount = content.querySelectorAll('.terminal-line, .terminal-prompt, .output-line').length;
                const minHeight = Math.max(120, lineCount * 25 + 40);
                content.style.minHeight = `${minHeight}px`;
            }
        });
    }

    // 修复字体显示
    fixFontDisplay() {
        // 确保使用等宽字体
        const terminalElements = document.querySelectorAll(`
            .terminal-window,
            .terminal-content,
            .terminal-line,
            .terminal-prompt,
            .prompt,
            .path,
            .command,
            .output-line
        `);
        
        terminalElements.forEach(element => {
            element.style.fontFamily = `'Fira Code', 'Consolas', 'Monaco', monospace`;
            element.style.fontVariantNumeric = 'tabular-nums';
            element.style.letterSpacing = '0';
        });
    }

    // 添加终端交互
    addTerminalInteraction() {
        const terminals = document.querySelectorAll('.terminal-window, .simple-terminal .terminal-window');
        
        terminals.forEach(terminal => {
            // 点击终端时的交互效果
            terminal.addEventListener('click', () => {
                terminal.style.transform = 'scale(1.02)';
                terminal.style.transition = 'transform 0.2s ease';
                
                setTimeout(() => {
                    terminal.style.transform = 'scale(1)';
                }, 200);
            });
            
            // 鼠标悬停效果
            terminal.addEventListener('mouseenter', () => {
                terminal.style.boxShadow = '0 0 30px rgba(0, 255, 65, 0.4)';
            });
            
            terminal.addEventListener('mouseleave', () => {
                terminal.style.boxShadow = '0 0 20px rgba(0, 255, 65, 0.2)';
            });
        });
    }

    // 监控终端显示
    monitorTerminalDisplay() {
        // 使用 ResizeObserver 监控终端大小变化
        if (window.ResizeObserver) {
            const resizeObserver = new ResizeObserver(entries => {
                entries.forEach(entry => {
                    if (entry.target.classList.contains('terminal-window') || 
                        entry.target.classList.contains('simple-terminal')) {
                        this.adjustTerminalSize();
                    }
                });
            });
            
            const terminals = document.querySelectorAll('.terminal-window, .simple-terminal');
            terminals.forEach(terminal => {
                resizeObserver.observe(terminal);
            });
        }
    }
}

// 初始化终端修复
document.addEventListener('DOMContentLoaded', function() {
    new TerminalFix();
    
    // 额外的CSS修复
    const additionalStyles = document.createElement('style');
    additionalStyles.textContent = `
        /* 全局终端修复 */
        .terminal-window *, .simple-terminal * {
            box-sizing: border-box !important;
        }
        
        /* 修复flex布局 */
        .terminal-line, .terminal-prompt {
            display: flex !important;
            flex-direction: row !important;
            align-items: center !important;
            justify-content: flex-start !important;
            flex-wrap: nowrap !important;
        }
        
        /* 修复文本溢出 */
        .terminal-line > *, .terminal-prompt > * {
            flex-shrink: 0 !important;
            white-space: nowrap !important;
        }
        
        .command, .command-text {
            flex-shrink: 1 !important;
            overflow: hidden !important;
            text-overflow: ellipsis !important;
        }
        
        /* 修复输出对齐 */
        .output-line {
            display: block !important;
            text-align: left !important;
            margin-left: 0 !important;
            padding-left: 0 !important;
        }
        
        /* 修复光标 */
        .cursor, .typing-cursor {
            display: inline-block !important;
            width: 0.6em !important;
            text-align: left !important;
        }
        
        /* 修复字体 */
        .terminal-window, .simple-terminal {
            font-family: 'Fira Code', 'Consolas', 'Monaco', monospace !important;
            font-variant-numeric: tabular-nums !important;
            letter-spacing: 0 !important;
        }
    `;
    document.head.appendChild(additionalStyles);
});

// 导出终端修复工具
window.TerminalUtils = {
    fixTerminal: function(terminalElement) {
        if (terminalElement) {
            const fixer = new TerminalFix();
            fixer.fixTerminalAlignment();
            fixer.adjustTerminalSize();
            fixer.fixFontDisplay();
        }
    },
    
    resetTerminal: function(terminalElement) {
        if (terminalElement) {
            const lines = terminalElement.querySelectorAll('.terminal-line, .terminal-prompt');
            lines.forEach(line => {
                line.style.cssText = '';
                Array.from(line.children).forEach(child => {
                    child.style.cssText = '';
                });
            });
        }
    }
};