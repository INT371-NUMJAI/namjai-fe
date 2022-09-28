<template>
  <div class="mt-[120px] mx-[177px]">
    <h1 class="text-5xl">เรื่องร้องเรียน</h1>
    <div
        class="w-16 border-4 border-t border-namjaired md:mt-4 lg:mt-4 lg:mb-[40px]"
      ></div>
    <base-table>
      <th class="py-3 w-[75px]">ลำดับ</th>
      <th>
        <p class="py-3 w-[300px]">เรื่องร้องเรียน</p>
      </th>
      <th class="py-3 w-[250px]">ประเภท</th>
      <th class="py-3 w-[250px]">สถานะ</th>
    </base-table>
  </div>
</template>

<script>
import BaseTable from "../_Bases/BaseTable.vue";

export default {
  components: {
    BaseTable,
  },
};
</script>

<style scoped>
.table tr {
	border-radius: 20px;
}
th:first-child, tbody:first-child tr:first-child td:first-child {
    border-radius: 10px 0 0 10px;
}

tr:last-child th:last-child, tbody:last-child tr:last-child td:last-child {
    border-radius: 0 10px 10px 0;
}

/* tr td:nth-child(n + 6),
tr th:nth-child(n + 6) {
	border-radius: 0 0.625rem 0.625rem 0;
}

tr td:nth-child(1),
tr th:nth-child(1) {
	border-radius: 0.625rem 0 0 0.625rem;
} */
</style>
