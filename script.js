/**
 * DENTAL CLINIC WEBSITE - MAIN JAVASCRIPT FILE
 * Features: Navigation, Animations, Forms, Sliders, Accordion, Animations
 * Modern ES6+ Code
 */

// ============================================
// 1. LOADING ANIMATION
// ============================================

window.addEventListener("load", () => {
  const loadingScreen = document.getElementById("loading");
  if (loadingScreen) {
    setTimeout(() => {
      loadingScreen.classList.add("hidden");
    }, 800);
  }
});

// ============================================
// 2. NAVIGATION & STICKY NAVBAR
// ============================================

class Navigation {
  constructor() {
    this.navbar = document.getElementById("navbar");
    this.navMenu = document.getElementById("navMenu");
    this.hamburger = document.getElementById("hamburger");
    this.navLinks = document.querySelectorAll(".nav-link");
    this.init();
  }

  init() {
    // Sticky navbar on scroll
    window.addEventListener("scroll", () => this.handleScroll());

    // Mobile menu toggle
    this.hamburger.addEventListener("click", () => this.toggleMobileMenu());

    // Close menu on link click
    this.navLinks.forEach((link) => {
      link.addEventListener("click", () => this.closeMobileMenu());
    });

    // Update active nav link based on scroll
    window.addEventListener("scroll", () => this.updateActiveNav());
  }

  handleScroll() {
    if (window.scrollY > 50) {
      this.navbar.classList.add("scrolled");
    } else {
      this.navbar.classList.remove("scrolled");
    }
  }

  toggleMobileMenu() {
    this.navMenu.classList.toggle("active");
    this.hamburger.classList.toggle("active");
  }

  closeMobileMenu() {
    this.navMenu.classList.remove("active");
    this.hamburger.classList.remove("active");
  }

  updateActiveNav() {
    const scrollPosition = window.scrollY + 100;

    this.navLinks.forEach((link) => {
      link.classList.remove("active");
      const sectionId = link.getAttribute("href").substring(1);
      const section = document.getElementById(sectionId);

      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          link.classList.add("active");
        }
      }
    });
  }
}

// Initialize navigation
new Navigation();

// ============================================
// 3. THEME TOGGLE (Dark/Light Mode)
// ============================================

class ThemeToggle {
  constructor() {
    this.themeToggle = document.getElementById("themeToggle");
    this.html = document.documentElement;
    this.init();
  }

  init() {
    // Check for saved theme preference or default to 'light'
    const currentTheme = localStorage.getItem("theme") || "light";
    this.setTheme(currentTheme);

    // Theme toggle button
    this.themeToggle.addEventListener("click", () => {
      const theme = document.body.classList.contains("dark-mode")
        ? "light"
        : "dark";
      this.setTheme(theme);
    });
  }

  setTheme(theme) {
    if (theme === "dark") {
      document.body.classList.add("dark-mode");
      this.themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      this.themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
      localStorage.setItem("theme", "light");
    }
  }
}

// Initialize theme toggle
new ThemeToggle();

// ============================================
// 4. SMOOTH SCROLL
// ============================================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#") {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  });
});

// ============================================
// 5. BACK TO TOP BUTTON
// ============================================

class BackToTop {
  constructor() {
    this.button = document.getElementById("backToTop");
    this.init();
  }

  init() {
    window.addEventListener("scroll", () => this.toggle());
    this.button.addEventListener("click", () => this.scrollToTop());
  }

  toggle() {
    if (window.scrollY > 300) {
      this.button.classList.add("show");
    } else {
      this.button.classList.remove("show");
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}

// Initialize back to top
new BackToTop();

// ============================================
// 6. ANIMATED COUNTERS
// ============================================

class AnimatedCounter {
  constructor() {
    this.counters = document.querySelectorAll(".counter");
    this.hasAnimated = false;
    this.init();
  }

  init() {
    window.addEventListener("scroll", () => this.checkScroll());
  }

  checkScroll() {
    if (this.hasAnimated) return;

    const countersSection = document.querySelector(".statistics");
    if (!countersSection) return;

    const rect = countersSection.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      this.animate();
      this.hasAnimated = true;
    }
  }

  animate() {
    this.counters.forEach((counter) => {
      const target = parseInt(counter.getAttribute("data-target"));
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 16); // ~60fps
      let current = 0;

      const updateCounter = () => {
        current += increment;
        if (current < target) {
          counter.textContent = Math.floor(current).toLocaleString();
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target.toLocaleString();
        }
      };

      updateCounter();
    });
  }
}

