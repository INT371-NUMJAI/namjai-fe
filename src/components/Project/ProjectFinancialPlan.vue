<template>
    <div>
        <h1 class="text-sm lg:text-base">รายละเอียดแผนการใช้เงิน</h1>
        <div name="table" class="w-full">
        <div class="bg-white overflow-x-auto shadow-md rounded my-6">
          <table class="min-w-max w-full table-auto">
            <thead>
              <tr class="bg-[#D8EFEB] text-gray-600 uppercase text-sm leading-normal">
                <th class="py-3 px-4 text-center md:text-left lg:px-6">ลำดับ</th>
                <th class="py-3 px-6 text-center">รายการ</th>
                <th class="py-3 px-6 text-center">จำนวนเงิน (บาท)</th>
              </tr>
            </thead>
            <tbody class="text-gray-600 text-sm font-light">
              <tr class="border-b border-gray-200 odd:bg-white even:bg-[#dce8e7]">
                <td class="py-4 text-center whitespace-nowrap">
                  <p class="px-4 lg:px-6 w-[70px] font-medium">1</p>
                </td>
                <td class="h py-4 px-6 text-left w-[300px]">
                  <span>ซื้อไก่จำนวน 100 ตัวเพื่อนำไปต้มให้น้อง ๆ</span>
                </td>
                <td class="py-4 px-6 text-center">
                  <span>100,000</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
    </div>
</template>