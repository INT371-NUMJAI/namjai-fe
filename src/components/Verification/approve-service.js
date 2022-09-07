import http from "@/http-common";
http.defaults.headers["Content-type"] = "application/json";
http.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
class ApproveService {
	getFDNShortList() {
		return http.get("/view/foundationlist");
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
				URL.revokeObjectURL(link.href);
			})
			.catch(console.error);
	}
}

export default new ApproveService();
