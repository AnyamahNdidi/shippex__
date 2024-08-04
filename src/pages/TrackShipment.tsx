import React from 'react'
// import GenericEmptyState from '../components/GenericEmptyState'
// import img from "../assets/img_6.png"
// import img2 from "../assets/img_4.png"
import TrackDetail from '../components/TrackDetail'


const TrackShipment = () => {
  return (
      <div className="flex  flex-col h-screen bg-[#FFFFFF] ">
          <div className='w-full p-6 flex items-center'>
              <div className='bg-[#F8FAFC] w-full py-2 flex justify-center items-center'>
                  <div className='w-full flex justify-center items-center  '>
                      
                    <form className='flex gap-3 w-full lg:w-1/2'>    
                            <input type="search" id="search" className="pl-2 placeholder-gray-500 border-2 w-48 border-gray-300 focus:border-blue-500 hover:border-blue-500 focus:outline-none rounded-md flex-1" placeholder="Search" required /> 
                            <button type="submit" className="text-white  bg-[#2563EB] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </form>

                  </div>
                  
              </div>
              
          </div>
          <div className='flex-1 flex justify-center items-center'>
              {/* <GenericEmptyState img={img2} title='No results found' subTitle="Enter a valid AWD ID to display details" /> */}
              <TrackDetail/>
              
          </div>
        </div>
  )
}

export default TrackShipment