import { Outlet } from 'react-router-dom'
import { Link, } from 'react-router-dom'
import Ryad from '../assets/Images/ryad.jpeg'
import Logout from '../components/Logout'

function Layout() {
    return (
        <div className="antialiased  w-full min-h-screen text-slate-300 relative py-4 bg-[#AEE2FF]">
            <div className="grid grid-cols-12 mx-auto gap-2 sm:gap-4 md:gap-6 lg:gap-10 xl:gap-14 max-w-7xl my-10 px-2">
                <div id="menu" className="bg-[#93C6E7] col-span-3 rounded-lg p-4 ">
                    <Link to='/Dashboard'>
                        <h1 className="font-bold text-lg ml-7 my-5 lg:text-3xl bg-gradient-to-br  via-white/50 to-transparent bg-clip-text text-[#00337C]">Dashboard<span className="text-[#00337C]">.</span></h1>
                    </Link>
                    <hr className="my-2 border-slate-700" />
                    <div id="menu" className="flex flex-col space-y-2 my-5">

                        <div className="flex  rounded-b-3xl  space-y-5 flex-col items-center py-7">
                            <img className="h-28 w-28 rounded-full" src={Ryad} alt="User" />
                            <p> <span className="h1 mb-11 py-4 font-bold text-white">ABDELAZIIIIZ</span></p>
                        </div>


                        <Link to='/Home'>
                            <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center mb-7 ml-3">
                                <svg className='mx-2' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.02 2.84001L3.63 7.04001C2.73 7.74001 2 9.23001 2 10.36V17.77C2 20.09 3.89 21.99 6.21 21.99H17.79C20.11 21.99 22 20.09 22 17.78V10.5C22 9.29001 21.19 7.74001 20.2 7.05001L14.02 2.72001C12.62 1.74001 10.37 1.79001 9.02 2.84001Z" stroke="#00337C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M12 9V18M7.5 13.5H16.5M10.5 18H13.5C15.15 18 16.5 16.65 16.5 15V12C16.5 10.35 15.15 9 13.5 9H10.5C8.85 9 7.5 10.35 7.5 12V15C7.5 16.65 8.85 18 10.5 18Z" stroke="#00337C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <div className='ml-7'>
                                    <p className="font-bold text-base lg:text-lg text-[#00337C]  leading-4 group-hover:text-indigo-400">Home</p>
                                    <p className="text-[#0081C9] text-sm hidden md:block">View Stats</p>
                                </div>
                            </div>
                        </Link>

                        <Link to='/Pharmacy'>
                            <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center mb-7 ml-3">
                                <svg className='mx-2' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#00337C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M17 2.44V12.42C17 14.39 15.59 15.16 13.86 14.12L12.54 13.33C12.24 13.15 11.76 13.15 11.46 13.33L10.14 14.12C8.41 15.15 7 14.39 7 12.42V2.44" stroke="#00337C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#00337C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M17 2.44V12.42C17 14.39 15.59 15.16 13.86 14.12L12.54 13.33C12.24 13.15 11.76 13.15 11.46 13.33L10.14 14.12C8.41 15.15 7 14.39 7 12.42V2.44" stroke="#00337C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <div className='ml-7'>
                                    <p className="font-bold text-base lg:text-lg text-[#00337C]  leading-4 group-hover:text-indigo-400">Pharmacies</p>
                                    <p className="text-[#0081C9] text-sm hidden md:block">Manage Pharmacies</p>
                                </div>
                            </div>
                        </Link>

                        <Link to='/Comments'>
                            <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center mb-7 ml-3">
                                <svg className='mx-2' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.5 10H17M7 15.5H17M7.5 4H16.5C17.12 4 17.67 4.02 18.16 4.09C20.79 4.38 21.5 5.62 21.5 9V15C21.5 18.38 20.79 19.62 18.16 19.91C17.67 19.98 17.12 20 16.5 20H7.5C6.88 20 6.33 19.98 5.84 19.91C3.21 19.62 2.5 18.38 2.5 15V9C2.5 5.62 3.21 4.38 5.84 4.09C6.33 4.02 6.88 4 7.5 4Z" stroke="#00337C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M10.0952 10H10.1042M7.09521 10H7.10422" stroke="#00337C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <div className='ml-7'>
                                    <p className="font-bold text-base lg:text-lg text-[#00337C]  leading-4 group-hover:text-indigo-400">Comments</p>
                                    <p className="text-[#0081C9] text-sm hidden md:block">Manage Comments</p>
                                </div>
                            </div>
                        </Link>

                        <Link to='/Settings'>
                            <div className="relative  flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center mb-16 ml-3 ">
                                <svg className='mx-2' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 9.6C20 5.6 18.4 4 14.4 4H9.6C5.6 4 4 5.6 4 9.6V14.4C4 18.4 5.6 20 9.6 20" stroke="#00337C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M16.35 8C15.8 7.3 14.88 7 13.5 7H10.5C8 7 7 8 7 10.5V13.5C7 14.88 7.3 15.8 7.99 16.35M8.01 4V2M12 4V2M16 4V2M20 8H22M8.01 20V22M2 8H4M2 12H4M2 16H4" stroke="#00337C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M16.7101 18.59C16.9189 18.59 17.1257 18.5489 17.3186 18.469C17.5115 18.3891 17.6868 18.2719 17.8344 18.1243C17.9821 17.9767 18.0992 17.8014 18.1791 17.6085C18.259 17.4156 18.3001 17.2088 18.3001 17C18.3001 16.7912 18.259 16.5844 18.1791 16.3915C18.0992 16.1986 17.9821 16.0233 17.8344 15.8757C17.6868 15.7281 17.5115 15.6109 17.3186 15.531C17.1257 15.4511 16.9189 15.41 16.7101 15.41C16.2884 15.41 15.884 15.5775 15.5858 15.8757C15.2876 16.1739 15.1201 16.5783 15.1201 17C15.1201 17.4217 15.2876 17.8261 15.5858 18.1243C15.884 18.4225 16.2884 18.59 16.7101 18.59Z" stroke="#00337C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M11.4102 17.46V16.53C11.4102 15.98 11.8602 15.53 12.4102 15.53C13.3702 15.53 13.7602 14.85 13.2802 14.02C13.2141 13.9059 13.1712 13.7798 13.154 13.649C13.1368 13.5182 13.1457 13.3853 13.1801 13.258C13.2145 13.1307 13.2737 13.0114 13.3544 12.907C13.4351 12.8027 13.5356 12.7153 13.6502 12.65L14.5602 12.12C14.9802 11.87 15.5202 12.02 15.7702 12.44L15.8302 12.54C16.3102 13.37 17.0902 13.37 17.5702 12.54L17.6302 12.44C17.8802 12.02 18.4202 11.88 18.8402 12.12L19.7502 12.65C20.2302 12.93 20.4002 13.54 20.1202 14.02C19.6402 14.85 20.0302 15.53 20.9902 15.53C21.5402 15.53 21.9902 15.98 21.9902 16.53V17.46C21.9902 18.01 21.5402 18.46 20.9902 18.46C20.0302 18.46 19.6402 19.14 20.1202 19.97C20.1863 20.0841 20.2292 20.2102 20.2464 20.341C20.2636 20.4718 20.2547 20.6047 20.2203 20.732C20.1859 20.8593 20.1267 20.9786 20.046 21.083C19.9653 21.1873 19.8648 21.2747 19.7502 21.34L18.8402 21.87C18.4202 22.12 17.8802 21.97 17.6302 21.55L17.5702 21.45C17.0902 20.62 16.3102 20.62 15.8302 21.45L15.7702 21.55C15.5202 21.97 14.9802 22.11 14.5602 21.87L13.6502 21.34C13.1702 21.06 13.0002 20.45 13.2802 19.97C13.7602 19.14 13.3702 18.46 12.4102 18.46C12.2785 18.4613 12.1479 18.4364 12.0259 18.3866C11.904 18.3368 11.7932 18.2632 11.7001 18.1701C11.607 18.077 11.5334 17.9662 11.4836 17.8443C11.4338 17.7223 11.4089 17.5917 11.4102 17.46Z" stroke="#00337C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <div>
                                    <p className="font-bold text-base lg:text-lg text-[#00337C]  leading-4 group-hover:text-indigo-400">Settings</p>
                                    <p className="text-[#0081C9]  text-sm hidden md:block">Manage Informations</p>
                                </div>
                            </div>
                        </Link>

                        <div className="flex flex-col  mt-11 space-y-2 md:flex-row md:space-y-0 space-x-2 items-center ml-3  ">
                            <svg className='mx-2' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.9 7.56001C9.21 3.96001 11.06 2.49001 15.11 2.49001H15.24C19.71 2.49001 21.5 4.28001 21.5 8.75001V15.27C21.5 19.74 19.71 21.53 15.24 21.53H15.11C11.09 21.53 9.24 20.08 8.91 16.54M15 12H3.62M5.85 8.65001L2.5 12L5.85 15.35" stroke="#00337C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <Logout />
                        </div>

                    </div>
                </div>
                <div id="content" className="bg-[#93C6E7] col-span-9 rounded-lg p-6">
                    <div className='bg-[#93C6E7] py-4 px-4 rounded-lg'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout