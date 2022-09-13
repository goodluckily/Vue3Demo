import {createRouter,createWebHistory} from 'vue-router'

import PageOne from './views/router/PageOne.vue'
import PageTwo from './views/router/PageTwo.vue'
import PageThree from './views/router/PageThree.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/',
            component: PageOne,
        },
        {
            path: '/PageTwo',
            component: PageTwo,
        },
        {
            path: '/PageThree',
            component: PageThree,
        },
    ]
})

export default router;
