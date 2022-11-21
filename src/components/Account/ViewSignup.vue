<template>
	<div>
		<!-- <div class="h-56 md:h-72 lg:hidden">
			<div class="w-32 h-32 bg-namjaired rounded-full -ml-10 -mt-5"></div>
			<div class="w-32 h-32 border-2 border-namjaiyellow rounded-full"></div>
		</div> -->
		<div class="h-screen w-full md:h-[850px] bg-namjaiwhite rounded-2xl lg:bg-transparent">
		<div class="mx-8 mb-20 md:mx-20 lg:mx-44">
				 <div class="flex justify-between">
					<h1 class="mt-10 text-2xl lg:text-5xl lg:mt-[120px] font-semibold">เริ่มต้นเปลี่ยนสังคม</h1>
					<div class="w-24 h-20 md:w-28 md:h-24 bg-namjaiyellow rounded-b-full lg:hidden"></div>
				</div>
				<hr class="w-16 border-4 border-t border-namjaired md:-mt-4 lg:mt-2" /> 
				<!-- <div class="lg:grid lg:grid-cols-4 lg:gap-8 lg:mt-3"> -->
					<div name="formContent" class="lg:col-span-3 lg:mt-8 lg:space-y-4">
						<h1 class="hidden md:hidden lg:block lg:text-[20px] lg:font-medium text-namjaigreen">ประเภทผู้ใช้</h1>
						<div class="hidden lg:block">
							<router-link to="/signup/user">
								<button class="border border-amber-400 focus:drop-shadow bg-white rounded-md px-2 py-1 inline-flex items-center space-x-3" @click="(selectedRouteUser = !selectedRouteUser), (selectedRouteFdn = false)">
									<w-icon md color="grey-light3" v-if="selectedRouteUser == false"> fa fa-circle-thin </w-icon>
									<w-icon md color="amber-light2" v-if="selectedRouteUser"> fa fa-check-circle </w-icon>
									<p class="font-bold text-black">บุคคลทั่วไป</p>
								</button>
							</router-link>
							<router-link to="/signup/foundation">
								<button class="ml-6 border border-amber-400 focus:drop-shadow bg-white rounded-md px-2 py-1 inline-flex items-center space-x-3" @click="(selectedRouteFdn = !selectedRouteFdn), (selectedRouteUser = false)">
									<w-icon md color="grey-light3" v-if="selectedRouteFdn == false"> fa fa-circle-thin </w-icon>
									<w-icon md color="amber-light2" v-if="selectedRouteFdn"> fa fa-check-circle </w-icon>
									<p class="font-bold text-black">มูลนิธิ</p>
								</button>
							</router-link>
							<router-view></router-view>
						</div>
						<!-- <div class="hidden lg:block">
              <router-link to="/signup/user">
                <div class="inline-flex items-center space-x-3">
                  <w-icon class="mr1" lg color="grey-light3" v-if="selectedRouteUser == false"> fa fa-circle-thin </w-icon>
                  <w-icon class="mr1" lg color="amber-light2" v-if="selectedRouteUser"> fa fa-check-circle </w-icon>
                  <span class="">บุคคลทั่วไป</span>
                </div>
              </router-link>

              <router-link to="/signup/foundation">
                <div class="inline-flex items-center space-x-3 ">
                  <input type="radio" class="form-radio" name="radio" value="2" />
                  <span class="">มูลนิธิ</span>
				</div>
				</router-link
              >
              <router-view></router-view>
            </div> -->

						<!-- <div class="hidden lg:block">
              <div>
                <router-link to="/signup/user">
                  <button color="amber" class="border border-amber-400 bg-white rounded-md flex space-x-3" @click="(selectedRouteUser = !selectedRouteUser), (selectedRouteFdn = false)">
                    <w-icon class="mr1" lg color="grey-light3" v-if="selectedRouteUser == false"> fa fa-circle-thin </w-icon>
                    <w-icon class="mr1" lg color="amber-light2" v-if="selectedRouteUser"> fa fa-check-circle </w-icon>
                    <p class="font-bold text-black">บุคคลทั่วไป</p>
                  </button>
                </router-link>
              </div>
              <div>
                <router-link to="/signup/foundation">
                  <button color="amber" class="border border-amber-400 bg-white rounded-md flex space-x-3" @click="(selectedRouteFdn = !selectedRouteFdn), (selectedRouteUser = false)">
                    <w-icon class="mr1" lg color="grey-light3" v-if="selectedRouteFdn == false"> fa fa-circle-thin </w-icon>
                    <w-icon class="mr1" lg color="amber-light2" v-if="selectedRouteFdn"> fa fa-check-circle </w-icon>
                    <p class="font-bold text-black">มูลนิธิ</p>
                  </button></router-link
                >
              </div>
              <router-view></router-view>
            </div> -->
					</div>
				</div>
			</div>
		</div>
	<!-- </div> -->
</template>

<script>
import { ref } from "vue";
import SignupFormUser from './SignupFormUser.vue';

export default {
  components: { SignupFormUser },
	setup() {
		document.title = "Namjai - Sign up";
		const clicked = ref([false, false]);
		const selectedRouteUser = ref(false);
		const selectedRouteFdn = ref(false);
		const swapValueIcon = () => {
			if (true === selectedRouteUser) {
				selectedRouteFdn.value = false;
			}
			if (true === selectedRouteFdn) {
				selectedRouteUser.value = false;
			}
		};
		return { clicked, selectedRouteUser, selectedRouteFdn, swapValueIcon };
	},
};
</script>
