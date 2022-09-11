import http from "@/http-common";
http.defaults.headers["Content-type"] = "application/json";
http.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
class ProfileService {
    async getProfile(id) {
        return http.get(`/view/getName?userUUID=${id}`);
    }
}


export default new ProfileService();