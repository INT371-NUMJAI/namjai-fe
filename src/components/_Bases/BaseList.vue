<template>
  <div class="w-full">
    <table class="min-w-full max-w-6xl table-auto">
      <tbody class="text-gray-600 text-sm font-light">
        <tr class="border-b border-gray-200 hover:bg-gray-100 odd:bg-white even:bg-gray-100 cursor-pointer">
          <slot></slot>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  // components: {
  // },
  // props: {
  // 	objectProps: {
  // 		type: Array,
  // 	},
  // },
};
</script>

<style scoped>
/* .table {
  border-spacing: 0 15px;
}

.table tr {
  border-radius: 20px;
} */

/* tr td:nth-child(n + 6),
tr th:nth-child(n + 6) {
	border-radius: 0 0.625rem 0.625rem 0;
}

tr td:nth-child(1),
tr th:nth-child(1) {
	border-radius: 0.625rem 0 0 0.625rem;
} */
</style>
