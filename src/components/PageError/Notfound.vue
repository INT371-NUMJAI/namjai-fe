<template>
  <div class="mx-auto lg:mt-80 md:mt-[120px] mt-[80px]">
    <h2 class="text-center text-5xl">PAGE NOT FOUND</h2>
    <br />
    <p class="text-center text-xl">Page that you are looking for is not exist at this moment.</p>
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
