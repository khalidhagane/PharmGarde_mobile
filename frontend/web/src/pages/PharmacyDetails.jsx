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
                
<article className="flex content my-5 rounded-lg bg-white transition hover:shadow-xl">
  <div className="flex flex-1 flex-col justify-between">
    <img src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" alt="" />
    {comments.map((comment,i) => 
    <div className="border-l border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">  
      <p className="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3" key={i}>
        {comment.comment}
      </p>
    </div>
    )}
  </div>
</article>
</div>
            </div>
        </>
    )
}

export default PharmacyDetails
