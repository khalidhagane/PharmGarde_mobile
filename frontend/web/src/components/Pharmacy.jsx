import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import api from "../helpers/api"

function Pharmacy() {
    const [pharmacy, setPharmacy] = useState([])
    const [loading, setLoading] = useState(true)

    const getPharmacies = async () => {
        const response = await api.get("/pharmacy")
        setPharmacy(response.data)
        setLoading(false)
    }

    useEffect(() => {
        getPharmacies()
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <>
            <Link to="/Pharmacy/create">
                <button className="bg-[#00337C] hover:bg-[#0081C9] text-white font-bold py-2 px-4 rounded">
                    Add Pharmacy
                </button>
            </Link>
            <div class="overflow-x-auto border rounded  border-[#0081C9]">
                <table class="min-w-full divide-y-2 text-sm rounded border-[#0081C9]">
                    <thead>
                        <tr>
                            <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 ">
                                Name
                            </th>
                            <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 ">
                                Address
                            </th>
                            <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 ">
                                Phone Number
                            </th>
                            <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 ">
                                Start Time
                            </th>
                            <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 ">
                                End Time
                            </th>
                            <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 "></th>
                        </tr>
                    </thead>

                    <tbody class="divide-y  divide-gray-700">
                        {pharmacy.map((pharmacy) => (
                            <tr class="[&>*]:whitespace-nowrap [&>*]:px-4 [&>*]:py-2">
                                <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 ">
                                    {pharmacy.name}
                                </td>
                                <td class="whitespace-nowrap px-4 py-2 text-gray-700 ">
                                    {pharmacy.address}
                                </td>
                                <td class="whitespace-nowrap px-4 py-2 text-gray-700 ">
                                    {pharmacy.phoneNumber}
                                </td>
                                <td class="whitespace-nowrap px-4 py-2 text-gray-700 ">
                                    {pharmacy.startTime}
                                </td>
                                <td class="whitespace-nowrap px-4 py-2 text-gray-700 ">
                                    {pharmacy.endTime}
                                </td>
                                <td class="whitespace-nowrap px-4 py-2 text-gray-700 ">
                                    <Link
                                        to={{
                                            pathname: `/Pharmacy/${pharmacy._id}`,
                                        }}
                                        className="bg-[#00337C] px-4 py-2 rounded text-white"
                                    >
                                        Read more ..
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Pharmacy
