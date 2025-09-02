import React from 'react'
import '../css/offer.css'
import { CiSearch } from "react-icons/ci";
import Logo from '../assets/1600w-NSim_pyCK9Q.jpg'
import { IoCart } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
const Offer = () => {
  const Navitem = [
    { id: 1, name: "خانه", link: "/" , type: "route" },
    { id: 2, name: "درباره ما ", link: "/About", type: "route" },
    { id: 3, name: "فروشگاه", link: "/Blogs", type: "route" },
    { id: 4, name: "قفس", link: "/Cage", type: "route" },
    { id: 5, name: "دامپزشکی", link: "/dampezeshki", type: "route"},
  ]

  return (
    <>
      <div className="sticky top-0 z-50" dir='rtl'>
  {/* offer */}
  <div className='flex px-max py-3 bg-orange-400 justify-center'>
    <h1 className='text-center text-xl text-white'>۳۰ % تخفیف ویژه پاپت شاپ</h1>
    <button className='flex bg-black px-3 py-1 rounded-lg text-amber-50 mr-4 hover:bg-white hover:text-black transition duration-300 cursor-pointer'>
      کلیک کنید
    </button>
  </div>

  {/* search */}
  
  <div className="flex justify-center py-3 bg-blue-300 gap-15" dir='rtl'>
    
  <div className='cursor-pointer flex px-2 py-2 bg-black rounded-sm   z-50 text-white text-1xl '>
    <FaUser className='ml-2'/> حساب کاربری
  </div>

    <div className="relative w-[1000px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
      <CiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-2xl text-gray-500" />
      <input
        dir="rtl"
        className="w-full rounded-sm pr-10 pl-2 py-2 border-none outline-none bg-amber-50 text-right"
        type="text"
        placeholder="جستجو کنید ..."
      />
    </div>
      <div className='cursor-pointer flex px-2 py-2 bg-black rounded-sm   z-50 text-white text-2xl'>
      <IoCart/>
    </div>


    
  </div>

  {/* navbar */}
  <div className='mx-auto flex items-center justify-between text-center py-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white'>
    <div>
      <img src={Logo} alt="Logo" className='w-12 h-auto z-10 mr-5' />
    </div>
    <ul className="hidden lg:flex items-center gap-6 text-lg mx-auto">
      {Navitem.map((data) => (
        <li key={data.id}>
          <a
            href={data.link}
            className="hover:text-pink-600 transition-colors duration-200"
          >
            {data.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
</div>
    </>
  )
}

export default Offer