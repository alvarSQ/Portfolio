import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import NotFoundView from "@/views/notFound.vue"
import WorksView from "@/views/WorksView.vue"
import FormMaster from "@/views/FormMaster/FormMaster_home.vue"
import StartQuestionViews from "@/views/FormMaster/questionStart.vue";
import QuestionViews from "@/views/FormMaster/question.vue";
import JsonPage from "@/views/FormMaster/json.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/works',
      name: 'works',
      component: WorksView,
      children: [
        {
          path: '/form-master',
          name: 'form-master',
          component: FormMaster
        },
        {
          path: '/form-master/question',
          name: 'question-start',
          component: StartQuestionViews
        },
        {
          path: '/form-master/question/:id',
          name: 'question',
          component: QuestionViews
        },
        {
          path: '/form-master/question/json',
          name: 'json',
          component: JsonPage
        }

      ]
    },
    {
      path: "/:CatchAll(.*)",
      name: "404",
      component: NotFoundView,
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