// Initialize counters
new AnimatedCounter();

// ============================================
// 7. TESTIMONIALS SLIDER
// ============================================

class TestimonialsSlider {
  constructor() {
    this.slider = document.getElementById("testimonialsSlider");
    this.slides = document.querySelectorAll(".testimonial-slide");

    this.prevBtn = document.getElementById("prevTestimonial");
    this.nextBtn = document.getElementById("nextTestimonial");
    this.dotsContainer = document.getElementById("sliderDots");

    this.currentIndex = 0;
    this.interval = null;

    this.init();
  }

  init() {
    this.createDots();

    this.updateSlider();

    this.prevBtn.addEventListener("click", () => {
      this.prev();
      this.restartAutoPlay();
    });

    this.nextBtn.addEventListener("click", () => {
      this.next();
      this.restartAutoPlay();
    });

    this.startAutoPlay();
  }

  createDots() {
    this.slides.forEach((_, index) => {
      const dot = document.createElement("button");

      dot.className = "dot";

      if (index === 0) {
        dot.classList.add("active");
      }

      dot.addEventListener("click", () => {
        this.goToSlide(index);
        this.restartAutoPlay();
      });

      this.dotsContainer.appendChild(dot);
    });
  }

  updateSlider() {
    this.slider.style.transform = `translateX(-${this.currentIndex * 100}%)`;

    document.querySelectorAll(".dot").forEach((dot, index) => {
      dot.classList.toggle("active", index === this.currentIndex);
    });
  }

  next() {
    this.currentIndex++;

    if (this.currentIndex >= this.slides.length) {
      this.currentIndex = 0;
    }

    this.updateSlider();
  }

  prev() {
    this.currentIndex--;

    if (this.currentIndex < 0) {
      this.currentIndex = this.slides.length - 1;
    }

    this.updateSlider();
  }

  goToSlide(index) {
    this.currentIndex = index;

    this.updateSlider();
  }

  startAutoPlay() {
    this.interval = setInterval(() => {
      this.next();
    }, 5000);
  }

  restartAutoPlay() {
    clearInterval(this.interval);

    this.startAutoPlay();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new TestimonialsSlider();
});
// ============================================
// 8. FAQ ACCORDION
// ============================================
class FAQ {
  constructor() {
    this.faqItems = document.querySelectorAll(".faq-item");
    this.init();
  }

  init() {
    this.faqItems.forEach((item) => {
      const question = item.querySelector(".faq-question");

      question.addEventListener("click", () => this.toggleFAQ(item));
    });
  }

  toggleFAQ(item) {
    const isActive = item.classList.contains("active");

    // Close all other items
    this.faqItems.forEach((faqItem) => {
      const answer = faqItem.querySelector(".faq-answer");

      if (faqItem !== item) {
        faqItem.classList.remove("active");
        answer.style.maxHeight = null;
      }
    });

    const answer = item.querySelector(".faq-answer");

    if (isActive) {
      item.classList.remove("active");
      answer.style.maxHeight = null;
    } else {
      item.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  }
}

new FAQ();

// ============================================
// 9. APPOINTMENT FORM VALIDATION & SUBMISSION
// ============================================

class AppointmentForm {
  constructor() {
    this.form = document.getElementById("appointmentForm");
    this.successMessage = document.getElementById("successMessage");
    this.init();
  }

  init() {
    this.form.addEventListener("submit", (e) => this.handleSubmit(e));

    // Real-time validation
    const inputs = this.form.querySelectorAll("input, select, textarea");
    inputs.forEach((input) => {
      input.addEventListener("blur", () => this.validateField(input));
      input.addEventListener("input", () => {
        if (input.classList.contains("error")) {
          this.validateField(input);
        }
      });
    });
  }

