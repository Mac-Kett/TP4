import Vue from 'vue'
import VueRouter from 'vue-router'


import FormularioVue from './componentes/FormularioVue/index.vue'
import Usuarios from './componentes/Usuarios.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes : [
        { path: '/', redirect:'/formulariovue' },
        { path: '/formulariovue', component: FormularioVue },
        { path: '/usuarios', component: Usuarios }
    ]
})