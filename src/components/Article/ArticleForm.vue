<template>
    <div class="lg:mt-[120px] mt-[60px] lg:mx-[177px] md:mx-[40px] mx-[30px]">
        <h1 class="lg:text-5xl text-2xl my-[40px]">โพสต์ข่าวสาร</h1>
        <w-form v-model="valid">
            <w-input
            :validators="[validators.required]"
            v-model="articleFormBody.articleHeader"
            class="mb-[30px] lg:text-base md:text-base text-sm"
            type="text"
            color="black"
            label="หัวข้อข่าว"
            label-color="black"
            placeholder=" "/>
            <w-textarea
            :validators="[validators.required]"
            v-model="articleFormBody.articleBody"
            class="mb-[30px] lg:text-base md:text-base text-sm"
            outline
            rows="9"
            color="black"
            bg-color="white"
            label="เนื้อหาข่าว"
            label-color="black"
            placeholder=" "
            no-autogrow/>
            <label class="lg:text-base md:text-base text-xs">รูปภาพประกอบ</label>
            <w-input
            type="file"
            class="mt-[10px] lg:mt-[5px] w-20"
            label-color="white"
            color="white"
            bg-color="success-dark2"
            :preview="false"
            outline
            >เลือกไฟล์</w-input>
            <base-button @click="submitArticleForm()" :isValid="valid === false" class="py-2 px-9 mt-[60px]" buttonLabel="ยืนยัน"></base-button>
        </w-form>
    </div>
</template>

<script>
import { reactive, ref } from 'vue';
import { useValidation } from '../Account/validator';
import BaseButton from '../_Bases/BaseButton.vue'
import { useUtil } from '../../services/useUtil';
import articleService from './article-service'
import { useAuth } from '../../services/auth-middleware';

export default {
  components: { BaseButton },
    setup() {
        const valid = ref(null);
        const { validators } = useValidation();

        const use_auth = useAuth();

        const { generateFiveDigitsUUID } = useUtil();
        const articleFormBody = reactive({
         articleUUID: generateFiveDigitsUUID(),
         articleHeader: "",
         articleBody: "",
         authorRole: use_auth.store_auth.user.role,
         authorEmail: use_auth.store_auth.user.email,
        })

        const submitArticleForm = () => {
            articleService.createArticle(articleFormBody);
        }

        return { valid, use_auth, validators, articleFormBody, submitArticleForm }
        
    },
}
</script>
