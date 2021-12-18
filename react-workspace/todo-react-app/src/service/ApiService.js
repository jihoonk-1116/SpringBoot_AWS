import { API_BASE_URI } from "../api-config";

export function call(api, method, request){
    let options = {
        headers: new Headers({
            "Content-Type":"application/json",
        }),
        uri:API_BASE_URI + api,
        method: method,
    };
    if(request){
        options.body = JSON.stringify(request);
    }
    return fetch(options.uri, options).then((response)=>
        response.json().then((json) =>{
            if(!response.ok){
                return Promise.reject(json);
            }
            return json;
        })
    )
}