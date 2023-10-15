<template>
    <div>
        <h1>团队报名系统-个人中心</h1>
        <p>用户名：{{ username }} <input v-model="newusername" type="text"><button @click="change">修改</button></p>
        <p>电话号码：{{ phone_num }} <input v-model="newphonenum" type="text"><button @click="change">修改</button></p>
        <p>学号：{{ student_num }} <input v-model="newstudentnum" type="text"><button @click="change">修改</button></p>
        <p>性别：{{ sex }} <input v-model="newsex" type="text"><button @click="change">修改</button></p>
        <button @click="turn_to_changepass" name="button" type="button">修改密码</button>
        &nbsp;&nbsp;<button @click="turn_to_teamPage">团队中心</button>&nbsp;&nbsp;
        <button @click="turn_to_index">退出登录</button>
    </div>
</template>

<script>
import router from '../routers';
import userStore from "../store/userStore";
import pinia from "../store/index"
import userService from "../apis/userService"
import { ElNotification } from 'element-plus';
import { h } from 'vue';

export default{
    name:"userPage",
    data(){
        return{
            temp:"",
            newstudentnum:"",
            newusername:-1,
            newphonenum:-1,
            newsex:"",
        }
    },
    methods:{
        async change(){
            if (this.newusername===""||this.newphonenum===""||this.newsex===""||this.newstudentnum==="") {
        ElNotification({
            title:"失败",
            message: h("i",{style:"color:beal"},"请您输入完整的信息")
        });return
    }
    const reInfo = ref({
        new_phone_num: this.newphonenum,
        new_sex: this.newsex,
        new_student_num: this.newstudentnum,
        new_username: this.newusername,
        username: userStore.userSession.username,
    })
    const res = await userService.personal(reInfo.value);
    if(res.data.code==="200513") {
        ElNotification({
            title:"更改失败",
            message: h("i",{style:"color:beal"},"用户名已存在")
        });return
    }
    if (res.data.code==="200") {
        ElNotification({
            title:"更改成功",
            message: h("i",{style:"color:beal"},"您已成功更改您的个人信息")
        });
        const responseData = res.data.data
        const newUserStore = userStore(pinia)
        newUserStore.setUserInfo({
            id: responseData.id,
            username: responseData.username,
            sex: responseData.sex,
            phone_num: responseData.phone_num,
            student_num:responseData.student_num
        });return
    }
        },
        turn_to_teamPage(){
            router.push('/team')
        },
        turn_to_index(){
            router.push('/')
        },
        turn_to_changepass(){
            router.push('/user/changepass')
        },

    }
}
</script>

<style>
</style>