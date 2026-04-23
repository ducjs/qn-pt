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
    image: 'assets/photo-1.jpg',
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
    image: 'assets/photo-1.jpg',
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
    id: 'dayaway',
    title: 'DayAway',
    image: 'assets/photo-1.jpg',
    meta: 'EXPERIENCE PLATFORM - MYDAYAWAY - SINGAPORE',
    description: 'An experience reservation platform allowing hotel guests to book curated day experiences, activities, and amenities — integrated across IHG\'s global portfolio. Managed feature delivery and operational coordination for ongoing enhancements.',
    highlights: [
      'Coordinated feature releases and QA validation for experience booking flows',
      'Managed client-side requirements gathering and cross-team delivery tracking',
      'Supported integration workflows between experience booking and hotel PMS systems'
    ],
    tags: ['EXPERIENCE PLATFORM', 'MAINTENANCE OPS', 'FUNCTION OWNER']
  }
];

// Render INIPOD projects
function renderInipodProjects() {
  const track = document.getElementById('inipodTrack');
  if (!track) return;

  track.innerHTML = INIPOD_PROJECTS.map(project => `
    <div class="inipod__project">
      <img src="${project.image}" alt="${project.title}" class="inipod__project-image" />
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
    image: 'assets/photo-1.jpg',
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
    image: 'assets/photo-1.jpg',
    meta: 'HOLIDAY DECORATIONS - UNITED STATES',
    description: 'A seasonal eCommerce brand requiring a full-scale website redesign to improve user experience and conversion performance. I coordinated the end-to-end redesign across all key user journeys.',
    highlights: [
      'Led the redesign of core pages including homepage, product pages, category pages, cart, checkout, and blog',
      'Translated business and UX requirements into actionable tasks for design and development teams',
      'Coordinated cross-functional teams to ensure consistency across UI/UX and functionality',
      'Managed rollout and validation to ensure a smooth transition without disrupting peak-season operations'
    ],
    tags: ['ECOMMERCE UX', 'WEBSITE REDESIGN', 'MAGENTO']
  }
];

// Render FORIX projects
function renderForixProjects() {
  const track = document.getElementById('forixTrack');
  if (!track) return;

  track.innerHTML = FORIX_PROJECTS.map(project => `
    <div class="forix__project">
      <img src="${project.image}" alt="${project.title}" class="forix__project-image" />
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


// ─── Carousel Grab/Drag ───
function initCarouselDrag(carouselSelector) {
  const carousel = document.querySelector(carouselSelector);
  if (!carousel) return;

  let isDown = false;
  let startX;
  let scrollLeft;

  carousel.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
    carousel.style.cursor = 'grabbing';
  });

  carousel.addEventListener('mouseleave', () => {
    isDown = false;
    carousel.style.cursor = 'grab';
  });

  carousel.addEventListener('mouseup', () => {
    isDown = false;
    carousel.style.cursor = 'grab';
  });

  carousel.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 1.5;
    carousel.scrollLeft = scrollLeft - walk;
  });

  carousel.style.cursor = 'grab';
}

initCarouselDrag('.inipod__carousel');
initCarouselDrag('.forix__carousel');
