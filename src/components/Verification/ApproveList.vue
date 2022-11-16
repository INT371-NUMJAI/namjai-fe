<template>
  <!-- <BaseSearch class="flex-auto" /> -->
  <div class="" v-for="(objectProp, index) in objectProps" :key="index">
    <router-link :to="'/verify/fdn/' + objectProp.fdnUUID">
      <!-- <base-list>
        <td class="py-3 px-6 text-center w-20">{{ index + 1 }}</td>
        <td class="py-3 px-6 text-left whitespace-nowrap w-[180px]">
          <p class="overflow-hidden truncate w-[250px]">{{ objectProp.fdnName }}sdhufhsduhfudhfudsfhgfjhufh</p>
        </td>
        <td class="py-3 px-6 text-center ">{{ objectProp.createDate ? objectProp.createDate : "N/A" }}</td>
        <td class="py-3 px-6 ">
          <verification-status :statusText="objectProp.status" />
        </td>
        {{ requestProp.approveDate ? requestProp.approveDate.slice(0, 10) : "-" }}
        <td class="py-3 text-center">{{ objectProp.approval ? objectProp.approval :"N/A" }}</td>
      </base-list> -->
      <base-list>
      <td class="py-3 text-center w-16">{{ index + 1 }}</td>
      <td class="py-3 pl-6 pr-6 text-left whitespace-nowrap w-2/5">
        <p class="overflow-hidden truncate w-[320px]">{{ objectProp.fdnName }}</p>
      </td>
      <td class="py-3 px-6 text-center w-40">{{ objectProp.createDate ? objectProp.createDate : "N/A" }}</td>
      <td class="py-3 pl-10 pr-6 w-28">
        <verification-status :statusText="objectProp.status" />
      </td>
      <td class="py-3 text-center w-40">{{ objectProp.approval ? objectProp.approval :"N/A" }}</td>
    </base-list>
    </router-link>
  </div>
</template>

<script>
import BaseList from "../_Bases/BaseList.vue";
import BaseSearch from '../_Bases/BaseSearch.vue';
import VerificationStatus from "./VerificationStatus.vue";

export default {
  components: {
    BaseList,
    VerificationStatus,
    BaseSearch
  },
  props: {
    objectProps: {
      type: Array,
    },
  },
};
</script>

<style scoped>
td:first-child {
  border-radius: 10px 0 0 10px;
}

td:last-child {
  border-radius: 0 10px 10px 0;
}
</style>
