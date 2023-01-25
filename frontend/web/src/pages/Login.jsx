import React from 'react'

function Login() {
  return (
    <div className="bg-[#AEE2FF]">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg bottom">
          <h1 className="text-center text-5xl m-5 font-bold text-back sm:text-3xl text-[#567189] ">
            Welcome Admin
          </h1>
          <p className="mx-auto mt-4 max-w-md text-center text-[#567189]">
            Application de syndicat pour gérer les paiement pour chaque appartement
          </p>
          <form action className="mt-6 mb-7 space-y-4 rounded-lg p-8 shadow-2xl bg-[#FFFF]">
            <p className="text-lg title font-bold text-[#567189]">Sign in to your account</p>
            <div>
              <label htmlFor="email" className="text-sm text-[#567189] font-medium">Email</label>
              <div className="relative mt-1">
                <input type="email"  id="email" className="w-full rounded-lg border-gray-700 p-4 pr-12 text-sm shadow-sm" placeholder="Enter email" />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="text-sm font-medium text-[#567189]">Password</label>
              <div className="relative mt-1">
                <input type="password"  id="password" className="w-full rounded-lg border-gray-700 p-4 pr-12 text-sm shadow-sm" placeholder="Enter password" />
              </div>
            </div>

            <button type="submit" className="block w-full rounded-lg bg-[#93C6E7] px-5 py-3 text-sm font-medium text-white">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login