import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from '@/store/user.ts';
import { getToken } from '@/utils/auth.ts';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: 'home',
    },
    {
      path: '/redirect',
      name: 'redirect',
      component: () => import('@/views/Redirect.vue'),
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/Home.vue'),
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  const token = await getToken();
  const userStore = useUserStore();
  if (token != null && userStore.access_id === '') {
    userStore.getUserInfo();
  }

  next();
});

export default router;
