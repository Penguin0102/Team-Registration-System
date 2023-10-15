  <template>
    <div>
        <h1>团队报名系统-注册</h1> 
        <form> 
            用户名：<input v-model="userName" type="text" name=""><br />
            密码：<input v-model="userPass" type="password" name=""><br />
            再次输入密码：<input v-model="userPass2" type="password" name=""><br />
            手机号：<input v-model="phoneNum" type="text" name=""><br />
            学号：<input v-model="studentNum" type="text" name=""><br />
            性别：<input v-model="sex" type="radio" name="sex" value="boy" checked="checked">男<input v-model="sex" type="radio" name="sex" value="girl">女
            <br />
            爱好: <input type="checkbox" name="hobby1" value="game">打游戏
                  <input type="checkbox" name="bobby2" value="eat">吃饭
                  <input type="checkbox" name="bobby3" value="sleep">睡觉
                  <br />
            <button v-on:click="submit" type="button" name="button">注册</button>
        </form>
    </div>
</template>

<script>
import { h } from "vue"
import userStore from '../store/userStore.ts';
import loginStore from '../store/loginStore.ts';
import loginService from '../apis/userService';
import { ElNotification } from 'element-plus';


const submit = async ()=>{
 
}

export default{
    name:"registerPage",
    data(){
        return{
            userName:"",
            userPass:"",
            userPass2:"",
            phoneNum:"",
            studentNum:"",
            sex:"boy",
        }
    },
    methods:{
        async submit(){
            if (this.userName===""||this.userPass===""||this.userPass2===""||this.phoneNum===""||this.studentNum==="") {
        ElNotification({
            title:"注册失败",
            message: h("i",{ style: "color:beal"},"请您输入完整的信息")
        });
        return
    }
    const signInfo = {
        username:this.userName,
        password:this.userPass,
        confirm_password:this.userPass2,
        phone_num:this.phoneNum,
        sex:this.sex,
        student_num:this.studentNum,
    }
    const res = await loginService.sign(signInfo.value)
    if (res.data.code===200||res.data.msg==="OK") {
        const responseData = res.data.data;
        const message = "亲爱的" + responseData.username + ",欢迎！";
        ElNotification({
            title: "注册成功！",
            message: h("i", { style: "color: teal" }, message),
        });

        const newLoginStore = loginStore(pinia);
        const newUserStore = userStore(pinia)

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
        this.$router.push("/user");
        return;
    }
    if(res.data.code==="200505") {
        ElNotification({
            title:"注册失败",
            message: h("i",{style:"color:teal"},"密码不相同")
        });return
    }
   
    if(res.data.code==="200501") {
        ElNotification({
            title:"注册失败",
            message: h("i",{style:"color:teal"},"参数错误")
        });return
    }

    if(res.data.code==="200504") {
        ElNotification({
            title:"注册失败",
            message: h("i",{style:"color:teal"},"手机号已注册")
        });return
    }
    if(res.data.code==="200513") {
        ElNotification({
            title:"注册失败",
            message: h("i",{style:"color:teal"},"用户名已存在")
        });return
    }
        }
    },
}
</script>

<style>
</style>