+++
title = "DNS 泄露防护全指南：从系统到应用的层层防护方案"
date = 2026-01-07T10:00:00+08:00
draft = false
tags = ["DNS", "Privacy", "Network Security", "VPN", "Proxy"]
categories = ["Security"]

+++

DNS泄露是指在使用代理或VPN时，DNS查询未通过加密隧道，而是直接发送到本地ISP的DNS服务器，导致真实IP和访问记录暴露。以下是从系统到应用的多层防护方案：

---

## 一、代理/VPN工具层配置（最有效）

### **1. 启用TUN模式（强烈推荐）**

这是防止DNS泄露最彻底的方法，适用于Clash Verge、Surge等工具：

- **原理**：创建虚拟网卡，强制所有流量（包括DNS）经过代理隧道
- **操作**：在软件主界面开启"TUN模式"，安装虚拟网卡驱动即可

### **2. 配置加密DNS服务器**

在代理工具的配置文件中设置DNS：

```yaml
# Clash Verge配置示例
dns:
  enable: true
  nameserver:
    - 8.8.8.8        # 常规DNS
    - 114.114.114.114
  fallback:          # 加密DNS作为备用
    - tls://1.1.1.1   # DoT加密
    - tls://8.8.8.8
```

### **3. 强制所有查询走代理**

```yaml
dns:
  default-nameserver:  # 指定最终查询服务器
    - tls://1.1.1.1
  proxy-server-nameserver:  # 代理节点解析用DNS
    - 8.8.8.8
```

---

## 二、操作系统层配置

### **Windows 11 配置DNS over TLS (DoT)**

1. **设置→网络→网卡→DNS分配→编辑**
   - 首选DNS：`1.1.1.1`
   - 备选DNS：`1.0.0.1`
   - **DoH设置为"关闭"**（关键步骤）

2. **管理员CMD/PowerShell执行**：

```powershell
# 开启全局DoT加密
netsh dns add global dot=yes

# 指定加密服务器（IP替换为你设置的DNS）
netsh dns add encryption server=1.1.1.1 dothost=: autoupgrade=yes

# 刷新DNS缓存
ipconfig /flushdns
```

### **macOS / Linux**

- **修改`/etc/resolv.conf`**：

```bash
# 仅使用加密DNS
nameserver 1.1.1.1
nameserver 8.8.8.8
```

- **安装Stubby或dnscrypt-proxy**实现系统级DoT/DoH

---

## 三、浏览器层配置

### **Firefox**

```plaintext
地址栏输入 about:config
搜索 network.trr.mode 设置为 2 (强制DoH)
搜索 network.trr.uri 设置为 https://1.1.1.1/dns-query
```

### **Chrome/Edge**

```plaintext
设置→隐私和安全→安全→使用安全DNS
选择"自定义"，填入：https://1.1.1.1/dns-query
```

---

## 四、网络层配置（路由器）

在OpenWRT等路由器上部署DNS加密：

```bash
# 安装dnscrypt-proxy2
opkg update
opkg install dnscrypt-proxy2

# 配置dnsmasq所有查询走加密通道
uci set dhcp.@dnsmasq[0].noresolv="1"
uci add_list dhcp.@dnsmasq[0].server="127.0.0.53"
uci commit dhcp

# 禁用ISP DNS
uci set network.wan.peerdns='0'
uci set network.wan6.peerdns='0'
uci commit network
```

---

## 五、关键辅助措施

| 措施 | 操作 | 作用 |
|------|------|------|
| **关闭IPv6** | 在代理工具设置中禁用IPv6 | 防止IPv6旁路泄露 |
| **定期测试** | 访问 `dnsleaktest.com` 或 `ipleak.net` | 验证是否泄露 |
| **清理缓存** | `ipconfig /flushdns` (Windows)<br>`sudo systemd-resolve --flush-caches` (Linux) | 清除本地DNS记录 |
| **禁用系统DNS** | Windows防火墙阻止53端口出站<br>修改hosts文件 | 防止绕过代理查询 |
| **启用Kill Switch** | VPN/代理的断网保护功能 | 掉线时阻止所有流量 |

---

## 六、验证是否泄露

**测试步骤**：

1. 连接代理/VPN
2. 访问 **dnsleaktest.com**
3. 点击"标准测试"或"扩展测试"
4. **结果分析**：
   - ✅ 正常：仅显示代理IP或配置的公共DNS（如Cloudflare）
   - ❌ 泄露：出现本地ISP的DNS或真实IP地址

**快速检测命令**：

```bash
# 查看当前使用的DNS服务器
nslookup myip.opendns.com resolver1.opendns.com
```

---

## 总结

DNS泄露是隐私保护中的重要一环，通过多层防护体系的构建，可以有效防止真实IP和访问记录的暴露。建议按照以下优先级实施：

1. **优先级最高**：启用代理工具的TUN模式
2. **优先级高**：配置系统级DNS over TLS
3. **优先级中**：浏览器启用安全DNS
4. **辅助措施**：定期检测、清理缓存、启用Kill Switch

通过组合使用这些技术，可以在网络活动中保持最佳的隐私保护水平。
