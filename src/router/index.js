import { createRouter, createWebHistory } from 'vue-router'
import AlgoPage from '../views/Algo-Page.vue'
import DsCode from '../views/Ds-Code.vue'
import AlgoCode from '../views/Alog-Code.vue'
import DsPage from '../views/Ds-page.vue'
import FeaturePage from '../views/Feature-Page.vue'
import HomePage from '../views/Home-Page.vue'
import LoginPage from '../views/Login-Page.vue'
import SignupPage from '../views/Signup-Page.vue'
import TrickPage from '../views/Trick-Page.vue'
import LanguagePage from '../views/Language-Page.vue'
import NotFound from '../views/Not-Found.vue'
import InterviewQuestions from '@/views/Interview-Questions.vue'
import LangFeatures from '../views/Lang-Features.vue'
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
      name: 'dsCode',
      path: '/dscode/:code/',
      component: DsCode
    },
    {
      name: 'algoCode',
      path: '/algocode/:code',
      component: AlgoCode
    },
    {
      name: 'ds',
      path: '/ds',
      component: DsPage
    },
    {
      name: 'feature',
      path: '/feature/:language/:feature',
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
    },
    {
      name: 'interview',
      path: '/interview/:language',
      component: InterviewQuestions
    },
    {
      name: 'langFeatures',
      path: '/langFeatures/:language',
      component: LangFeatures
    },
    {
      path: '/404',
      component: NotFound
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/404'
    }
  ]
})

export default router
