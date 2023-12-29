
function lazy(path: string):object {
  return () => import(`~/views/${path}.vue`)
}

const routes = [
  {
    path: "/",
    redirect: "/dashboard",
    component: () => import("@/layout/Layout.vue"),
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("@/views/Dashboard.vue")
      }
    ]
  },
  {
    path: "/sign-in",
    name: "sign-in",
    component: () => import("@/views/auth/SignIn.vue")
  },
  {
    path: "/sign-up",
    name: "sign-up",
    component: () => import("@/views/auth/SignUp.vue")
  },
  {
    // the 404 route, when none of the above matches
    path: "/404",
    name: "404",
    component: () => import("@/views/error/Error404.vue")
  },
  {
    path: "/500",
    name: "500",
    component: () => import("@/views/error/Error500.vue")
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404"
  }
]

export default routes
