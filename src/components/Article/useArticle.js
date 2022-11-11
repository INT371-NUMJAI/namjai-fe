import { ref } from "vue";
import http from "@/http-common";
http.defaults.headers["Content-type"] = "application/json";
http.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

export default function articleService() {
	const articles = ref([])

	const getArticle = async () => {
		let response = await http.get("/view/articles");
		articles.value = response.data;
	};

    const article = ref([]);
    const getArticleById = async (id) => {
        let response = await http.get(`/view/article/${id}`);
        article.value = response.data;
    }

	const articlesEmail = ref([]);
	const getArticleByEmail = async (email) => {
		let response = await http.get(`/view/articles/${email}`);
		articlesEmail.value = response.data;
	}

	return { article, getArticle, articles, getArticleById, articlesEmail, getArticleByEmail };
}
