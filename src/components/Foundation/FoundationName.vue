<template>
  <div>
    <div class="flex flex-wrap items-center justify-center">
      <div
        class="container w-full lg:flex bg-white rounded-xl lg:rounded-l-full lg:rounded-r-xl transform duration-200 ease-in-out lg:space-x-5"
      >
        <div
          class="relative flex justify-center lg:justify-start px-5 lg:-ml-5 -mt-16 lg:mt-0"
        >
          <img
            class="h-[140px] w-[140px] bg-namjaibeige lg:bg-transparent p-2 lg:p-0 rounded-full object-cover"
            src="@/assets/pic1.png"
          />

          <w-button
          v-if="route.params.id === use_auth.store_auth.user.email"
            @click="dropdown.show = !dropdown.show"
            bg-color="grey-light4"
            class="absolute w-7 h-7 flex justify-center items-center rounded-full -bottom-1 lg:bottom-0 lg:right-9"
          >
            <w-icon class="white" sm color="white"> fa fa-camera</w-icon>
          </w-button>

          <div
            v-if="dropdown.show"
            class="absolute -bottom-[60px] lg:-bottom-[55px] grid grid-flow-row text-[14px] lg:text-base rounded-lg bg-white drop-shadow-md duration-200 ease-in-out"
          >
            <w-button class="px-8" color="primary"
              ><p class="text-namjaidarkgray text-[14px]">
                ดูรูปโปรไฟล์
              </p></w-button
            >
            <w-button
              @click="dialog.show = true"
              type="file"
              bg-color="white"
              static-label
              :preview="false"
              ><p class="px-3 text-[14px] text-namjaidarkgray">
                เปลี่ยนรูปโปรไฟล์
              </p></w-button
            >
          </div>

          <!-- <div class="absolute -bottom-[80px] border border-gray-900 grid grid-flow-row text-[14px] lg:text-base rounded-lg bg-white drop-shadow-md duration-200 ease-in-out">
            <button class="px-5 py-2 text-left rounded-lg hover:bg-sky-100 hover:shadow-md">ดูรูปโปรไฟล์</button>
            <button class="px-5 py-2 text-left rounded-lg hover:bg-pink-100 hover:shadow-md">เปลี่ยนรูปโปรไฟล์</button>
          </div> -->
        </div>

        <!-- <div class="absolute mx-[95px] grid grid-flow-row text-[14px] lg:text-base rounded-lg bg-white drop-shadow-md duration-200 ease-in-out">
          <button class="px-5 py-2 text-left rounded-lg hover:bg-sky-100">ดูรูปโปรไฟล์</button>
          <button class="px-5 py-2 text-left rounded-lg hover:bg-pink-100">เปลี่ยนรูปโปรไฟล์</button>
        </div> -->

        <div
          class="text-center lg:text-left pt-3 pb-6 lg:pt-0 lg:pb-0 lg:my-auto"
        >
          <h2
            class="text-namjaiblack font-medium md:text-2xl lg:text-[35px] md:font-semibold lg:font-semibold"
          >
            {{ foundationNameProps }}
          </h2>
        </div>
      </div>
      <w-dialog
        v-model="dialog.show"
        :width="dialog.width"
        title-class="green-dark3--bg white"
      >
        <template #title>
          <p class="text-[14px] lg:text-base">เปลี่ยนรูปภาพ</p>
        </template>
        <w-form v-model="valid">
          <w-input preview="false" v-model="imgFile" @change="fileHandler" type="file" bg-color="white" outline
            ><p class="text-[12px] lg:text-[14px]">กดเพื่อเลือกรูป</p></w-input
          >
          <img id="blah" src="#" alt="" />
          <div class="flex justify-end space-x-4 mt-4">
            <w-button
              @click="dialog.show = false"
              class="h-[40px] text-[14px]"
              color="black"
              >ยกเลิก</w-button
            >
            <w-button
              @click="dialog.show = false"
              class="h-[40px] text-[14px]"
              bg-color="green-dark3"
              color="white"
              >ยืนยัน</w-button
            >
            <!-- <w-button @click="dialog.show = false" bg-color="namjaigreen" color="white">ยืนยัน</w-button> -->
          </div>
        </w-form>
      </w-dialog>
    </div>
  </div>
</template>

<style scoped>
.namjaigreen {
  color: #00715d;
}
</style>
<script>
import { reactive, ref } from "vue";
import { useRoute } from 'vue-router';
import { useAuth } from '../../services/auth-middleware';


export default {
  props: {
    foundationNameProps: {
      type: String,
    },
    // foundationProfilePicture: {
    //   type: String
    // }
  },
  setup() {
    const route = useRoute();
    const use_auth = useAuth();

    const dialog = reactive({ show: false, width: 300 });
    const dropdown = reactive({ show: false });

    const imgInp = ref(null);
    const blah = ref(null);

    const fileHandler = (event) => {
      const [file] = imgInp.files;
      if (file) {
        blah.src = URL.createObjectURL(file);
      }
    };

    return { dialog, dropdown, fileHandler, blah, imgInp, route, use_auth };
  },
};
</script>
