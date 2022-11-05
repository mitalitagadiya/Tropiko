export const dLogin = () => {
    let user = JSON.parse(localStorage.getItem("User"));

    if(user){
        return true;
    }else{
        return false;
    }
}