<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
</script>

<template>
	<w-app>
		<header>
			<img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
			<w-icon xl color="primary"> fa fa-star </w-icon>
			<w-button class="ml-24" bg-color="success">success</w-button>
			<w-button class="ml-24" bg-color="error">error</w-button>

			<div class="bg-slate-500">
				<h1 class="text-3xl underline text-namjaigreen font-ibm-plex-thai">สวัสดี ฟอนต์ ไอบีเอ็มใหม่!</h1>
				<br />

				<h1 class="text-3xl underline text-green-500 font-ibm-plex-thai">HelloWorld</h1>
				<h1 class="text-3xl underline text-green-500">HelloWorld</h1>

				<HelloWorld msg="You did it!" />

				<nav>
					<RouterLink to="/">Home</RouterLink>
					<RouterLink to="/about">About</RouterLink>
				</nav>
			</div>
			<!-- <h1 class="text-3xl underline text-green-500 font-ibmPlex">Hello world!</h1>

		<h1 class="text-3xl underline text-green-500">Hello world!</h1> -->
		</header>

		<RouterView />
	</w-app>
</template>
