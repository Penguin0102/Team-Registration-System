import request from "./requests";
import {passwordInfo, reInfo, signInfo} from "../types/personalInfo";


export default class loginService {
//登录请求
    static async login(data:{
        username:string,
        password:string
    }):Promise<any>{
        return request({
            "headers":{
                "Content-Type":"applocatin/json",
            },
            method:"post",
            url:"/user/login",
            data:data
    });
    }
//注册请求
    static async sign(data: signInfo) {
		return request({
			"headers": {
				"Content-Type": "application/json",
			},
			method: "post",
			url: "/user/register",
			data: data
		});
	}
//更改密码请求
    static async password(data:passwordInfo){
        return request({
			"headers": {
        "Content-Type": "application/json",
    },
    method:"put",
    url:"/user/changepass",
    data:data
    })}
//更改个人信息
    static async personal(data:reInfo){
        return request({
			"headers": {
                "Content-Type": "application/json",
            },
        method:"put" ,
        url:"/user/setting",
        data:data  
        })
    }
}