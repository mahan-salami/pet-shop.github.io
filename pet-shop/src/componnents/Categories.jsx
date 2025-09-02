import React from 'react'
import i1 from '../assets/Squeak-Box-Asst_website-min-1.png'
import i2 from '../assets/pngfind.com-animal-planet-png-4851954.png'
import i3 from '../assets/dog-food-in-a-metal-bowl-on-transparent-background-png.webp'

const Categories = () => {
  return (
    <>
      <section className="mt-20 text-center">
        {/* عنوان */}
        <h1 className="text-2xl font-bold mb-10">دسته بندی ها</h1>

        {/* کارت‌ها */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12">
          
          {/* first */}
          <div className="flex items-center justify-center py-16 bg-orange-300 rounded-lg shadow-md mb-10  hover:bg-black hover:text-amber-50 transition duration-300 delay-300 hover:-translate-y-4">
            <img src={i1} alt="" className="w-[145px] h-auto mr-30" />
            <h3 className='text-4xl'>
                اسباب بازی
            </h3>
          </div>

          {/* second */}
          <div className="flex items-center justify-center py-16 bg-orange-300 rounded-lg shadow-md mb-10  hover:bg-black hover:text-amber-50 transition duration-300 delay-300 hover:-translate-y-4">
            <img src={i2} alt="" className="w-[155px] h-auto mr-20" />
             <h3 className='text-4xl'>
               غذای حیوانات
            </h3>
          </div>

          {/* third */}
          <div className="flex items-center justify-center py-16 bg-orange-300 rounded-lg shadow-md mb-10  hover:bg-black hover:text-amber-50 transition duration-300 delay-300 hover:-translate-y-4">
            <img src={i3} alt="" className="w-[155px] h-auto mr-30" />
             <h3 className='text-4xl'>
                لوازم جانبی
            </h3>
          </div>
        </div>
      </section>
    </>
  )
}

export default Categories
