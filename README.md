# 极简官网

一个支持动态应用名称和中英文切换的极简官网，包含隐私条款和联系方式页面。

## 功能特性

- ✅ **动态应用名称**：支持通过URL路径传入应用名称
- ✅ **中英文切换**：完整的双语支持
- ✅ **响应式设计**：适配所有设备
- ✅ **简洁清爽**：极简设计风格
- ✅ **Vercel部署**：一键部署到Vercel

## 使用方法

### 本地开发

1. 克隆或下载项目文件
2. 使用任意HTTP服务器打开（如Live Server、Python HTTP Server等）
3. 访问 `http://localhost:端口号`

### 动态应用名称

支持两种方式传入应用名称：

1. **URL路径方式**：`https://your-domain.com/your-app-name`
2. **URL参数方式**：`https://your-domain.com?app=your-app-name`

示例：
- `https://your-site.vercel.app/MyApp` 
- `https://your-site.vercel.app?app=我的应用`

### 语言切换

- 点击右上角的语言切换按钮
- 自动保存用户语言偏好到本地存储
- 支持浏览器语言检测

## Vercel部署

1. 将代码推送到GitHub仓库
2. 在Vercel中导入项目
3. 自动部署完成

或者使用Vercel CLI：

```bash
npm i -g vercel
vercel
```

## 文件结构

```
├── index.html          # 主页面
├── styles.css          # 样式文件
├── script.js           # JavaScript逻辑
├── vercel.json         # Vercel配置
└── README.md           # 说明文档
```

## 自定义

### 修改联系信息

在 `script.js` 中的 `translations` 对象中修改邮箱地址：

```javascript
contactEmail: 'your-email@example.com',
contactSupport: 'support@example.com',
contactBusiness: 'business@example.com',
```

### 修改样式

在 `styles.css` 中自定义：
- 主色调：修改 `#2563eb` 相关颜色
- 字体：修改 `font-family` 属性
- 布局：调整容器宽度和间距

### 添加新页面

1. 在HTML中添加新的 `section`
2. 在导航中添加链接
3. 在 `script.js` 中添加相应的翻译文本

## 浏览器支持

- Chrome/Edge 60+
- Firefox 55+
- Safari 12+
- 移动端浏览器

## 技术栈

- 纯HTML、CSS、JavaScript
- 无框架依赖
- 响应式设计
- 现代浏览器特性