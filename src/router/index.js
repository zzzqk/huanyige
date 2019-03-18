 /* jshint esversion: 6 */

import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import hoom from '@/pages/hoom';
import reg from '@/pages/reg';
import login from '@/pages/login';
import find from '@/pages/find';
import suxi from '@/pages/suxi';
import view from '@/pages/view';
import instr from '@/pages/instruction';
import pc from '@/pages/pc';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'h',
      component: HelloWorld
    },
    {
      path: '/hoom',
      name: 'hoom',
      component: hoom
    },
    {
      path: '/reg',
      name: 'reg',
      component:reg
    },
    {
      path: '/login',
      name: 'login',
      component:login
    },
    {
      path: '/find',
      name: 'find',
      component:find
    },
    {
      path: '/suxi',
      name: 'suxi',
      component:suxi
    },
    {
      path: '/view',
      name: 'view',
      component:view
    },
    {
      path: '/instr',
      name: 'instr',
      component:instr
    },
    {
      path: '/pc',
      name: 'pc',
      component:pc
    }
  ]
});
