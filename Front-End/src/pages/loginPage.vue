<template>
    <div>
        <h1>团队注册系统-登录</h1>
        账号：<input v-model="input" type="text" name="phoneNum"><br />
        密码：<input v-model="password" type="password" name="userPass"><br />
        <button @click="login" type="button" name="button">登录</button><br />
        还没有账号？<a href="/register" >注册</a>
    </div>
</template>


<script>
import { ref , h } from 'vue';
import {watch} from 'vue';
import {ElNotification} from "element-plus";
import router from '../routers';
import loginStore  from '../store/loginStore.ts';
import userStore from '../store/userStore';
import userService from "../apis/userService";
import pinia from "../store/index"

export default{
  data(){
    return{
      input:"",
      password:"",
      newLoginStore:loginStore(),
      newUserStore:userStore(),
    }
  },
  methods:{
    async login(){
      if (this.input=== "" ||this.password=== "") {
  ElNotification({
    title: "登陆失败！", 
    message: h("i", { style: "color: teal" }, "您的账号或密码为空"),
  });
  console.log("1")
}

const loginInfo = {
  username: this.input,
  password: this.password,
};
  
const res = await userService.login(loginInfo.value);
  
if (res.data.msg === "OK" && res.data.code ===200) {
  console.log("1")
const responseData = res.data.data;
const message = "亲爱的" + responseData.username + ",欢迎回来！";
ElNotification({
  title: "登陆成功！",
  message: h("i", { style: "color: teal" }, message),
});

const newLoginStore = loginStore(pinia);
const newUserStore = userStore(pinia);

watch(newLoginStore,newUserStore)
  
newLoginStore.setLogin(true);
console.log("登录状态"+newLoginStore.loginSession);
localStorage.setItem("login", String(true));
localStorage.setItem("name", String(responseData.username));
newUserStore.setUserInfo({
  //id: responseData.id,
  username: responseData.username,
  sex: responseData.sex,
  phone_num: responseData.phone_num,
  student_num:responseData.student_num
});
router.push("/user");
  
}
else if (res.data.msg === "参数错误" && res.data.code === 200501) {
ElNotification({
  title: "登陆失败！",
  message: h("i", { style: "color: teal" }, "参数错误"),
});
return;
}
 else if (res.data.msg === "用户不存在" && res.data.code === 200502) {
ElNotification({
  title: "登陆失败！",
  message: h("i", { style: "color: teal" }, "用户不存在"),
});
return;
}
else if (res.data.msg === "密码错误" && res.data.code === 200503) {
ElNotification({
  title: "登陆失败！",
  message: h("i", { style: "color: teal" }, "密码错误"),
});
return;
}
    }
  },
}


</script>

<style>

</style>