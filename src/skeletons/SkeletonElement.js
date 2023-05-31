import React from 'react'

const SkeletonElement = () => {
     
  const arry = []
  for(let i = 1; i<= 12;i++) arry.push(i);
   
  return (
    <div className='  max-w-[1200px] mx-auto mb-20'>
        <div className=' lg:grid lg:grid-cols-3 mt-6 sm:block lg:ml-0 sm:ml-14  '>

       {arry.map((arry) => (
          <div>
             <div className='  border  mt-6 pt-5 pl-6 pr-6   rounded-md w-[327px] h-[323px]  lg:w-[327px]  lg:h-[90%] mb-20  sm:w-[850px] sm:h-[890px]'> 
                <div className=' bg-[#E9EEF5] animate-pulse rounded-md w-[100%] h-[165px] border-b-[1px] p-5 lg:h-[250px]  pl-7 pr-7 pt-5 sm:h-[620px]'></div>
                <div className='   flex  justify-between'>
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