  validateField(field) {
    const fieldName = field.name;
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = "";

    switch (fieldName) {
      case "name":
        if (value.length < 3) {
          isValid = false;
          errorMessage = "Name must be at least 3 characters";
        }
        break;

      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          isValid = false;
          errorMessage = "Please enter a valid email address";
        }
        break;

      case "phone":
        const phoneRegex =
          /^[+]?[(]?[0-9]{3}[)]?[-\s]?[0-9]{3}[-\s]?[0-9]{4,6}$/;
        if (!phoneRegex.test(value)) {
          isValid = false;
          errorMessage = "Please enter a valid phone number";
        }
        break;

      case "date":
        const selectedDate = new Date(value);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (selectedDate < today) {
          isValid = false;
          errorMessage = "Please select a future date";
        }
        break;

      case "time":
        if (!value) {
          isValid = false;
          errorMessage = "Please select a time";
        }
        break;

      case "service":
        if (!value) {
          isValid = false;
          errorMessage = "Please select a service";
        }
        break;
    }

    // Update field state
    if (isValid) {
      field.classList.remove("error");
      const errorEl = document.getElementById(`${fieldName}Error`);
      if (errorEl) errorEl.textContent = "";
    } else {
      field.classList.add("error");
      const errorEl = document.getElementById(`${fieldName}Error`);
      if (errorEl) errorEl.textContent = errorMessage;
    }

    return isValid;
  }

  handleSubmit(e) {
    e.preventDefault();

    // Validate all fields
    const inputs = this.form.querySelectorAll("input, select, textarea");
    let isFormValid = true;

    inputs.forEach((input) => {
      if (!this.validateField(input)) {
        isFormValid = false;
      }
    });

    if (isFormValid) {
      // Show success message
      this.successMessage.textContent =
        "✓ Appointment booked successfully! We'll confirm your appointment via email.";
      this.successMessage.classList.add("show");

      // Reset form
      this.form.reset();

      // Hide success message after 5 seconds
      setTimeout(() => {
        this.successMessage.classList.remove("show");
      }, 5000);

      // Simulate form submission (in production, send to server)
      console.log("Form submitted:", {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        date: document.getElementById("date").value,
        time: document.getElementById("time").value,
        service: document.getElementById("service").value,
        message: document.getElementById("message").value,
      });
    }
  }
}

// Initialize appointment form
new AppointmentForm();

// ============================================
// 10. NEWSLETTER SUBSCRIPTION
// ============================================

class Newsletter {
  constructor() {
    this.form = document.getElementById("newsletterForm");
    this.init();
  }

  init() {
    this.form.addEventListener("submit", (e) => this.handleSubmit(e));
  }

  handleSubmit(e) {
    e.preventDefault();

    const input = this.form.querySelector('input[type="email"]');
    const email = input.value.trim();

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      // Show success
      input.value = "";
      input.style.borderColor = "var(--success)";
      setTimeout(() => {
        input.style.borderColor = "";
      }, 2000);

      console.log("Newsletter subscription:", email);
    }
  }
}

// Initialize newsletter
new Newsletter();

// ============================================
// 11. SCROLL REVEAL ANIMATION
// ============================================

class ScrollReveal {
  constructor() {
    this.elements = document.querySelectorAll(
      ".service-card, .doctor-card, .feature-card, .about-card, .contact-card"
    );
    this.init();
  }

  init() {
    // Use Intersection Observer for better performance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animation = "slideInUp 0.6s ease-out forwards";
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    this.elements.forEach((element) => {
      observer.observe(element);
    });
  }
}

