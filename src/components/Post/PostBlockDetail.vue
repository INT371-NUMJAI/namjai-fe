<template>
  <div class="space-y-2.5 lg:space-y-5">
    <post-block />
    <post-detail-block />
  </div>
</template>

<script>
    import PostBlock from './PostBlock.vue';
    import PostDetailBlock from './PostDetailBlock.vue';
    export default {
      components: {
        "post-block": PostBlock,
        "post-detail-block": PostDetailBlock,
      },
    };
</script>
