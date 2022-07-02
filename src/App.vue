<template>
	<w-app>
		<div>
			<nav-bar class="z-50" />
			<router-view />
		</div>
	</w-app>
</template>

<script>
import { defineComponent } from "vue";
import NavBar from "./components/NavBar/NavBar.vue";
export default defineComponent({
	components: {
		NavBar,
	},
});
</script>
