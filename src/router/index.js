import {createRouter,createWebHashHistory} from 'vue-router'
import RepresentativeWork from '../views/RepresentativeWork'
import ParticipatingWorks from '../views/ParticipatingWorks'
const routes=[
    {path:"/ParticipatingWorks",component:ParticipatingWorks},
    {path: "/RepresentativeWork",component:RepresentativeWork}
]

const router=createRouter({// eslint-disable-line no-unused-vars
    history:createWebHashHistory(),
    routes,
})
export default router;