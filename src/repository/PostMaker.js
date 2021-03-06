import axios from 'axios'
const api = 'http://3.21.167.243:3000/api/v1/';
export function PostMaker(headers, data, path) {

    return axios
        .post(api + path, data, {
            headers: headers
        })
        .then(res => {
            // console.log(res);
            if (res.status === 200) {
                return res.data;
            } else {
                return res;
            }
        });
    // console.log("headers",headers);
    // console.log("api",api+path);
    // console.log("data",data);
}