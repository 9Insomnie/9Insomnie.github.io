// 黑客风格特效脚本

// 矩阵雨效果
class MatrixRain {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}';
        this.chars = this.chars.split('');
        this.fontSize = 14;
        this.drops = [];
        this.columns = 0;
        this.rows = 0;
        
        this.init();
    }
    
    init() {
        // 设置canvas样式
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.zIndex = '-1';
        this.canvas.style.opacity = '0.1';
        this.canvas.style.pointerEvents = 'none';
        
        document.body.appendChild(this.canvas);
        
        this.resize();
        this.setupDrops();
        this.animate();
        
        window.addEventListener('resize', () => this.resize());
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.columns = Math.floor(this.canvas.width / this.fontSize);
        this.rows = Math.floor(this.canvas.height / this.fontSize);
        this.setupDrops();
    }
    
    setupDrops() {
        this.drops = [];
        for (let i = 0; i < this.columns; i++) {
            this.drops[i] = Math.random() * this.rows;
        }
    }
    
    animate() {
        this.ctx.fillStyle = 'rgba(10, 10, 10, 0.04)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.ctx.fillStyle = '#00ff41';
        this.ctx.font = `${this.fontSize}px monospace`;
        
        for (let i = 0; i < this.drops.length; i++) {
            const text = this.chars[Math.floor(Math.random() * this.chars.length)];
            const x = i * this.fontSize;
            const y = this.drops[i] * this.fontSize;
            
            // 添加发光效果
            this.ctx.shadowColor = '#00ff41';
            this.ctx.shadowBlur = 10;
            this.ctx.fillText(text, x, y);
            
            // 重置阴影
            this.ctx.shadowBlur = 0;
            
            if (y > this.canvas.height && Math.random() > 0.975) {
                this.drops[i] = 0;
            }
            this.drops[i]++;
        }
        
        requestAnimationFrame(() => this.animate());
    }
    
    destroy() {
        if (this.canvas.parentNode) {
            this.canvas.parentNode.removeChild(this.canvas);
        }
    }
}

// 终端打字机效果
class TerminalTyper {
    constructor(element, text, speed = 50) {
        this.element = element;
        this.text = text;
        this.speed = speed;
        this.index = 0;
        this.cursor = document.createElement('span');
        this.cursor.textContent = '|';
        this.cursor.style.color = '#00ff41';
        this.cursor.style.animation = 'blink 1s infinite';
        
        this.init();
    }
    
    init() {
        this.element.innerHTML = '';
        this.element.appendChild(this.cursor);
        this.type();
    }
    
    type() {
        if (this.index < this.text.length) {
            const char = this.text.charAt(this.index);
            const span = document.createElement('span');
            span.textContent = char;
            span.style.opacity = '0';
            span.style.transition = 'opacity 0.1s ease';
            
            this.element.insertBefore(span, this.cursor);
            
            setTimeout(() => {
                span.style.opacity = '1';
            }, 50);
            
            this.index++;
            setTimeout(() => this.type(), this.speed + Math.random() * 100);
        } else {
            // 打字完成，移除光标或保持闪烁
            setTimeout(() => {
                this.cursor.style.animation = 'blink 2s infinite';
            }, 1000);
        }
    }
}

// 数字雨效果（简版）
class DigitalRain {
    constructor(container) {
        this.container = container;
        this.numbers = '0123456789';
        this.symbols = '01';
        this.drops = [];
        this.init();
    }
    
    init() {
        this.createRainDrops();
        this.animate();
    }
    
    createRainDrops() {
        for (let i = 0; i < 50; i++) {
            const drop = document.createElement('div');
            drop.className = 'digital-drop';
            drop.textContent = Math.random() > 0.5 ? '0' : '1';
            drop.style.cssText = `
                position: absolute;
                color: #00ff41;
                font-family: monospace;
                font-size: 14px;
                opacity: ${Math.random() * 0.5 + 0.1};
                left: ${Math.random() * 100}%;
                top: -20px;
                pointer-events: none;
                text-shadow: 0 0 5px #00ff41;
            `;
            
            this.container.appendChild(drop);
            this.drops.push({
                element: drop,
                speed: Math.random() * 3 + 1,
                reset: () => {
                    drop.style.top = '-20px';
                    drop.style.left = Math.random() * 100 + '%';
                    drop.textContent = Math.random() > 0.5 ? '0' : '1';
                }
            });
        }
    }
    
