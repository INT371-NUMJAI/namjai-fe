<template>
  <div class="mx-auto my-[200px]">
    <h2 class="text-center text-5xl uppercase">page not allowed</h2>
    <br />
    <p class="text-center text-xl">Page that you are looking for is preserved for specific role only.</p>
    <router-link to="/main">
      <div class="flex justify-center">
        <base-button class="py-2 px-3" buttonLabel="Back to main page"></base-button>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>
