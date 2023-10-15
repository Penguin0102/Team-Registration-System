<template>
    <div>
        <h1>创建团队</h1>
        <form>
            团队名称:<input v-model="team_name" type="text" name="teamName"><br />
            团队编号：<input v-model="team_id" type="text" name="teamNum">(四位数字)<br />
            团队密码：<input v-model="team_pass" type="password" name="teamPass"><br />
            <br /><button @click="create_team" type="button" name="button">创建</button>
        </form>
    </div>
</template>

<script>
import {ref, h} from "vue"
import router from '../routers';
import teamService from '../apis/teamService'
import { ElNotification } from "element-plus";
import teamStore from "../store/teamStore"
import pinia from "../store/index"

export default{
    data(){
        return{
            team_name:-1,
            team_id:-1,
            team_pass:-1,
        }
    },
    methods:{
        async create_team(){
            if (this.team_name===""||this.team_id===""||this.team_pass==="") {
      ElNotification({
        title: "失败",
        message: h("i", { style: "color: teal" }, "请您输入完整的团队信息！"),
      });return
    }

    const teamInfo=ref({
        team_id:this.team_id,
        team_name:this.team_name,
        team_pass:this.team_pass
    })
    const responseData = res.data.data
    const res = await teamService.createteam(teamInfo.value)
    if (res.data.code==="200501"){
        ElNotification({
            title:"失败",
            message: h("i",{ style : " color : teal " },"参数错误")
        });return
    }
    if(res.data.code==="200507"){
        ElNotification({
            title:"失败",
            message: h("i",{ style: "color: teal" },"用户已有团队")
        });return
    }
    if (res.data.code==="200508"){
        ElNotification({
            title:"失败",
            message: h("i",{ style: "color: teal" },"团队编号已存在")
        });return
    }
    if (res.data.code==="200"||res.data.msg==="OK"){
        const newteamStore = teamStore(pinia)
        newteamStore.setTeamInfo({
            team_id: responseData.team_id,
            team_name: responseData.team_name,
            team_num: responseData.team_num,
            team_cap: responseData.team_cap,
        })
        ElNotification({
            title:"创建成功",
            message: h("i",{ style:"color: teal" },"您的团队已成功建立！")
        })
        router.push("/team");
        return
    }
        }
    }
}
</script>

<style>
</style>