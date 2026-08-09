const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'Home', component: () => import('pages/HomePage.vue') },
      { path: 'history', name: 'History', component: () => import('pages/HistoryPage.vue') },
      { path: 'monumentos', name: 'Monumentos', component: () => import('pages/MonumentosPage.vue') },
      { path: 'positions', name: 'Càrrecs', component: () => import('pages/PositionPage.vue') },
      { path: 'events', name: 'Esdeveniments', component: () => import('pages/EventPage.vue') },
      { path: 'galeria', name: 'Galeria', component: () => import('pages/GaleriaPage.vue') },
      { path: 'contacto', name: 'Contacto', component: () => import('pages/ContactoPage.vue') },
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
