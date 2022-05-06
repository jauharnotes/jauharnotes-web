import React from 'react'
import Link from 'next/link'

import HeaderLeft from '../components/HeaderLeft'

function Header() {
  return (
    <header>
      <img src="/pattern.svg" alt="pattern background" className='absolute top-0 right-0 w-[200px] md:w-[597.04px] -z-10'/>
       <div className='flex justify-center'>
        <img src="/pattern-botton.svg" alt="pattern background botton" className='absolute bottom-0 -z-10'/>
       </div>
      <div className="flex justify-between relative">
        <div>
          <Link href="/"><a className='font-inter font-bold text-base text-[30px]'>johar.</a></Link>
        </div>

        <ul className="md:flex md:items-center md:gap-6 hidden">
          <li>
            <Link href="/">
              <a className='font-bold hover:text-base hover:underline hover:underline-offset-8 decoration-base'>welcome</a>
            </Link>
          </li>
          <li>
            <Link href="/profile">
              <a className='font-bold hover:text-base hover:underline hover:underline-offset-8 decoration-base'>profile</a>
            </Link>
          </li>
          <li>
            <Link href="/resume">
              <a className='font-bold hover:text-base hover:underline hover:underline-offset-8 decoration-base'>resume</a>
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              <a className='font-bold hover:text-base hover:underline hover:underline-offset-8 decoration-base'>portfolio</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className='font-bold hover:text-base hover:underline hover:underline-offset-8 decoration-base'>contact</a>
            </Link>
          </li>
        </ul>

        <div className="md:flex gap-3 hidden">
          <a href="https://www.instagram.com/jauhar_notes" target='_blank'>
            <svg className='hover:scale-125 transition delay-100 duration-300 ease-in-out'
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path className='hover:fill-base'
                d="M12.4966 8.33156C10.2014 8.33156 8.32828 10.2047 8.32828 12.5C8.32828 14.7953 10.2014 16.6684 12.4966 16.6684C14.7919 16.6684 16.665 14.7953 16.665 12.5C16.665 10.2047 14.7919 8.33156 12.4966 8.33156ZM24.9986 12.5C24.9986 10.7738 25.0142 9.0633 24.9173 7.34026C24.8204 5.33891 24.3638 3.56271 22.9004 2.09922C21.4338 0.632607 19.6607 0.179176 17.6594 0.082235C15.9333 -0.0147055 14.2228 0.000930141 12.4998 0.000930141C10.7736 0.000930141 9.06313 -0.0147055 7.34013 0.082235C5.33881 0.179176 3.56265 0.635734 2.09918 2.09922C0.632595 3.56584 0.179172 5.33891 0.0822335 7.34026C-0.0147052 9.06643 0.000930124 10.777 0.000930124 12.5C0.000930124 14.223 -0.0147052 15.9367 0.0822335 17.6597C0.179172 19.6611 0.635722 21.4373 2.09918 22.9008C3.56577 24.3674 5.33881 24.8208 7.34013 24.9178C9.06626 25.0147 10.7768 24.9991 12.4998 24.9991C14.2259 24.9991 15.9364 25.0147 17.6594 24.9178C19.6607 24.8208 21.4369 24.3643 22.9004 22.9008C24.3669 21.4342 24.8204 19.6611 24.9173 17.6597C25.0174 15.9367 24.9986 14.2262 24.9986 12.5ZM12.4966 18.9137C8.94743 18.9137 6.08305 16.0493 6.08305 12.5C6.08305 8.95073 8.94743 6.08629 12.4966 6.08629C16.0458 6.08629 18.9102 8.95073 18.9102 12.5C18.9102 16.0493 16.0458 18.9137 12.4966 18.9137ZM19.1729 7.3215C18.3442 7.3215 17.675 6.6523 17.675 5.82361C17.675 4.99493 18.3442 4.32573 19.1729 4.32573C20.0016 4.32573 20.6708 4.99493 20.6708 5.82361C20.671 6.02039 20.6324 6.21528 20.5572 6.39712C20.4821 6.57897 20.3717 6.74419 20.2326 6.88333C20.0935 7.02247 19.9282 7.1328 19.7464 7.20798C19.5646 7.28317 19.3697 7.32175 19.1729 7.3215Z"
                fill="black"
              />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/jauhar-uddin/" target='_blank'>
            <svg className='hover:scale-125 transition delay-100 duration-300 ease-in-out'
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path className='hover:fill-base'
                d="M12.5 0C5.59635 0 0 5.59635 0 12.5C0 19.4036 5.59635 25 12.5 25C19.4036 25 25 19.4036 25 12.5C25 5.59635 19.4036 0 12.5 0ZM9.4401 17.681H6.90885V9.53516H9.4401V17.681ZM8.15885 8.53516C7.35937 8.53516 6.84245 7.96875 6.84245 7.26823C6.84245 6.55338 7.375 6.00391 8.19141 6.00391C9.00781 6.00391 9.50781 6.55338 9.52344 7.26823C9.52344 7.96875 9.00781 8.53516 8.15885 8.53516ZM18.6849 17.681H16.1536V13.1667C16.1536 12.1159 15.7865 11.4023 14.8711 11.4023C14.1719 11.4023 13.7565 11.8854 13.5729 12.3503C13.5052 12.5156 13.4883 12.75 13.4883 12.9831V17.6797H10.9557V12.1328C10.9557 11.1159 10.9232 10.2656 10.8893 9.53385H13.0885L13.2044 10.6654H13.2552C13.5885 10.1341 14.4049 9.35026 15.7708 9.35026C17.4362 9.35026 18.6849 10.4661 18.6849 12.8646V17.681Z"
                fill="black"
              />
            </svg>
          </a>
          <a href="" target='_blank'>
            <svg className='hover:scale-125 transition delay-100 duration-300 ease-in-out'
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path className='hover:fill-base'
                d="M12.5 0C5.59635 0 0 5.59635 0 12.5C0 19.4036 5.59635 25 12.5 25C19.4036 25 25 19.4036 25 12.5C25 5.59635 19.4036 0 12.5 0ZM17.5846 10.2396C17.5898 10.3464 17.5911 10.4531 17.5911 10.5573C17.5911 13.8125 15.1159 17.5638 10.5872 17.5638C9.24908 17.566 7.93876 17.1817 6.8138 16.457C7.00521 16.4805 7.20182 16.4896 7.40104 16.4896C8.55469 16.4896 9.61589 16.0977 10.4583 15.4362C9.94494 15.4261 9.44749 15.2561 9.0353 14.9499C8.62311 14.6437 8.31673 14.2165 8.15885 13.7279C8.52755 13.798 8.90736 13.7833 9.26953 13.6849C8.7123 13.5722 8.21119 13.2703 7.85118 12.8303C7.49117 12.3903 7.29441 11.8393 7.29427 11.2708V11.2409C7.6263 11.4245 8.00651 11.5365 8.41016 11.5495C7.88776 11.2017 7.51795 10.6675 7.37636 10.0562C7.23477 9.44478 7.3321 8.80241 7.64844 8.26042C8.26687 9.02083 9.0381 9.6429 9.9122 10.0863C10.7863 10.5298 11.7438 10.7847 12.7227 10.8346C12.5982 10.3064 12.6518 9.75183 12.875 9.25717C13.0983 8.7625 13.4787 8.35546 13.9571 8.0993C14.4356 7.84315 14.9852 7.75224 15.5207 7.84072C16.0561 7.92919 16.5474 8.19209 16.918 8.58854C17.469 8.47953 17.9974 8.27741 18.4805 7.99089C18.2968 8.56137 17.9123 9.0458 17.3984 9.35417C17.8865 9.29538 18.3631 9.16416 18.8125 8.96484C18.4824 9.4595 18.0666 9.89119 17.5846 10.2396Z"
                fill="black"
              />
            </svg>
          </a>
          <a href="https://github.com/jauharnotes" target='_blank'>
            <svg className='hover:scale-125 transition delay-100 duration-300 ease-in-out'
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path className='hover:fill-base'
                d="M8.36189 20.13C8.36189 20.2334 8.24597 20.3161 8.0998 20.3161C7.93347 20.3316 7.81754 20.2489 7.81754 20.13C7.81754 20.0266 7.93347 19.9439 8.07964 19.9439C8.23085 19.9284 8.36189 20.0111 8.36189 20.13ZM6.79435 19.8973C6.75907 20.0007 6.85988 20.1196 7.01109 20.1506C7.14214 20.2023 7.29335 20.1506 7.32359 20.0472C7.35383 19.9439 7.25806 19.825 7.10685 19.7784C6.97581 19.7423 6.82964 19.7939 6.79435 19.8973ZM9.02218 19.8095C8.87601 19.8456 8.7752 19.9439 8.79032 20.0628C8.80544 20.1661 8.93649 20.2334 9.0877 20.1972C9.23387 20.161 9.33468 20.0628 9.31956 19.9594C9.30443 19.8611 9.16835 19.7939 9.02218 19.8095ZM12.3387 0C5.34778 0 0 5.44346 0 12.6135C0 18.3465 3.51815 23.2523 8.54335 24.9789C9.18851 25.0978 9.41532 24.6894 9.41532 24.3534C9.41532 24.0329 9.4002 22.265 9.4002 21.1794C9.4002 21.1794 5.87198 21.9548 5.13105 19.6389C5.13105 19.6389 4.55645 18.1345 3.72984 17.7468C3.72984 17.7468 2.5756 16.9352 3.81048 16.9507C3.81048 16.9507 5.06552 17.0541 5.75605 18.2845C6.85988 20.2799 8.70968 19.7061 9.43044 19.3649C9.54637 18.5378 9.87399 17.9639 10.2369 17.6228C7.41935 17.3023 4.57661 16.8835 4.57661 11.9105C4.57661 10.4889 4.95968 9.77549 5.76613 8.86566C5.63508 8.52964 5.20665 7.14422 5.89718 5.35558C6.9506 5.01957 9.375 6.75134 9.375 6.75134C10.3831 6.46185 11.4667 6.31194 12.5403 6.31194C13.6139 6.31194 14.6976 6.46185 15.7056 6.75134C15.7056 6.75134 18.13 5.0144 19.1835 5.35558C19.874 7.14939 19.4456 8.52964 19.3145 8.86566C20.121 9.78066 20.6149 10.494 20.6149 11.9105C20.6149 16.899 17.6462 17.2971 14.8286 17.6228C15.2923 18.0312 15.6855 18.8066 15.6855 20.0214C15.6855 21.7635 15.6704 23.9192 15.6704 24.3431C15.6704 24.6791 15.9022 25.0875 16.5423 24.9686C21.5827 23.2523 25 18.3465 25 12.6135C25 5.44346 19.3296 0 12.3387 0ZM4.89919 17.8295C4.83367 17.8812 4.84879 18.0001 4.93448 18.0984C5.01512 18.1811 5.13105 18.2173 5.19657 18.1501C5.2621 18.0984 5.24698 17.9795 5.16129 17.8812C5.08065 17.7985 4.96472 17.7623 4.89919 17.8295ZM4.35484 17.4108C4.31956 17.478 4.36996 17.5607 4.47077 17.6124C4.55141 17.6641 4.65222 17.6486 4.6875 17.5762C4.72278 17.509 4.67238 17.4263 4.57157 17.3746C4.47077 17.3436 4.39012 17.3591 4.35484 17.4108ZM5.9879 19.2512C5.90726 19.3184 5.9375 19.4734 6.05343 19.5717C6.16935 19.6906 6.31552 19.7061 6.38105 19.6234C6.44657 19.5562 6.41633 19.4011 6.31552 19.3028C6.20464 19.1839 6.05343 19.1684 5.9879 19.2512ZM5.41331 18.4912C5.33266 18.5429 5.33266 18.6773 5.41331 18.7962C5.49395 18.9151 5.63004 18.9668 5.69556 18.9151C5.77621 18.8479 5.77621 18.7135 5.69556 18.5946C5.625 18.4757 5.49395 18.424 5.41331 18.4912Z"
                fill="black"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className='h-full flex items-end'>
        <HeaderLeft />
      </div>
    </header>
  )
}

export default Header
