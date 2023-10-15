import axios from "axios";

const request = (config: object) => {
    const instance = axios.create({
        baseURL:"http://127.0.0.1:4523/m1/3368859-0-default",
        timeout:1000,
//每个请求header不一样，所以不在这里
    });
return instance(config);
};

export default request;