import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'

const MyAppointments = () => {

  const { doctors, currencySymbol } = useContext(AppContext)
  return (
    <div>
       <p>My Appointement</p>
       <div>
{/* ---------- Doctor Details ---------- */}
        {
          doctors.slice(0,3).map((item, index) => (
            <div className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b" key={index}>
                 <div>
                    <img className='w-32 bg-indigo-50' src={item.image} alt="" />
                  </div>

                  <div className='flex-1 text-sm text-zinc-600'>
                    <p className='text-neutral-800 font-semibold'>{item.name}</p>
                    <p>{item.speciality}</p>
                    <p className='text-zinc-700 font-medium mt-1'>Address:</p>
                    <p className='text-xs'>{item.address.line1}</p>
                    <p className='text-xs'>{item.address.line2}</p>
                    <p className='text-sm mt-1'><span className='text-sm text-neutral-700 font-medium'>Date & Time:</span>   {item.slotTime}</p>
                  </div>

                  <div></div>

                  <div className='flex flex-col gap-2 justify-end'>
                      <button className='block w-full text-sm text-stone-500 sm:min-w-48 py-2 border rounded hover:bg-[#5f6fff] hover:text-white active:bg-[#5f6fff] active:text-white transition-all duration-300'>Pay Online</button>
                      <button className='block w-full text-sm text-stone-500 sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white active:bg-red-600 active:text-white transition-all duration-300'>Cancel Appointment</button>
                      <button className='block w-full sm:min-w-48 py-2 border border-red-500 rounded text-red-500 active:bg-red-500 active:text-white'>Appointment Cancelled</button>
                  </div>

                 

                
            </div>
          ))
        }
       </div>

       
       
    </div>
  )
}

export default MyAppointments
