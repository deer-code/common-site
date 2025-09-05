// 全局变量
let currentLang = 'zh';
let appName = '应用名称';

// 语言配置
const translations = {
    zh: {
        // 页面标题和导航
        pageTitle: '官网',
        appName: '应用名称',
        navHome: '首页',
        navPrivacy: '隐私条款',
        navContact: '联系我们',
        langToggle: 'EN',
        
        // 首页
        heroTitle: '欢迎使用',
        heroDescription: '简洁、高效、值得信赖的解决方案',
        ctaContact: '联系我们',
        ctaPrivacy: '隐私条款',
        
        // 隐私条款
        privacyTitle: '隐私条款',
        privacyIntroTitle: '隐私政策',
        privacyIntro: ' 非常重视您的隐私。本隐私政策说明了我们如何收集、使用和保护您的个人信息。',
        privacyCollectionTitle: '信息收集',
        privacyCollection: '我们可能收集您在使用  时提供的信息，包括但不限于：',
        privacyItem1: '基本账户信息（如用户名、邮箱地址）',
        privacyItem2: '使用数据和偏好设置',
        privacyItem3: '设备信息和技术数据',
        privacyUseTitle: '信息使用',
        privacyUse: '我们使用收集的信息来提供、维护和改进  的服务质量。',
        privacyProtectionTitle: '信息保护',
        privacyProtection: '我们采用适当的技术和组织措施来保护您的个人信息安全。',
        privacyContactTitle: '联系我们',
        privacyContact: '如果您对本隐私政策有任何疑问，请通过联系方式与我们取得联系。',
        privacyUpdate: '最后更新：2024年',
        
        // 联系方式
        contactTitle: '联系我们',
        contactIntro: '感谢您对  的关注。如有任何问题或建议，请通过以下方式联系我们：',
        contactEmailTitle: '邮箱地址',
        contactEmail: 'contact@example.com',
        contactSupportTitle: '技术支持',
        contactSupport: 'support@example.com',
        contactBusinessTitle: '商务合作',
        contactBusiness: 'business@example.com',
        contactResponse: '我们通常会在24小时内回复您的邮件。感谢您使用 ！',
        
        // 页脚
        footerRights: '版权所有'
    },
    en: {
        // 页面标题和导航
        pageTitle: 'Official Website',
        appName: 'App Name',
        navHome: 'Home',
        navPrivacy: 'Privacy Policy',
        navContact: 'Contact Us',
        langToggle: '中文',
        
        // 首页
        heroTitle: 'Welcome to',
        heroDescription: 'Simple, efficient, and trustworthy solutions',
        ctaContact: 'Contact Us',
        ctaPrivacy: 'Privacy Policy',
        
        // 隐私条款
        privacyTitle: 'Privacy Policy',
        privacyIntroTitle: 'Privacy Policy',
        privacyIntro: ' values your privacy. This privacy policy explains how we collect, use, and protect your personal information.',
        privacyCollectionTitle: 'Information Collection',
        privacyCollection: 'We may collect information you provide when using , including but not limited to:',
        privacyItem1: 'Basic account information (such as username, email address)',
        privacyItem2: 'Usage data and preference settings',
        privacyItem3: 'Device information and technical data',
        privacyUseTitle: 'Information Use',
        privacyUse: 'We use the collected information to provide, maintain, and improve the service quality of .',
        privacyProtectionTitle: 'Information Protection',
        privacyProtection: 'We adopt appropriate technical and organizational measures to protect the security of your personal information.',
        privacyContactTitle: 'Contact Us',
        privacyContact: 'If you have any questions about this privacy policy, please contact us through the contact information.',
        privacyUpdate: 'Last updated: 2024',
        
        // 联系方式
        contactTitle: 'Contact Us',
        contactIntro: 'Thank you for your interest in . If you have any questions or suggestions, please contact us through the following methods:',
        contactEmailTitle: 'Email Address',
        contactEmail: 'contact@example.com',
        contactSupportTitle: 'Technical Support',
        contactSupport: 'support@example.com',
        contactBusinessTitle: 'Business Cooperation',
        contactBusiness: 'business@example.com',
        contactResponse: 'We usually reply to your email within 24 hours. Thank you for using !',
        
        // 页脚
        footerRights: 'All rights reserved'
    }
};

// DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    updateLanguage();
});

// 初始化应用
function initializeApp() {
    // 从URL路径获取应用名称
    const pathSegments = window.location.pathname.split('/').filter(segment => segment !== '');
    if (pathSegments.length > 0) {
        appName = decodeURIComponent(pathSegments[pathSegments.length - 1]);
    }
    
    // 从URL参数获取应用名称（备选方案）
    const urlParams = new URLSearchParams(window.location.search);
    const appParam = urlParams.get('app');
    if (appParam) {
        appName = decodeURIComponent(appParam);
    }
    
    // 从localStorage获取语言偏好
    const savedLang = localStorage.getItem('language');
    if (savedLang && translations[savedLang]) {
        currentLang = savedLang;
    }
    
    // 设置初始页面
    showSection('home');
}

