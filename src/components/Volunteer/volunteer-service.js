import http from "@/http-common";
http.defaults.headers["Content-type"] = "application/json";
http.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
class VolunteerService {
    async addVolunteer(payload) {
        return http.post("/view/volunteer-projects/add", payload);
    }

    async unregisterVolunteerApply(payload) {
        return http.post("/view/volunteer/unregistered-user", payload);
    }
}

export default new VolunteerService();

