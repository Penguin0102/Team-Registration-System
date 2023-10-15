<template>
    <div>
        <h1>管理团队</h1>
        <p>团队名称：{{ teamSession.team_name }} <input v-model="newteamname" type="text"></p>
        <p>团队编号：{{ teamSession.team_id }} <input v-model="newteamid" type="text"></p>
        <p>队员：</p>
        <p>队员1:{{ teamSession.teamem1 }}<button @click="rem1">踢出</button></p>
        <p>队员2:{{ teamSession.teamem2 }}<button @click="rem2">踢出</button></p>
        <p>队员3:{{ teamSession.teamem3 }}<button @click="rem3">踢出</button></p>
        <p>队员4:{{ teamSession.teamem4 }}<button @click="rem4">踢出</button></p>
        <p>队员5:{{ teamSession.teamem5 }}<button @click="rem5">踢出</button></p>
        <p>队员6:{{ teamSession.teamem6 }}<button @click="rem6">踢出</button></p>
        <button @click="turn_to_team" name="button" type="button">返回</button>
        <button @click="del" type="button" name="button">解散团队</button>&nbsp;&nbsp;&nbsp;
    </div>
</template>

<script>
import userStore from '../store/userStore';
import teamStore from '../store/teamStore';
import teamService from '../apis/teamService';
import { ElNotification } from 'element-plus';
import { h } from 'vue';
import pinia from '../store';

