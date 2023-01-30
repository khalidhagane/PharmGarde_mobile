import { useState, useEffect } from "react"
import api from "../helpers/api"
import { useParams } from "react-router-dom"

function UpdatePharmacy() {
    const [payload, setPayload] = useState({})
    const [succ, setSucc] = useState()
    const [err, setErr] = useState()

    const { id } = useParams()

    const getPharmacy = async () => {
        try {
            const response = await api.get(`/pharmacy/${id}`)
            setPayload(response.data.pharmacy)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getPharmacy()
    }, [])

    const handleChange = (e) => {
        if (e.target.name === "image") {
            setPayload({
                ...payload,
                image: e.target.files[0],
            })
        } else {
            setPayload({
                ...payload,
                [e.target.name]: e.target.value,
            })
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const formData = new FormData()

            for (let key in payload) {
                formData.append(key, payload[key])
            }

            const response = await api.put(`/pharmacy/${id}`, formData)

            setSucc(response.data.message)
            console.log(response.data)
        } catch (error) {
            console.log(error)
            setErr(error.response.data.message)
        }
    }

    return (
        <>
            <div className="rounded-lg shadow-lg bg-[#7eaae7] w-full">
                <form
                    onSubmit={handleSubmit}
                    className="w-full p-6"
                    encType="multipart/form-data"
                    method="POST"
                >
                    <h1 className="text-white text-2xl font-medium mb-2 text-center">
                        Update Pharmacy
                    </h1>
                    <p className="text-green-500 text-sm text-center">{succ}</p>
                    <p className="text-red-500 text-sm text-center"> {err} </p>
                    <div className="form-group mb-6 text-dark-100">
                        <label htmlFor="">Pharmacy Name</label>
                        <input
                            type="text"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal bg-clip-padding border border-solid border-gray-400 rounded transition ease-in-out m-0 bg-gray-700"
                            placeholder="ikhan"
                            name="name"
                            onChange={handleChange}
                            value={payload.name}
                        />
                    </div>

                    <div className="form-group mb-6 text-dark-100">
                        <label htmlFor="">Address</label>
                        <input
                            type="text"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal bg-clip-padding border border-solid border-gray-400 rounded transition ease-in-out m-0 bg-gray-700"
                            placeholder="some place"
                            name="address"
                            onChange={handleChange}
                            value={payload.address}
                        />
                    </div>

                    <div className="form-group mb-6 text-dark-100">
                        <label htmlFor="">Phone Number</label>
                        <input
                            type="text"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal bg-clip-padding border border-solid border-gray-400 rounded transition ease-in-out m-0 bg-gray-700"
                            placeholder="+75256725622"
                            name="phoneNumber"
                            onChange={handleChange}
                            value={payload.phoneNumber}
                        />
                    </div>

                    <div className="form-group mb-6 text-dark-100">
                        <label htmlFor="">Start Time</label>
                        <input
                            type="datetime-local"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal bg-clip-padding border border-solid border-gray-400 rounded transition ease-in-out m-0 bg-gray-700"
                            placeholder="10:00"
                            name="startTime"
                            onChange={handleChange}
                            value={payload.startTime}
                        />
                    </div>

                    <div className="form-group mb-6 text-dark-100">
                        <label htmlFor="">End Time</label>
                        <input
                            type="datetime-local"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal bg-clip-padding border border-solid border-gray-400 rounded transition ease-in-out m-0 bg-gray-700"
                            placeholder="22:00"
                            name="endTime"
                            onChange={handleChange}
                            value={payload.endTime}
                        />
                    </div>

                    <div className="form-group mb-6 text-dark-100">
                        <label htmlFor="">Image</label>
                        <input
                            type="file"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal bg-clip-padding border border-solid border-gray-400 rounded transition ease-in-out m-0 bg-gray-700"
                            placeholder="22.22"
                            name="image"
                            onChange={handleChange}
                        />
                    </div>

                    <button
                        type="submit"
                        className="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs rounded shadow-md hover:bg-blue-700 hover:shadow-lg foc:bg-blue-700 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </>
    )
}

export default UpdatePharmacy
