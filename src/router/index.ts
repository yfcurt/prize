import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/task",
  },
  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
  },
  {
    path: "/login/serviceAgree",
    component: () => import("@/views/login/serviceAgree.vue"),
  },
  {
    path: "/login/privacyPolicy",
    component: () => import("@/views/login/privacyPolicy.vue"),
  },
  {
    path: "/task",
    component: () => import("@/views/task/index.vue"),
  },
  {
    path: "/task/companySource/:id",
    component: () => import("@/views/task/companySource.vue"),
  },
  {
    path: "/task/details/:id",
    component: () => import("@/views/task/details.vue"),
  },
  {
    path: "/task/search",
    component: () => import("@/views/task/search.vue"),
  },
  {
    path: "/contract",
    component: () => import("@/views/contract/index.vue"),
  },
  {
    path: "/contract/progress/:id",
    component: () => import("@/views/contract/progress.vue"),
  },
  {
    path: "/contract/details/:id",
    component: () => import("@/views/contract/details.vue"),
  },
  {
    path: "/message",
    component: () => import("@/views/message/index.vue"),
  },
  {
    path: "/message/systemDetails/:id",
    component: () => import("@/views/message/systemDetails.vue"),
  },
  {
    path: "/message/systemList",
    component: () => import("@/views/message/systemList.vue"),
  },
  {
    path: "/message/talk/:id",
    component: () => import("@/views/message/talk.vue"),
  },
  {
    path: "/my",
    component: () => import("@/views/my/index.vue"),
  },
  {
    path: "/my/account",
    component: () => import("@/views/my/account/index.vue"),
  },
  {
    path: "/my/account/advance",
    component: () => import("@/views/my/account/advance.vue"),
  },
  {
    path: "/my/account/coinExplain",
    component: () => import("@/views/my/account/coinExplain.vue"),
  },
  {
    path: "/my/account/depositExplain",
    component: () => import("@/views/my/account/depositExplain.vue"),
  },
  {
    path: "/my/collect",
    component: () => import("@/views/my/collect/index.vue"),
  },
  {
    path: "/my/feedback",
    component: () => import("@/views/my/feedback/index.vue"),
  },
  {
    path: "/my/resume",
    component: () => import("@/views/my/resume/index.vue"),
  },
  {
    path: "/my/resume/preview",
    component: () => import("@/views/my/resume/preview.vue"),
  },
  {
    path: "/my/set",
    component: () => import("@/views/my/set/index.vue"),
  },
  {
    path: "/my/user",
    component: () => import("@/views/my/user/index.vue"),
  },
  {
    path: "/my/user/authReal",
    component: () => import("@/views/my/user/authReal.vue"),
  },
  {
    path: "/my/user/certified",
    component: () => import("@/views/my/user/certified.vue"),
  },
  {
    path: "/my/user/identitySwitch",
    component: () => import("@/views/my/user/identitySwitch.vue"),
  },
  {
    path: "/talent",
    component: () => import("@/views/talent/index.vue"),
  },
  {
    path: "/task",
    component: () => import("@/views/task/index.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.url),
  routes,
});

export default router;
