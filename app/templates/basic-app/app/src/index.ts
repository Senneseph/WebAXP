import { createBusinessLogic, JculeProvider } from '@net.webax/jcule';
import { createRouter } from '@net.webax/webaxp-router';
import { createStore } from '@net.webax/webaxp-state';
import { createApiClient } from '@net.webax/webaxp-api';
import { registerServiceWorker } from '@net.webax/webaxp-pwa';

// Import views
import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { NotFoundView } from './views/NotFoundView';

// Import API specification
import apiSpec from './api/openapi.yaml';

// Create router
const router = createRouter({
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/about',
      component: AboutView,
    },
    {
      path: '*',
      component: NotFoundView,
    },
  ],
});

// Create store
const store = createStore({
  initialState: {
    user: null,
    isLoading: false,
    error: null,
  },
});

// Create API client
const apiClient = createApiClient({
  spec: apiSpec,
  baseUrl: 'https://api.example.com',
});

// Create business logic controller
const businessLogic = createBusinessLogic({
  router,
  store,
  apiClient,
});

// Register service worker
registerServiceWorker();

// Render the application
const app = document.getElementById('app');
if (app) {
  app.innerHTML = '<div id="root"></div>';
  const root = document.getElementById('root');
  if (root) {
    root.appendChild(
      <JculeProvider businessLogic={businessLogic}>
        <router.Router />
      </JculeProvider>
    );
  }
}
