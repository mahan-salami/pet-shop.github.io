import React from 'react'
import { useNavigate } from "react-router-dom"

// عکس‌ها
import b1 from '../assets/pngtree-isolated-cat-on-white-background-png-image_9158356.png'
import b2 from '../assets/fish-on-transparent-background-free-png.webp'
import b3 from '../assets/png-bird-11.png'
import b4 from '../assets/pngtree-cute-gray-rabbit-little-bunny-png-image_14650848.png'
import b5 from '../assets/the-dog-smiles-because-he-is-happy-png.webp'

const Categories2 = () => {
  const navigate = useNavigate();

  return (
    <section>
      <div className="justify-center text-center">
        <h1 className="text-2xl mb-6">دسته بندی حیوانات</h1>
        
        <div className="flex flex-wrap sm:flex-nowrap justify-center gap-10 mt-4 mb-4">
          
          {/* گربه */}
          <div 
            onClick={() => navigate("/cat")} 
            className="flex flex-col items-center justify-center rounded-full h-32 w-32 bg-gray-200 gap-2 p-2 cursor-pointer hover:-translate-y-2 transition-transform duration-300">
            <img src={b1} alt="cat" className="h-20 w-20 object-contain"/>
            <h3>گربه</h3>
          </div>

          {/* ماهی */}
          <div 
            onClick={() => navigate("/fish")} 
            className="flex flex-col items-center justify-center rounded-full h-32 w-32 bg-red-300 gap-2 p-2 cursor-pointer hover:-translate-y-2 transition-transform duration-300">
            <img src={b2} alt="fish" className="h-20 w-20 object-contain"/>
            <h3>ماهی</h3>
          </div>

          {/* پرنده */}
          <div 
            onClick={() => navigate("/bird")} 
            className="flex flex-col items-center justify-center rounded-full h-32 w-32 bg-amber-400 gap-2 p-2 cursor-pointer hover:-translate-y-2 transition-transform duration-300">
            <img src={b3} alt="bird" className="h-20 w-20 object-contain"/>
            <h3>پرنده</h3>
          </div>

          {/* خرگوش */}
          <div 
            onClick={() => navigate("/rabbit")} 
            className="flex flex-col items-center justify-center rounded-full h-32 w-32 bg-blue-400 gap-2 p-2 cursor-pointer hover:-translate-y-2 transition-transform duration-300">
            <img src={b4} alt="rabbit" className="h-20 w-20 object-contain"/>
            <h3>خرگوش</h3>
          </div>

          {/* سگ */}
          <div 
            onClick={() => navigate("/dog")} 
            className="flex flex-col items-center justify-center rounded-full h-32 w-32 bg-gray-500 gap-2 p-2 cursor-pointer hover:-translate-y-2 transition-transform duration-300 text-white">
            <img src={b5} alt="dog" className="h-20 w-20 object-contain"/>
            <h3>سگ</h3>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Categories2
