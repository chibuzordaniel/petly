import React from 'react'

const SkeletonPets = () => {
  return (
    <div>
        <div>
            <div className='  flex mt-40  justify-center gap-[500px] mx-auto '>
                <div className=' flex gap-4'>
                    <div className=' bg-[#F0F6FF]  w-20 h-20 rounded-full'>
                        <div className='  w-12 h-12  bg-[#DBE2F4]  animate-pulse relative top-4 left-4 rounded-full'>
                        </div>
                    </div>
                    <div>
                        <div className=' bg-[#DBE2F4] animate-pulse w-[154px] h-[30px] rounded-full'></div>
                        <div className=' bg-[#DBE2F4] animate-pulse mt-3 rounded-full w-[92px] h-[17px]' ></div>
                    </div>
                </div>

                <div className=' bg-[#DBE2F4] animate-pulse w-12 h-12 rounded-full'>
                    
                </div>
            </div>
            <div className='    mx-auto  mt-7  mb-[98px]   bg-[#F8FAFD] w-[786px] h-[900px]'>
               <div className=' bg-[#DBE2F4] animate-pulse relative top-9 w-[154px] h-[22px]  left-11 rounded-full'></div>
               <div className=' flex justify-center mt-16'>
                  <div className=' bg-[#DBE2F4] animate-pulse rounded-md  w-[696px] h-[223px]'></div>
               </div>
              
                <div className=' flex gap-5 mt-14 justify-center'>
                    <div className=' bg-[#DBE2F4] animate-pulse w-[158px] h-[97px]'></div>
                    <div className=' bg-[#DBE2F4] animate-pulse w-[158px] h-[97px]'></div>
                    <div className=' bg-[#DBE2F4] animate-pulse w-[158px] h-[97px]'></div>
                    <div className=' bg-[#DBE2F4] animate-pulse w-[158px] h-[97px]'></div>
                </div>

                <div className=' bg-white  ml-11 mt-10 w-[696px] h-[204px]'>
                  <div className=' bg-[#DBE2F4]  animate-pulse w-[154px] h-[22px]  relative top-6  left-5 rounded-full'></div>
                  <div className=' bg-[#DBE2F4] animate-pulse w-[610px] h-[10px] ml-5  mt-12 rounded-full'></div>
                  <div className=' bg-[#DBE2F4] animate-pulse w-[578px] h-[10px] ml-5  mt-3 rounded-full'></div>
                  <div className=' bg-[#DBE2F4] animate-pulse w-[578px] h-[10px] ml-5  mt-3 rounded-full'></div>
                  <div className=' bg-[#DBE2F4] animate-pulse w-[133px] h-[39px] ml-5  mt-3  rounded-md'></div>  
                </div>

                <div className=' bg-[#DBE2F4] animate-pulse w-[155px] h-[47px] ml-11 mt-6 rounded-full'></div>
            </div>
          
        </div>
    </div>
  )
}

export default SkeletonPets