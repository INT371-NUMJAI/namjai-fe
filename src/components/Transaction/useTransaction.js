import { ref } from "vue";
import http from "@/http-common";
http.defaults.headers["Content-type"] = "application/json";
http.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

export default function useTransaction() {
	const bankAccount = ref([]);

	const getBankAccountByFDNUUID = async (id) => {
		let response = await http.get(`/view/bank-account/fdn?id=${id}`);
		bankAccount.value = response.data;
	};

    const projects = ref([]);
    const getClosedProjectByFDNUUID = async (id) => {
        let response = await http.get(`/view/projects/closed?fdnid=${id}`);
        projects.value = response.data;
    }

    const request = ref([]);
    const getRequestWithdraw = async () => {
        let response = await http.get("/view/request-withdrawal");
        request.value = response.data;
    }

    const requestDetail = ref([]);
    const fdnEmail = ref("");
    const getRequestDetailByWithDrawalUUID = async (id) => {
        let response = await http.get(`/view/request-withdrawal/${id}`);
        requestDetail.value = response.data;   
        fdnEmail.value = response.data.fdnEmail;
    }

    const requestByFDNEmail = ref([]);
    const getRequestByFDNEmail = async (email) => {
        let response = await http.get(`/view/request-withdrawal/?email=${email}`);
        requestByFDNEmail.value = response.data;
    }


	return { bankAccount, getBankAccountByFDNUUID, projects, getClosedProjectByFDNUUID, request, getRequestWithdraw, requestDetail, getRequestDetailByWithDrawalUUID, requestByFDNEmail, getRequestByFDNEmail, fdnEmail };
}
