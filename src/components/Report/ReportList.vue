<template>
  <div class="mb-2" v-for="(reportProp, index) in reportProps" :key="index">
    <base-list class="mx-auto">
      <!-- <router-link :to="'/verify/fdn/' + reportProp.issueUUID"> -->
      <th class="py-3 w-[75px]">{{ index + 1 }}</th>
      <th>
        <p class="overflow-hidden truncate py-3 w-[300px]">
          {{ reportProp.detail }}
        </p>
      </th>
      <th>
        <p class="py-3 w-[250px]">{{ reportProp.issueType }}</p>
      </th>
      <!-- <th class="py-3 w-[260px]">-</th> -->
      <th class="py-3 w-[250px]">{{ reportProp.issueStatus }}</th>
      <!-- </router-link> -->
      <!-- <th class="py-3 w-[250px]">{{ objectProp.approval }}</th> -->
    </base-list>
  </div>
</template>

<script>
import BaseList from "../_Bases/BaseList.vue";

export default {
  components: {
    BaseList,
  },
  props: {
    reportProps: {
      type: Array,
    },
  },
};
</script>

<style scoped>
th:first-child {
  border-radius: 10px 0 0 10px;
}

th:last-child {
  border-radius: 0 10px 10px 0;
}
</style>