    animate() {
        this.drops.forEach(drop => {
            const currentTop = parseFloat(drop.element.style.top);
            const newTop = currentTop + drop.speed;
            
            if (newTop > window.innerHeight) {
                drop.reset();
            } else {
                drop.element.style.top = newTop + 'px';
            }
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// 鼠标轨迹效果
class MouseTrail {
    constructor() {
        this.trails = [];
        this.maxTrails = 20;
        this.init();
    }
    
    init() {
        document.addEventListener('mousemove', (e) => this.createTrail(e));
        this.animate();
    }
    
    createTrail(e) {
        if (this.trails.length < this.maxTrails) {
            const trail = document.createElement('div');
            trail.className = 'mouse-trail';
            trail.style.cssText = `
                position: fixed;
                width: 4px;
                height: 4px;
                background: #00ff41;
                border-radius: 50%;
                pointer-events: none;
                z-index: 9998;
                left: ${e.clientX}px;
                top: ${e.clientY}px;
                box-shadow: 0 0 10px #00ff41;
                transition: opacity 0.3s ease;
            `;
            
            document.body.appendChild(trail);
            this.trails.push({
                element: trail,
                opacity: 1,
                x: e.clientX,
                y: e.clientY
            });
            
            setTimeout(() => {
                this.removeTrail(trail);
            }, 1000);
        }
    }
    
    removeTrail(trail) {
        trail.style.opacity = '0';
        setTimeout(() => {
            if (trail.parentNode) {
                trail.parentNode.removeChild(trail);
            }
            this.trails = this.trails.filter(t => t.element !== trail);
        }, 300);
    }
    
    animate() {
        this.trails.forEach((trail, index) => {
            trail.opacity -= 0.02;
            trail.element.style.opacity = trail.opacity;
            
            if (trail.opacity <= 0) {
                this.removeTrail(trail.element);
            }
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// 终端命令效果
class TerminalCommand {
    constructor(container, commands, speed = 100) {
        this.container = container;
        this.commands = commands;
        this.speed = speed;
        this.currentCommand = 0;
        this.init();
    }
    
    init() {
        this.container.className = 'terminal-container';
        this.container.style.cssText = `
            background: #0a0a0a;
            border: 1px solid #00ff41;
            border-radius: 5px;
            padding: 1rem;
            font-family: monospace;
            color: #00ff41;
            box-shadow: 0 0 20px rgba(0, 255, 65, 0.3);
            max-height: 300px;
            overflow-y: auto;
        `;
        
        this.executeNextCommand();
    }
    
    executeNextCommand() {
        if (this.currentCommand < this.commands.length) {
            const command = this.commands[this.currentCommand];
            this.typeCommand(command, () => {
                this.currentCommand++;
                setTimeout(() => this.executeNextCommand(), 1000);
            });
        }
    }
    
    typeCommand(command, callback) {
        const prompt = document.createElement('div');
        prompt.innerHTML = '<span style="color: #00ff41;">user@n0irx:~$ </span>';
        this.container.appendChild(prompt);
        
        let i = 0;
        const typeChar = () => {
            if (i < command.length) {
                prompt.innerHTML += command.charAt(i);
                i++;
                setTimeout(typeChar, this.speed);
            } else {
                // 添加命令输出
                const output = document.createElement('div');
                output.style.color = '#e0e0e0';
                output.style.marginLeft = '1rem';
                output.textContent = this.getCommandOutput(command);
                this.container.appendChild(output);
                
                this.container.scrollTop = this.container.scrollHeight;
                callback();
            }
        };
        
        typeChar();
    }
    
    getCommandOutput(command) {
        const outputs = {
            'ls': 'blog-posts  assets  _layouts  _includes',
            'pwd': '/home/user/n0irx-blog',
            'whoami': 'cyber-punk',
            'date': new Date().toLocaleString(),
            'echo "Hello World"': 'Hello World'
        };
        
        return outputs[command] || 'Command executed successfully';
    }
}

// 初始化所有效果
document.addEventListener('DOMContentLoaded', function() {
    // 矩阵雨效果
    const matrixRain = new MatrixRain();
    
    // 鼠标轨迹效果
    const mouseTrail = new MouseTrail();
    
    // 数字雨效果（用于特定容器）
    const digitalContainers = document.querySelectorAll('.digital-rain-container');
    digitalContainers.forEach(container => {
        new DigitalRain(container);
    });
    
    // 终端效果（用于特定容器）
    const terminalContainers = document.querySelectorAll('.terminal-effect');
    terminalContainers.forEach(container => {
        const commands = ['ls', 'pwd', 'whoami', 'date', 'echo "Hello World"'];
        new TerminalCommand(container, commands);
    });
    
    // 打字机效果（用于特定元素）
    const typerElements = document.querySelectorAll('.terminal-typer');
    typerElements.forEach(element => {
        const text = element.getAttribute('data-text') || element.textContent;
        new TerminalTyper(element, text);
    });
    
    // 添加CSS动画关键帧
    const style = document.createElement('style');
    style.textContent = `
        @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
        }
        
        .digital-drop {
            animation: fadeInOut 2s ease-in-out infinite;
        }
        
        @keyframes fadeInOut {
            0%, 100% { opacity: 0.1; }
            50% { opacity: 0.5; }
        }
    `;
    document.head.appendChild(style);
});

// 页面卸载时清理
document.addEventListener('beforeunload', function() {
    // 清理动画效果
    const matrixCanvas = document.querySelector('canvas');
    if (matrixCanvas && matrixCanvas.parentNode) {
        matrixCanvas.parentNode.removeChild(matrixCanvas);
    }
});

// 导出类供全局使用
window.HackerEffects = {
    MatrixRain,
    TerminalTyper,
    DigitalRain,
    MouseTrail,
    TerminalCommand
};