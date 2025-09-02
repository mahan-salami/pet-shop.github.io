import React, { useState, useEffect } from "react";
import Tie from '../assets/tie.png';
import Clothes from '../assets/clothes.png';

const card = [
  {id:1 ,title: "ظرف غذا توله سگ :)" , price:"12345678", image: Tie },
  {id:2 ,title:"غذلی پاپت" , price:"12345678" , image: Clothes },
  {id:3 ,title: "جاروی پاپت" , price:"12345678" , image: null },
  {id:4 ,title: "قلاده پاپت" , price:"12345678" , image: null },
  {id:5 ,title: "قفس پاپت" , price: "12345678" , image: null },
  {id:6 ,title: "پاپیون پاپت " , price:"12345678" , image: null },
  {id:7 ,title: " لباس پاپت" , price: "12345678" , image: null },
  {id:8 ,title: " عروسک پاپت" , price:"12345678" , image: null },
];

const Product = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(window.innerWidth < 640 ? 1 : 4);

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(window.innerWidth < 640 ? 1 : 4);
      if (startIndex > card.length - (window.innerWidth < 640 ? 1 : 4)) {
        setStartIndex(Math.max(0, card.length - (window.innerWidth < 640 ? 1 : 4)));
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [startIndex]);

  const maxStartIndex = Math.max(0, card.length - visibleCount);

  const nextSlide = () => setStartIndex((prev) => Math.min(prev + 1, maxStartIndex));
  const prevSlide = () => setStartIndex((prev) => Math.max(prev - 1, 0));

  const translatePercent = -(startIndex * (100 / visibleCount));

  return (
    <section className="flex flex-col justify-center items-center">
      <div className="text-center mb-10">
        <h1 className="text-2xl">محصولات</h1>
      </div>

      <div className="flex items-center gap-5 w-full">
        <button
          onClick={prevSlide}
          className="px-4 py-2 bg-gray-300 rounded-lg disabled:opacity-50 ml-10"
          disabled={startIndex === 0}
        >
          ◀
        </button>

        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-0 sm:gap-6"
            style={{ transform: `translateX(${translatePercent}%)` }}
          >
            {card.map((item) => (
              <div
                key={item.id}
                className="py-10 px-15 bg-blue-500 rounded-sm flex-shrink-0 mb-10"
                style={{ width: `${100 / visibleCount}%` }}
              >
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-42 object-cover mb-3 rounded"
                  />
                ) : (
                  <div className="w-full h-42 flex items-center justify-center bg-white/20 mb-3 rounded ">
                    تصویر ندارد
                  </div>
                )}
                <h2 className="text-base mb-1 text-center">{item.title}</h2>
                <p className="text-sm text-center">{item.price} تومان</p>
                <div className="flex justify-center items-center">
                  <button className=" bg-black text-white px-5 py-2 mt-4 text-center justify-center rounded-sm  hover:bg-white hover:text-black transition duration-300 cursor-pointer">
                    کلیک کنید
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="px-4 py-2 bg-gray-300 rounded-lg disabled:opacity-50 mr-10"
          disabled={startIndex >= maxStartIndex}
        >
          ▶
        </button>
      </div>
    </section>
  );
};

export default Product;
