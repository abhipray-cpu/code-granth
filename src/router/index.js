import { createRouter, createWebHistory } from 'vue-router'
import AlgoPage from '../views/Algo-Page.vue'
import CodePage from '../views/Code-Page.vue'
import DsPage from '../views/Ds-page.vue'
import FeaturePage from '../views/Feature-Page.vue'
import HomePage from '../views/Home-Page.vue'
import LoginPage from '../views/Login-Page.vue'
import SignupPage from '../views/Signup-Page.vue'
import TrickPage from '../views/Trick-Page.vue'
import LanguagePage from '../views/Language-Page.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      name: 'algo',
      path: '/algo',
      component: AlgoPage
    },
    {
      name: 'code',
      path: '/code',
      component: CodePage
    },
    {
      name: 'ds',
      path: '/ds',
      component: DsPage
    },
    {
      name: 'feature',
      path: '/feature',
      component: FeaturePage
    },
    {
      name: 'home',
      path: '/home',
      component: HomePage
    },
    {
      name: 'login',
      path: '/login',
      component: LoginPage
    },
    {
      name: 'signup',
      path: '/signup',
      component: SignupPage
    },
    {
      name: 'tricks',
      path: '/tricks',
      component: TrickPage
    },
    {
      name: 'language',
      path: '/language/:language',
      component: LanguagePage
    }
  ]
})

export default router
