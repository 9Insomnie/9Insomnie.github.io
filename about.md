---
layout: default
title: System Info
permalink: /about/
---

<div class="about-system">
    <div class="system-header">
        <h1 class="system-title terminal-typer" data-text="System Information">
            System Information
        </h1>
        <div class="system-status">
            <span class="status-indicator online"></span>
            <span class="status-text">OPERATIONAL</span>
        </div>
    </div>

    <div class="terminal-container">
        <div class="terminal">
            <div class="terminal-header">
                <div class="terminal-buttons">
                    <span class="btn close"></span>
                    <span class="btn minimize"></span>
                    <span class="btn maximize"></span>
                </div>
                <div class="terminal-title">user-profile-terminal</div>
            </div>
            
            <div class="terminal-content">
                <div class="terminal-line">
                    <span class="prompt">root@hacker-blog</span>
                    <span class="separator">:</span>
                    <span class="path">~/system</span>
                    <span class="prompt-symbol">$</span>
                    <span class="command">cat user-profile.json</span>
                </div>
                
                <div class="terminal-output">
                    <div class="output-section">
                        <div class="output-title">// USER PROFILE</div>
                        <div class="output-content">
                            <div class="info-grid">
                                <div class="info-item">
                                    <span class="info-label">Handle:</span>
                                    <span class="info-value">9Insomnie</span>
                                </div>
                                <div class="info-item">
                                    <span class="info-label">Role:</span>
                                    <span class="info-value">Cyber Security Researcher</span>
                                </div>
                                <div class="info-item">
                                    <span class="info-label">Experience:</span>
                                    <span class="info-value">5+ Years</span>
                                </div>
                                <div class="info-item">
                                    <span class="info-label">Status:</span>
                                    <span class="info-value online">Active</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="output-section">
                        <div class="output-title">// TECHNICAL EXPERTISE</div>
                        <div class="output-content">
                            <div class="skill-categories">
                                <div class="skill-category">
                                    <div class="category-name">[Programming Languages]</div>
                                    <div class="skill-tags">
                                        <span class="skill-tag">Python</span>
                                        <span class="skill-tag">JavaScript</span>
                                        <span class="skill-tag">C/C++</span>
                                        <span class="skill-tag">Go</span>
                                        <span class="skill-tag">Rust</span>
                                    </div>
                                </div>
                                <div class="skill-category">
                                    <div class="category-name">[Security Tools]</div>
                                    <div class="skill-tags">
                                        <span class="skill-tag">Metasploit</span>
                                        <span class="skill-tag">Nmap</span>
                                        <span class="skill-tag">Wireshark</span>
                                        <span class="skill-tag">Burp Suite</span>
                                        <span class="skill-tag">Kali Linux</span>
                                    </div>
                                </div>
                                <div class="skill-category">
                                    <div class="category-name">[Web Technologies]</div>
                                    <div class="skill-tags">
                                        <span class="skill-tag">HTML/CSS</span>
                                        <span class="skill-tag">Node.js</span>
                                        <span class="skill-tag">React</span>
                                        <span class="skill-tag">Docker</span>
                                        <span class="skill-tag">AWS</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="output-section">
                        <div class="output-title">// MISSION OBJECTIVE</div>
                        <div class="output-content">
                            <div class="mission-text">
                                <p>This blog serves as a digital fortress for sharing cybersecurity knowledge, 
                                penetration testing insights, and ethical hacking tutorials. All content is 
                                for educational purposes only.</p>
                                
                                <p>Remember: With great power comes great responsibility. Always practice 
                                ethical hacking and obtain proper authorization before testing any systems.</p>
                            </div>
                        </div>
                    </div>

                    <div class="output-section">
                        <div class="output-title">// CONTACT CHANNELS</div>
                        <div class="output-content">
                            <div class="contact-channels">
                                <div class="channel-item">
                                    <span class="channel-icon">🐙</span>
                                    <span class="channel-label">GitHub:</span>
                                    <a href="https://github.com/9Insomnie" class="channel-link" target="_blank">
                                        github.com/9Insomnie
                                    </a>
                                </div>
                                <div class="channel-item">
                                    <span class="channel-icon">📧</span>
                                    <span class="channel-label">Email:</span>
                                    <span class="channel-value">9Insomnie@protonmail.com</span>
                                </div>
                                <div class="channel-item">
                                    <span class="channel-icon">🔐</span>
                                    <span class="channel-label">PGP Key:</span>
                                    <span class="channel-value fingerprint">
                                        0x9A7B8C5D4E3F2G1H
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="terminal-line">
                    <span class="prompt">root@hacker-blog</span>
                    <span class="separator">:</span>
                    <span class="path">~/system</span>
                    <span class="prompt-symbol">$</span>
                    <span class="cursor">|</span>
                </div>
            </div>
        </div>
    </div>

    <div class="security-notice">
        <div class="notice-header">
            <span class="notice-icon">⚠️</span>
            <span class="notice-title">Security Notice</span>
        </div>
        <div class="notice-content">
            <p>All activities on this blog are monitored and logged. Unauthorized access attempts will be traced and reported. 
            This system is protected by advanced intrusion detection systems.</p>
            
            <p><strong>Ethical Use Only:</strong> All information provided here is for educational and research purposes. 
            Always follow responsible disclosure and obtain proper authorization before testing any systems.</p>
        </div>
    </div>
</div>

<style>
.about-system {
    max-width: 1000px;
    margin: 0 auto;
    padding: 2rem;
    font-family: 'Fira Code', monospace;
}

