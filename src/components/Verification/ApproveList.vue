<template>
  <div class="mb-2" v-for="(objectProp, index) in objectProps" :key="index">
    <base-list class="mx-auto">
      <router-link :to="'/verify/fdn/' + objectProp.fdnUUID">
        <th class="py-3 w-[75px]">{{ index + 1 }}</th>
        <!-- <th class="py-3 w-[83px]">{{ objectProp.fdnUUID }}</th> -->
        <th>
          <p class="overflow-hidden truncate py-3 w-[200px]">
            {{ objectProp.fdnName }} 
          </p>
        </th>
        <th class="py-3 w-[250px]">-</th>
        <th class="py-3 w-[200px]">{{ objectProp.createDate }}</th>
        <th class="py-3 w-[100px]">
          <verification-status :statusText="objectProp.status" />
        </th>
        <th class="py-3 w-[250px]">{{ objectProp.approval }}</th>
      </router-link>
    </base-list>
  </div>
</template>

<script>
import BaseList from "../_Bases/BaseList.vue";
import VerificationStatus from "./VerificationStatus.vue";

export default {
  components: {
    BaseList,
    VerificationStatus,
  },
  props: {
    objectProps: {
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
