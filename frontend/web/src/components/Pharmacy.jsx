import React from 'react'

function Pharmacy() {
  return (
    <>
    <div class="overflow-x-auto border  border-gray-700">
  <table
    class="min-w-full divide-y-2 text-sm divide-gray-700"
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
          Date of Birth
        </th>
        <th
          class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 "
        >
          Role
        </th>
        <th
          class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 "
        >
          Salary
        </th>
      </tr>
    </thead>

    <tbody class="divide-y  divide-gray-700">
      <tr>
        <td
          class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 "
        >
          John Doe
        </td>
        <td
          class="whitespace-nowrap px-4 py-2 text-gray-700 "
        >
          24/05/1995
        </td>
        <td
          class="whitespace-nowrap px-4 py-2 text-gray-700 "
        >
          Web Developer
        </td>
        <td
          class="whitespace-nowrap px-4 py-2 text-gray-700 "
        >
          $120,000
        </td>
      </tr>

      <tr class="[&>*]:whitespace-nowrap [&>*]:px-4 [&>*]:py-2">
        <td
          class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 "
        >
          Jane Doe
        </td>
        <td
          class="whitespace-nowrap px-4 py-2 text-gray-700 "
        >
          04/11/1980
        </td>
        <td
          class="whitespace-nowrap px-4 py-2 text-gray-700 "
        >
          Web Designer
        </td>
        <td
          class="whitespace-nowrap px-4 py-2 text-gray-700 "
        >
          $100,000
        </td>
      </tr>

      <tr class="[&>*]:whitespace-nowrap [&>*]:px-4 [&>*]:py-2">
        <td
          class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 "
        >
          Gary Barlow
        </td>
        <td
          class="whitespace-nowrap px-4 py-2 text-gray-700 "
        >
          24/05/1995
        </td>
        <td
          class="whitespace-nowrap px-4 py-2 text-gray-700 "
        >
          Singer
        </td>
        <td
          class="whitespace-nowrap px-4 py-2 text-gray-700 "
        >
          $20,000
        </td>
      </tr>
    </tbody>
  </table>
</div>
    </>
  )
}

export default Pharmacy