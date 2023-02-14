
import React, {  } from 'react'


const AdoptLuna = ({visible, onclose}) => {

  if (!visible) return null

  return (
    <div className=' bg-filterlight  w-[100%] fixed top-0 h-[1786px] overflow-y-hidden '>
      <div className=' flex justify-center'>
        <div className=' bg-white w-[517px] h-[356px] shadow-2xl absolute top-[375px] rounded-[5px]  '>
          <h1 className='  text-2xl font-inter  font-medium text-center pt-[92px]'>Are you sure you want to <br/> adopt <span className=' text-[#F15827]'>Luna?</span></h1>
          <div className=' flex justify-center gap-5 mt-8'>
            <button className=' text-white text-sm font-inter font-medium w-[164px] h-[46px] bg-[#0D75FF]'>Adopt Luna</button>
            <button className=' text-[#58667E] text-sm font-inter font-medium  w-[164px] h-[46px] bg-[#F3F5FB]' onClick={onclose}>Cancel</button>
          </div>
       </div>
     </div>
    </div>
  )
}

export default AdoptLuna