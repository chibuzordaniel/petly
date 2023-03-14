import React from 'react'

const SkeletonElement = () => {
     
  const arry = []
  for(let i = 1; i<= 10;i++) arry.push(i);
   
  return (
    <div className='  max-w-[1200px] mx-auto mb-20'>
        <div className=' grid grid-cols-3'>

       {arry.map((arry) => (
          <div>
             <div className='  mt-6 pt-5 pl-6 pr-6 border rounded-md w-[327px] h-[323px]'>
                <div className=' bg-[#E9EEF5] animate-pulse rounded-md w-[100%] h-[165px]'></div>
                <div className=' flex  justify-between'>
                    <div>
                    <div className='bg-[#F0F6FF] animate-pulse mt-6 rounded-full w-[105px] h-[16px]'></div>
                    <div className='mt-2 bg-[#F0F6FF] animate-pulse w-[74px] h-[6px] rounded-full'></div>
                    </div>
                    <div className=' bg-[#F0F6FF] animate-pulse mt-4 w-[30px] h-[30px] rounded-full'></div>
            </div>
            <div className=' flex justify-between mt-4'>
                    <div className=' bg-[#F0F6FF] animate-pulse w-[121px] h-[39px]'></div>
                    <div className=' bg-[#F0F6FF] animate-pulse mt-2  w-[25px] h-[25px] rounded-full'></div>
                    <div className='bg-[#F0F6FF] animate-pulse mt-3 rounded-full w-[68px] h-[16px]'></div>
            </div>
            </div>
         </div>
        ))}
        </div>
    </div>
  )
}

export default SkeletonElement;