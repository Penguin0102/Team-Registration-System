<template>
    <div>
        <h1>加入团队</h1>
        <form>
            团队编号：<input v-model="team_id" type="text" name="teamNum"><br />
            团队密码：<input v-model="team_pass" type="password" name="teamPass"><br />
            <button @click="turn_to_team" type="button" name="button">加入</button>
        </form>
    </div>
</template>

<script>
import userSession from "../store/userStore"
import {h, watch} from "vue"
import { ElNotification } from 'element-plus';
import teamService from '../apis/teamService';
import teamStore from "../store/teamStore";
import pinia from "../store"
import router from "../routers";

const turn_to_team = async ()=>{
    if (team_id.value===""||team_pass.value==="") {
        ElNotification({
            title:"加入失败",
            message: h("i",{style:"color:beal"},"请输入完整的团队信息")
        });return
    }
    const joinInfo = ref({
        username:userSession.username,
        team_id:team_id.value,
        team_pass:team_pass.value,
    })
    const res = await teamService.jointeam(joinInfo.value)
    if (res.data.msg==="OK"&&res.data.code==="200") {
        const responseData =res.data.data
        ElNotification({
            title:"加入成功",
            message: h(username,",欢迎加入",responseData.team_name)
        });
        const newteamStore = teamStore(pinia)
        watch(newteamStore)
        newteamStore.setTeamInfo({
            team_id:responseData.team_id,
            team_name:responseData.team_name,
            team_cap:responseData.captain_name,
            team_num:responseData.team_num,
        });
        router.push("/team");
        return
    }
    if (res.data.code==="200501"){
        ElNotification({
            title:"失败",
            message: h("i",{ style : " color : teal " },"参数错误")
        });return
    }
    if (res.data.code==="200509"){
        ElNotification({
            title:"失败",
            message: h("i",{ style : " color : teal " },"团队不存在")
        });return
    }    
    if (res.data.code==="200503"){
        ElNotification({
            title:"失败",
            message: h("i",{ style : " color : teal " },"密码错误")
        });return
    }   
    if (res.data.code==="200514"){
        ElNotification({
            title:"失败",
            message: h("i",{ style : " color : teal " },"团队已报名")
        });return
    }    
    if (res.data.code==="200513"){
        ElNotification({
            title:"失败",
            message: h("i",{ style : " color : teal " },"团队已满员")
        });return
    }
    if (res.data.code==="200507"){
        ElNotification({
            title:"失败",
            message: h("i",{ style : " color : teal " },"用户已有团队")
        });return
    }
}



export default{
    data(){
        return{
            team_id:-1,
            team_pass:-1,
        }
        
    },
    methods:{
        async turn_to_team(){
            if (team_id.value===""||team_pass.value==="") {
        ElNotification({
            title:"加入失败",
            message: h("i",{style:"color:beal"},"请输入完整的团队信息")
        });return
    }
    const joinInfo = ref({
        username:userSession.username,
        team_id:team_id.value,
        team_pass:team_pass.value,
    })
    const res = await teamService.jointeam(joinInfo.value)
    if (res.data.msg==="OK"&&res.data.code==="200") {
        const responseData =res.data.data
        ElNotification({
            title:"加入成功",
            message: h(username,",欢迎加入",responseData.team_name)
        });
        const newteamStore = teamStore(pinia)
        watch(newteamStore)
        newteamStore.setTeamInfo({
            team_id:responseData.team_id,
            team_name:responseData.team_name,
            team_cap:responseData.captain_name,
            team_num:responseData.team_num,
        });
        router.push("/team");
        return
    }
    if (res.data.code==="200501"){
        ElNotification({
            title:"失败",
            message: h("i",{ style : " color : teal " },"参数错误")
        });return
    }
    if (res.data.code==="200509"){
        ElNotification({
            title:"失败",
            message: h("i",{ style : " color : teal " },"团队不存在")
        });return
    }    
    if (res.data.code==="200503"){
        ElNotification({
            title:"失败",
            message: h("i",{ style : " color : teal " },"密码错误")
        });return
    }   
    if (res.data.code==="200514"){
        ElNotification({
            title:"失败",
            message: h("i",{ style : " color : teal " },"团队已报名")
        });return
    }    
    if (res.data.code==="200513"){
        ElNotification({
            title:"失败",
            message: h("i",{ style : " color : teal " },"团队已满员")
        });return
    }
    if (res.data.code==="200507"){
        ElNotification({
            title:"失败",
            message: h("i",{ style : " color : teal " },"用户已有团队")
        });return
    }
}
        }
    }

</script>

<style>
</style>