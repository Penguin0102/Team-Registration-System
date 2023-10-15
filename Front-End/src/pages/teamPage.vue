<template>
    <div>
        <h1>团队报名系统-团队中心</h1>
        <p>所在团队：{{ teamsession.name }}</p>
        <p>团队队长：{{ teamsession.captain_name }}</p>
        <p>人员数量：{{ teamsession.team_num }}</p>
        <button @click="turn_to_jointeam" name="button" type="button">加入团队</button>&nbsp;&nbsp;&nbsp;      
        <button @click="create_team" name="button" type="button">创建团队</button>&nbsp;&nbsp;&nbsp;
        <button @click="turn_to_manageteam" name="button" type="button">管理团队</button>&nbsp;&nbsp;&nbsp;
        <button @click="submit_steam" type="button" name="button">提交报名</button>&nbsp;&nbsp;&nbsp;
        <button @click="cancel" type="button" name="button">撤销报名</button>&nbsp;&nbsp;&nbsp;
        <button @click="turn_to_userPage" name="button" type="button">返回个人中心</button>

    </div>
</template>


<script>
import userStore from "../store/userStore"
import teamStore from '../store/teamStore'
import teamService from '../apis/teamService'
import { ElNotification } from "element-plus"

const submit_steam = async() => {
    const enrollInfo = {
        username:userStore.userSession.username,
        new_status:committed,
    }
    const res = await teamService.enroll(enrollInfo.value)
    if (res.data.code==="200"){
        ElNotification({
            title:"您已成功报名"
        });return
    }
    if (res.data.code==="200501"){
        ElNotification({
            title:"参数错误"
        });return
    }
    if (res.data.code==="200510"){
        ElNotification({
            title:"无授权"
        });return
    }
    if (res.data.code==="200511"){
        ElNotification({
            title:"您已报名或已撤销报名，请勿重复申请"
        });return
    }
    if (res.data.code==="200512"){
        ElNotification({
            title:"团队人数不足"
        });return
    }return
}

const cancel = async() => {
    const enrollInfo = {
        username:userStore.userSession.username,
        new_status:uncommitted,
    }
    const res = await teamService.enroll(enrollInfo.value)
    if (res.data.code==="200"){
        ElNotification({
            title:"您已成功撤销"
        });return
    }
    if (res.data.code==="200500"){
        ElNotification({
            title:"参数错误"
        });return
    }
    if (res.data.code==="200510"){
        ElNotification({
            title:"无授权"
        });return
    }return
}



export default{
    setup(){
        const newteamstore = teamStore()
        const teamsession = newteamstore.teamSession
        return{
            teamsession
        }
    },
    methods:{
        turn_to_userPage(){
            this.$router.push('/user')
        },
        create_team(){
            this.$router.push('/team/createteam')
        },
        turn_to_manageteam(){
            this.$router.push('/team/manageteam')
        },
        turn_to_jointeam(){
            this.$router.push('/team/jointeam')
        },
    }
}
</script>

<style>
</style>
