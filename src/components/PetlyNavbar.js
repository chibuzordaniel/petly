
import React, { } from 'react'
// import { Usedarkmode } from '../hook/Usedarkmode';
import {UseDarkMode} from '../hooks/UseDarkMode'
import { Link } from 'react-router-dom'


const PetlyNavbar = () => {

    UseDarkMode()
    const [colortheme, setTheme] = UseDarkMode();


  return (
    <>
      <div>
        <div className=' bg-white  lg:w-[100%] lg:h-20  fixed  top-0  z-10 border-[#CCC] border-b-[1px] dark:bg-[#151D3B]   sm:w-[100%]  sm:h-36'>
            <div className='max-w-[1200px] mx-auto'>
               <div className=' flex justify-between'>
                <Link  to='/'>
                   <div className='  lg:ml-0 my-4 flex  sm:ml-12 '>
                        <div className=' bg-[#0D75FF] lg:w-12 lg:h-12 lg:mt-0  flex justify-center rounded-full px-3 py-3  sm:w-20 sm:h-20 sm:mt-3 '>
                            <svg className=' lg:w-5 lg:h-5 sm:w-11 '  width="" height="" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.71073 20H15.3122C16.4961 20 17.4562 19.04 17.4562 17.855V8.3425C19.4689 8.2625 20.6728 6.03 19.5977 4.295L18.9701 3.2825C18.7326 2.89884 18.4009 2.58219 18.0067 2.36256C17.6124 2.14293 17.1686 2.0276 16.7173 2.0275H14.9234V1.2325C14.9234 1.07065 14.8915 0.910376 14.8295 0.760843C14.7676 0.611309 14.6768 0.475439 14.5623 0.360991C14.4479 0.246543 14.312 0.155758 14.1624 0.0938186C14.0129 0.0318797 13.8526 0 13.6907 0C13.2893 0.000164119 12.8919 0.0793789 12.5211 0.233122C12.1503 0.386864 11.8134 0.612124 11.5297 0.896039C11.246 1.17995 11.021 1.51696 10.8675 1.88783C10.7141 2.25869 10.6352 2.65615 10.6353 3.0575V7.3775C9.03764 7.535 7.83124 8.29 6.94488 9.355C5.96726 10.53 5.39094 12.0613 5.0484 13.5325C4.70335 15.01 4.58209 16.48 4.54459 17.5725C4.52958 18.04 4.52958 18.4425 4.53458 18.75H3.71073C3.23043 18.75 2.76059 18.6097 2.35899 18.3463C1.95739 18.0829 1.64154 17.7079 1.45027 17.2674C1.25901 16.8268 1.20067 16.34 1.28244 15.8668C1.36421 15.3936 1.58251 14.9546 1.91051 14.6037L3.06065 13.37C3.85333 12.5199 4.28511 11.3954 4.26506 10.2333C4.24501 9.0712 3.77468 7.96225 2.95314 7.14L1.82425 6.01125C1.76659 5.95156 1.69761 5.90394 1.62135 5.87119C1.54509 5.83843 1.46307 5.82119 1.38007 5.82047C1.29707 5.81975 1.21476 5.83556 1.13794 5.86699C1.06112 5.89841 0.991331 5.94482 0.93264 6.0035C0.87395 6.06219 0.827536 6.13197 0.796107 6.20878C0.764677 6.28559 0.748862 6.36789 0.749583 6.45088C0.750304 6.53386 0.767548 6.61588 0.800308 6.69213C0.833067 6.76838 0.880687 6.83735 0.940388 6.895L2.06928 8.02375C2.66237 8.61657 3.00196 9.41657 3.01642 10.255C3.03088 11.0934 2.71908 11.9046 2.14679 12.5175L0.996645 13.7513C0.503732 14.2805 0.175988 14.9421 0.0535969 15.6549C-0.0687946 16.3677 0.0194843 17.1007 0.307611 17.7641C0.595738 18.4275 1.07119 18.9924 1.67568 19.3895C2.28017 19.7867 2.98742 19.9988 3.71073 20V20ZM13.6745 1.25V2.6525C13.6745 2.81826 13.7403 2.97723 13.8575 3.09444C13.9748 3.21165 14.1338 3.2775 14.2995 3.2775H16.7173C17.2024 3.2775 17.6525 3.5275 17.9075 3.94L18.5363 4.95375C18.6679 5.1661 18.7404 5.40975 18.7463 5.6595C18.7522 5.90925 18.6912 6.15604 18.5698 6.37434C18.4483 6.59265 18.2707 6.77456 18.0554 6.90125C17.84 7.02795 17.5948 7.09484 17.3449 7.095H16.8324C16.6666 7.095 16.5076 7.16085 16.3904 7.27806C16.2731 7.39527 16.2073 7.55424 16.2073 7.72V17.855C16.2073 18.3488 15.8072 18.75 15.3122 18.75H14.4171V17.855C14.4174 16.8832 14.0317 15.951 13.3448 15.2635C12.6579 14.576 11.726 14.1894 10.7541 14.1887H9.48645C9.32067 14.1887 9.16168 14.2546 9.04445 14.3718C8.92723 14.489 8.86137 14.648 8.86137 14.8137C8.86137 14.9795 8.92723 15.1385 9.04445 15.2557C9.16168 15.3729 9.32067 15.4387 9.48645 15.4387H10.7529C12.0868 15.4387 13.1682 16.52 13.1682 17.855V18.75H5.78474C5.77849 18.4575 5.77849 18.07 5.79349 17.6137C5.82849 16.5687 5.94351 15.1888 6.2648 13.8163C6.58609 12.4363 7.1024 11.1175 7.905 10.1538C8.68885 9.215 9.75273 8.5975 11.2604 8.5975C11.4262 8.5975 11.5852 8.53165 11.7024 8.41444C11.8196 8.29723 11.8855 8.13826 11.8855 7.9725V3.0575C11.8855 2.065 12.6843 1.25875 13.6732 1.25H13.6745Z" fill="white"/>
                            </svg>
                        </div>
                        <h2 className=' lg:text-2xl lg:pt-1.5 pl-1 font-inter text-[#344062]  sm:text-4xl sm:pt-8 '>Petly</h2>
                    </div>
                  </Link>
                    
                    <div className=' flex gap-9 border w-28 h-11    lg:my-5 rounded-lg lg:mr-0 md:mr-12 sm:mr-8 sm:my-12 sm: ' onClick={() => setTheme(colortheme)}>
                        <div className=' bg-[#F8FAFD] w-10 h-9 p-[11px] my-[3px] ml-1 rounded-lg'>
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.62988 14.4292L6.3866 12.6292C5.77278 12.4959 5.18807 12.2529 4.66063 11.9117L4.62988 14.4292Z" fill="#0D75FF"/>
                            <path d="M10.3699 0.571045L8.61365 2.3708C9.22749 2.5042 9.81219 2.74735 10.3396 3.08855L10.3699 0.571045Z" fill="#0D75FF"/>
                            <path d="M2.37102 8.61353L0.570801 10.3698L3.08826 10.3393C2.74717 9.81193 2.50418 9.22729 2.37102 8.61353Z" fill="#0D75FF"/>
                            <path d="M12.629 6.38676L14.4292 4.63L11.9117 4.66075C12.2528 5.18819 12.4958 5.77292 12.629 6.38676Z" fill="#0D75FF"/>
                            <path d="M3.0885 4.66051L0.571045 4.62976L2.37126 6.38651C2.50416 5.77259 2.74716 5.18781 3.0885 4.66051Z" fill="#0D75FF"/>
                            <path d="M11.9115 10.3395L14.429 10.37L12.6287 8.61353C12.4958 9.22744 12.2528 9.8122 11.9115 10.3395Z" fill="#0D75FF"/>
                            <path d="M6.3866 2.3708L4.62988 0.570801L4.66063 3.0883C5.18807 2.74719 5.77278 2.50412 6.3866 2.3708Z" fill="#0D75FF"/>
                            <path d="M8.61316 12.6292L10.3699 14.429L10.3391 11.9117C9.81163 12.2528 9.22695 12.4958 8.61316 12.6292Z" fill="#0D75FF"/>
                            <path d="M3.18803 10.4905L2.19629 12.8032L4.50928 11.812C3.99374 11.4536 3.54631 11.0061 3.18803 10.4905Z" fill="#0D75FF"/>
                            <path d="M11.8119 4.50978L12.8031 2.19678L10.4906 3.18803C11.0061 3.54649 11.4536 3.9941 11.8119 4.50978Z" fill="#0D75FF"/>
                            <path d="M2.25001 7.50007C2.25001 7.18057 2.28326 6.86907 2.33801 6.56482L0 7.49982L2.33801 8.43482C2.28087 8.12648 2.25142 7.81365 2.25001 7.50007Z" fill="#0D75FF"/>
                            <path d="M15 7.50007L12.662 6.56482C12.7167 6.86907 12.75 7.18057 12.75 7.50007C12.75 7.81982 12.7167 8.13132 12.662 8.43532L15 7.50007Z" fill="#0D75FF"/>
                            <path d="M4.50977 3.18778L2.19678 2.19653L3.18802 4.50954C3.54661 3.99395 3.99418 3.54637 4.50977 3.18778Z" fill="#0D75FF"/>
                            <path d="M10.4901 11.812L12.8031 12.8032L11.8119 10.4905C11.4533 11.006 11.0057 11.4536 10.4901 11.812Z" fill="#0D75FF"/>
                            <path d="M8.43481 2.338L7.49982 0L6.56482 2.338C6.86857 2.28325 7.18007 2.25 7.49982 2.25C7.81957 2.25 8.13107 2.28325 8.43481 2.338Z" fill="#0D75FF"/>
                            <path d="M6.56494 12.662L7.49994 15L8.43494 12.662C8.13119 12.7167 7.81969 12.75 7.49994 12.75C7.18019 12.75 6.86869 12.7167 6.56494 12.662Z" fill="#0D75FF"/>
                            <path d="M7.49997 12.25C10.1233 12.25 12.2499 10.1234 12.2499 7.5C12.2499 4.87665 10.1233 2.75 7.49997 2.75C4.87663 2.75 2.75 4.87665 2.75 7.5C2.75 10.1234 4.87663 12.25 7.49997 12.25Z" fill="#0D75FF"/>
                            </svg>
                        </div>
                        
                        <div  className=' my-3' onClick={() => setTheme(colortheme)} >
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.62553 0.26C5.71705 0.371204 5.77312 0.507297 5.78649 0.650694C5.79986 0.794091 5.76992 0.938203 5.70053 1.06441C5.15848 2.05958 4.87539 3.17508 4.87733 4.30829C4.87733 8.07814 7.95074 11.1308 11.7386 11.1308C12.2327 11.1308 12.7137 11.0792 13.1759 10.9808C13.3176 10.9501 13.4652 10.9618 13.6003 11.0145C13.7353 11.0672 13.8519 11.1585 13.9354 11.277C14.0235 11.4003 14.0684 11.5492 14.0632 11.7006C14.0579 11.852 14.0028 11.9974 13.9063 12.1142C13.1709 13.0175 12.2433 13.7453 11.1909 14.2445C10.1385 14.7437 8.98801 15.0018 7.82323 15C3.50095 15 0 11.518 0 7.22779C0 3.99891 1.98206 1.22942 4.8042 0.0556166C4.94478 -0.00379348 5.10084 -0.0159871 5.24894 0.0208674C5.39705 0.0577219 5.52919 0.141635 5.62553 0.26ZM4.5548 1.22848C3.46964 1.81053 2.56246 2.6757 1.92968 3.73205C1.2969 4.78839 0.962153 5.99644 0.961027 7.22779C0.961027 10.9967 4.03538 14.0493 7.82323 14.0493C8.7303 14.0509 9.62866 13.8726 10.4663 13.5246C11.304 13.1767 12.0644 12.6661 12.7034 12.0224C12.3874 12.0617 12.0658 12.0814 11.7386 12.0814C7.41632 12.0814 3.9163 8.59941 3.9163 4.30923C3.9163 3.21512 4.1432 2.17352 4.5548 1.22848Z" fill="#AEB2C5"/>
                            <path d="M10.1204 2.95082C10.1338 2.91022 10.1597 2.87489 10.1944 2.84985C10.229 2.82481 10.2707 2.81133 10.3135 2.81133C10.3563 2.81133 10.398 2.82481 10.4326 2.84985C10.4673 2.87489 10.4932 2.91022 10.5066 2.95082L10.8695 4.04024C11.0317 4.52589 11.4124 4.90653 11.898 5.06873L12.9875 5.43155C13.0281 5.445 13.0634 5.47089 13.0885 5.50557C13.1135 5.54024 13.127 5.58192 13.127 5.62469C13.127 5.66745 13.1135 5.70914 13.0885 5.74381C13.0634 5.77848 13.0281 5.80437 12.9875 5.81782L11.898 6.18065C11.6585 6.26045 11.4408 6.39493 11.2623 6.57345C11.0838 6.75197 10.9493 6.96961 10.8695 7.20913L10.5066 8.29855C10.4932 8.33915 10.4673 8.37448 10.4326 8.39952C10.398 8.42456 10.3563 8.43804 10.3135 8.43804C10.2707 8.43804 10.229 8.42456 10.1944 8.39952C10.1597 8.37448 10.1338 8.33915 10.1204 8.29855L9.75751 7.20913C9.67771 6.96961 9.54321 6.75197 9.36469 6.57345C9.18616 6.39493 8.96851 6.26045 8.72898 6.18065L7.6395 5.81782C7.5989 5.80437 7.56357 5.77848 7.53852 5.74381C7.51348 5.70914 7.5 5.66745 7.5 5.62469C7.5 5.58192 7.51348 5.54024 7.53852 5.50557C7.56357 5.47089 7.5989 5.445 7.6395 5.43155L8.72898 5.06873C8.96851 4.98892 9.18616 4.85444 9.36469 4.67592C9.54321 4.4974 9.67771 4.27976 9.75751 4.04024L10.1204 2.95082ZM12.9978 0.092267C13.0071 0.0655718 13.0244 0.0424236 13.0474 0.0260408C13.0705 0.0096579 13.098 0.000854492 13.1263 0.000854492C13.1545 0.000854492 13.1821 0.0096579 13.2051 0.0260408C13.2281 0.0424236 13.2455 0.0655718 13.2547 0.092267L13.4966 0.817922C13.6044 1.14231 13.8585 1.39638 14.1829 1.5042L14.9086 1.74609C14.9353 1.75534 14.9585 1.77268 14.9748 1.7957C14.9912 1.81872 15 1.84627 15 1.87453C15 1.90278 14.9912 1.93034 14.9748 1.95335C14.9585 1.97637 14.9353 1.99372 14.9086 2.00297L14.1829 2.24486C14.0231 2.29804 13.8778 2.38775 13.7587 2.50688C13.6395 2.62601 13.5498 2.77127 13.4966 2.93114L13.2547 3.65679C13.2455 3.68349 13.2281 3.70663 13.2051 3.72302C13.1821 3.7394 13.1545 3.7482 13.1263 3.7482C13.098 3.7482 13.0705 3.7394 13.0474 3.72302C13.0244 3.70663 13.0071 3.68349 12.9978 3.65679L12.7559 2.93114C12.7027 2.77127 12.613 2.62601 12.4939 2.50688C12.3747 2.38775 12.2295 2.29804 12.0696 2.24486L11.3439 2.00297C11.3172 1.99372 11.2941 1.97637 11.2777 1.95335C11.2613 1.93034 11.2525 1.90278 11.2525 1.87453C11.2525 1.84627 11.2613 1.81872 11.2777 1.7957C11.2941 1.77268 11.3172 1.75534 11.3439 1.74609L12.0696 1.5042C12.394 1.39638 12.6481 1.14231 12.7559 0.817922L12.9978 0.0932046V0.092267Z" fill="#AEB2C5"/>
                            </svg>
                        </div>
                    
                    </div>
               </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default PetlyNavbar