.system-header {
    text-align: center;
    margin-bottom: 3rem;
    position: relative;
}

.system-title {
    font-size: 3rem;
    color: #00ff41;
    text-shadow: 0 0 20px #00ff41;
    margin-bottom: 1rem;
    position: relative;
    display: inline-block;
}

.system-status {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(0, 255, 65, 0.1);
    border: 1px solid rgba(0, 255, 65, 0.3);
    padding: 0.5rem 1rem;
    border-radius: 20px;
}

.status-indicator {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    animation: pulse 2s infinite;
}

.status-indicator.online {
    background: #00ff41;
    box-shadow: 0 0 10px #00ff41;
}

.status-text {
    color: #00ff41;
    font-weight: 600;
    font-size: 0.9rem;
}

@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
}

/* 终端样式 */
.terminal-container {
    margin-bottom: 3rem;
}

.terminal {
    background: #0a0a0a;
    border: 1px solid #00ff41;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 0 30px rgba(0, 255, 65, 0.2);
}

.terminal-header {
    background: #2d2d2d;
    padding: 0.75rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #00ff41;
}

.terminal-buttons {
    display: flex;
    gap: 0.5rem;
}

.btn {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: inline-block;
}

.btn.close { background: #ff5f57; }
.btn.minimize { background: #ffbd2e; }
.btn.maximize { background: #28ca42; }

.terminal-title {
    font-size: 0.9rem;
    color: #a0a0a0;
}

.terminal-content {
    padding: 1.5rem;
    background: #0a0a0a;
    color: #e0e0e0;
}

.terminal-line {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
    font-size: 0.9rem;
}

.prompt {
    color: #00ff41;
    font-weight: 600;
}

.separator { color: #ffffff; }
.path { color: #00d9ff; }
.prompt-symbol { color: #ffffff; }
.command {
    color: #e0e0e0;
}

.cursor {
    color: #00ff41;
    animation: blink 1s infinite;
}

.terminal-output {
    margin: 1rem 0;
}

.output-section {
    margin-bottom: 2rem;
}

.output-title {
    color: #9d4edd;
    font-weight: 600;
    margin-bottom: 1rem;
    font-size: 1.1rem;
}

.output-content {
    padding-left: 1rem;
    border-left: 2px solid #00ff41;
}

.info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
}

.info-item {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.info-label {
    color: #a0a0a0;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.info-value {
    color: #00ff41;
    font-weight: 600;
}

.info-value.online {
    color: #00ff41;
    text-shadow: 0 0 5px #00ff41;
}

/* 技能部分 */
.skill-categories {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.skill-category {
    background: rgba(0, 0, 0, 0.3);
    padding: 1rem;
    border-radius: 5px;
    border: 1px solid rgba(0, 255, 65, 0.2);
}

.category-name {
    color: #00d9ff;
    font-weight: 600;
    margin-bottom: 1rem;
    font-size: 0.9rem;
}

.skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.skill-tag {
    background: rgba(0, 255, 65, 0.2);
    color: #00ff41;
    padding: 0.3rem 0.6rem;
    border-radius: 3px;
    font-size: 0.8rem;
    border: 1px solid rgba(0, 255, 65, 0.3);
    transition: all 0.3s ease;
}

.skill-tag:hover {
    background: rgba(0, 255, 65, 0.3);
    transform: translateY(-1px);
}

/* 任务目标 */
.mission-text {
    color: #a0a0a0;
    line-height: 1.8;
}

.mission-text p {
    margin-bottom: 1rem;
}

/* 联系方式 */
.contact-channels {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.channel-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem 0;
}

.channel-icon {
    font-size: 1.2rem;
    width: 30px;
    text-align: center;
}

.channel-label {
    color: #a0a0a0;
    font-size: 0.9rem;
    min-width: 80px;
}

.channel-link {
    color: #00d9ff;
    text-decoration: none;
    transition: all 0.3s ease;
}

.channel-link:hover {
    color: #00ff41;
    text-shadow: 0 0 5px #00ff41;
}

.channel-value {
    color: #e0e0e0;
    font-family: monospace;
}

.fingerprint {
    font-size: 0.8rem;
    color: #9d4edd;
    font-family: monospace;
}

/* 安全通知 */
.security-notice {
    background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
    border: 1px solid #ff5f57;
    border-radius: 8px;
    padding: 2rem;
    position: relative;
    overflow: hidden;
}

.security-notice::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, 
        transparent, 
        #ff5f57, 
        transparent);
    animation: warning-glow 2s ease-in-out infinite;
}

@keyframes warning-glow {
    0% { left: -100%; }
    100% { left: 100%; }
}

.notice-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
}

.notice-icon {
    font-size: 1.5rem;
    color: #ff5f57;
    animation: pulse 2s infinite;
}

.notice-title {
    color: #ff5f57;
    font-weight: 600;
    font-size: 1.2rem;
}

.notice-content {
    color: #a0a0a0;
    line-height: 1.6;
}

.notice-content p {
    margin-bottom: 1rem;
}

.notice-content strong {
    color: #ff5f57;
}

/* 响应式设计 */
@media (max-width: 768px) {
    .system-title {
        font-size: 2rem;
    }
    
    .info-grid {
        grid-template-columns: 1fr;
    }
    
    .skill-tags {
        justify-content: center;
    }
    
    .channel-item {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
    }
    
    .about-system {
        padding: 1rem;
    }
}
</style>