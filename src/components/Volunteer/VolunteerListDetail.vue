<template>
  <div
    class="lg:w-1/9 my-10 mx-[30px] lg:mt-[140px] lg:mb-[80px] lg:mx-[177px]"
  >
    <div class="container mx-auto lg:max-w-6xl">
      <h2 class="text-xl pb-[20px] text-namjaidarkgrays">รายชื่ออาสาสมัคร</h2>
      <h1 class="text-[25px] pb-[30px] text-namjaidarkgray">
        {{ volunteerList.volunteerProjectName }}
      </h1>

      <div
        class="container mx-auto p-5 md:py-8 lg:py-7 md:px-[34px] lg:px-[34px] bg-white border rounded-lg space-y-5"
      >
        <div
          class="grid grid-flow-col items-start lg:flex justify-between lg:items-center"
        >
          <div class="lg:flex space-y-2 lg:space-y-0 lg:space-x-2">
            <h2 class="text-sm lg:text-base">อาสาสมัครโครงการ:</h2>
            <h2 class="text-base">
              {{ volunteerList.volunteerProjectName }}
            </h2>
          </div>
          <button class="lg:flex lg:items-center lg:space-x-2">
            <span class="hidden lg:block text-sm">ดาวน์โหลดรายชื่อ</span>
            <svg
              class="w-3.5 h-3.5"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 9.375V1.875M7.5 9.375L5 6.875M7.5 9.375L10 6.875M1.25 10.625L1.63812 12.1781C1.70572 12.4485 1.86176 12.6886 2.08146 12.8602C2.30115 13.0317 2.57188 13.125 2.85062 13.125H12.1494C12.4281 13.125 12.6989 13.0317 12.9185 12.8602C13.1382 12.6886 13.2943 12.4485 13.3619 12.1781L13.75 10.625"
                stroke="#363636"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>

        <hr />
        <div>
          <div
            name="table"
            class="w-full flex overflow-x-scroll lg:flex-none lg:overflow-x-hidden"
          >
            <div class="bg-white shadow-md rounded my-2">
              <table class="min-w-max w-full table-auto">
                <thead>
                  <tr
                    class="bg-[#E9F1F0] text-gray-600 uppercase text-sm leading-normal"
                  >
                    <th class="py-3 px-4 lg:px-6 text-center">ลำดับ</th>
                    <th class="py-3 px-6 lg:px-8 text-center md:text-left">
                      ชื่อ
                    </th>
                    <th class="py-3 px-6 lg:px-8 text-center md:text-left">
                      นามสกุล
                    </th>
                    <th class="py-3 px-6 lg:px-8 text-center md:text-left">
                      อีเมล
                    </th>
                    <th class="py-3 px-6 lg:px-8 text-center md:text-left">
                      เบอร์โทรศัพท์
                    </th>
                  </tr>
                </thead>
                <tbody class="text-gray-600 text-sm font-light">
                  <tr
                    v-for="(list, index) in volunteerList.enrolledListVolunteerProjectList" :key="index"
                    class="border-b border-gray-200 hover:bg-gray-100 odd:bg-white even:bg-gray-100 cursor-default"
                  >
                    <td class="p-4 text-center">
                      <span>{{ index + 1 }}</span>
                    </td>
                    <td class="py-4 px-6 lg:px-8 text-left">
                      <p class="w-[100px] lg:w-[160px] truncate">{{ list.firstName }}</p>
                    </td>
                    <td class="py-4 px-6 lg:px-8 text-left">
                      <p class="w-[100px] lg:w-[160px] truncate">
                        {{ list.lastName }}
                      </p>
                    </td>
                    <td class="py-4 px-6 lg:px-8 text-left">
                      <p class="w-[100px] lg:w-[260px] truncate">
                        {{ list.email }}
                      </p>
                    </td>
                    <td class="py-4 px-6 lg:px-8 text-left">
                      <span>{{ list.contactNumber }}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useVolunteer from "./useVolunteer";
import { useRoute } from "vue-router";

export default {
  components: {},
  setup() {
    const route = useRoute();

    const { volunteerList, getEnrolledVolunteerList } = useVolunteer();

    getEnrolledVolunteerList(route.params.id);

    return { volunteerList };
  },
};
</script>
