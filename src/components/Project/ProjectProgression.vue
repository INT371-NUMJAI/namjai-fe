<template>
  <div class="">
    <router-link to="/progressupdateform">
      <base-button
        class="py-2 px-3 text-sm lg:mx-0 md:mx-0 mx-0"
        buttonLabel="อัพเดตความคืบหน้า"
      ></base-button>
    </router-link>
    <div class="">
      <div class="space-y-2 mb-7">
        <div class="flex space-x-4">
          <h1 class="text-xl">หัวข้อความคืบหน้า</h1>
          <p class="text-gray-400 my-auto text-sm">11/11/2565</p>
        </div>
        <hr class="bg-black h-0.5" />
        <p class="text-sm">
          รายละเอียดความคืบหน้า ฟินิกซ์เฉิ่ม โคโยตี จูนบอยคอตต์
          ซูเปอร์ทริปแล็บเครปไลน์ แพลนเสือโคร่งป๋ากับดัก อัลบั้ม
          เป็นไงแมชีนสัมนาออร์แกน กรีนมาร์ช อันตรกิริยาโอเคอะบริกรโหงวเฮ้ง
          เฉิ่มเฮอร์ริเคนสารขัณฑ์ พิซซ่าสแตนดาร์ดแคชเชียร์
          ฮิปฮอปแมคเคอเรลเปปเปอร์มินต์ธุรกรรมแมชชีน เหมยเซ่นไหว้ทอล์คพรีเมียร์
          โนติสหลวงพี่สกรัมบลูเบอร์รี่แฟ็กซ์ เบอร์รีฉลุย
          ไฮเอนด์ฟรุตสะกอมคาปูชิโนกราวนด์
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { useAuth } from "../../services/auth-middleware";
import BaseButton from "../_Bases/BaseButton.vue";

export default {
  components: { BaseButton },
  setup() {
    const use_auth = useAuth();

    return { use_auth }
  },
};
</script>
