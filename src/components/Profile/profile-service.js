import http from "@/http-common";
http.defaults.headers["Content-type"] = "application/json";
http.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

const user = JSON.parse(localStorage.getItem("user"));
http.defaults.headers.common["Authorization"] = `Bearer ${user.accessToken}`;

class ProfileService {
    async getProfile(id) {
        return http.get(`/view/getName?userUUID=${id}`);
    }
    deleteProfile(email) {
        return http.delete(`/auth/delete/user?email=${email}`);
    }
}


export default new ProfileService();