import { ref } from "vue";
import http from "@/http-common";
http.defaults.headers["Content-type"] = "application/json";
http.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

export function useUtil() {
    function generateFiveDigitsUUID() {
        var result = "";
        let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for ( var i = 0; i < 5; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    
    const profile = ref([]);
    const getUserNameByEmail = async (email) => {
        let response = await http.get(`/util/user-name?email=${email}`)
        profile.value = response.data
    }

    return { generateFiveDigitsUUID, profile, getUserNameByEmail }
}