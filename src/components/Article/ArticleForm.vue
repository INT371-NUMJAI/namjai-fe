<template>
  <div class="lg:mt-[120px] mt-[60px] lg:mx-[177px] md:mx-[40px] mx-[30px]">
    <h1 class="lg:text-5xl text-2xl my-[40px]">โพสต์ข่าวสาร</h1>
    <w-form v-model="valid">
      <w-input :validators="[validators.required]" v-model="articleFormBody.articleHeader" class="mb-[30px] lg:text-base md:text-base text-sm" type="text" color="black" label="หัวข้อข่าว" label-color="black" placeholder=" " />
      <w-textarea :validators="[validators.required]" v-model="articleFormBody.articleBody" class="mb-[30px] lg:text-base md:text-base text-sm" outline rows="9" color="black" bg-color="white" label="เนื้อหาข่าว" label-color="black" placeholder=" " no-autogrow />
      <label class="lg:text-base md:text-base text-xs">รูปภาพประกอบ</label>
      <w-input :validators="[validators.limitFileSize]" v-model="fileUpload[0]" @change="fileHandler" type="file" class="mt-[10px] lg:mt-[5px] w-20" label-color="white" color="white" bg-color="success-dark2" :preview="false" outline>เลือกไฟล์</w-input>
      <div class="mt-[30px] bg-white lg:w-[30%] md:w-[40%] w-full">
        <img class="p-[10px]" v-if="url" :src="url" />
      </div>
      <div class="flex justify-center">
        <base-button @click="submitArticleForm" :isValid="valid === false" class="py-2 px-9 mt-[60px]" buttonLabel="ยืนยัน"></base-button>
      </div>
    </w-form>
    <w-transition-slide left class="fixed right-[30px] top-[80px]">
      <w-alert class="w-[350px]" v-if="showAlert" v-model="showAlert" :success="checkSuccess" :error="checkError" border-right dismiss plain>{{ responseMessage }} </w-alert>
    </w-transition-slide>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import { useValidation } from "../Account/validator";
import BaseButton from "../_Bases/BaseButton.vue";
import { useUtil } from "../../services/useUtil";
import articleService from "./article-service";
import { useAuth } from "../../services/auth-middleware";
import { useStore } from "vuex";
import utilService from "../../services/util-service";

export default {
  components: { BaseButton },
  setup() {
    const valid = ref(null);
    const { validators } = useValidation();

    const use_auth = useAuth();
    const store = useStore();

    const { generateFiveDigitsUUID } = useUtil();
    const articleFormBody = reactive({
      articleUUID: generateFiveDigitsUUID(),
      articleHeader: "",
      articleBody: "",
      authorRole: use_auth.store_auth.user.role,
      authorEmail: use_auth.store_auth.user.email,
    });

    const showAlert = ref(false);
    const responseMessage = ref("");
    const checkSuccess = ref(false);
    const checkError = ref(false);

    const fileUpload = ref([]);
    const url = ref("");
    const fileHandler = (event) => {
      fileUpload[0] = event.target.files[0];
      url.value = URL.createObjectURL(fileUpload[0]);
    };

    const submitArticleForm = () => {
      articleService
        .createArticle(articleFormBody)
        .then((response) => {
          if (response.status === 200) {
            const bodyFormData = new FormData();
            bodyFormData.append("file", fileUpload[0]);
            bodyFormData.append("type", "article");
            bodyFormData.append("userName", store.state.auth.user.userName);
            bodyFormData.append("uuid", articleFormBody.articleUUID);
            utilService
              .uploadImage(bodyFormData)
              .then(() => {
                responseMessage.value = "Upload article successfully";
                checkSuccess.value = true;
                showAlert.value = true;
              })
              .catch(() => {
                responseMessage.value = "Fail to upload article image";
                checkError.value = true;
                showAlert.value = true;
              });
          }
        })
        .catch(() => {
          responseMessage.value = "Fail to upload article, please try again later";
          checkError.value = true;
          showAlert.value = true;
        });
    };

    return { valid, use_auth, validators, articleFormBody, showAlert, checkSuccess, checkError, submitArticleForm, fileUpload, fileHandler, url, responseMessage };
  },
};
</script>
