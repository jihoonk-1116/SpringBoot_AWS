import { API_BASE_URL } from "../api-config";
const ACCESS_TOKEN = "ACCESS_TOKEN";

export function call(api, method, request){
    let headers = new Headers({
        "Content-Type" : "application/json",
    });

    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    if(accessToken && accessToken !== null){
        headers.append("Authorization", "Bearer " + accessToken);
    }

    let options = {
        headers: headers,
        uri:API_BASE_URL + api,
        method: method,
    };
    if(request){
        //In case of GET method
        options.body = JSON.stringify(request);
    }
    return fetch(options.uri, options)
    .then((response)=>
        response.json()
        .then((json) =>{
            if(!response.ok){
                return Promise.reject(json);
            }
            return json;
        })
    )
    .catch((error) =>{
        console.log(error.status);
        if(error.status === 403){
            window.location.href = "/login"; //redirection
        }
        return Promise.reject(error);
    });
}

export function signin(userDTO){
    return call("/auth/signin", "POST", userDTO)
    .then((res)=>{
        if(res.token){
            localStorage.setItem("ACCESS_TOKEN", res.token);
            window.location.href = "/";
        }
    });
}

export function signout(){
    localStorage.setItem(ACCESS_TOKEN, null);
    window.location.href = "/login";
}

export function signup(userDTO){
    return call("/auth/signup", "POST", userDTO);
}