// 设置事件监听器
function setupEventListeners() {
    // 语言切换按钮
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }
    
    // 导航链接
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href').substring(1);
            showSection(target);
            updateActiveNav(this);
        });
    });
    
    // 处理浏览器前进后退
    window.addEventListener('popstate', function(e) {
        if (e.state && e.state.section) {
            showSection(e.state.section, false);
        }
    });
}

// 切换语言
function toggleLanguage() {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    localStorage.setItem('language', currentLang);
    updateLanguage();
}

// 更新语言显示
function updateLanguage() {
    const lang = translations[currentLang];
    
    // 更新HTML lang属性
    document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';
    
    // 更新所有文本元素
    Object.keys(lang).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            if (key.includes('Email') || key.includes('Support') || key.includes('Business')) {
                // 邮箱链接保持不变
                return;
            }
            element.textContent = lang[key];
        }
    });
    
    // 更新应用名称占位符
    updateAppNamePlaceholders();
    
    // 更新包含应用名称的特殊文本
    updateAppNameInText();
}

// 更新应用名称占位符
function updateAppNamePlaceholders() {
    const placeholders = document.querySelectorAll('.app-name-placeholder');
    placeholders.forEach(placeholder => {
        placeholder.textContent = appName;
    });
    
    // 更新导航栏和标题中的应用名称
    const appNameElements = document.querySelectorAll('#appName, #heroAppName');
    appNameElements.forEach(element => {
        element.textContent = appName;
    });
}

// 更新包含应用名称的文本
function updateAppNameInText() {
    const lang = translations[currentLang];
    
    // 更新隐私条款中的文本
    const privacyIntroEl = document.getElementById('privacyIntro');
    if (privacyIntroEl) {
        privacyIntroEl.innerHTML = `<span class="app-name-placeholder">${appName}</span>${lang.privacyIntro}`;
    }
    
    const privacyCollectionEl = document.getElementById('privacyCollection');
    if (privacyCollectionEl) {
        const parts = lang.privacyCollection.split('  ');
        privacyCollectionEl.innerHTML = `${parts[0]} <span class="app-name-placeholder">${appName}</span> ${parts[1] || ''}`;
    }
    
    const privacyUseEl = document.getElementById('privacyUse');
    if (privacyUseEl) {
        const parts = lang.privacyUse.split('  ');
        privacyUseEl.innerHTML = `${parts[0]} <span class="app-name-placeholder">${appName}</span> ${parts[1] || ''}`;
    }
    
    // 更新联系页面中的文本
    const contactIntroEl = document.getElementById('contactIntro');
    if (contactIntroEl) {
        const parts = lang.contactIntro.split('  ');
        contactIntroEl.innerHTML = `${parts[0]} <span class="app-name-placeholder">${appName}</span> ${parts[1] || ''}`;
    }
    
    const contactResponseEl = document.getElementById('contactResponse');
    if (contactResponseEl) {
        const parts = lang.contactResponse.split(' ！');
        contactResponseEl.innerHTML = `${parts[0]} <span class="app-name-placeholder">${appName}</span>！`;
    }
    
    // 更新页脚
    const footerTextEl = document.getElementById('footerText');
    if (footerTextEl) {
        const rightsText = document.getElementById('footerRights').textContent;
        footerTextEl.innerHTML = `© 2024 <span class="app-name-placeholder">${appName}</span>. <span id="footerRights">${rightsText}</span>`;
    }
}

// 显示指定部分
function showSection(sectionId, updateHistory = true) {
    // 隐藏所有部分
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // 显示目标部分
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        
        // 更新页面标题
        updatePageTitle(sectionId);
        
        // 更新浏览器历史记录
        if (updateHistory) {
            const newUrl = `${window.location.origin}${window.location.pathname}#${sectionId}`;
            history.pushState({section: sectionId}, '', newUrl);
        }
        
        // 更新导航状态
        updateNavigation(sectionId);
    }
}

// 更新页面标题
function updatePageTitle(sectionId) {
    const lang = translations[currentLang];
    let title = '';
    
    switch(sectionId) {
        case 'home':
            title = `${appName} - ${lang.pageTitle}`;
            break;
        case 'privacy':
            title = `${lang.privacyTitle} - ${appName}`;
            break;
        case 'contact':
            title = `${lang.contactTitle} - ${appName}`;
            break;
        default:
            title = `${appName} - ${lang.pageTitle}`;
    }
    
    document.title = title;
}

// 更新导航状态
function updateNavigation(activeSection) {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === `#${activeSection}`) {
            link.classList.add('active');
        }
    });
}

// 更新活动导航项
function updateActiveNav(activeLink) {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => link.classList.remove('active'));
    activeLink.classList.add('active');
}

// 处理初始URL哈希
window.addEventListener('load', function() {
    const hash = window.location.hash.substring(1);
    if (hash && ['home', 'privacy', 'contact'].includes(hash)) {
        showSection(hash, false);
    } else {
        showSection('home', false);
    }
});

// 平滑滚动到顶部
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// 添加滚动到顶部功能到部分切换
const originalShowSection = showSection;
showSection = function(sectionId, updateHistory = true) {
    originalShowSection(sectionId, updateHistory);
    scrollToTop();
};