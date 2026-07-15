const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'Home', component: () => import('pages/HomePage.vue') },
      { path: 'historia', name: 'Historia', component: () => import('pages/HistoriaPage.vue') },
      { path: 'monumentos', name: 'Monumentos', component: () => import('pages/MonumentosPage.vue') },
      { path: 'cargos', name: 'Cargos', component: () => import('pages/CargosPage.vue') },
      { path: 'eventos', name: 'Eventos', component: () => import('pages/EventosPage.vue') },
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
