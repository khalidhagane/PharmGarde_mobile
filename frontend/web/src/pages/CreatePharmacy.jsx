import { useState } from "react"
import api from "../helpers/api"

function CreatePharmacy() {
    const [payload, setPayload] = useState({})
    const [image, setImage] = useState(null)
    const [succ, setSucc] = useState()
    const [err, setErr] = useState()

    const handleChange = (e) => {
        setPayload({
            ...payload,
            [e.target.name]: e.target.value,
        })
    }

    const handleImage = (e) => {
        setImage(e.target.files[0])
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const formData = new FormData()

            formData.append("image", image)

            for (let key in payload) {
                formData.append(key, payload[key])
            }

            const response = await api.post("/pharmacy", formData)

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
                        Create Pharmacy
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
                        />
                    </div>

                    <div className="form-group mb-6 text-dark-100">
                        <label htmlFor="">Image</label>
                        <input
                            type="file"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal bg-clip-padding border border-solid border-gray-400 rounded transition ease-in-out m-0 bg-gray-700"
                            placeholder="22.22"
                            name="image"
                            onChange={handleImage}
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

export default CreatePharmacy
