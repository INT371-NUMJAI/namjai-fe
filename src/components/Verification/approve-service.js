import http from "@/http-common";
http.defaults.headers["Content-type"] = "application/json";
http.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
http.defaults.headers.common["Access-Control-Expose"] = "*";

const user = JSON.parse(localStorage.getItem("user"));
http.defaults.headers.common["Authorization"] = `Bearer ${user.accessToken}`;
class ApproveService {
	async getFDNShortList() {
		return await http.get("/view/foundationlist");
	}
	getFDNByID(id) {
		return http.get(`/view/foundation/${id}`);
	}
	getFDNDocumentFileByFDNUUID(id) {
		return http
			.get(`/view/getFile/${id}`, { responseType: "blob" })
			.then((response) => {
				const blob = new Blob([response.data], { type: "application/zip" });
				const link = document.createElement("a");
				link.href = URL.createObjectURL(blob);
				link.click();
				console.log(link.href);
				console.log(typeof link.href);
				URL.revokeObjectURL(link.href);
			})
			.catch(console.error);
	}
	approveFDN(payload) {
		return http.post("/backoffice/approve-foundation", payload);
	}
}

export default new ApproveService();
