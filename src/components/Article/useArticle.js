import { ref } from "vue";
import http from "@/http-common";
http.defaults.headers["Content-type"] = "application/json";
http.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

export default function useArticle() {
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
		let response = await http.get(`/view/article-email/${email}`);
		articlesEmail.value = response.data;
	}

	const getThreeArticles = async () => {
		let response = await http.get("/view/articles/top-3");
        article.value = response.data;
	}

	return { article, getArticle, articles, getArticleById, articlesEmail, getArticleByEmail, getThreeArticles };
}
