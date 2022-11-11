<template>
    <div class="lg:mt-[120px] mt-[60px] lg:mx-[177px] md:mx-[40px] mx-[30px]">
        <h1 class="lg:text-5xl text-2xl my-[40px]">อัพเดตความคืบหน้า</h1>
        <w-form v-model="valid">
            <div class="flex space-x-[30px]">
            <w-input
            :validators="[validators.required]"
            class="mb-[30px] lg:text-base md:text-base text-sm"
            type="text"
            color="black"
            label="หัวข้อความคืบหน้า"
            label-color="black"
            placeholder=" "/>
            <w-input
            :validators="[validators.required]"
            class="mb-[30px] lg:text-base md:text-base text-sm"
            type="text"
            color="black"
            label="วันที่"
            label-color="black"
            placeholder="วันที่นำเงินไปใช้"/>
        </div>
            <w-textarea
            :validators="[validators.required]"
            class="mb-[30px] lg:text-base md:text-base text-sm"
            outline
            rows="9"
            color="black"
            bg-color="white"
            label="เนื้อหา"
            label-color="black"
            placeholder=" "
            no-autogrow/>
            <label class="lg:text-sm md:text-sm text-xs">รูปภาพประกอบ</label>
            <w-input
            type="file"
            class="mt-[10px] lg:mt-[5px] w-20"
            label-color="white"
            color="white"
            bg-color="success-dark2"
            :preview="false"
            outline
            >เลือกไฟล์</w-input>
            <base-button :isValid="valid === false" class="py-2 px-9 mt-[60px]" buttonLabel="ยืนยัน"></base-button>
        </w-form>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useValidation } from '../Account/validator';
import BaseButton from '../_Bases/BaseButton.vue'

export default {
  components: { BaseButton },
    setup() {
        const valid = ref(null);
        const { validators } = useValidation();

        return { valid, validators }
        
    },
}
</script>