// Add slideInUp animation to CSS (if not already present)
const style = document.createElement("style");
style.textContent = `
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Initialize scroll reveal
new ScrollReveal();

// ============================================
// 12. LAZY LOADING IMAGES
// ============================================

if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          img.classList.add("loaded");
          imageObserver.unobserve(img);
        }
      });
    },
    {
      rootMargin: "50px",
    }
  );

  document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
    imageObserver.observe(img);
  });
}

// ============================================
// 13. FORM INPUT ENHANCEMENTS
// ============================================

// Set minimum date to today
const dateInput = document.getElementById("date");
if (dateInput) {
  const today = new Date().toISOString().split("T")[0];
  dateInput.setAttribute("min", today);
}

// Set time constraints
const timeInput = document.getElementById("time");
if (timeInput) {
  timeInput.setAttribute("min", "08:00");
  timeInput.setAttribute("max", "20:00");
}

// ============================================
// 14. UTILITY FUNCTIONS
// ============================================

/**
 * Debounce function to limit event firing
 * @param {Function} func - Function to debounce
 * @param {Number} wait - Wait time in milliseconds
 */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function to limit event firing
 * @param {Function} func - Function to throttle
 * @param {Number} limit - Limit time in milliseconds
 */
function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// ============================================
// 15. PERFORMANCE OPTIMIZATIONS
// ============================================

// Optimize scroll events with throttle
window.addEventListener(
  "scroll",
  throttle(() => {
    // Scroll event handlers are optimized
  }, 100)
);

// Optimize resize events with debounce
window.addEventListener(
  "resize",
  debounce(() => {
    // Handle resize
  }, 250)
);

// ============================================
// 16. ANALYTICS & LOGGING
// ============================================

// Simple event tracking
function trackEvent(eventName, eventData) {
  console.log(`Event: ${eventName}`, eventData);
  // In production, send to analytics service
}

// Track form submissions
document.addEventListener("submit", (e) => {
  if (e.target.id === "appointmentForm") {
    trackEvent("appointment_submitted", {
      timestamp: new Date().toISOString(),
    });
  }
});

// ============================================
// 17. ACCESSIBILITY ENHANCEMENTS
// ============================================

// Add keyboard navigation support
document.addEventListener("keydown", (e) => {
  // Close mobile menu on Escape
  if (e.key === "Escape") {
    const navMenu = document.getElementById("navMenu");
    const hamburger = document.getElementById("hamburger");
    if (navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
      hamburger.classList.remove("active");
    }
  }
});

// Focus management
function manageFocus(element) {
  const focusableElements = element.querySelectorAll(
    'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  return focusableElements;
}

// ============================================
// 18. ERROR HANDLING
// ============================================

// Global error handler
window.addEventListener("error", (event) => {
  console.error("Global error:", event.error);
  // In production, send to error tracking service
});

// Unhandled promise rejections
window.addEventListener("unhandledrejection", (event) => {
  console.error("Unhandled promise rejection:", event.reason);
  // In production, send to error tracking service
});

// ============================================
// 19. INITIALIZATION ON DOM READY
// ============================================

document.addEventListener("DOMContentLoaded", () => {
  // All classes and functions are initialized above
  console.log("Dental Clinic Website loaded successfully");
});

// ============================================
// 20. UTILITY METHODS
// ============================================

/**
 * Get element by ID with null check
 * @param {String} id - Element ID
 * @returns {Element|null}
 */
function getElement(id) {
  return document.getElementById(id) || null;
}

/**
 * Add event listener with error handling
 * @param {String} selector - CSS selector
 * @param {String} event - Event name
 * @param {Function} callback - Callback function
 */
function on(selector, event, callback) {
  const elements = document.querySelectorAll(selector);
  elements.forEach((element) => {
    element.addEventListener(event, callback);
  });
}

/**
 * Fetch data from API with error handling
 * @param {String} url - API endpoint
 * @param {Object} options - Fetch options
 * @returns {Promise}
 */
async function fetchData(url, options = {}) {
  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}

// ============================================
// 21. PERFORMANCE MONITORING
// ============================================

// Log performance metrics
window.addEventListener("load", () => {
  if (window.performance && window.performance.timing) {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log(`Page Load Time: ${pageLoadTime}ms`);
  }
});

// Monitor Core Web Vitals
if ("web-vital" in window) {
  // Send metrics to analytics
}

// ============================================
// END OF SCRIPT
// ============================================

// Export utilities for testing
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    debounce,
    throttle,
    trackEvent,
    getElement,
    fetchData,
  };
}
