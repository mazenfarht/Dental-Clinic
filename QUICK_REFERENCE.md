# Quick Reference Guide

Fast reference for common customizations and configurations.

## 🎨 Quick Color Changes

### Change Primary Brand Color

Edit `css/style.css` - find `:root` section:

```css
:root {
    --primary-color: #0066cc;        /* Change this */
    --primary-light: #1a75e8;        /* And this */
    --primary-dark: #0052a3;         /* And this */
    --accent-blue: #00d4ff;          /* And this */
}
```

**Quick Color Palettes:**

Green:
```css
--primary-color: #10b981;
--primary-light: #34d399;
--primary-dark: #059669;
--accent-blue: #6ee7b7;
```

Purple:
```css
--primary-color: #8b5cf6;
--primary-light: #a78bfa;
--primary-dark: #7c3aed;
--accent-blue: #ddd6fe;
```

## 📝 Quick Content Changes

### Change Clinic Name
Search and replace in `index.html`:
- "SmileBright" → "Your Clinic Name"

### Change Contact Info
Find and update in Contact section:
```html
<p>123 Dental Street</p>          <!-- Address -->
<p>+1 (555) 123-4567</p>          <!-- Phone -->
<p>info@example.com</p>           <!-- Email -->
```

### Change Working Hours
Find in Contact section:
```html
<p>Mon - Fri: 8:00 AM - 8:00 PM</p>
<p>Sat: 9:00 AM - 5:00 PM</p>
```

### Change Statistics Numbers
Find in Statistics section:
```html
<div class="counter" data-target="5000">0</div>  <!-- Change 5000 -->
<div class="counter" data-target="15">0</div>    <!-- Change 15 -->
```

## 🖼️ Replace Images

All image URLs can be changed:

```html
<!-- Find and replace URLs -->
src="https://images.unsplash.com/photo-xxx"
```

**Free Image Sources:**
- Unsplash: https://unsplash.com
- Pexels: https://pexels.com
- Pixabay: https://pixabay.com

## 📱 Responsive Breakpoints

Test at these widths:
- **Desktop:** 1024px and above
- **Tablet:** 768px - 1023px
- **Mobile:** 480px - 767px
- **Small:** Below 480px

## ⌨️ Important Classes

### Navigation Classes
```css
.navbar              /* Fixed navigation bar */
.nav-link.active     /* Active navigation link */
.hamburger.active    /* Mobile menu open */
.nav-menu.active     /* Mobile menu visible */
```

### Button Classes
```css
.btn                 /* Base button */
.btn-primary         /* Blue button */
.btn-secondary       /* Outline button */
.btn-large           /* Large button */
```

### Section Classes
```css
.hero                /* Hero section */
.services            /* Services grid */
.doctors             /* Doctors grid */
.appointment         /* Form section */
.testimonials        /* Slider section */
.faq                 /* Accordion section */
```

## 🎯 Common Edits

### Add a Service
1. Copy a service-card in Services section
2. Change icon class
3. Update title and description
4. Add option to form select

### Add a Doctor
1. Copy a doctor-card in Doctors section
2. Change image URL
3. Update name, role, experience

### Add FAQ Item
1. Copy an faq-item
2. Update question text
3. Update answer text

### Add Testimonial
1. Copy a testimonial-slide
2. Update rating (keep 5 stars)
3. Update text, author, title

## 🔧 Form Configuration

### Change Form Email Recipient
```javascript
// In js/script.js, configure your email service
const templateParams = {
    to_email: 'your-clinic@example.com',  // Change this
    // ...
};
```

### Add New Form Field
1. Add to HTML form
2. Add validation in JavaScript
3. Add to email template

### Required Fields
```html
<input type="text" required>  <!-- Add 'required' attribute -->
```

## 🎬 Animation Speeds

Edit CSS variables:
```css
--transition-fast: 150ms ease-out;   /* Quick animations */
--transition-base: 300ms ease-out;   /* Normal animations */
--transition-slow: 500ms ease-out;   /* Slow animations */
```

## 🔔 Notifications & Messages

### Success Message
```javascript
this.successMessage.textContent = 'Your message here';
this.successMessage.classList.add('show');
```

### Error Message
```html
<span class="error-message" id="fieldError">Error text</span>
```

## 🌙 Dark Mode

### Manually Enable Dark Mode
```javascript
document.body.classList.add('dark-mode');
localStorage.setItem('theme', 'dark');
```

### Customize Dark Mode Colors
In CSS:
```css
body.dark-mode {
    --text-primary: #f0f4f8;
    --white: #0f1419;
    /* Override other colors */
}
```

## 📊 Statistics Counter

### Change Counter Value
```html
<div class="counter" data-target="YOUR_NUMBER">0</div>
```

### Adjust Animation Duration
In `js/script.js`:
```javascript
const duration = 2000;  // milliseconds
```

## 🎪 Hero Section

### Change Hero Title
```html
<h1 class="hero-title">Your new title here</h1>
```

### Change Hero Subtitle
```html
<p class="hero-subtitle">Your new subtitle here</p>
```

### Change Background Gradient
```css
.hero {
    background: linear-gradient(135deg, 
        color-1 0%, 
        color-2 100%);
}
```

