import { defineStore } from "pinia";
import { ref } from "vue";
import { reactive } from "vue";

const loginStore = defineStore(
    "login",
    ()=>{
        const loginMsg = reactive({
            username:"",
            password:"",
        })
        const loginSession = ref(false);
        const setLogin = (loginNewSession:boolean) =>{
            loginSession.value = loginNewSession;
        };
        return {
            loginSession,
            setLogin,
            loginMsg
        };
            
    }
)
export default loginStore 