<template>
  <div>
    <footer class="px-[30px] py-10 bg-namjaigreen relative bottom-0">
      <div class="md:grid md:grid-cols-4 md:gap-5">
        <div class="pb-10">
          <router-link to="/">
            <svg name="logo" class="w-32" viewBox="0 0 329 59" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50.75 7V56H41.44L17.01 26.25V56H5.81V7H15.19L39.55 36.75V7H50.75ZM103.713 45.5H80.9632L76.6232 56H65.0032L86.8432 7H98.0432L119.953 56H108.053L103.713 45.5ZM100.143 36.89L92.3732 18.13L84.6032 36.89H100.143Z" fill="white" />
              <path d="M212.84 56.84C209.527 56.84 206.47 56.2333 203.67 55.02C200.917 53.76 198.653 51.9867 196.88 49.7L203.18 42.14C205.84 45.7333 208.873 47.53 212.28 47.53C216.9 47.53 219.21 44.8233 219.21 39.41V16.1H201.99V7H230.48V38.78C230.48 44.8 228.987 49.3267 226 52.36C223.013 55.3467 218.627 56.84 212.84 56.84ZM281.326 45.5H258.576L254.236 56H242.616L264.456 7H275.656L297.566 56H285.666L281.326 45.5ZM277.756 36.89L269.986 18.13L262.216 36.89H277.756ZM311.049 7H322.389V56H311.049V7Z" fill="white" />
              <path d="M147.083 56.4828C140.083 46.3161 127.583 23.9828 133.583 15.9828C135.082 12.4828 139.882 6.88281 147.083 12.4828C154.283 18.0828 158.083 26.4828 159.083 29.9828C161.249 23.8161 166.283 10.7828 169.083 7.98281C172.583 4.48281 177.583 0.482811 183.583 9.48281C189.583 18.4828 183.083 45.4828 169.083 56.4828" stroke="#D45343" stroke-width="6" />
            </svg>
          </router-link>
        </div>
        <div class="grid grid-cols-3 gap-6 md:col-span-3">
          <div>
            <h2 class="mb-6 text-sm uppercase text-namjaibeige cursor-default">หน้าต่างเว็บไซต์</h2>
            <ul class="text-[#d0ccc1] space-y-4">
              <router-link to="/main">
                <li class="mb-4 cursor-pointer hover:underline">หน้าหลัก</li>
              </router-link>
              <router-link to="/foundations">
                <li class="mb-4 cursor-pointer hover:underline">มูลนิธิ</li>
              </router-link>
              <router-link to="/projects">
                <li class="mb-4 cursor-pointer hover:underline">โครงการ</li>
              </router-link>
              <router-link to="/articles">
                <li class="cursor-pointer hover:underline">ข่าวสาร</li>
              </router-link>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm uppercase text-namjaibeige cursor-default">ติดต่อเรา</h2>
            <ul class="text-[#d0ccc1] space-y-4">
              <li class="mb-4 cursor-pointer hover:underline">เกี่ยวกับเรา</li>
              <router-link to="/report">
                <li class="cursor-pointer hover:underline">ร้องเรียน</li>
              </router-link>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm uppercase text-namjaibeige cursor-default">Credits</h2>
            <ul class="text-[#d0ccc1] space-y-4">
              <li class="cursor-pointer hover:underline"><a href="https://www.drawkit.com/">DrawKit</a></li>
              <li class="cursor-pointer hover:underline"><a href="https://icons8.com/">Icon8</a></li>
              <li class="cursor-pointer hover:underline"><a href="https://www.openpeeps.com/">Open Peeps</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
