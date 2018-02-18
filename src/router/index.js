import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Attendance from '@/components/Attendance/Attendance'
import ScriptureSchedule from '@/components/Scriptures/ScriptureSchedule'
import Profile from '@/components/User/Profile'
import Signin from '@/components/User/Signin'
import Register from '@/components/User/Register'
import Assignments from '@/components/Assignments/Assignments'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/attendance',
      name: 'Attendance',
      component: Attendance
    },
    {
      path: '/scriptureschedule',
      name: 'ScriptureSchedule',
      component: ScriptureSchedule
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/register',
      name: '/Register',
      component: Register
    },
    {
      path: '/assignments',
      name: 'Assignments',
      component: Assignments
    }
  ],
  mode: 'history'
})
