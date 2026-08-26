(function() {
    'use strict';

    console.log('🚀 DEE\'S FOOD DELIVERY Loading...');

    // ============================================================
    // 1. NAVIGATION FUNCTIONS
    // ============================================================
    function scrollToSection(id) {
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        // Close mobile menu
        const navMenu = document.getElementById('navMenu');
        if (navMenu) navMenu.classList.remove('active');
        // Reset hamburger icon
        const hamburger = document.getElementById('hamburger');
        if (hamburger) {
            const icon = hamburger.querySelector('i');
            if (icon) icon.className = 'fas fa-bars';
        }
    }

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Make functions globally accessible
    window.scrollToSection = scrollToSection;
    window.scrollToTop = scrollToTop;

    // ============================================================
    // 2. SCROLL TO TOP BUTTON
    // ============================================================
    const scrollTopBtn = document.getElementById('scrollTop');
    if (scrollTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });
        scrollTopBtn.addEventListener('click', scrollToTop);
    }

    // ============================================================
    // 3. MOBILE HAMBURGER MENU
    // ============================================================
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            const icon = this.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.className = 'fas fa-times';
            } else {
                icon.className = 'fas fa-bars';
            }
        });
    }

    // Close menu on link click
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
            // Update active state
            document.querySelectorAll('.nav-menu a').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // ============================================================
    // 4. MENU DATA WITH JPG IMAGES
    // ============================================================
    const menuData = {
        "Samosa": {
            image: "images/samosa.jpg",
            icon: "fa-utensils",
            items: [
                { name: "Samosa with Fish", desc: "Crispy samosa with fish filling", price: 250 },
                { name: "Samosa with Irish Potato", desc: "Classic potato samosa", price: 200 },
                { name: "Samosa with Meat", desc: "Minced meat samosa", price: 280 },
                { name: "Samosa with Goat Meat", desc: "Tender goat meat samosa", price: 320 },
                { name: "Samosa with Chicken", desc: "Spiced chicken samosa", price: 290 }
            ]
        },
        "Fried Rice": {
            image: "images/fried-rice.jpg",
            icon: "fa-utensil-spoon",
            items: [
                { name: "Fried Rice with Chicken", desc: "Wok-fried rice with chicken", price: 350 },
                { name: "Fried Rice with Beef", desc: "Beef fried rice", price: 380 },
                { name: "Fried Rice with Fish", desc: "Fish fried rice", price: 360 },
                { name: "Fried Rice with Vegetables", desc: "Vegetable fried rice", price: 300 },
                { name: "Special Fried Rice", desc: "Chef's special fried rice", price: 420 }
            ]
        },
        "Meat Pie": {
            image: "images/meat-pie.jpg",
            icon: "fa-pie-chart",
            items: [
                { name: "Chicken Meat Pie", desc: "Flaky pie with chicken", price: 180 },
                { name: "Beef Meat Pie", desc: "Beef pie", price: 190 },
                { name: "Goat Meat Pie", desc: "Goat meat pie", price: 210 },
                { name: "Special Meat Pie", desc: "Special recipe pie", price: 230 }
            ]
        },
        "Cakes": {
            image: "images/cakes.jpg",
            icon: "fa-birthday-cake",
            items: [
                { name: "Birthday Cakes", desc: "Custom birthday cake", price: 500 },
                { name: "Chocolate Cake", desc: "Rich chocolate cake", price: 350 },
                { name: "Vanilla Cake", desc: "Classic vanilla cake", price: 300 },
                { name: "Red Velvet Cake", desc: "Red velvet with cream cheese", price: 400 },
                { name: "Small Cakes", desc: "Small portion cakes", price: 150 },
                { name: "Large Cakes", desc: "Large celebration cake", price: 650 }
            ]
        },
        "Mandasi": {
            image: "images/mandasi.jpg",
            icon: "fa-doughnut",
            items: [
                { name: "Plain Mandasi", desc: "Traditional plain mandasi", price: 80 },
                { name: "Sweet Mandasi", desc: "Sweetened mandasi", price: 100 },
                { name: "Large Mandasi", desc: "Large size mandasi", price: 120 },
                { name: "Small Mandasi", desc: "Bite-size mandasi", price: 60 }
            ]
        },
        "Chips": {
            image: "images/chips.jpg",
            icon: "fa-fries",
            items: [
                { name: "Dry Chips", desc: "Crispy dry chips", price: 150 },
                { name: "Chips with Chicken", desc: "Crispy chips with chicken", price: 350 },
                { name: "Chips with Salad", desc: "Chips with fresh salad", price: 250 },
                { name: "Chips with Fish", desc: "Chips with fried fish", price: 340 },
                { name: "Chips with Meat", desc: "Chips with meat", price: 360 },
                { name: "Chips with Egg", desc: "Chips with fried egg", price: 220 },
                { name: "Special Chips", desc: "Loaded special chips", price: 400 }
            ]
        }
    };

    const categories = ["Samosa", "Fried Rice", "Meat Pie", "Cakes", "Mandasi", "Chips"];

    // ============================================================
    // 5. LANGUAGE SUPPORT
    // ============================================================
    const translations = {
        en: { orderNow: "Order on WhatsApp", callNow: "Call Us" },
        pt: { orderNow: "Pedir no WhatsApp", callNow: "Ligar" }
    };

    function setLanguage(lang) {
        // Update language switch
        document.querySelectorAll('.lang-option').forEach(el => {
            el.classList.toggle('active', el.dataset.lang === lang);
        });

        // Update all elements with data-en/data-pt attributes
        document.querySelectorAll('[data-en][data-pt]').forEach(el => {
            const text = el.getAttribute('data-' + lang);
            if (text) el.textContent = text;
        });

        // Update button texts
        const t = translations[lang] || translations.en;
        const heroBtn = document.getElementById('heroWhatsapp');
        if (heroBtn) {
            const span = heroBtn.querySelector('span');
            if (span) span.textContent = t.orderNow;
        }
        const contactBtn = document.getElementById('contactWhatsapp');
        if (contactBtn) {
            const span = contactBtn.querySelector('span');
            if (span) span.textContent = t.orderNow;
        }
        // Floating WhatsApp tooltip
        const floatTooltip = document.querySelector('.float-wa-tooltip');
        if (floatTooltip) {
            const text = floatTooltip.getAttribute('data-' + lang);
            if (text) floatTooltip.textContent = text;
        }
    }

    // Language switch event listeners
    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', function() {
            setLanguage(this.dataset.lang);
        });
    });

    // ============================================================
    // 6. RENDER CATEGORIES WITH IMAGES
    // ============================================================
    const categoryGrid = document.getElementById('categoryGrid');
    const productGrid = document.getElementById('productGrid');
    const categoryTitle = document.getElementById('categoryTitle');
    const categoryIcon = document.getElementById('categoryIcon');

    function renderCategories() {
        if (!categoryGrid) return;
        categoryGrid.innerHTML = '';
        categories.forEach(cat => {
            const data = menuData[cat];
            const card = document.createElement('div');
            card.className = 'category-card';
            card.innerHTML = `
                <img src="${data.image}" alt="${cat}" class="category-image" onerror="this.style.display='none'">
                <div class="category-name">${cat}</div>
            `;
            card.dataset.category = cat;
            card.addEventListener('click', function() {
                showCategory(this.dataset.category);
            });
            categoryGrid.appendChild(card);
        });
        console.log('✅ Categories rendered with JPG images');
    }

    // ============================================================
    // 7. SHOW CATEGORY PRODUCTS
    // ============================================================
    function showCategory(cat) {
        const data = menuData[cat];
        if (!data) return;
        if (categoryIcon) categoryIcon.innerHTML = `<i class="fas ${data.icon}"></i>`;
        if (categoryTitle) categoryTitle.textContent = cat;
        if (!productGrid) return;
        productGrid.innerHTML = '';

        data.items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <div class="food-img"><i class="fas ${data.icon}"></i></div>
                <h4>${item.name}</h4>
                <div class="desc">${item.desc}</div>
                <div class="price">MT ${item.price}</div>
                <button class="order-btn" data-name="${item.name}" data-price="${item.price}">
                    <i class="fab fa-whatsapp"></i> Order
                </button>
            `;
            const btn = card.querySelector('.order-btn');
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                generateWhatsAppOrder(this.dataset.name, this.dataset.price);
            });
            productGrid.appendChild(card);
        });

        // Scroll to products
        const display = document.getElementById('productDisplay');
        if (display) {
            display.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        console.log('✅ Showing category:', cat);
    }

    // ============================================================
    // 8. WHATSAPP ORDER GENERATION
    // ============================================================
    function generateWhatsAppOrder(itemName, price) {
        const phone = '258864575995';
        const msg = `Hello DEE'S FOOD DELIVERY!%0AI would like to order:%0A${itemName}%0APrice: MT ${price}%0A%0AMy name: ______%0ALocation: ______%0AThank you.`;
        window.open(`https://wa.me/${phone}?text=${msg}`, '_blank');
    }

    function openWhatsAppDefault() {
        const phone = '258864575995';
        const msg = `Hello DEE'S FOOD DELIVERY, I would like to place an order.`;
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
    }

    // ============================================================
    // 9. WHATSAPP BUTTONS
    // ============================================================
    const floatBtn = document.getElementById('floatWa');
    if (floatBtn) floatBtn.addEventListener('click', openWhatsAppDefault);

    const heroBtn = document.getElementById('heroWhatsapp');
    if (heroBtn) {
        heroBtn.addEventListener('click', function(e) {
            e.preventDefault();
            openWhatsAppDefault();
        });
    }

    const contactBtn = document.getElementById('contactWhatsapp');
    if (contactBtn) {
        contactBtn.addEventListener('click', function(e) {
            e.preventDefault();
            openWhatsAppDefault();
        });
    }

    // ============================================================
    // 10. ACTIVE NAV LINK ON SCROLL
    // ============================================================
    const sections = ['home', 'about', 'menu', 'howto', 'contact'];
    const navLinks = document.querySelectorAll('.nav-menu a');

    window.addEventListener('scroll', function() {
        let current = 'home';
        sections.forEach(id => {
            const section = document.getElementById(id);
            if (section) {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 150) {
                    current = id;
                }
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

    // ============================================================
    // 11. INITIALIZATION
    // ============================================================
    function init() {
        console.log('🚀 DEE\'S FOOD DELIVERY Initializing...');
        renderCategories();
        showCategory('Chips');
        setLanguage('en');

        // Update footer year
        const yearEl = document.getElementById('currentYear');
        if (yearEl) {
            yearEl.textContent = new Date().getFullYear();
        }
        console.log('✅ Initialization complete!');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();