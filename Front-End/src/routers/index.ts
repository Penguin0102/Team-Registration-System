
import { createRouter,createWebHistory } from "vue-router";
import indexPage from '../pages/indexPage.vue';
import register from '../pages/registerPage.vue';
import user from '../pages/userPage.vue';
import login from '../pages/loginPage.vue';
import team from '../pages/teamPage.vue';
import createteam from '../pages/createteamPage.vue';
import changepass from '../pages/changepassPage.vue';
import manageteam from '../pages/manageteamPage.vue';
import jointeam from '../pages/jointeamPage.vue';
import  loginStore  from '../store/loginStore';
import pinia from '../store'
import {storeToRefs} from "pinia"

const loginstore = loginStore(pinia)
const {loginSession} = storeToRefs(loginstore)
const routes=[
    {
        path:'/',
        redirect:'/page'
    },
    {path:'/page',component:indexPage},
    {path:'/register',component:register},
    {path:'/user',component:user},
    {path:'/login',component:login},
    {path:'/team',component:team},
    {path:'/team/createteam',component:createteam},
    {path:'/user/changepass',component:changepass},
    {path:'/team/manageteam',component:manageteam},  
    {path:'/team/jointeam',component:jointeam}
]



const router = createRouter(
    {
        history:createWebHistory() ,
        routes:routes
    }
)

router.beforeEach((to,_,next)=>{
   if(loginSession.value=== false){
        if(to.path==="/login" || to.path==="/register"||to.path==="/page"){
            next();
        }else{
            next("/page");
        }
        next();
    }
});
export default router;