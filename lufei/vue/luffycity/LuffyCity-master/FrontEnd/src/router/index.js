import Vue from 'vue'
import Router from 'vue-router'

import 'bootstrap/dist/css/bootstrap.min.css'

import EmploymentClass from "../components/EmploymentClass/EmploymentClass";
import FreeLessons from "../components/FreeLessons/FreeLessons";
import Home from "../components/Home/Home";
import LightClass from "../components/LightClass/LightClass";
import PracticalLessons from "../components/PracticalLessons/PracticalLessons";
import QuestionBank from "../components/QuestionBank/QuestionBank";
import StudentAchievement from "../components/StudentAchievement/StudentAchievement";
import Chapters from "../components/Classroom/Chapters";
import PracticalCourseDetail from "../components/PracticalLessons/PracticalCourseDetail";
import CourseDetail from "../components/FreeLessons/CourseDetail";
import Classroom from "../components/Classroom/Classroom";
import Login from "../components/Common/Login";
import ShoppingCar from "../components/ShoppingCar/ShoppingCar";
import DegreeCourseDetail from "../components/EmploymentClass/DegreeCourseDetail";
import Settlement from "../components/ShoppingCar/Settlement";
import Questions from "../components/Classroom/Questions";
import Homework from "../components/Classroom/Homework";

// 将Router当做局部模块使用一定要用Vue.use(Router)
Vue.use(Router)
// 在组件中可以通过this.$router获取Router实例化对象

// 配置路由规则，可以通过this.$routes获取路由信息对象
export default new Router({
  linkActiveClass: 'is-active',
  // 路由改为history模式
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/free',
      name: 'FreeLessons',
      component: FreeLessons
    },
    // 实战课
    {
      path: '/courses',
      name: 'PracticalLessons',
      component: PracticalLessons
    },
    {
      path: '/light-course',
      name: 'LightClass',
      component: LightClass
    },
    {
      path: '/micro',
      name: 'EmploymentClass',
      component: EmploymentClass
    },
    {
      path: '/personal-test',
      name: 'QuestionBank',
      component: QuestionBank
    },
    {
      path: '/students',
      name: 'StudentAchievement',
      component: StudentAchievement
    },
    // 免费课程详情
    {
      path: "/free/:detailId",
      name: "course.detail",
      component: CourseDetail
    },
    // 就业班课程详情
    {
      path: "/degree/:detailId",
      name: "degreeCourse.detail",
      component: DegreeCourseDetail
    },
    // 实战课程详情
    {
      path: "/courses/:detailId/details-introduce",
      name: "course.detailIntroduce",
      component: PracticalCourseDetail
    },
    // 我的教室
    {
      path: "/student/degree",
      name: "Classroom",
      component: Classroom
    },
    // 模块作业
    {
      path: "/homework/detail/:detailId",
      name: "Homework.detail",
      component: Homework
    },
    // 查看章节
    {
      path: "/chapter/detail/:detailId",
      name: "Chapters.detail",
      component: Chapters
    },
    // 提问
    {
      path: "/ask-questions",
      name: "Questions",
      component: Questions
    },
    // 登录
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    // 购物车
    {
      path: "/shopping-cart",
      name: "ShoppingCar",
      component: ShoppingCar
    },
    // 结算
    {
      path: "/buy",
      name: "Settlement",
      component: Settlement
    },
  ]
})
