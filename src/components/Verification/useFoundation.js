import { ref } from "vue";
import http from "@/http-common";
http.defaults.headers["Content-type"] = "application/json";
http.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

export default function useFoundation() {
	const foundation = ref([]);
	const loading = ref(false);

	async function getFDNByID(id) {
		let response = await http.get(`/view/foundation/${id}`);
		loading.value = response.status == 200 ? true : false;
		foundation.value = response.data;
		console.log(foundation.value);
	}

	return { foundation, getFDNByID, loading };
}
