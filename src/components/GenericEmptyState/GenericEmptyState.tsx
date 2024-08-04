import React from 'react'
import {genericEmptyStateProps} from "../../types/empty.interface"
 
const GenericEmptyState:React.FC<genericEmptyStateProps> = ({img, title, subTitle}) => {
  return (
      <div className='flex flex-col gap-3'>
          <img src={img} />
          {
              title ? (<h1 className='font-bold text-center'>{ title}</h1>) : null
          }
          <p className='text-[#6B7280] text-sm'>{subTitle }</p>

    </div>
  )
}

export default GenericEmptyState