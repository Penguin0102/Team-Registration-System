<template>
    <div>
        <h1>修改密码</h1>
        <form>
            新密码：<input v-model="new_password" type="password" name="newPass"><br />
            确认新密码：<input v-model="confirm_password" type="password" name="newPass2"><br />
            <button @click="turn_to_user" type="button" name="button">更改密码</button>        
        </form>
    </div>
</template>

<script>
import { ref , h } from 'vue'
import router from '../routers';
import userService from "../apis/userService";
import userStore from '../store/userStore';
        
const turn_to_user = async () => {
if (new_password.value===""||confirm_password.value===""){
  ElNotification({
title:"更改失败！",
message: h("i", { style: "color: teal" }, "请您输入密码！"),
});
return;
}  
const res = await userService.password(passwordInfo.value)
if (res.data.msg==="OK"||res.data.code==="200") {
  ElNotification({
    title:"更改成功"
  })
  router.push("/user")
}
if(res.data.code==="200505") {
  ElNotification({
    title:"注册失败",
    message: h("i",{style:"color:teal"},"密码不相同")
  })
}
}

export default{
    data(){
      return{
        new_password:"",
        confirm_password:""
      }
    },
    setup(){
      const newuserstore = userStore()
      return{
        newuserstore
      }
    },
    methods:{
        async turn_to_user(){
          if (this.new_password===""||this.confirm_password===""){
              ElNotification({
title:"更改失败！",
message: h("i", { style: "color: teal" }, "请您输入密码！"),
});
return;
}  
const res = await userService.password(passwordInfo.value)
if (res.data.msg==="OK"||res.data.code==="200") {
  ElNotification({
    title:"更改成功"
  })
  router.push("/user")
}
if(res.data.code==="200505") {
  ElNotification({
    title:"注册失败",
    message: h("i",{style:"color:teal"},"密码不相同")
  })
}
        }
    }
}

</script>

<style></style>