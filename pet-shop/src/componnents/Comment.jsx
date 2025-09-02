import React from "react";

const Comment = () => {
  const comments = [
    {
      username: "سارا",
      rating: "★★★★★",
      content:
        "محصولات پت‌شاپ خیلی باکیفیت هستن. من برای سگم غذای خشک گرفتم و واقعا راضی‌ام. بسته‌بندی هم عالی بود و سریع به دستم رسید.",
    },
    {
      username: "مهدی",
      rating: "★★★★★",
      content:
        "خیلی خوشحالم که این فروشگاه رو پیدا کردم. اسباب‌بازی‌هایی که خریدم هم مقاوم بودن هم خیلی مورد علاقه‌ی گربم شد. قیمت‌ها هم منصفانه‌ست.",
    },
    {
      username: "الهام",
      rating: "★★★★☆",
      content:
        "خدمات خوبه و تنوع محصولات زیاده. فقط به نظرم بهتره بخش آموزش نگهداری از حیوانات خانگی هم به سایت اضافه بشه. در کل راضی هستم.",
    },
  ];

  return (
    <div dir="rtl" className="w-full flex flex-col items-center px-10 mt-10 -mb-26">
      <h1 className="text-2xl font-bold mb-8">نظرات کاربران</h1>
      <div className="flex flex-wrap justify-center gap-6 px-7">
        {comments.map((item, index) => (
          <div
            key={index}
            className={`rounded-2xl shadow-md p-6 w-72 text-right transition hover:scale-105 duration-300 ${
              index % 2 === 0 ? "bg-blue-100" : "bg-green-100"
            }`}
          >
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold text-lg">{item.username}</span>
              <span className="text-yellow-400 text-xl">{item.rating}</span>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">{item.content}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Comment;
