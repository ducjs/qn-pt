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
    description: 'A full-featured hospitality booking engine serving 50+ hotel properties. When the original Java-based platform became unmaintainable, Inipod rebuilt the system on NestJS. I joined at the rebuild phase — taking ownership of the redesign project, managing new requirements, resolving functional gaps, and ultimately leading the migration of all properties to the new platform.',
    highlights: [
      'Took ownership of the NestJS rebuild mid-stream — coordinating requirement re-analysis and gap resolution between 1.0 and 2.0',
      'Managed new feature requirements and logic changes on top of the rebuilt system',
      'Led end-to-end migration of 50+ hotels from legacy Java platform to Gauvendi 2.0',
      'Coordinated data mapping, stakeholder validation, and go-live sequencing across all properties'
    ],
    tags: ['NESTJS', 'REQUIREMENT MANAGEMENT', 'PLATFORM MIGRATION']
  },
  {
    id: 'dayaway',
    title: 'DayAway',
    image: 'assets/projects/Dayaway.jpg',
    images: ['Dayaway.jpg', 'Dayaway 2.png', 'Dayaway 3.png', 'Dayaway 4.jpg', 'Dayaway 5.jpg', 'Dayaway 6.png', 'Dayaway 7.png', 'Dayaway 8.png'],
    meta: 'EXPERIENCE PLATFORM - MYDAYAWAY - SINGAPORE',
    description: 'An experience reservation platform allowing hotel guests to book curated day experiences, activities, and amenities — integrated across IHG\'s global portfolio. Managed feature delivery and operational coordination for ongoing enhancements.',
    highlights: [
      'Coordinated feature releases and QA validation for experience booking flows',
      'Managed client-side requirements gathering and cross-team delivery tracking',
      'Supported integration workflows between experience booking and hotel PMS systems'
    ],
    tags: ['EXPERIENCE PLATFORM', 'MAINTENANCE OPS', 'FUNCTION OWNER']
  },
  {
    id: 'ipbp',
    title: 'IPBP',
    image: 'assets/projects/IPBP.jpg',
    images: ['IPBP.jpg', 'ipbp2.png', 'ipbp3.png', 'ipbp4.jpg', 'ipbp5.png', 'ipbp6.png', 'ipbp7.png'],
    meta: 'HOSPITALITY MANAGEMENT - SINGAPORE',
    description: 'A hospitality management platform managing operations and guest experiences.',
    highlights: [
      'Managed platform operations and feature enhancements',
      'Coordinated stakeholder communications and requirement gathering',
      'Supported system integration and data workflows'
    ],
    tags: ['HOSPITALITY', 'PLATFORM OPS', 'MANAGEMENT']
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
    description: 'A high-traffic eCommerce platform built on Magento, requiring continuous maintenance, content management, and performance optimization. I supported daily operations, ensuring platform stability while managing content workflows and marketing updates.',
    highlights: [
      'Managed day-to-day maintenance tasks, handling bugs, content updates, and operational requests to ensure stable platform performance',
      'Owned blog operations, including content publishing, structuring, and optimization to support marketing campaigns',
      'Coordinated with developers to prioritize issues and align fixes with business needs',
      'Supported tracking and performance monitoring through GA4, GTM, and Core Web Vitals (CWV) improvements'
    ],
    tags: ['MAGENTO', 'ECOMMERCE OPS', 'PLATFORM MAINTENANCE']
  },
  {
    id: 'christmas-designers',
    title: 'Christmas Designers',
    image: 'assets/projects/Christmas Designers.jpg',
    images: ['Christmas Designers.jpg', 'christmas designers 3.jpg', 'christmas designers 4.jpg', 'christmas designers 5.jpg', 'christmas designers 6.jpg', 'christmas designers 7.png'],
    meta: 'HOLIDAY DECORATIONS - UNITED STATES',
    description: 'A seasonal eCommerce brand requiring a full-scale website redesign to improve user experience and conversion performance. I coordinated the end-to-end redesign across all key user journeys.',
    highlights: [
      'Led the redesign of core pages including homepage, product pages, category pages, cart, checkout, and blog',
      'Translated business and UX requirements into actionable tasks for design and development teams',
      'Coordinated cross-functional teams to ensure consistency across UI/UX and functionality',
      'Managed rollout and validation to ensure a smooth transition without disrupting peak-season operations'
    ],
    tags: ['ECOMMERCE UX', 'WEBSITE REDESIGN', 'MAGENTO']
  },
  {
    id: 'handshake',
    title: 'Handshake',
    image: 'assets/projects/Handshake.jpg',
    images: ['Handshake.jpg', 'handshake2.png', 'handshake3.png', 'handshake4.png', 'handshake5.png', 'handshake6.jpg', 'handshake7.jpg'],
    meta: 'RECRUITMENT PLATFORM - UNITED STATES',
    description: 'A recruitment and career network platform supporting student employment and professional connections.',
    highlights: [
      'Managed platform feature development and user experience improvements',
      'Coordinated integration with educational institutions and employers',
      'Supported community engagement and content management initiatives'
    ],
    tags: ['RECRUITMENT', 'PLATFORM DEVELOPMENT', 'USER EXPERIENCE']
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
        imgElement.src = images[currentIndex];
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
    image: 'assets/photo-1.jpg',
    meta: 'BOOKING ENGINE',
    description: 'A full-featured hospitality booking engine rebuilt from legacy Java to NestJS, managing 50+ hotel properties across Europe.'
  },
  {
    id: 'dayaway',
    title: 'DayAway',
    image: 'assets/photo-1.jpg',
    meta: 'EXPERIENCE PLATFORM',
    description: 'An experience reservation platform integrated across IHG\'s global portfolio, enabling hotel guests to book curated day experiences.'
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
