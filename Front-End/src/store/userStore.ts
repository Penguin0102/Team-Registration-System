import { defineStore } from "pinia";
import { reactive } from "vue";
import { userInfo } from "../types/personalInfo";

const userStore = defineStore(
    "user",
    ()=>{
        const userSession = reactive({
            username:"未登录",
            phone_num:"未登录",
            student_num:"未登录",
            sex:"未登录",
            password:"",
            confirm_password:"",
        });
        const setUserInfo = (info: userInfo) : void => {
			userSession.username = info.username;
			userSession.phone_num = info.phone_num;
			userSession.student_num = info.studet_num;
            userSession.sex=info.sex;
		};
        return {
            userSession,
            setUserInfo,
        };
    },
    {
        persist:true
    }
)

export default userStore
    