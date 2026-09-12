import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Home',
      description: 'Djul Fikri Ferdiansyah — Fullstack Developer based in Indonesia. Explore projects, skills, and get in touch.'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: {
      title: 'About',
      description: 'Learn about Djul Fikri Ferdiansyah — background, technical skills, and journey as a Fullstack Developer.'
    }
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import('../views/PortfolioView.vue'),
    meta: {
      title: 'Portfolio',
      description: 'Selected projects by Djul Fikri Ferdiansyah — web applications built with Laravel, Next.js, Flutter, and more.'
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue'),
    meta: {
      title: 'Contact',
      description: 'Get in touch with Djul Fikri Ferdiansyah for professional inquiries, collaborations, and project opportunities.'
    }
  },
  // Redirect legacy blog URLs so old bookmarks do not 404
  {
    path: '/blog',
    redirect: '/'
  },
  {
    path: '/read/:slug/:id',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  // Per-page title (fallback to site title)
  document.title = to.meta.title
    ? `${to.meta.title} | Djul Fikri Ferdiansyah`
    : 'Djul Fikri Ferdiansyah | Fullstack Developer';

  // Per-page meta description for SEO / social previews
  const descriptionEl = document.querySelector('meta[name="description"]');
  if (descriptionEl) {
    descriptionEl.setAttribute('content', to.meta.description || 'Personal portfolio of Djul Fikri Ferdiansyah, a Fullstack Developer with expertise in Laravel, Next.js, Flutter, and more.');
  }

  next();
});

export default router
