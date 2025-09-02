import React from 'react'
import Dog1 from '../assets/the-dog-smiles-because-he-is-happy-png.webp'

const Main = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="bg-orange-300 rounded-lg text-center mt-12 
        shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]
        w-full max-w-[1300px] 
        h-auto lg:h-[380px] px-4 sm:px-6">

          {/* محتوا */}
          <div className="-mt-6 lg:-mt-14">
            
            {/* عکس → در دسکتاپ مثل کد اولیه، در موبایل کوچیک‌تر */}
            <img 
              src={Dog1} 
              alt="" 
              className="w-auto h-32 sm:h-44 md:h-60 lg:h-110 mx-auto lg:mx-0" 
            />

            {/* متن‌ها */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-right pr-2 sm:pr-4 lg:pr-6 mt-2 lg:-mt-90 font-extrabold">
              پت شاپ انتخابی مطمئن برای حیوانات
            </h1>

            <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-6xl text-right pr-2 sm:pr-4 lg:pr-6 mt-4 lg:mt-10">
              دیگه نگران رسیدنش نباش
            </h1>

            <h2 className="text-sm sm:text-lg md:text-xl lg:text-3xl text-right pr-2 sm:pr-4 lg:pr-6 mt-4 lg:mt-10 font-light">
              هر موقع سفارش بدی به دستت میرسه
            </h2>

            {/* دکمه */}
            <div className="flex justify-end">
              <button 
                className=" bg-black text-white px-3 sm:px-4 py-2 rounded-xl text-right cursor-pointer mr-2 sm:mr-4 lg:mr-6 mb-5 mt-3 hover:bg-white hover:text-black transition duration-300 delay-300 
                shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
                dir="rtl"
              >
                سفارش دهید
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main
