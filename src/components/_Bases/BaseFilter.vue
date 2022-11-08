<template>
  <div class="">
    <!-- <div class="relative">
      <button type="button" class="relative w-1/3 cursor-pointer rounded-md border border-gray-300 bg-white py-2 px-3 text-left shadow-sm focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-300 sm:text-sm" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
        <span class="block truncate">Tom Cook</span>
        <span class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
          <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" clip-rule="evenodd" />
          </svg>
        </span>
      </button>
      <ul class="absolute z-10 mt-1 max-h-56 w-1/3 overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm" tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3">
        <li class="text-gray-900 relative cursor-pointer select-none py-2 px-4 hover:bg-gray-400" role="option">เปิดอยู่</li>
        <li class="text-gray-900 relative cursor-pointer select-none py-2 px-4 hover:bg-gray-400" role="option">ปิด</li>
      </ul>
    </div> -->
    <div class="relative inline-block text-left">
      <div>
        <button type="button" @click="showSelect = !showSelect" class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:bg-gray-50 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-300" id="menu-button" aria-expanded="true" aria-haspopup="true">
          <span class="truncate"><slot name="show"></slot></span>
          <svg v-if="showSelect == false" class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
          </svg>
          <svg v-if="showSelect" class="-mr-1 ml-2 h-5 w-5 rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
      <ul v-if="showSelect" class="absolute right-0 z-10 mt-1 w-full overflow-auto rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3">
        <li  role="option"><slot name="choice"></slot></li>
        <!-- <li class="text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-400" role="option">ปิดแล้ว</li>
        <li class="text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-400" role="option">License</li> -->
      </ul>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
    setup() {
        const showSelect = ref(false);
        return{ showSelect,}
    },
}
</script>