## 🔗 Navigation Links

### Add New Navigation Item
1. Add to nav-menu:
```html
<a href="#section-id" class="nav-link">Section Name</a>
```

2. Create corresponding section:
```html
<section id="section-id">
    <!-- Content -->
</section>
```

## 📧 Newsletter Form

### Connect to Email Service
Update form action:
```html
<form action="https://formspree.io/f/YOUR_ID" method="POST">
```

## 🔐 Security Quick Checks

- [ ] Update clinic email address
- [ ] Enable HTTPS in production
- [ ] Add CSRF tokens to forms
- [ ] Sanitize form inputs server-side
- [ ] Add rate limiting
- [ ] Keep dependencies updated

## 📈 Performance Checklist

- [ ] Compress images
- [ ] Minify CSS/JS
- [ ] Enable gzip compression
- [ ] Use CDN for assets
- [ ] Implement caching headers
- [ ] Lazy load images
- [ ] Remove unused CSS

## 🔍 SEO Checklist

- [ ] Update meta title
- [ ] Update meta description
- [ ] Add schema markup
- [ ] Update og: tags
- [ ] Submit sitemap to Google
- [ ] Update robots.txt
- [ ] Add local business schema
- [ ] Verify Google Search Console

## 🧩 Component Classes Reference

### Spacing
```css
--space-xs: 0.25rem;
--space-sm: 0.5rem;
--space-md: 1rem;
--space-lg: 1.5rem;
--space-xl: 2rem;
--space-2xl: 3rem;
--space-3xl: 4rem;
```

### Border Radius
```css
--radius-sm: 8px;
--radius-md: 16px;
--radius-lg: 24px;
--radius-xl: 32px;
```

### Shadows
```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07);
--shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 40px rgba(0, 0, 0, 0.12);
```

## 🎨 Font Sizes

```css
--font-size-xs: 0.75rem;      /* 12px */
--font-size-sm: 0.875rem;     /* 14px */
--font-size-base: 1rem;       /* 16px */
--font-size-lg: 1.125rem;     /* 18px */
--font-size-xl: 1.25rem;      /* 20px */
--font-size-2xl: 1.5rem;      /* 24px */
--font-size-3xl: 1.875rem;    /* 30px */
--font-size-4xl: 2.25rem;     /* 36px */
--font-size-5xl: 3rem;        /* 48px */
```

## 🎯 Mobile Menu Sizes

- Hamburger button: 25px width × 3px height
- Menu width: Full screen
- Mobile breakpoint: 768px and below

## 🔄 Form Reset

To clear form programmatically:
```javascript
document.getElementById('appointmentForm').reset();
```

## 📞 Track Appointments

Add tracking:
```javascript
trackEvent('appointment_booked', {
    service: 'Service Name',
    date: 'Date',
    timestamp: new Date()
});
```

## 🚀 Deployment Checklist

- [ ] Update all contact information
- [ ] Replace all placeholder images
- [ ] Test all forms
- [ ] Test on mobile devices
- [ ] Enable HTTPS
- [ ] Set up email forwarding
- [ ] Add Google Analytics
- [ ] Submit to search engines
- [ ] Set up redirects
- [ ] Test all links
- [ ] Backup files
- [ ] Monitor performance

## 🐛 Common Issues

### Mobile Menu Won't Close
Check z-index and hamburger active state in CSS.

### Form Won't Submit
Verify email service is configured and API keys are correct.

### Images Not Showing
Check image URLs and Unsplash accessibility.

### Dark Mode Not Working
Clear localStorage and reload page.

### Animations Jerky
Check `prefers-reduced-motion` settings and browser performance.

## 📱 Test Devices

- iPhone SE (375px)
- iPhone 12 (390px)
- Samsung Galaxy S21 (360px)
- iPad (768px)
- iPad Pro (1024px)
- Desktop (1440px+)

## 🔗 Icon Classes Reference

**Font Awesome Icons Used:**
- `fa-tooth` - Tooth icon
- `fa-spray-can` - Cleaning
- `fa-star` - Ratings
- `fa-moon` - Dark mode
- `fa-sun` - Light mode
- `fa-chevron-down` - Dropdown
- `fa-arrow-up` - Back to top

[Full Font Awesome Icon List](https://fontawesome.com/icons)

## 💾 Backup Important Files

Before making changes:
```
cp index.html index.html.backup
cp css/style.css css/style.css.backup
cp js/script.js js/script.js.backup
```

## 🆘 Quick Troubleshoot

1. **Nothing loads?** Check file paths
2. **Styles not applying?** Clear browser cache
3. **Animations janky?** Check performance
4. **Form not working?** Check browser console
5. **Mobile menu broken?** Check media queries

## 📖 Documentation

- Full docs: `README.md`
- Advanced guide: `CUSTOMIZATION.md`
- This reference: `QUICK_REFERENCE.md`

---

**Pro Tips:**
- Use browser DevTools (F12) for debugging
- Test mobile responsiveness with Chrome DevTools
- Use console.log() for debugging JavaScript
- Clear cache when styles don't update
- Keep backups before major changes

**Need help?** Review the full documentation files!
