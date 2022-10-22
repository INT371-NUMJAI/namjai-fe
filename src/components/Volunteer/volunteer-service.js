import http from "@/http-common";
http.defaults.headers["Content-type"] = "application/json";
http.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
class VolunteerService {
    addVolunteer(payload) {
        return http.post("/view/volunteer-projects/add", payload);
    }

    unregisterVolunteerApply(payload) {
        return http.post("/view/volunteer/unregistered-user", payload);
    }

    registeredVolunteerApply(payload) {
        return http.post("/view/volunteer/registered-user", payload);
    }
}

export default new VolunteerService();

