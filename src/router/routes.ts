const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'Home', component: () => import('pages/HomePage.vue') },
      { path: 'history', name: 'History', component: () => import('pages/HistoryPage.vue') },
      { path: 'monuments', name: 'Monuments', component: () => import('pages/MonumentPage.vue') },
      { path: 'positions', name: 'Positions', component: () => import('pages/PositionPage.vue') },
      { path: 'events', name: 'Events', component: () => import('pages/EventPage.vue') },
      { path: 'gallery', name: 'Gallery', component: () => import('pages/GalleryPage.vue') },
      { path: 'contact', name: 'Contact', component: () => import('pages/ContactPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ErrorNotFound.vue') },
    ],
  },
]

export default routes
