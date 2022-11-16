import { ref } from "vue";
import { useRouter } from "vue-router";
import http from "@/http-common";
http.defaults.headers["Content-type"] = "application/json";
http.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

export function useUtil() {
    const router = useRouter();
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
        try {let response = await http.get(`/util/user-name?email=${email}`)
        profile.value = response.data;}
        catch(e) {
            router.push({name: 'not-found'});
        }
    }

    const checkFav = ref(false);
    const checkIfFavOrNot = async (type, refUUID, email) => {
        let response = await http.get(`/view/user-fav/check?type=${type}&refUUID=${refUUID}&email=${email}`)
        checkFav.value = response.data;
    } 

    const activityList = ref([]);
    const getActivityList = async (email) => {
        let response = await http.get(`/view/user-fav?email=${email}`)
        activityList.value = response.data
    }

    return { generateFiveDigitsUUID, profile, getUserNameByEmail, checkFav, checkIfFavOrNot, activityList, getActivityList }
}