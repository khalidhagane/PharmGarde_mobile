import { useEffect, useState } from "react"
import api from "../helpers/api"
import { useParams } from "react-router-dom"

function PharmacyDetails() {
    const [pharmacy, setPharmacy] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    const getPharmacy = async () => {
        const response = await api.get(`/pharmacy/${id}`)
        setPharmacy(response.data)
        console.log(response.data)
        setLoading(false)
    }

    useEffect(() => {
        getPharmacy()
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <>
            <div className="flex justify-between">
                <div className="flex justify-center">
                    <div className="rounded-lg shadow-lg bg-white max-w-sm">
                        <a
                            href="#!"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                        >
                            <img
                                className="rounded-t-lg"
                                src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
                                alt=""
                            />
                        </a>
                        <div className="p-6 text-center">
                            <h5 className="text-gray-900 text-xl font-medium mb-2">
                                {pharmacy.pharmacy.name}
                            </h5>
                            <p className="flex justify-center">
                                <span className="text-gray-600 text-sm">
                                    address:
                                </span>
                                <span className="text-gray-900 text-sm">
                                    {pharmacy.pharmacy.address}
                                </span>
                            </p>
                            <p className="flex justify-center">
                                <span className="text-gray-600 text-sm">
                                    phone:
                                </span>
                                <span className="text-gray-900 text-sm">
                                    {pharmacy.pharmacy.phoneNumber}
                                </span>
                            </p>
                            <p className="flex justify-center">
                                <span className="text-gray-600 text-sm">
                                    start time:
                                </span>
                                <span className="text-gray-900 text-sm">
                                    {pharmacy.pharmacy.startTime}
                                </span>
                            </p>
                            <p className="flex justify-center">
                                <span className="text-gray-600 text-sm">
                                    end time:
                                </span>
                                <span className="text-gray-900 text-sm">
                                    {pharmacy.pharmacy.endTime}
                                </span>
                            </p>
                            <div className="flex justify-between">
                                <button
                                    type="button"
                                    className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                >
                                    Update
                                </button>
                                <button
                                    type="button"
                                    className=" inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">test</div>
            </div>
        </>
    )
}

export default PharmacyDetails
