
import React, { useState, useEffect } from 'react'
import PetlyNavbar from '../components/PetlyNavbar'
import img2 from '../assests/Group 340.png'
// import img3 from '../assests/Rectangle 591.png'
// import img4 from '../assests/Rectangle 599.png'
// import img5 from '../assests/Rectangle 600.png'
// import img6 from '../assests/Rectangle 601.png'
// import img7 from '../assests/Rectangle 594.png'
import PetlyFooter from '../components/PetlyFooter'
import AdoptLuna from './AdoptLuna'
import { useParams } from 'react-router-dom'
import SkeletonPets from '../skeletons/SkeletonPets'



const PetlyNuna = () => {

  const {id} = useParams()
  const [update, setUpdate] = useState({})
  const [toggle, setToggle] = useState()
  const handleToggle = () => setToggle(true)
  const handleToggleclose = () => setToggle(false)
  const [isloading, setIsloading] = useState( true)

  useEffect(() => {
    setIsloading(true)
    fetch(`https://pets-v2.dev-apis.com/pets?id=${id}`)
    .then(res => res.json())
    .then(data => {
      setUpdate(data.pets)
      
        setTimeout(() => {
            setIsloading(false)
        }, 3000);
     
    }, 3000)
    .catch((err) => err.message)
  }, [id])

  console.log(update);
  
  return (
    <div>
      <PetlyNavbar/>
      <div>
        {isloading ? (
          <SkeletonPets/>
        ): (
          <div>
          {update.length > 0 && update.map((product, index) => (
            <div key={product.id}>
            <div className=' flex mt-40  justify-center mx-auto '>
              <div>
                <h3 className=' bg-[#F0F6FF] w-20 h-20  text-center py-5 text-4xl font-inter font-semibold rounded-full'>{product.name[0]}</h3>
              </div>
    
              <div className=' pl-5 pt-2'>
                <h3 className=' text-4xl  font-inter text-[#344062] w-[1px] font-semibold'>{product.name}</h3>
                <p className=' text-[#344062]  text-sm font-inter font-medium'>{product.name} <span className=''>Dog</span></p>
              </div>
    
              <div className=' ml-[560px] mt-7'>
                <img  className=' ' src={img2} alt='' />
              </div>
          </div>
        
          <div className='  flex justify-center mx-auto  mt-7  mb-[98px]  bg-[#F8FAFD] w-[786px] h-[900px]'>
            <div className=' mb-20'>
              <div>
                <h3 className=' pt-5 text-2xl font-inter font-medium text-[#58667E]'>{product.name}<span className=' pl-3'>Pictures</span></h3>
                <div className=' flex justify-center mt-6 mx-auto bg-white w-[696px] h-[277px]'>
                  <img className='w-[673px] object-cover  pt-3 h-[267px]' src={product.images[0]} alt='img' />
                </div>
              </div>
              <div className=' flex gap-5 mt-4'>
                <div>
                  <img  className=' w-40 h-40' src={product.images[0]} alt=''/>
                </div>
    
                <div>
                  <img className=' w-40 h-40' src={product.images[0]} alt=''/>
                </div>
    
                <div>
                  <img  className=' w-40 h-40'src={product.images[0]} alt=''/>
                </div>
    
                <div>
                  <img className=' w-40 h-40' src={product.images[0]} alt=''/>
                </div>
           </div>
    
           <div className='  w-[696px] h-[30%] bg-white mt-6 '>
              <h1 className=' text-2xl text-[#58667E] font-inter font-medium pt-8 pl-7 '>Description</h1>
              <p className=' text-sm text-[#58667E] font-inter w-[500px] font-normal pl-7 '>
               {product.description}
              </p>
              <div className=' flex bg-[#F0F6FF] ml-7 mt-3 w-[147px]  mb-20 justify-center'>
                <svg className=' my-3' width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.56146 2.30617C3.07732 1.83976 3.69088 1.46951 4.36681 1.21674C5.04275 0.963961 5.76772 0.83365 6.5 0.833304C7.97643 0.833304 9.39343 1.36245 10.4385 2.30617C11.4852 3.25245 12.0722 4.5319 12.0714 5.86521C12.0714 8.16763 10.6489 10.2517 9.16686 11.7904C8.54233 12.4357 7.86524 13.0385 7.14118 13.5937C6.87839 13.7954 6.65832 13.9533 6.5 14.0628C6.34214 13.9533 6.12161 13.7954 5.85882 13.5937C5.13476 13.0385 4.45767 12.4357 3.83314 11.7904C2.35114 10.2517 0.928572 8.16763 0.928572 5.86521C0.928572 4.52984 1.51636 3.24989 2.56146 2.30617ZM6.23257 14.9232L6.5 14.5828L6.76743 14.9232C6.68911 14.9726 6.59572 14.9991 6.5 14.9991C6.40428 14.9991 6.31089 14.9726 6.23257 14.9232ZM6.23257 14.9232L6.5 14.5828L6.76743 14.9232L6.76929 14.9224L6.77393 14.9195L6.78786 14.9099L6.84264 14.8745C6.88907 14.8436 6.95686 14.7987 7.04229 14.7395C7.21314 14.622 7.4555 14.4491 7.74475 14.227C8.50405 13.6446 9.21404 13.0123 9.86886 12.3354C11.4047 10.7413 13 8.46595 13 5.8648C13 4.31068 12.3156 2.81907 11.0974 1.71911C10.4952 1.17471 9.779 0.742551 8.99 0.447516C8.20099 0.152481 7.35476 0.00039096 6.5 0C5.64527 0.000336382 4.79906 0.152361 4.01006 0.447323C3.22106 0.742286 2.50484 1.17436 1.90264 1.71869C0.683161 2.82117 -0.000818544 4.3118 7.35158e-07 5.86521C7.35158e-07 8.46595 1.59529 10.7413 3.13114 12.3354C3.78596 13.0123 4.49595 13.6446 5.25525 14.227C5.54496 14.4491 5.78686 14.622 5.95772 14.7395C6.04152 14.7974 6.12618 14.8544 6.21168 14.9103L6.22654 14.9195L6.23071 14.9224L6.23257 14.9232ZM4.64286 5.83313C4.64286 5.39112 4.83852 4.96721 5.1868 4.65466C5.53508 4.34211 6.00746 4.16652 6.5 4.16652C6.99255 4.16652 7.46492 4.34211 7.8132 4.65466C8.16148 4.96721 8.35714 5.39112 8.35714 5.83313C8.35714 6.27514 8.16148 6.69905 7.8132 7.0116C7.46492 7.32415 6.99255 7.49974 6.5 7.49974C6.00746 7.49974 5.53508 7.32415 5.1868 7.0116C4.83852 6.69905 4.64286 6.27514 4.64286 5.83313ZM6.5 3.33322C5.76118 3.33322 5.05263 3.5966 4.5302 4.06542C4.00778 4.53425 3.71429 5.17011 3.71429 5.83313C3.71429 6.49615 4.00778 7.13201 4.5302 7.60084C5.05263 8.06966 5.76118 8.33304 6.5 8.33304C7.23882 8.33304 7.94738 8.06966 8.4698 7.60084C8.99222 7.13201 9.28571 6.49615 9.28571 5.83313C9.28571 5.17011 8.99222 4.53425 8.4698 4.06542C7.94738 3.5966 7.23882 3.33322 6.5 3.33322Z" fill="#0D75FF"/>
                </svg>
                <h3 className=' py-[10px] pl-2 text-sm font-inter font-normal  text-[#0D75FF]'>Charlotte, NC</h3>
              </div>
           </div>
    
            <div className=' '>
              <button className='bg-[#0D75FF] mt-9  rounded-full text-white text-sm font-inter font-normal  w-[155px] h-12' onClick={handleToggle}>Adopt Luna</button>
            </div>
         </div>
       </div>
            </div>
          ))}
        </div>
           

        )}
    
     
   
   </div>
   <PetlyFooter/> 
    <AdoptLuna visible={toggle} onclose={handleToggleclose} />
   </div>
  )
}

export default PetlyNuna;