
import jwt_decode from "jwt-decode";

export function getTokenRole(token){
    console.log(jwt_decode(token).role)
    return jwt_decode(token).role;
}

export function getTokenId(token){
    console.log(jwt_decode(token).id)
    return jwt_decode(token).id;
}

export function getTokenUserName(token){
    console.log(jwt_decode(token).username)
    return jwt_decode(token).username;
}

export function getTokenEmail(token){
    console.log(jwt_decode(token).email)
    return jwt_decode(token).email;
}