const del = async() =>{
    const res = await teamService.delteam(userStore.userSession.username.value)
    if (res.data.code==="200501"){
        ElNotification({
            title:"失败",
            message: h("i",{style:"color:beal"},"参数错误")
        });return
    }
    if (res.data.code==="200510"){
        ElNotification({
            title:"失败",
            message: h("i",{style:"color:beal"},"无授权")
        });return
    }
    if (res.data.code==="200"){
        ElNotification({
            title:"成功",
            message: h("i",{style:"color:beal"},"您的队伍已解散")
        });
        const newteamstore = teamStore(pinia)
        watch(newteamstore)
        newteamstore.setTeamInfo({
            team_id:string,
            team_name:string,
            team_num:string,
            captain_name:string,
    })
        return
    }    
}
const rem1 = async() =>{
    const res = await teamService.kick(kickInfo({
        kick_name:teamSession.teamem1,
        username:userStore.userSession.username,
    }))
    if (res.data.code==="200501"){
        ElNotification({
            title:"失败",
            message: h("i",{style:"color:beal"},"参数错误")
        });return
    }
    if (res.data.code==="200510"){
        ElNotification({
            title:"失败",
            message: h("i",{style:"color:beal"},"无授权")
        });return
    }
    if (res.data.code==="200515"){
        ElNotification({
            title:"失败",
            message: h("i",{style:"color:beal"},"团队已报名")
        });return
    }
    if (res.data.code==="200"){
        ElNotification({
            title:"成功",
            message: h("i",{style:"color:beal"},"您已踢出",teamem1)
        });
        const newteamSession = teamStore.teamSession
        newteamSession.setTeamInfo({
            teamem1:string
        })
    }return

}
const rem2 = async() =>{
    const res = await teamService.kick(kickInfo({
        kick_name:teamSession.teamem2,
        username:userStore.userSession.username,
    }))
    if (res.data.code==="200501"){
        ElNotification({
            title:"失败",
            message: h("i",{style:"color:beal"},"参数错误")
        });return
    }
    if (res.data.code==="200510"){
        ElNotification({
            title:"失败",
            message: h("i",{style:"color:beal"},"无授权")
        });return
    }
    if (res.data.code==="200515"){
        ElNotification({
            title:"失败",
            message: h("i",{style:"color:beal"},"团队已报名")
        });return
    }
    if (res.data.code==="200"){
        ElNotification({
            title:"成功",
            message: h("i",{style:"color:beal"},"您已踢出",teamem2)
        });
        const newteamSession = teamStore.teamSession
        newteamSession.setTeamInfo({
            teamem2:string
        })
    }return

}
const rem3 = async() =>{
    const res = await teamService.kick(kickInfo({
        kick_name:teamSession.teamem3,
        username:userStore.userSession.username,
    }))
    if (res.data.code==="200501"){
        ElNotification({
            title:"失败",
            message: h("i",{style:"color:beal"},"参数错误")
        });return
    }
    if (res.data.code==="200510"){
        ElNotification({
            title:"失败",
            message: h("i",{style:"color:beal"},"无授权")
        });return
    }
    if (res.data.code==="200515"){
        ElNotification({
            title:"失败",
            message: h("i",{style:"color:beal"},"团队已报名")
        });return
    }
    if (res.data.code==="200"){
        ElNotification({
            title:"成功",
            message: h("i",{style:"color:beal"},"您已踢出",teamem3)
        });
        const newteamSession = teamStore.teamSession
        newteamSession.setTeamInfo({
            teamem3:string
        })
    }return

}
const rem4 = async() =>{
    const res = await teamService.kick(kickInfo({
        kick_name:teamSession.teamem4,
        username:userStore.userSession.username,
    }))
    if (res.data.code==="200501"){
        ElNotification({
            title:"失败",
            message: h("i",{style:"color:beal"},"参数错误")
        });return
    }
    if (res.data.code==="200510"){
        ElNotification({
            title:"失败",
            message: h("i",{style:"color:beal"},"无授权")
        });return
    }
    if (res.data.code==="200515"){
        ElNotification({
            title:"失败",
            message: h("i",{style:"color:beal"},"团队已报名")
        });return
    }
    if (res.data.code==="200"){
        ElNotification({
            title:"成功",
            message: h("i",{style:"color:beal"},"您已踢出",teamem4)
        });
        const newteamSession = teamStore.teamSession
        newteamSession.setTeamInfo({
            teamem4:string
        })
    }return

}
const rem5 = async() =>{
    const res = await teamService.kick(kickInfo({
        kick_name:teamSession.teamem5,
        username:userStore.userSession.username,
    }))
    if (res.data.code==="200501"){
        ElNotification({
            title:"失败",
            message: h("i",{style:"color:beal"},"参数错误")
        });return
    }
    if (res.data.code==="200510"){
        ElNotification({
            title:"失败",
            message: h("i",{style:"color:beal"},"无授权")
        });return
    }
    if (res.data.code==="200515"){
        ElNotification({
            title:"失败",
            message: h("i",{style:"color:beal"},"团队已报名")
        });return
    }
    if (res.data.code==="200"){
        ElNotification({
            title:"成功",
            message: h("i",{style:"color:beal"},"您已踢出",teamem5)
        });
        const newteamSession = teamStore.teamSession
        newteamSession.setTeamInfo({
            teamem5:string
        })
    }return

}
const rem6 = async() =>{
    const res = await teamService.kick(kickInfo({
        kick_name:teamSession.teamem6,
        username:userStore.userSession.username,
    }))
    if (res.data.code==="200501"){
        ElNotification({
            title:"失败",
            message: h("i",{style:"color:beal"},"参数错误")
        });return
    }
    if (res.data.code==="200510"){
        ElNotification({
            title:"失败",
            message: h("i",{style:"color:beal"},"无授权")
        });return
    }
    if (res.data.code==="200515"){
        ElNotification({
            title:"失败",
            message: h("i",{style:"color:beal"},"团队已报名")
        });return
    }
    if (res.data.code==="200"){
        ElNotification({
            title:"成功",
            message: h("i",{style:"color:beal"},"您已踢出",teamem6)
        });
        const newteamSession = teamStore.teamSession
        newteamSession.setTeamInfo({
            teamem6:string
        })
    }return

}


export default{
    data(){

    },
    methods:{
        turn_to_team(){
            this.$router.push('/team')
        }
    },
}
</script>

<style>
</style>