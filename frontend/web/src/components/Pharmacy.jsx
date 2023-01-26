import React from 'react'

function Pharmacy() {
  return (
    <>
    <div class="overflow-x-auto border rounded  border-[#0081C9]">
  <table
    class="min-w-full divide-y-2 text-sm rounded border-[#0081C9]"
  >
    <thead>
      <tr>
        <th
          class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 "
        >
          Name
        </th>
        <th
          class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 "
        >
          Address
        </th>
        <th
          class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 "
        >
          Phone Number
        </th>
        <th
          class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 "
        >
          Start Time
        </th>
        <th
          class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 "
        >
          End Time
        </th>
        <th
          class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 "
        >
          
        </th>
      </tr>
    </thead>

    <tbody class="divide-y  divide-gray-700">
      <tr class="[&>*]:whitespace-nowrap [&>*]:px-4 [&>*]:py-2">
        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 ">
          Gary Barlow
        </td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700 ">
          24/05/1995
        </td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700 ">
          Singer
        </td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700 ">
            2020-05-18
        </td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700 ">
            2020-05-18
        </td>
        <td  class="whitespace-nowrap px-4 py-2 text-gray-700 ">
            <button className='bg-[#00337C] px-4 py-2 rounded text-white'>Read more ..</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
    </>
  )
}

export default Pharmacy