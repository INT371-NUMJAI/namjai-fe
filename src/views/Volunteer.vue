<template>
    <div>
        <volunteer-activity-block />
        <div class="flex justify-center py-[60px]">
             <button class="bg-transparent hover:bg-namjaigreen text-namjaigreen font-medium hover:text-white py-2 px-10 border-2 border-namjaigreen hover:border-transparent rounded">เพิ่มเติม</button>
        </div>
    </div>
</template>

<script>
import VolunteerActivityBlock from '../components/VolunteerActivityBlock.vue'

export default {
    components:{
        "volunteer-activity-block": VolunteerActivityBlock,
    },
}
</script>
