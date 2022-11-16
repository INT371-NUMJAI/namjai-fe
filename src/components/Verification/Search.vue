<template>
  <div class="max-w-6xl">
    <div name="searchFilter" class="flex justify-center">
      <div name="search" class="flex w-full md:w-1/2 lg:w-2/5 text-gray-600 items-center bg-white rounded-full drop-shadow-md shadow-sm focus:shadow-lg">
        <div class="pl-5 inset-y-0">
          <svg class="w-3.5 h-3.5 fill-current text-namjaidarkgray" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.16287 6.44937L9.85287 9.13937C9.94742 9.23399 10.0005 9.36229 10.0005 9.49605C10.0004 9.62981 9.94724 9.75807 9.85262 9.85262C9.75801 9.94717 9.62971 10.0003 9.49594 10.0002C9.36218 10.0002 9.23392 9.94699 9.13937 9.85237L6.44937 7.16237C5.64523 7.78521 4.63401 8.07831 3.62144 7.98205C2.60886 7.88578 1.67099 7.40739 0.998613 6.64418C0.326238 5.88097 -0.0301325 4.89028 0.00199816 3.87364C0.0341289 2.85701 0.452348 1.8908 1.17157 1.17157C1.8908 0.452347 2.85701 0.0341289 3.87365 0.00199816C4.89028 -0.0301325 5.88097 0.326238 6.64418 0.998613C7.40739 1.67099 7.88578 2.60886 7.98205 3.62144C8.07831 4.63401 7.78521 5.64523 7.16237 6.44937H7.16287ZM4.00037 6.99987C4.79602 6.99987 5.55908 6.6838 6.12169 6.12119C6.6843 5.55858 7.00037 4.79552 7.00037 3.99987C7.00037 3.20422 6.6843 2.44116 6.12169 1.87855C5.55908 1.31594 4.79602 0.999872 4.00037 0.999872C3.20472 0.999872 2.44166 1.31594 1.87905 1.87855C1.31644 2.44116 1.00037 3.20422 1.00037 3.99987C1.00037 4.79552 1.31644 5.55858 1.87905 6.12119C2.44166 6.6838 3.20472 6.99987 4.00037 6.99987V6.99987Z"
            />
          </svg>
        </div>
        <input @input="$emit('update:modelValue', $event.target.value)" :value="modelValue" class="w-full rounded-r-full h-10 lg:h-12 px-3 text-md lg:text-lg placeholder:text-md placeholder:italic placeholder:text-stone-500 bg-white" type="search" name="search" placeholder="ใส่ชื่อโครงการเพื่อค้นหา" />
        <!-- {{ inputSearch }} -->
      </div>
      <!-- <div class="">
        <div class="relative mt-1">
          <button type="button" class="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 px-3 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
            <span class="block truncate">Tom Cook</span>
            <span class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
              <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" clip-rule="evenodd" />
              </svg>
            </span>
          </button>
          <ul class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm" tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3">
            <li class="text-gray-900 relative cursor-default select-none py-2 px-3" role="option">เปิดอยู่</li>
            <li class="text-gray-900 relative cursor-default select-none py-2 px-3" role="option">เปิดอยู่</li>
          </ul>
        </div>
      </div> -->
      <!-- <div name="sortBy" class="flex text-sm items-center space-x-2">
        <p class="hidden md:block">เรียงโดย :</p>
        <select name="sort" id="sort" class="p-1 bg-white drop-shadow-sm shadow-md rounded-md">
          <option value="projectName">มูลนิธิ</option>
          <option value="status">ชื่อ-สกุล</option>
          <option value="amount">วันที่สมัคร</option>
          <option value="amount">สถานะ</option>
          <option value="amount">ผู้อนุมัติ</option>
        </select>
      </div> -->
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    modelValue: String,
  },
  emits: ['update:modelValue'],
  setup({emit}) {
    const showInput = ref(false);

    const inputSearch = ref("");

    const sendInputSearch = () => {
      emit("submitInputSearch", inputSearch.value)
    };

    return { showInput, inputSearch, sendInputSearch };
  },
};
</script>
