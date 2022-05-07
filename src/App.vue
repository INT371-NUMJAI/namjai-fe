<template>
	<w-app>
		<div>
			<nav-bar />
			<router-view />
		</div>
	</w-app>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
	components: {
		NavBar,
	},
};
</script>
