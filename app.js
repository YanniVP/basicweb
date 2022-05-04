import { login,logout } from "./auth.js";
const buttonlogin = document.querySelector('#button-login');
buttonlogin.addEventListener("click", async (e) => {
    try {
        await login();
    } catch (error) {
        
    }
});