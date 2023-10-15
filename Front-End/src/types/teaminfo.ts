export interface teamInfo {
    team_id:string,
    team_name:string,
    team_cap:string,
    team_num:string,
}

export interface joinInfo{
    username: string;
    team_id: string;
    team_pass: string;
}

export interface getInfo {
    username: string;
    team_id: string;
}

export interface reInfo {
    new_team_id: string;
    new_team_name: string;
    new_team_pass: string;
    username: string;
}

export interface delInfo {
    username: string;
}

export interface kickInfo {
    kicked_name: string;
    username: string;
}

export interface enrollInfo {
    new_status: string;
    username: string;
}
export interface memInfo {
    teamem1:string;
    teamem2:string;
    teamem3:string;
    teamem4:string;
    teamem5:string;
    teamem6:string;  
}