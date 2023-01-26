import React from 'react'

function Dashboard() {
  return (
    <div>
      <>
            <div className='lg:grid grid-cols-3 gap-4'>
                <div>
                    <div className="relative block rounded-sm border-t-4 border-[#00337C] p-8 pb-24 shadow-xl">
                        <h3 className="text-4xl text-[#00337C] font-bold">0</h3>
                        <p className="mt-4 text-lg font-medium text-[#00337C]">
                            PHARMACY
                           
                        </p>
                    </div>
                </div>
                <div>
                    <div className="relative block rounded-sm border-t-4 border-[#00337C] p-8 pb-24 shadow-xl">
                        <h3 className="text-4xl text-[#00337C] font-bold">0</h3>
                        <p className="mt-4 text-lg font-medium text-[#00337C]">
                            COMMENTS
                        </p>
                    </div>
                </div>
                <div>
                    <div className="relative block rounded-sm border-t-4 border-[#00337C] p-8 pb-24 shadow-xl">
                        <h3 className="text-4xl text-[#00337C] font-bold">0</h3>
                        <p className="mt-4 text-lg font-medium text-[#00337C]">
                            REVIEWS
                        </p>
                        
                    </div>
                </div>
            </div>
        </>
    </div>
  )
}

export default Dashboard