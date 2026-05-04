// ─── Smooth Scroll Config ───
const ENABLE_SMOOTH_SCROLL = true;

if (ENABLE_SMOOTH_SCROLL) {
  document.documentElement.style.scrollBehavior = 'smooth';
} else {
  document.documentElement.style.scrollBehavior = 'auto';
}

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__link');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.remove('active'));
      const active = document.querySelector(`.nav__link[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => observer.observe(s));

// ─── INIPOD Projects ───
const INIPOD_PROJECTS = [
  {
    id: 'gauvendi',
    title: 'Gauvendi 2.0',
    image: 'assets/projects/Gauvendi.jpg',
    images: ['Gauvendi.jpg', 'gauvendi2.png', 'gauvendi3.png', 'gauvendi4.png', 'gauvendi5.png', 'gauvendi6.png', 'gauvendi7.jpg', 'gauvendi8.png', 'gauvendi9.png'],
    meta: 'BOOKING ENGINE - GAUVENDI - GERMANY',
    description: 'A full-featured hospitality booking platform serving 75+ hotel properties across Europe and North America. The system was rebuilt from a legacy Java-based platform to a modern NestJS architecture to improve scalability, maintainability, and support evolving business requirements.',
    highlights: [
      'Implemented the new 2.0 platform using NestJS, redesigning core booking logic including room availability, inventory, and reservation flows',
      'Analyzed requirements and translated them into technical tasks for developers, ensuring alignment between business needs and system behavior',
      'Managed ongoing enhancements and resolved functional gaps and bugs throughout the rebuild phase',
      'Led partial migration from legacy 1.0 to 2.0, successfully onboarding 20+ hotel properties',
      'Coordinated data mapping, validation, and rollout while continuing to address outstanding items in the migration roadmap'
    ],
    tags: ['BOOKING ENGINE', 'PLATFORM MIGRATION', 'REQUIREMENT MANAGEMENT']
  },
  {
    id: 'ipbp',
    title: 'IPBP',
    image: 'assets/projects/IPBP.jpg',
    images: ['IPBP.jpg', 'ipbp2.png', 'ipbp3.png', 'ipbp4.jpg', 'ipbp5.png', 'ipbp6.png', 'ipbp7.png'],
    meta: 'FINANCIAL REPORTING - AWC GROUP - THAILAND',
    description: 'An enterprise financial and operational reporting platform developed for AWC, one of Thailand\'s largest hospitality conglomerates with 20+ hotels. The system centralizes and manages key hotel performance data including revenue forecasts, booking volume, budgeting, and financial analysis.',
    highlights: [
      'Maintained and supported a live Phase 1 system, ensuring stability and data accuracy',
      'Analyzed new business requirements and translated complex financial logic into development tasks',
      'Implemented enhancements and fixed bugs based on stakeholder requests',
      'Reviewed outstanding items from Phase 1, prioritized backlog, and coordinated resource allocation for completion',
      'Contributed to preparation for Phase 2 scope, planning, and delivery'
    ],
    tags: ['FINANCIAL REPORTS', 'FORECASTING', 'STAKEHOLDER MANAGEMENT']
  },
  {
    id: 'dayaway',
    title: 'DayAway',
    image: 'assets/projects/Dayaway.jpg',
    images: ['Dayaway.jpg', 'Dayaway 2.png', 'Dayaway 3.png', 'Dayaway 4.jpg', 'Dayaway 5.jpg', 'Dayaway 6.png', 'Dayaway 7.png', 'Dayaway 8.png'],
    meta: 'EXPERIENCE BOOKING PLATFORM - MYDAYAWAY - SINGAPORE',
    description: 'An experience reservation platform enabling hotel guests to book curated services such as spa treatments, activities, and festival tickets. The platform supports end-to-end booking flows, including payment, QR-based check-in, and customer communication.',
    highlights: [
      'Implemented festival ticketing features, including booking flow and QR code check-in',
      'Built and managed automated customer email notifications',
      'Maintained and enhanced the platform based on evolving business requirements',
      'Gathered and translated client requirements into functional features',
      'Supported ongoing operations and handled bug fixing across the system'
    ],
    tags: ['REQUIREMENT ANALYSIS', 'FEATURE IMPLEMENTATION', 'PLATFORM MAINTENANCE']
  },
  {
    id: 'hungryin',
    title: 'HungryIn',
    image: 'assets/projects/HungryIn.png',
    images: ['HungryIn.png', 'Hungryin 2.jpg', 'Hungryin 3.jpg'],
    meta: 'F&B MANAGEMENT - THE ASIA COLLECTIVE - INTERNATIONAL',
    description: 'A restaurant and F&B voucher management platform enabling users to purchase and redeem dining experiences across multiple regions. The system supports voucher distribution, restaurant operations, and integration with mobile platforms.',
    highlights: [
      'Maintained and supported the platform through ongoing bug fixing and operational tickets',
      'Analyzed new requirements, collaborated with developers, and proposed solutions to clients',
      'Implemented key features including app version check for forced updates and subscription-based access control',
      'Expanded platform coverage by onboarding new venues in Dubai and Bangkok',
      'Handled additional enhancement requests and ensured smooth system operation'
    ],
    tags: ['REQUIREMENT ANALYSIS', 'FEATURE ENHANCEMENT', 'MOBILE INTEGRATION']
  },
  {
    id: 'rebean',
    title: 'Rebean',
    image: 'assets/projects/Rebean.png',
    images: ['Rebean.png', 'rebean 2.png', 'rebean 3.png', 'rebean4.jpg', 'rebean 5.png', 'rebean 6.png', 'rebean 7.png', 'rebean 8.png'],
    meta: 'AI VISIBILITY - INIPOD - VIETNAM',
    description: 'Inipod\'s proprietary SaaS product — an AI-powered visibility tracking and SEO intelligence platform designed for hotels, brands, and hospitality businesses. Rebean analyzes AI search presence, SEO performance, AEO and GEO metrics.',
    highlights: [
      'Contributed to competitive research and market analysis during product ideation phase',
      'Provided UX feedback and feature suggestions based on target user needs in the hospitality vertical',
      'Coordinated development team in building core product functions and AI tracking features',
      'Produced structured product reports and documentation to support go-to-market planning'
    ],
    tags: ['AI VISIBILITY', 'SEO/AEO/GEO', 'SAAS PRODUCT']
  },
  {
    id: 'pobs',
    title: 'POBS',
    image: 'assets/projects/POBS.png',
    images: ['POBS.png', 'pobs2.png', 'pobs3.png', 'pobs4.png', 'pobs5.png', 'pobs6.png'],
    meta: 'CONSTRUCTION & OPERATIONS - IHG - INTERNATIONAL',
    description: 'An enterprise platform supporting workforce planning across the full hotel development lifecycle — from pre-construction planning to operational readiness, including headcount planning, salary structuring, and staffing management.',
    highlights: [
      'Managed requirement intake and sprint coordination, aligning workforce planning workflows with IHG\'s operational standards',
      'Logged and tracked scope-related tasks, ensuring visibility and prioritization across planning and execution phases',
      'Coordinated with cross-functional teams to define and refine workforce structures across different project stages',
      'Supported delivery alignment between planning data and real operational needs as hotels transitioned into live operations'
    ],
    tags: ['WORKFORCE PLANNING', 'XFN COORDINATION', 'REQUIREMENT OWNERSHIP']
  },
  {
    id: 'handshake',
    title: 'Handshake',
    image: 'assets/projects/Handshake.jpg',
    images: ['Handshake.jpg', 'handshake2.png', 'handshake3.png', 'handshake4.png', 'handshake5.png', 'handshake6.jpg', 'handshake7.jpg'],
    meta: 'BUDGET MANAGEMENT - SINGAPORE',
    description: 'A budget management platform designed to track and manage financial planning across construction projects, with structured budgeting by phases and milestones.',
    highlights: [
      'Coordinated requirement gathering and task execution for budget planning and tracking features',
      'Managed milestone-based budgeting workflows, ensuring accurate allocation and tracking across project phases',
      'Collaborated with stakeholders to align financial logic with construction timelines and delivery goals',
      'Tracked progress and resolved issues to ensure smooth delivery of budgeting and reporting functionalities'
    ],
    tags: ['BUDGET MANAGEMENT', 'MILESTONE TRACKING', 'XFN ALIGNMENT']
  },
  {
    id: 'ihotel',
    title: 'iHotel',
    image: 'assets/projects/iHotel.jpg',
    images: ['iHotel.jpg', 'ihotel1.png', 'ihotel2.png', 'ihotel3.png'],
    meta: 'HOTEL OPERATIONS - WINK HOTELS - VIETNAM',
    description: 'A hotel operations management platform designed for Wink Hotels, supporting daily operational workflows such as housekeeping, maintenance scheduling, room service, incident reporting, and concierge services.',
    highlights: [
      'Maintained the live platform by handling bug fixes and operational issues',
      'Coordinated with developers to resolve reported issues and ensure system stability',
      'Supported ongoing operations through ticket-based maintenance activities'
    ],
    tags: ['PLATFORM MAINTENANCE', 'BUG FIXING', 'OPERATIONAL SUPPORT']
  }
];

// Render INIPOD projects
function renderInipodProjects() {
  const track = document.getElementById('inipodTrack');
  if (!track) return;

  track.innerHTML = INIPOD_PROJECTS.map((project, idx) => `
    <div class="inipod__project">
      <div class="project-thumb" data-id="inipod-${idx}" data-images='${JSON.stringify(project.images.map(n => "assets/projects/" + n))}'>
        <img src="${project.image}" alt="${project.title}" class="inipod__project-image" />
        <div class="project-thumb__overlay">
          <span class="project-thumb__label">Click to see more</span>
        </div>
      </div>
      <div class="inipod__project-content">
        <h3 class="inipod__project-title">${project.title}</h3>
        <p class="inipod__project-meta">${project.meta}</p>
        <p class="inipod__project-desc">${project.description}</p>
        <ul class="inipod__project-list">
          ${project.highlights.map(h => `<li class="inipod__project-item">${h}</li>`).join('')}
        </ul>
        <div class="inipod__project-tags">
          ${project.tags.map(tag => `<span class="inipod__tag">${tag}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

renderInipodProjects();

// ─── FORIX Projects ───
const FORIX_PROJECTS = [
  {
    id: 'sigma',
    title: 'SIGMA',
    image: 'assets/projects/SIGMA.jpg',
    images: ['SIGMA.jpg', 'sigma2.png', 'sigma3.png', 'sigma4.png', 'sigma5.jpg', 'sigma6.jpg', 'sigma7.png'],
    meta: 'PHOTOGRAPHY EQUIPMENT - UNITED STATES',
    description: 'A high-traffic eCommerce platform for SIGMA, a global brand specializing in lenses and photography equipment. The system supports product catalog management, order processing, inventory handling, and content-driven marketing through an integrated Magento and WordPress setup.',
    highlights: [
      'Maintained daily platform operations, handling bugs, content updates, and operational issues related to orders and stock',
      'Analyzed requirements and implemented new features such as wishlist, gift card, and necessary Magento extensions',
      'Coordinated with developers to resolve issues and align solutions with business needs',
      'Managed blog operations (WordPress), including layout, content structuring, and extension setup',
      'Supported tracking and performance optimization through GA4, GTM, and Core Web Vitals improvements'
    ],
    tags: ['MAGENTO', 'WORDPRESS', 'ECOMMERCE OPS']
  },
  {
    id: 'christmas-designers',
    title: 'Christmas Designers',
    image: 'assets/projects/Christmas Designers.jpg',
    images: ['Christmas Designers.jpg', 'christmas designers 3.jpg', 'christmas designers 4.jpg', 'christmas designers 5.jpg', 'christmas designers 6.jpg', 'christmas designers 7.png'],
    meta: 'HOLIDAY DECORATIONS - UNITED STATES',
    description: 'A seasonal eCommerce platform specializing in Christmas decorations, requiring continuous maintenance and a full-scale website redesign to improve user experience and conversion performance across key shopping journeys.',
    highlights: [
      'Maintained daily platform operations, handling bugs and tickets related to orders, inventory, and system issues',
      'Installed and configured necessary extensions to support business and operational needs',
      'Led the end-to-end redesign of core pages including homepage, category, product, cart, checkout, wishlist, and blog',
      'Translated business and UX requirements into actionable tasks for design and development teams',
      'Coordinated implementation and ensured consistency across UI/UX and functionality during rollout'
    ],
    tags: ['MAGENTO', 'ECOMMERCE UX', 'WEBSITE REDESIGN']
  },
  {
    id: 'robbins-brothers',
    title: 'Robbins Brothers',
    image: 'assets/projects/Robbins Brothers.jpg',
    images: ['Robbins Brothers.jpg', 'robbins brothers 2.jpg', 'robbins brothers 3.png', 'robbins brothers 4.png', 'robbins brothers 5.png'],
    meta: 'LUXURY JEWELRY RETAIL - UNITED STATES',
    description: 'A luxury jewelry eCommerce platform specializing in diamond rings and fine jewelry, requiring continuous enhancements to support evolving business needs and improve customer experience across the purchase journey.',
    highlights: [
      'Maintained platform operations, handling bugs and issues related to orders, product display, and system performance',
      'Implemented new features including wishlist, product reviews, navigation improvements, and product page enhancements',
      'Analyzed and translated business requirements into development tasks, coordinating with developers for implementation',
      'Improved website performance through Core Web Vitals (CWV) optimization',
      'Supported platform upgrades, including Magento version updates when required'
    ],
    tags: ['MAGENTO', 'FEATURE ENHANCEMENT', 'ECOMMERCE UX']
  },
  {
    id: 'eastern-skate-supply',
    title: 'Eastern Skate Supply',
    image: 'assets/projects/Eastern Skate.jpg',
    images: ['Eastern Skate.jpg', 'eastern skates 2.png', 'eastern skates 3.jpg', 'eastern skates 3.png', 'eastern skates 4.jpg'],
    meta: 'SPORTS & LIFESTYLE RETAIL - UNITED STATES',
    description: 'An eCommerce platform specializing in skateboards and sports equipment, requiring continuous maintenance and performance optimization to support stable operations and smooth customer experience.',
    highlights: [
      'Maintained platform operations, handling bugs and issues related to orders, content, and system performance',
      'Coordinated with developers to resolve issues and prioritize technical tasks',
      'Improved website speed and performance through optimization efforts',
      'Supported platform upgrades, including Magento version updates when required',
      'Implemented security and usability improvements such as upgrading reCAPTCHA from v2 to v3'
    ],
    tags: ['MAGENTO', 'PLATFORM MAINTENANCE', 'PERFORMANCE OPTIMIZATION']
  },
  {
    id: 'lax-ammo',
    title: 'LAX Ammo / Freedom Munitions',
    image: 'assets/projects/LAX Ammo.jpg',
    images: ['LAX Ammo.jpg', 'lax ammo 2.png', 'lax ammo 3.png', 'lax ammo 4.png'],
    meta: 'TACTICAL GOODS - UNITED STATES',
    description: 'A high-demand eCommerce platform requiring stable operations and reliable performance, especially during promotional campaigns and peak traffic periods.',
    highlights: [
      'Maintained daily platform operations, handling bugs and issues related to orders, sales, stock, and discount logic',
      'Set up and managed promotional campaigns, including voucher and discount configurations',
      'Coordinated with developers to resolve technical issues and ensure system stability',
      'Supported QA activities to validate features and fixes before release',
      'Handled various operational tickets to ensure smooth platform performance'
    ],
    tags: ['MAGENTO', 'ECOMMERCE OPS', 'PROMOTION SETUP']
  },
  {
    id: 'music-medic',
    title: 'Music Medic',
    image: 'assets/projects/MusicMedic.png',
    images: ['MusicMedic.png', 'music medic 1.png', 'music medic 2.png', 'music medic 3.png'],
    meta: 'MUSICAL INSTRUMENTS & ACCESSORIES - UNITED STATES',
    description: 'A specialized eCommerce platform for musical instruments and accessories, requiring regular maintenance and system upgrades to ensure performance, security, and compatibility.',
    highlights: [
      'Maintained platform operations, handling occasional bugs and support requests',
      'Coordinated Magento version upgrades to ensure system stability and up-to-date performance',
      'Worked with developers to resolve compatibility issues and post-upgrade bugs',
      'Managed product updates, including bulk image uploads, product information, and link adjustments',
      'Supported ongoing platform upkeep to maintain smooth operations'
    ],
    tags: ['MAGENTO', 'PLATFORM MAINTENANCE', 'VERSION UPGRADE']
  }
];

// Render FORIX projects
function renderForixProjects() {
  const track = document.getElementById('forixTrack');
  if (!track) return;

  track.innerHTML = FORIX_PROJECTS.map((project, idx) => `
    <div class="forix__project">
      <div class="project-thumb" data-id="forix-${idx}" data-images='${JSON.stringify(project.images.map(n => "assets/projects/" + n))}'>
        <img src="${project.image}" alt="${project.title}" class="forix__project-image" />
        <div class="project-thumb__overlay">
          <span class="project-thumb__label">Click to see more</span>
        </div>
      </div>
      <div class="forix__project-content">
        <h3 class="forix__project-title">${project.title}</h3>
        <p class="forix__project-meta">${project.meta}</p>
        <p class="forix__project-desc">${project.description}</p>
        <ul class="forix__project-list">
          ${project.highlights.map(h => `<li class="forix__project-item">${h}</li>`).join('')}
        </ul>
        <div class="forix__project-tags">
          ${project.tags.map(tag => `<span class="forix__tag">${tag}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

renderForixProjects();

// ─── Project Thumbnail Auto-Slide ───
function initProjectAutoSlide() {
  const projectThumbs = document.querySelectorAll('.project-thumb');

  projectThumbs.forEach(thumb => {
    try {
      const images = JSON.parse(thumb.dataset.images);
      if (images.length <= 1) return;

      let currentIndex = 0;
      const imgElement = thumb.querySelector('img');

      setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;

        imgElement.style.opacity = '0';

        setTimeout(() => {
          imgElement.src = images[currentIndex];
          imgElement.style.opacity = '1';
        }, 300);
      }, 3000);
    } catch (err) {
      console.error('Error initializing auto-slide:', err);
    }
  });
}

// Initialize auto-slide after projects are rendered
setTimeout(initProjectAutoSlide, 100);

// ─── ABOUT Highlights ───
const ABOUT_HIGHLIGHTS = [
  {
    id: 'gauvendi',
    title: 'Gauvendi 2.0',
    image: 'assets/projects/Gauvendi.jpg',
    meta: 'BOOKING ENGINE',
    description: 'A full-featured hospitality booking platform serving 75+ hotel properties across Europe and North America. Rebuilt from legacy Java to modern NestJS architecture.'
  },
  {
    id: 'ipbp',
    title: 'IPBP',
    image: 'assets/projects/IPBP.jpg',
    meta: 'FINANCIAL REPORTING',
    description: 'An enterprise financial and operational reporting platform for AWC, managing 20+ hotels with revenue forecasts, budgeting, and performance analytics.'
  }
];

// Render About highlights
function renderAboutHighlights() {
  const grid = document.getElementById('aboutGrid');
  if (!grid) return;

  grid.innerHTML = ABOUT_HIGHLIGHTS.map(highlight => `
    <div class="about__card">
      <img src="${highlight.image}" alt="${highlight.title}" class="about__card-image" />
      <div class="about__card-content">
        <h3 class="about__card-title">${highlight.title}</h3>
        <p class="about__card-meta">${highlight.meta}</p>
        <p class="about__card-desc">${highlight.description}</p>
      </div>
    </div>
  `).join('');
}


// ─── Carousel Navigation Buttons ───
function initCarouselButtons(carouselSelector, prevBtnId, nextBtnId) {
  const carousel = document.querySelector(carouselSelector);
  const prevBtn = document.getElementById(prevBtnId);
  const nextBtn = document.getElementById(nextBtnId);

  if (!carousel || !prevBtn || !nextBtn) return;

  const scrollAmount = 560 + 32; // card width + gap

  prevBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });
}

initCarouselButtons('.inipod__carousel', 'inipodPrev', 'inipodNext');
initCarouselButtons('.forix__carousel', 'forixPrev', 'forixNext');

// ─── Lightbox Image Gallery ───
let currentLightboxImages = [];
let currentLightboxIndex = 0;

function openLightbox(images) {
  if (!Array.isArray(images) || images.length === 0) return;

  currentLightboxImages = images;
  currentLightboxIndex = 0;

  const lightbox = document.getElementById('lightbox');
  lightbox.classList.add('is-open');
  lightbox.setAttribute('aria-hidden', 'false');

  renderLightboxSlide(0);
  renderLightboxDots();
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.classList.remove('is-open');
  lightbox.setAttribute('aria-hidden', 'true');
  currentLightboxImages = [];
  currentLightboxIndex = 0;
}

function renderLightboxSlide(index) {
  if (index < 0) index = currentLightboxImages.length - 1;
  if (index >= currentLightboxImages.length) index = 0;

  currentLightboxIndex = index;

  const stage = document.getElementById('lightboxStage');
  stage.innerHTML = `<img src="${currentLightboxImages[index]}" alt="Gallery image ${index + 1}" />`;

  updateLightboxDots();
}

function renderLightboxDots() {
  const dotsContainer = document.getElementById('lightboxDots');
  dotsContainer.innerHTML = currentLightboxImages
    .map((_, i) => `<button class="lightbox__dot ${i === 0 ? 'is-active' : ''}" data-index="${i}" aria-label="Go to image ${i + 1}"></button>`)
    .join('');

  dotsContainer.querySelectorAll('.lightbox__dot').forEach(dot => {
    dot.addEventListener('click', () => {
      const index = parseInt(dot.dataset.index);
      renderLightboxSlide(index);
    });
  });
}

function updateLightboxDots() {
  document.querySelectorAll('.lightbox__dot').forEach((dot, i) => {
    dot.classList.toggle('is-active', i === currentLightboxIndex);
  });
}

document.addEventListener('click', e => {
  const thumb = e.target.closest('.project-thumb');
  if (thumb) {
    try {
      const images = JSON.parse(thumb.dataset.images);
      openLightbox(images);
    } catch (err) {
      console.error('Error parsing image data:', err);
    }
  }

  // Close lightbox when clicking outside the image
  const lightbox = document.getElementById('lightbox');
  if (e.target.id === 'lightbox' && lightbox.classList.contains('is-open')) {
    closeLightbox();
  }
});

document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
document.getElementById('lightboxPrev').addEventListener('click', () => {
  renderLightboxSlide(currentLightboxIndex - 1);
});
document.getElementById('lightboxNext').addEventListener('click', () => {
  renderLightboxSlide(currentLightboxIndex + 1);
});

document.addEventListener('keydown', e => {
  if (document.getElementById('lightbox').classList.contains('is-open')) {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') renderLightboxSlide(currentLightboxIndex - 1);
    if (e.key === 'ArrowRight') renderLightboxSlide(currentLightboxIndex + 1);
  }
});
