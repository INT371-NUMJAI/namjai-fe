<template>
  <div class="mt-[120px]">
    <base-table />
    <base-list />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import BaseList from "../components/BaseList.vue";
import BaseTable from "../components/BaseTable.vue";

export default defineComponent({
  components: {
    BaseList,
    BaseTable,
  },
});
</script>
