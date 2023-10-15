import request from "./requests";
import  { teamInfo , joinInfo , getInfo , reInfo , delInfo , kickInfo , enrollInfo } from "../types/teaminfo";



export default class teamService{
//创建团队
    static async createteam(data:teamInfo){
        return request(
            {
            "headers":{
                "Content-Type":"applocatin/json",
            },
            method:"post",
            url:"/team/create",
            data:data
            }
        );
    }
// 加入团队
    static async jointeam(data:joinInfo){
        return request(
            {
                "headers":{
                    "Content-type":"application/json",
                },
                method:"post",
                url:"team/join",
                data:data
            }
        )
    }
// 获取团队信息
    static async getteam(data:getInfo){
        return request(
            {
                "headers":{
                    "Content-type":"application/json",
                },
                method:"get",
                url:"team/getmember",
                data:data,
            }
        )
    }
// 更新团队信息
    static async reteam(data:reInfo){
        return request(
            {
                "headers":{
                    "Content-type":"application/json",
                },
                method:"put",
                url:"team/captain/update",
                data:data,
            }
        )
    }
// 解散团队
    static async delteam(data:delInfo){
        return request(
            {
                "headers":{
                    "Content-type":"application/json",
                },
                method:"del",
                url:"team/captain/delete",
                data:data, 
            }
        )
    }
// 炒了队员
    static async kick(data:kickInfo){
        return request(
            {
                "headers":{
                    "Content-type":"application/json",
                },
                method:"del",
                url:"team/captain/kick",
                data:data,
            }
        )
    }
// 团队报名
    static async enroll(data:enrollInfo){
        return request(
            {
                "headers":{
                    "Content-type":"application/json",
                },
                method:"put",
                url:"team/captain/status",
                data:data
            }
        )
    }
}
        

