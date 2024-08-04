import React from 'react';
import { MdArrowOutward } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { LuArrowDownToDot } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import {DeliveryDetailsProps, TimelineEvent,TimelineProps } from "../../types/track.interface"



const DeliveryDetails: React.FC<DeliveryDetailsProps> = ({
  sender,
  consignee,
  origin,
  destination,
  service,
  total,
}) => {
  return (
    <div className="bg-white rounded-lg   border-2 p-6">
      <div className='flex flex-col mb-4 gap-1'>
        <h2 className="text-2xl font-bold ">Delivery Details</h2>
        <p className='text-[#6B7280] text-sm'>Last updated 16/12/2023 11:33 AM</p>

      </div>
      
      <div className="flex flex-col gap-4">
        <div className='flex gap-2 '>
          <div className='w-48 gap-2 flex items-center ' >
            <MdArrowOutward className='text-[#6B7280]'/>
            <p className='text-[#6B7280] text-sm'>Sender</p>
          </div>
          <div className='w-48 '>
            <p className='font-semibold'>{`${sender}` }</p>
          </div>
          
        </div>
        
         <div className='flex gap-2 '>
          <div className='w-48 gap-2 flex ' >
            <FiUser className='text-[#6B7280]'/>
            <p className='text-[#6B7280] text-sm'>Consignee</p>
          </div>
          <div className='w-48 '>
              <p className='font-semibold'>{`${consignee}` }</p>
          </div>
          
        </div>

        
         <div className='flex gap-2 '>
          <div className='w-48 gap-2 flex i' >
            <LuArrowDownToDot className='text-[#6B7280]'/>
            <p className='text-[#6B7280] text-sm'>Origin Address</p>
          </div>
          <div className='w-44 '>
            <p className='font-semibold'>{ `${origin}`}</p>
          </div>
          
        </div>

         <div className='flex gap-2 '>
          <div className='w-48 gap-2 flex ' >
            <CiLocationOn className='text-[#6B7280]'/>
            <p className='text-[#6B7280] text-sm'>Destination Address</p>
          </div>
          <div className='w-36 '>
            <p className='font-semibold'>{`${destination}` }</p>
          </div>
          
        </div>

        <div className='flex gap-2 '>
          <div className='w-48 gap-2 flex i' >
            <CiDeliveryTruck className='text-[#6B7280]'/>
            <p className='text-[#6B7280] text-sm'>Shipping Service</p>
          </div>
          <div className='w-36 '>
               <p className='font-semibold'>{`${service}` }</p>
          </div>
          
        </div>

                <div className='flex gap-2 '>
          <div className='w-48 gap-2 flex ' >
            <RiMoneyDollarBoxLine className='text-[#6B7280]'/>
            <p className='text-[#6B7280] text-sm '>Total COD Amount</p>
          </div>
          <div className='w-36 '>
              <p className='font-semibold'>{`${total} EGP`}</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};



const Timeline: React.FC<TimelineProps> = ({ events }) => {
  return (
    <div className="bg-white rounded-lg  p-6">
      <h2 className="text-2xl font-bold mb-4">Timeline</h2>
      <div className="space-y-4">
        {/* {events.map((event, index) => (
          <div key={index} className="flex items-center">
            <div className="w-16 text-right pr-4 text-gray-500">
              {event.time}
            </div>
            <div className="flex-1 border-l-2 border-gray-200 pl-4 py-2">
              <div className="font-medium">{event.description}</div>
              <div className="text-gray-500">{event.actor}</div>
            </div>
          </div>
        ))} */}
      

            <div className="w-full max-w-3xl mx-auto">
          <div className="-my-6">
            {
              events.map((event, index) => (
                <div className="relative pl-8 sm:pl-32 py-6 group">
                        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[#9CA3AF] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                            <div className="sm:absolute left-0 flex flex-col translate-y-0.5   justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0  rounded-full">
                              
                                <p className='text-[#6B7280] text-sm'>12:05pm</p>
                                <p className='text-[#6B7280] text-sm'>Dec 16,2024</p>
                            
                            </div>
                            <div className="text-xl font-bold text-slate-900">Shipment created</div>
                        </div>
                      
                         <div className="flex flex-col">
                            <p className='text-[#6B7280] text-sm'>Shipment Description</p>
                            <div className='flex gap-1 items-center'>
                              <img src="" className='size-3 bg-black rounded-full' />
                              <p className='font-semibold'>peter pan</p>
                            </div>
                        </div>
                    </div>
              ))}
                    
                    
                  
                    
                  
                   
                    
                   
                    

                </div>
        </div>


      </div>
    </div>
  );
};

const TrackDetail: React.FC = () => {
  const deliveryDetails: DeliveryDetailsProps = {
    sender: 'Mohammad Mustafa',
    consignee: 'Destiny Ezate',
    origin: 'Ahmad Hassan, 25 Nile Street, Gizana, Egypt',
    destination: 'Fotora Road, Gizana, 1203 Assiut, Egypt',
    service: 'Express Service',
    total: '489.55',
  };

  const events: TimelineEvent[] = [
    {
      time: '12:55PM',
      description: 'Shipment created',
      actor: 'Abdo Saeed',
    },
    {
      time: '14:03PM',
      description: 'Shipment picked up',
      actor: 'Destiny Ezate',
    },
    {
      time: '16:07PM',
      description: 'Proof of pick-up',
      actor: 'James Collins',
    },
 
  ];

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DeliveryDetails
          sender={deliveryDetails.sender}
          consignee={deliveryDetails.consignee}
          origin={deliveryDetails.origin}
          destination={deliveryDetails.destination}
          service={deliveryDetails.service}
          total={deliveryDetails.total}
        />
        <Timeline events={events} />
      </div>
    </div>
  );
};

export default TrackDetail;