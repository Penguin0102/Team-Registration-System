import { defineStore } from "pinia";
import { reactive } from "vue";
import { memInfo, teamInfo } from "../types/teaminfo";

const teamStore = defineStore(
    "team",
    ()=>{
        const teamSession = reactive({
            team_id:"无",
            team_name:"无",
            team_num:"无",
            captain_name:"无",
            team_pass:"无",
            teamem1:"无",
            teamem2:"无",
            teamem3:"无",
            teamem4:"无",
            teamem5:"无",
            teamem6:"无",

        });
        const setTeamInfo = (info:teamInfo) : void =>{
            teamSession.team_id = info.team_id;
            teamSession.team_name = info.team_name;
            teamSession.team_num = info.team_num;
            teamSession.captain_name = info.team_cap;
        };
        const setmemInfo =(info:memInfo) : void =>{
            teamSession.teamem1 = info.teamem1;
            teamSession.teamem2 = info.teamem2;
            teamSession.teamem3 = info.teamem3;
            teamSession.teamem4 = info.teamem4;
            teamSession.teamem5 = info.teamem5;
            teamSession.teamem6 = info.teamem6;
        }
        return {
            teamSession,
            setTeamInfo,
            setmemInfo,
        }
    },
    {
        persist:true
    }
)
export default teamStore