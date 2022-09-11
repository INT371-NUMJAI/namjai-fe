<template>
  <div>
    <div class="flex flex-wrap items-center justify-center">
      <div class="container w-full lg:flex bg-white rounded-xl lg:rounded-l-full lg:rounded-r-xl transform duration-200 easy-in-out lg:space-x-5">
        <div class="flex justify-center lg:justify-start px-5 lg:-ml-5 -mt-16 lg:mt-0">
          <!-- need profile image path -->
          <img class="h-[140px] w-[140px] bg-namjaibeige lg:bg-transparent p-2 lg:p-0 rounded-full object-cover" src="@/assets/pic1.png" />
        </div>
        <div class="text-center lg:text-left pt-3 pb-6 lg:my-auto">
          <h2 class="text-namjaiblack font-medium md:text-2xl lg:text-[35px] md:font-semibold lg:font-semibold">{{ foundationNameProps }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    props: {
      foundationNameProps: {
        type: String,
      },
      // foundationProfilePicture: {
      //   type: String
      // }
    }
  }
</script>