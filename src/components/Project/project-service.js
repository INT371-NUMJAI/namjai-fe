import http from "@/http-common";
http.defaults.headers["Content-type"] = "application/json";
http.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
class FoundationProjectService {
	async getProjectListInShort() {
		return http.get("/view/short/foundationprojects");
	}
	async getProjectById(id) {
		return http.get(`/view/foundationprojects/${id}`);
	}
	async addProject(payload) {
		return http.post("/view/project/create", payload);
	}
	uploadQRCodePicture(payload) {
		http.defaults.headers["Content-type"] = "multipart/form-data";
		return http.post("/view/foundation/upload/qr", payload);
	}
	uploadPicturePathFoundationProject(payload) {
		http.defaults.headers["Content-type"] = "multipart/form-data";
		return http.post("/view/foundation/project/upload-pic", payload);
	}
	async getRandomSixProjects() {
		return http.get("/view/random");
	}
	async editFoundationProjectStatus(payload) {
		return http.post("/view/foundationproject/edit", payload);
	}
	async getFoundationProjectsByTargetCatID(id) {
		return http.get(`/view/foundationproject/target?targetCatID=${id}`);
	}
	getFoundationProjectByFDNUUID(id) {
		return http.get(`/view/project/user?fdnUUID=${id}`);
	}
	createPayment(payload) {
		return http.post("/view/payment", payload);
	}
	updateProjectProgress(payload) {
		return http.post("/view/project/progress", payload);
	}
	updateProjectFinancial(payload) {
		return http.post("/view/financial", payload);
	}
}

export default new FoundationProjectService();
