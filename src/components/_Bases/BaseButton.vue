<template>
	<!-- <div class="md:mx-auto mx-auto flex justify-center mt-3 mb-5 h-[60px] my-10 rounded-xl w-[350px]" :class="[buttonColor]"> -->
	<button class="text-white text-lg font-semibold md:mx-auto mx-auto flex justify-center mt-3 mb-5 my-5 rounded-xl" :type="buttonType" :disabled="isValid" :class="[buttonColor]">{{ buttonLabel }}</button>
	<!-- </div> -->
</template>

<script>
export default {
	props: {
		buttonLabel: {
			type: String,
		},
		buttonColor: {
			type: String,
			default: "bg-namjaigreen",
		},
		isValid: {
			type: Boolean,
		},
		buttonType: {
			type: String,
		},
	},
};
</script>
<style>
:disabled {
	@apply text-neutral-200  bg-gray-500;
}
</style>
