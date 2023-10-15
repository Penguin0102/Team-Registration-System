export interface userInfo {
	id: number,
	username: string,
	sex: string,
	studet_num:string,
	phone_num: string,
}

export interface signInfo {
    confirm_password: string;
    password: string;
    phone_num: string;
    sex: string;
    student_num: string;
    username: string;
}

export interface reInfo {
    new_phone_num?: string;
    new_sex?: string;
    new_student_num?: string;
    new_username?: string;
    username: string;
}

export interface passwordInfo {
    confirm_password: string;
    new_password: string;
    username: string;
}