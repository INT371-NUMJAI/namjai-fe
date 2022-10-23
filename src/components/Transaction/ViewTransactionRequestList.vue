<template>
  <div class="container mx-auto p-5 md:py-8 lg:py-7 md:px-[34px] lg:px-[34px] bg-white rounded-lg space-y-5">
    <div class="flex justify-between items-center">
      <h2 class="text-sm lg:text-base">รายการโครงการ</h2>
      <transaction-request-drawer />
      <!-- <router-link to="/trd">
      <button class="flex justify-center items-center px-2 py-1 lg:px-4 lg:py-2 bg-green-500 space-x-2 rounded-md">
        <svg class="w-3 h-3 lg:w-4 lg:h-4" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.5 11.5V6.5M6.5 6.5V1.5M6.5 6.5H11.5M6.5 6.5H1.5" stroke="white" stroke-width="2" stroke-linecap="round" />
        </svg>
        <h2 class="text-white text-sm lg:text-base">เพิ่มรายการถอน</h2>
      </button></router-link> -->
    </div>
    <hr />
    <div>
      <div name="search" class="lg:flex justify-between">
        <div class="relative text-gray-600 items-center">
          <input class="w-full lg:w-[300px] border-2 border-gray-300 bg-white h-10 pl-10 pr-5 rounded-lg text-sm focus:outline-none" type="search" name="search" placeholder="ใส่ชื่อโครงการเพื่อค้นหา" />
          <div class="absolute inset-y-0 left-3 my-3">
            <svg class="w-3.5 h-3.5 fill-current text-namjaidarkgray" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.16287 6.44937L9.85287 9.13937C9.94742 9.23399 10.0005 9.36229 10.0005 9.49605C10.0004 9.62981 9.94724 9.75807 9.85262 9.85262C9.75801 9.94717 9.62971 10.0003 9.49594 10.0002C9.36218 10.0002 9.23392 9.94699 9.13937 9.85237L6.44937 7.16237C5.64523 7.78521 4.63401 8.07831 3.62144 7.98205C2.60886 7.88578 1.67099 7.40739 0.998613 6.64418C0.326238 5.88097 -0.0301325 4.89028 0.00199816 3.87364C0.0341289 2.85701 0.452348 1.8908 1.17157 1.17157C1.8908 0.452347 2.85701 0.0341289 3.87365 0.00199816C4.89028 -0.0301325 5.88097 0.326238 6.64418 0.998613C7.40739 1.67099 7.88578 2.60886 7.98205 3.62144C8.07831 4.63401 7.78521 5.64523 7.16237 6.44937H7.16287ZM4.00037 6.99987C4.79602 6.99987 5.55908 6.6838 6.12169 6.12119C6.6843 5.55858 7.00037 4.79552 7.00037 3.99987C7.00037 3.20422 6.6843 2.44116 6.12169 1.87855C5.55908 1.31594 4.79602 0.999872 4.00037 0.999872C3.20472 0.999872 2.44166 1.31594 1.87905 1.87855C1.31644 2.44116 1.00037 3.20422 1.00037 3.99987C1.00037 4.79552 1.31644 5.55858 1.87905 6.12119C2.44166 6.6838 3.20472 6.99987 4.00037 6.99987V6.99987Z"
              />
            </svg>
          </div>
        </div>
        <div name="sortBy" class="hidden lg:flex text-sm relative items-center space-x-2">
          <p>เรียงโดย :</p>
          <select name="sort" id="sort" class="p-1 bg-slate-200 rounded-md">
            <option value="projectName">ชื่อโครงการ</option>
            <option value="status">สถานะ</option>
            <option value="amount">จำนวนเงิน</option>
            <option value="audi">Audi</option>
          </select>
        </div>
      </div>

      <div name="table" class="w-full">
        <div class="bg-white overflow-x-auto shadow-md rounded my-6">
          <table class="min-w-max w-full table-auto">
            <thead>
              <tr class="bg-[#E9F1F0] text-gray-600 uppercase text-sm leading-normal">
                <th class="py-3 px-4 text-center md:text-left lg:px-6">ชื่อโครงการ</th>
                <th class="py-3 px-6 text-left">จำนวนเงิน</th>
                <th class="py-3 px-6 text-left">สถานะ</th>
                <th class="py-3 px-6 text-left">วันที่ถอน</th>
                <th class="py-3 px-6 text-left">วันที่อนุมัติ</th>
                <th class="py-3 px-6 text-left"></th>
              </tr>
            </thead>
            <tbody class="text-gray-600 text-sm font-light">
              <tr class="border-b border-gray-200 hover:bg-gray-100 odd:bg-white even:bg-gray-100">
                <td class="py-4 text-left whitespace-nowrap">
                  <p class="px-4 lg:px-6 w-[300px] md:w-[250px] lg:w-[300px] truncate font-medium">บริจาค ATK ให้น้องอนุบาลที่ห่างไกล dfgjdfjgidfj</p>
                </td>
                <td class="h py-4 px-6 text-left">
                  <span>9,578,095</span>
                </td>
                <td class="py-4 px-6 text-left">
                  <span>รอการอนุมัติ</span>
                </td>
                <td class="py-4 px-6 text-left">
                  <span>29/09/65</span>
                </td>
                <td class="py-4 px-6 text-left">
                  <span>31/12/65</span>
                </td>
                <td class="py-4 px-3 text-left">
                  <button type="button" title="ดูรายละเอียด">
                    <svg class="w-4 h-5" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6 12H12M6 16H9M1 3V19C1 19.5304 1.21071 20.0391 1.58579 20.4142C1.96086 20.7893 2.46957 21 3 21H15C15.5304 21 16.0391 20.7893 16.4142 20.4142C16.7893 20.0391 17 19.5304 17 19V7.342C17 7.07556 16.9467 6.81181 16.8433 6.56624C16.7399 6.32068 16.5885 6.09824 16.398 5.912L11.958 1.57C11.5844 1.20466 11.0826 1.00007 10.56 1H3C2.46957 1 1.96086 1.21071 1.58579 1.58579C1.21071 1.96086 1 2.46957 1 3V3Z"
                        stroke="#363636"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path d="M11 1V5C11 5.53043 11.2107 6.03914 11.5858 6.41421C11.9609 6.78929 12.4696 7 13 7H17" stroke="#363636" stroke-width="2" stroke-linejoin="round" />
                    </svg>
                  </button>
                </td>
                <!-- <td class="hidden lg:table-cell py-4 text-center">
                  <div class="flex item-center justify-cente space-x-2">
                    <button class="px-3.5 py-2 bg-green-500 rounded-md">
                      <svg class="w-3.5 h-3.5" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.5 11.5V6.5M6.5 6.5V1.5M6.5 6.5H11.5M6.5 6.5H1.5" stroke="white" stroke-width="2" stroke-linecap="round" />
                      </svg>
                    </button>
                    <button class="px-3.5 py-2 bg-namjaired rounded-md">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M6.5 2.75H9.5C9.5 2.35218 9.34196 1.97064 9.06066 1.68934C8.77935 1.40804 8.39782 1.25 8 1.25C7.60217 1.25 7.22064 1.40804 6.93934 1.68934C6.65804 1.97064 6.5 2.35218 6.5 2.75V2.75ZM5.375 2.75C5.375 2.40528 5.4429 2.06394 5.57482 1.74546C5.70673 1.42698 5.90009 1.1376 6.14384 0.893845C6.3876 0.650091 6.67698 0.456735 6.99546 0.324816C7.31394 0.192898 7.65528 0.125 8 0.125C8.34472 0.125 8.68606 0.192898 9.00454 0.324816C9.32302 0.456735 9.6124 0.650091 9.85615 0.893845C10.0999 1.1376 10.2933 1.42698 10.4252 1.74546C10.5571 2.06394 10.625 2.40528 10.625 2.75H14.9375C15.0867 2.75 15.2298 2.80926 15.3352 2.91475C15.4407 3.02024 15.5 3.16332 15.5 3.3125C15.5 3.46168 15.4407 3.60476 15.3352 3.71025C15.2298 3.81574 15.0867 3.875 14.9375 3.875H13.9475L13.07 12.9583C13.0027 13.6542 12.6785 14.3002 12.1608 14.7701C11.643 15.2401 10.9687 15.5003 10.2695 15.5H5.7305C5.0314 15.5001 4.35733 15.2398 3.83971 14.7699C3.3221 14.3 2.99805 13.6541 2.93075 12.9583L2.0525 3.875H1.0625C0.913316 3.875 0.770242 3.81574 0.664752 3.71025C0.559263 3.60476 0.5 3.46168 0.5 3.3125C0.5 3.16332 0.559263 3.02024 0.664752 2.91475C0.770242 2.80926 0.913316 2.75 1.0625 2.75H5.375ZM6.875 6.3125C6.875 6.16332 6.81574 6.02024 6.71025 5.91475C6.60476 5.80926 6.46168 5.75 6.3125 5.75C6.16332 5.75 6.02024 5.80926 5.91475 5.91475C5.80926 6.02024 5.75 6.16332 5.75 6.3125V11.9375C5.75 12.0867 5.80926 12.2298 5.91475 12.3352C6.02024 12.4407 6.16332 12.5 6.3125 12.5C6.46168 12.5 6.60476 12.4407 6.71025 12.3352C6.81574 12.2298 6.875 12.0867 6.875 11.9375V6.3125ZM9.6875 5.75C9.53832 5.75 9.39524 5.80926 9.28975 5.91475C9.18426 6.02024 9.125 6.16332 9.125 6.3125V11.9375C9.125 12.0867 9.18426 12.2298 9.28975 12.3352C9.39524 12.4407 9.53832 12.5 9.6875 12.5C9.83668 12.5 9.97976 12.4407 10.0852 12.3352C10.1907 12.2298 10.25 12.0867 10.25 11.9375V6.3125C10.25 6.16332 10.1907 6.02024 10.0852 5.91475C9.97976 5.80926 9.83668 5.75 9.6875 5.75Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </div>
                </td> -->
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TransactionRequestDrawer from "@/components/Transaction/TransactionRequestDrawer.vue";

export default {
  components: {
    TransactionRequestDrawer,
  },
  setup() {},
};
</script>
