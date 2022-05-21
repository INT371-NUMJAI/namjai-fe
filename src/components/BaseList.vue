<template>
<table class="mx-[177px]">
          <thead class="text-black bg-white ">
            <tr>
              <th class="py-3 w-[83px]">1</th>
              <th>
                 <p class="overflow-hidden truncate py-3 w-[300px]">เยอร์บีร่าคอลัมน์บาร์บีคิวครูเสดซีดาaslvkamdflkvm;lfkv;slfbn</p></th>
              <th class="py-3 w-[260px]">ศุภานัน โชติธีรทัต</th>
              <th class="py-3 w-[185px]">00/00/0000</th>
              <th class="py-3 w-[95px]"><verification-status /></th>
              <th class="py-3 w-[250px]">กันญภัทร ผลบุญเจริญชัย</th>
            </tr>
          </thead>
        </table>
</template>

<script>
import { defineComponent } from "vue";
import VerificationStatus from "./VerificationStatus.vue";

export default defineComponent({
  components: {
	VerificationStatus
  },
});
</script>

<style scoped>
.table {
	border-spacing: 0 15px;
}

.table tr {
	border-radius: 20px;
}

tr td:nth-child(n + 6),
tr th:nth-child(n + 6) {
	border-radius: 0 0.625rem 0.625rem 0;
}

tr td:nth-child(1),
tr th:nth-child(1) {
	border-radius: 0.625rem 0 0 0.625rem;
}
</style>
