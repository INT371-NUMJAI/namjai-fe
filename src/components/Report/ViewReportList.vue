<template>
    <div class="mt-[120px]">
        <div class="mx-[177px] mb-[60px]">
			<h1 class="text-namjaiblack font-semibold text-5xl">ร้องเรียน</h1>
			<div class="mt-4">
				<div class="w-16 border-4 border-t border-namjaired"></div>
			</div>
		</div>
         <table class="text-center mx-auto">
           <thead class="text-white bg-namjaibrown ">
             <tr>
               <th class="py-3 w-[75px]">ลำดับ</th>
               <th>
                  <p class="py-3 w-[300px]">หัวข้อ</p></th>
               <th class="py-3 w-[250px]">อีเมล</th>
               <th class="py-3 w-[200px]">วันที่ร้องเรียน</th>
             </tr>
           </thead>
         </table>
       </div>
 </template>
 
 <style scoped>
 .table {
     border-spacing: 0 15px;
 }
 
 .table tr {
     border-radius: 20px;
 }
 
 tr td:nth-child(n + 4),
 tr th:nth-child(n + 4) {
     border-radius: 0 0.625rem 0.625rem 0;
 }
 
 tr td:nth-child(1),
 tr th:nth-child(1) {
     border-radius: 0.625rem 0 0 0.625rem;
 }
 </style>
 