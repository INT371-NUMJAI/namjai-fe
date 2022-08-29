<template>
	<w-app>
		<div>
			<nav-bar class="z-40" navText="testttt" />
			<router-view />
			<!-- <foo-ter class="z-50" /> -->
		</div>
	</w-app>
</template>

<script>
import NavBar from "./components/NavBar/NavBar.vue";
// import Footer from "./components/NavBar/Footer.vue";
export default {
	components: {
		"nav-bar": NavBar,
		// "foo-ter": Footer,
	},
};
</script>
<style>
.w-notification-manager {
	@apply absolute z-50;
}
</style>
