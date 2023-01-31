import { useEffect, useState } from "react"
import api from "../helpers/api"
import { useParams } from "react-router-dom"
import { Link , useNavigate } from "react-router-dom"
import './stylePharmacyCommentsAndReviews.css'



function PharmacyDetails() {
    const [pharmacy, setPharmacy] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
    const navigate = useNavigate()

    const getPharmacy = async () => {
        const response = await api.get(`/pharmacy/${id}`)
        setPharmacy(response.data)
        setLoading(false)
    }


    const [comments , setComments] = useState([])
    const [loadingComments , setLoadingComments] = useState(true)

    const getComments = async () => {
        const response = await api.get(`/comment/${id}`)
        console.log(response.data);
        setComments(response.data)
        setLoadingComments(false)
    }

   

    useEffect(() => {
        getPharmacy()
        getComments()
    }, [])

    // read image from pharmacy state and display it using blob
    const readImage = () => {
        if (!pharmacy.pharmacy.image) {
            return
        }
        const binaryData = new Uint8Array(pharmacy.pharmacy.image.data.data)
        const blob = new Blob([binaryData], {
            type: pharmacy.pharmacy.image.contentType,
        })
        const url = URL.createObjectURL(blob)
        return url
    }

    const deletePharmacy = async () => {
        try {
            const response = await api.delete(`/pharmacy/${id}`)
            if (response.status === 200) {
                navigate("/Pharmacy")
            }
        } catch (error) {
            console.log(error)
        }
    }

    if (loading) {
        return <div>Loading...</div>
    }
    if (loadingComments) {
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
                                src={readImage()}
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
                                <Link to={`/Pharmacy/edit/${id}`}>
                                    <button
                                        type="button"
                                        className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                    >
                                        Update
                                    </button>
                                </Link>
                                <button
                                    type="button"
                                    className=" inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                                    onClick={deletePharmacy}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                {comments.map((comment,i) =>
<article className="flex content my-5 rounded-lg bg-white transition hover:shadow-xl">
  <div className="flex flex-1 flex-col lg:flex-row center">
    <div className="border-l border-gray-900/10 p-4 sm:border-l-transparent sm:p-6 flex items-center">  
    <img className="image" src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" alt="" />
      <p className="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3" key={i}>
        {comment.comment}
      </p>
    </div>
    <Link to="/test" className="mr-4">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.5 15.5L15.5 8.5M15.5 15.5L8.5 8.5M14.9 2H9.1C8.42 2 7.46 2.4 6.98 2.88L2.88 6.98C2.4 7.46 2 8.42 2 9.1V14.9C2 15.58 2.4 16.54 2.88 17.02L6.98 21.12C7.46 21.6 8.42 22 9.1 22H14.9C15.58 22 16.54 21.6 17.02 21.12L21.12 17.02C21.6 16.54 22 15.58 22 14.9V9.1C22 8.42 21.6 7.46 21.12 6.98L17.02 2.88C16.54 2.4 15.58 2 14.9 2Z" stroke="#FF0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</Link>
  </div>
</article>
    )}
</div>
            </div>
        </>
    )
}

export default PharmacyDetails
