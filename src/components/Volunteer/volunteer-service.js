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

    deleteEnrolledVolunteer(email, volunteeruuid) {
        return http.delete(`/view/volunteer-enrolled/remove/${email}/${volunteeruuid}`);
    }
   getVolunteerByTargetCat(id) {
        return http.get(`/view/volunteer-projects/target?targetCatName=${id}`);
   } 

   getVolunteerRandom() {
    return http.get("/view/volunteer-projects/random");
   }

   getEnrolledVolunteerList(id) {
		return http.get(`/view/volunteer/${id}/enrolledlist`);
	}


}

export default new VolunteerService();

