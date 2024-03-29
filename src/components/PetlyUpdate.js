import React, { useEffect, useState } from 'react'
// import img1 from '../assests/Rectangle 610.png'
import img2 from '../assests/Group 340.png'
import img3 from '../assests/Group 326.png'
import img4 from '../assests/Group 327.png'
import img5 from '../assests/Group 328.png'
import img6 from '../assests/Group 329.png'
import  SkeletonElement from '../skeletons/SkeletonElement'
import { UseDarkMode } from '../hooks/UseDarkMode'
import { Link } from 'react-router-dom'


const PetlyUpdate = () => {
    UseDarkMode()
    
    const [update, setUpdate] = useState([])
    const [isloading, setIsloading] = useState( true)

    // useEffect(() => {
    //     setIsloading(true)
    //     setTimeout( async () => {
    //         const res = await fetch('https://dummyjson.com/products');
    //         const data = await res.json();
    //         setUpdate(data)
    //         setIsloading(false)
    //     }, 5000)
    // },[])
   
    useEffect(() => {
        setIsloading(true)
        fetch('https://pets-v2.dev-apis.com/pets')
        .then(res => res.json())
        .then(data => {
            setUpdate(data.pets)
            setTimeout(() => {
                setIsloading(false)
            }, 3000);
        })
        .catch((err) => err.message)
    }, [])

    console.log(update);


  return (
  <>
    <div className='  bg-white w-[100%] h-[100%]  pb-[227px] dark:bg-[#151D3B] '>
        <div className=' max-w-[1200px] mx-auto'>
            <div className=' pt-[70px]'>
               <h1 className=' lg:pl-0 font-inter font-medium text-[#344062] lg:text-2xl sm:pl-14  sm:text-4xl'>Search Results</h1>
            </div>
            {isloading ? (
                 <SkeletonElement/>
            ) : (
           <div className=' lg:grid lg:grid-cols-3 mt-6 sm:block lg:ml-0 sm:ml-14  '>
              {update.length > 0 && update.map((product, index) => (
                    <div key={product.id}>
                    <div className='border lg:w-[327px]  lg:h-[90%] mb-20  sm:w-[850px] sm:h-[890px]'>
                        <div  className=' '>
                            <img className=' object-cover border-b-[1px] p-5 lg:h-[250px] w-[100%] pl-7 pr-7 pt-5 sm:h-[620px]' src={product.images[0]} alt='/'/>
                            <div className=' flex '>
                                <div>
                                    <h1 className='  font-inter font-medium text-2xl   text-[#666879] pt-7 pl-7 w-[300px]'>{product.name}</h1>
                                    <h3 className=' pl-7  font-inter font-normal  text-sm text-[#666879]'>{product.breed}</h3>
                                </div>
                                <div>
                                    <img className=' relative right-6 top-8' src={img2} alt=''/>
                                </div>
                            </div>
                            <div>
                            <div className=' flex  gap-3'>
                                <Link to={`/petly/${product.id}`}> 
                                    <button className=' bg-[#0D75FF] mt-4  w-[121px] h-10 rounded-full text-white text-sm ml-6'>View Details</button>
                                </Link>
                                <div className=' mt-7'>
                                    <svg className=' ml-5' width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.00236 5.17917C7.25351 5.17917 6.53534 5.46386 6.00582 5.97062C5.47631 6.47738 5.17883 7.16469 5.17883 7.88135C5.17883 8.59801 5.47631 9.28533 6.00582 9.79208C6.53534 10.2988 7.25351 10.5835 8.00236 10.5835C8.7512 10.5835 9.46938 10.2988 9.99889 9.79208C10.5284 9.28533 10.8259 8.59801 10.8259 7.88135C10.8259 7.16469 10.5284 6.47738 9.99889 5.97062C9.46938 5.46386 8.7512 5.17917 8.00236 5.17917ZM6.3553 7.88135C6.3553 7.4633 6.52883 7.06237 6.83771 6.76676C7.1466 6.47115 7.56553 6.30508 8.00236 6.30508C8.43918 6.30508 8.85812 6.47115 9.167 6.76676C9.47589 7.06237 9.64941 7.4633 9.64941 7.88135C9.64941 8.2994 9.47589 8.70034 9.167 8.99594C8.85812 9.29155 8.43918 9.45762 8.00236 9.45762C7.56553 9.45762 7.1466 9.29155 6.83771 8.99594C6.52883 8.70034 6.3553 8.2994 6.3553 7.88135Z" fill="#AFB6C1"/>
                                    <path d="M14.1176 12.6102L9.37035 17.4336C9.19436 17.6124 8.98201 17.7549 8.74635 17.8523C8.51069 17.9498 8.2567 18 8 18C7.7433 18 7.48931 17.9498 7.25365 17.8523C7.01799 17.7549 6.80564 17.6124 6.62965 17.4336L1.88236 12.6102H1.90024L1.89224 12.6012L1.88236 12.5899C0.663867 11.2108 -0.00322667 9.46227 1.17354e-05 7.65618C1.17354e-05 3.42772 3.58165 0 8 0C12.4183 0 16 3.42772 16 7.65618C16.0032 9.46227 15.3361 11.2108 14.1176 12.5899L14.1078 12.6012L14.0998 12.6102H14.1176ZM13.2033 11.881C14.2518 10.7023 14.8263 9.20418 14.8235 7.65618C14.8235 4.04967 11.7685 1.12591 8 1.12591C4.23153 1.12591 1.17648 4.04967 1.17648 7.65618C1.17648 9.26849 1.78542 10.7421 2.79671 11.881L2.94165 12.0445L7.48612 16.6612C7.55211 16.7283 7.63175 16.7817 7.72012 16.8182C7.80849 16.8548 7.90374 16.8736 8 16.8736C8.09626 16.8736 8.19151 16.8548 8.27988 16.8182C8.36825 16.7817 8.44789 16.7283 8.51388 16.6612L13.0583 12.0445L13.2033 11.881Z" fill="#AFB6C1"/>
                                    </svg>
                                </div>
                              <h3 className=' pt-7 text-sm  text-[#AFB6C1] font-inter  font-normal'>{`${product.city}, ${product.state}`}</h3>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
               ))}
               
            </div>
            )}
           

            
        {/* sectiom2 */}
        
        <div>
            <div className=' pt-14'>
                <h1 className=' lg:ml-0 font-inter font-medium text-4xl text-[#666879] sm:ml-10 sm:w-[500px]'>Browse Though Pet Types</h1>
                <div className=' lg:ml-0 flex lg:gap-4 mt-10 sm:gap-10 sm:ml-10  group'>
                    <div className=' border bg-[#F0F6FF] cursor-pointer text-[#5F6472]  group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 hover:text-[#0D75FF] w-[118px] lg:h-[108px] rounded-3xl '>
                        <img className=' mx-11 mt-7 ' src={img2} alt='' />
                        <h3 className='    text-center'>Dogs</h3>
                    </div>

                    <div className=' border bg-[#F0F6FF] cursor-pointer text-[#5F6472] group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 hover:text-[#0D75FF]  lg:w-[118px] h-[108px] rounded-3xl '>
                        <img className=' mx-11 mt-7 ' src={img3} alt='' />
                        <h3 className=' text-center'>Cat</h3>
                    </div>

                    <div className=' border bg-[#F0F6FF] cursor-pointer text-[#5F6472]  group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 hover:text-[#0D75FF]  w-[118px] h-[108px] rounded-3xl'>
                        <img className=' mx-11 mt-7 ' src={img4} alt='' />
                        <h3 className=' text-center'>Bird</h3>
                    </div>

                    <div className=' border bg-[#F0F6FF] cursor-pointer text-[#5F6472] group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 hover:text-[#0D75FF]   w-[118px] h-[108px] rounded-3xl'>
                        <img className=' mx-11 mt-6 ' src={img5} alt='' />
                        <h3 className=' text-center'>Rabbit</h3>
                    </div>

                    <div className=' border bg-[#F0F6FF] cursor-pointer text-[#5F6472] group-hover:blur-sm hover:!blur-none group-hover:scale-[0.95]  hover:!scale-100 duration-500 hover:text-[#0D75FF]  w-[118px] h-[108px] rounded-3xl'>
                        <img className=' mx-11 mt-10 ' src={img6} alt='' />
                        <h3 className=' text-center'>Reptile</h3>
                    </div>
                </div>

                <div className=' flex bg-[#F8FAFD] lg:ml-0   w-[327px] h-[51px] mt-[53px] sm:ml-14'>
                    <svg className=' mt-4 ml-5' width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.00236 5.17917C7.25351 5.17917 6.53534 5.46386 6.00582 5.97062C5.47631 6.47738 5.17883 7.16469 5.17883 7.88135C5.17883 8.59801 5.47631 9.28533 6.00582 9.79208C6.53534 10.2988 7.25351 10.5835 8.00236 10.5835C8.7512 10.5835 9.46938 10.2988 9.99889 9.79208C10.5284 9.28533 10.8259 8.59801 10.8259 7.88135C10.8259 7.16469 10.5284 6.47738 9.99889 5.97062C9.46938 5.46386 8.7512 5.17917 8.00236 5.17917ZM6.3553 7.88135C6.3553 7.4633 6.52883 7.06237 6.83771 6.76676C7.1466 6.47115 7.56553 6.30508 8.00236 6.30508C8.43918 6.30508 8.85812 6.47115 9.167 6.76676C9.47589 7.06237 9.64941 7.4633 9.64941 7.88135C9.64941 8.2994 9.47589 8.70034 9.167 8.99594C8.85812 9.29155 8.43918 9.45762 8.00236 9.45762C7.56553 9.45762 7.1466 9.29155 6.83771 8.99594C6.52883 8.70034 6.3553 8.2994 6.3553 7.88135Z" fill="#AFB6C1"/>
                    <path d="M14.1176 12.6102L9.37035 17.4336C9.19436 17.6124 8.98201 17.7549 8.74635 17.8523C8.51069 17.9498 8.2567 18 8 18C7.7433 18 7.48931 17.9498 7.25365 17.8523C7.01799 17.7549 6.80564 17.6124 6.62965 17.4336L1.88236 12.6102H1.90024L1.89224 12.6012L1.88236 12.5899C0.663867 11.2108 -0.00322667 9.46227 1.17354e-05 7.65618C1.17354e-05 3.42772 3.58165 0 8 0C12.4183 0 16 3.42772 16 7.65618C16.0032 9.46227 15.3361 11.2108 14.1176 12.5899L14.1078 12.6012L14.0998 12.6102H14.1176ZM13.2033 11.881C14.2518 10.7023 14.8263 9.20418 14.8235 7.65618C14.8235 4.04967 11.7685 1.12591 8 1.12591C4.23153 1.12591 1.17648 4.04967 1.17648 7.65618C1.17648 9.26849 1.78542 10.7421 2.79671 11.881L2.94165 12.0445L7.48612 16.6612C7.55211 16.7283 7.63175 16.7817 7.72012 16.8182C7.80849 16.8548 7.90374 16.8736 8 16.8736C8.09626 16.8736 8.19151 16.8548 8.27988 16.8182C8.36825 16.7817 8.44789 16.7283 8.51388 16.6612L13.0583 12.0445L13.2033 11.881Z" fill="#AFB6C1"/>
                    </svg>
                   <select className='bg-[#F8FAFD] text-sm  outline-none  w-[100%] mr-3 pl-4 font-inter text-[#AFB6C1]  '>
                    <option>Select a location</option>
                  </select>
                </div>
            </div>

            {isloading ? (
                 <SkeletonElement/>
            ) : (
            <div className=' lg:grid lg:grid-cols-3 mt-6 sm:block lg:ml-0 sm:ml-10 '>
                {update.length > 0 && update.map((product, index) => (
                    <div key={product.id}>
                      <div className='border lg:w-[327px]  lg:h-[90%] mb-20  sm:w-[850px] sm:h-[890px]'>
                        <div  className=' '>
                            <img className=' object-cover border-b-[1px] p-5 lg:h-[250px] w-[100%] pl-7 pr-7 pt-5 sm:h-[620px]' src={product.images[0]} alt='/'/>
                            <div className=' flex '>
                                <div>
                                    <h1 className='  font-inter font-medium text-2xl   text-[#666879] pt-7 pl-7 w-[300px]'>{product.name}</h1>
                                    <h3 className=' pl-7  font-inter font-normal  text-sm text-[#666879]'>{product.breed}</h3>
                                </div>
                                <div>
                                    <img className=' relative right-6 top-8' src={img2} alt=''/>
                                </div>
                            </div>
                            <div>
                            <div className=' flex  gap-3'>
                                <Link to={`/petly/${product.id}`}> 
                                    <button className=' bg-[#0D75FF] mt-4  w-[121px] h-10 rounded-full text-white text-sm ml-6'>View Details</button>
                                </Link>
                                <div className=' mt-7'>
                                    <svg className=' ml-5' width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.00236 5.17917C7.25351 5.17917 6.53534 5.46386 6.00582 5.97062C5.47631 6.47738 5.17883 7.16469 5.17883 7.88135C5.17883 8.59801 5.47631 9.28533 6.00582 9.79208C6.53534 10.2988 7.25351 10.5835 8.00236 10.5835C8.7512 10.5835 9.46938 10.2988 9.99889 9.79208C10.5284 9.28533 10.8259 8.59801 10.8259 7.88135C10.8259 7.16469 10.5284 6.47738 9.99889 5.97062C9.46938 5.46386 8.7512 5.17917 8.00236 5.17917ZM6.3553 7.88135C6.3553 7.4633 6.52883 7.06237 6.83771 6.76676C7.1466 6.47115 7.56553 6.30508 8.00236 6.30508C8.43918 6.30508 8.85812 6.47115 9.167 6.76676C9.47589 7.06237 9.64941 7.4633 9.64941 7.88135C9.64941 8.2994 9.47589 8.70034 9.167 8.99594C8.85812 9.29155 8.43918 9.45762 8.00236 9.45762C7.56553 9.45762 7.1466 9.29155 6.83771 8.99594C6.52883 8.70034 6.3553 8.2994 6.3553 7.88135Z" fill="#AFB6C1"/>
                                    <path d="M14.1176 12.6102L9.37035 17.4336C9.19436 17.6124 8.98201 17.7549 8.74635 17.8523C8.51069 17.9498 8.2567 18 8 18C7.7433 18 7.48931 17.9498 7.25365 17.8523C7.01799 17.7549 6.80564 17.6124 6.62965 17.4336L1.88236 12.6102H1.90024L1.89224 12.6012L1.88236 12.5899C0.663867 11.2108 -0.00322667 9.46227 1.17354e-05 7.65618C1.17354e-05 3.42772 3.58165 0 8 0C12.4183 0 16 3.42772 16 7.65618C16.0032 9.46227 15.3361 11.2108 14.1176 12.5899L14.1078 12.6012L14.0998 12.6102H14.1176ZM13.2033 11.881C14.2518 10.7023 14.8263 9.20418 14.8235 7.65618C14.8235 4.04967 11.7685 1.12591 8 1.12591C4.23153 1.12591 1.17648 4.04967 1.17648 7.65618C1.17648 9.26849 1.78542 10.7421 2.79671 11.881L2.94165 12.0445L7.48612 16.6612C7.55211 16.7283 7.63175 16.7817 7.72012 16.8182C7.80849 16.8548 7.90374 16.8736 8 16.8736C8.09626 16.8736 8.19151 16.8548 8.27988 16.8182C8.36825 16.7817 8.44789 16.7283 8.51388 16.6612L13.0583 12.0445L13.2033 11.881Z" fill="#AFB6C1"/>
                                    </svg>
                                </div>
                                <h3 className=' pt-7 text-sm  text-[#AFB6C1] font-inter  font-normal'>{`${product.city}, ${product.state}`}</h3>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
               ))} 
            </div>
            )}
        </div>
      </div>
    </div>
 </>
  )
}

export default PetlyUpdate;