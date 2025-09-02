import React from 'react'
import P9 from '../../assets/cute-and-happy-dog-png.webp'

const Banner = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center py-10 mt-80">
        <div className="bg-yellow-700 w-[90%] md:h-[250px] md:w-[90%] rounded-2xl flex flex-col md:flex-row items-center justify-between p-6 md:p-10 relative">
          
          {/* متن سمت چپ */}
          <div className="text-white text-center md:text-left md:w-1/3">
            <p className="text-sm font-light">۲۰٪ تخفیف</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              فروش ویژه<br/>پت‌شاپ
            </h1>
            <p className="text-sm mt-2">۱ شهریور تا ۱۵ شهریور</p>
          </div>

          {/* تصویر (حیوان خانگی) */}
          <div className="flex justify-center md:w-1/3 my-6 md:my-0 lg:h-auto">
            <img 
              src={P9}
              alt="حیوان خانگی بامزه" 
              className="w-48 md:w-90 drop-shadow-xl mb-28"
            />
          </div>

          {/* متن سمت راست */}
          <div className="text-white text-center md:text-right md:w-1/3">
            <h2 className="text-lg">همین حالا خرید کنید</h2>
            <h1 className="text-3xl md:text-4xl font-bold">برای حیوانات شاد</h1>
            <p className="text-sm mt-2">
              بهترین غذاها، اسباب‌بازی‌ها و لوازم مراقبتی برای دوستای کوچولوی شما.
            </p>
            <button className="drop-shadow-[0_1px_0_rgba(0,0,0,0.25) mt-4 bg-yellow-300 text-black px-5 py-2 rounded-full font-medium hover:bg-gray-200 transition hover:text-black delay-150 duration-300">
              مشاهده محصولات
            </button>
          </div>
        </div>

      </div>
       <div>
        <h1 className="text-3xl text-center">پاپت شاپ انتخاب بهترین ها | من از پاپت برات کمتر بودم آدم به خاطر یه سگ اینجوری با شوهرش حرف میزنه :)</h1>
      </div>
    </>
  )
}

export default Banner
